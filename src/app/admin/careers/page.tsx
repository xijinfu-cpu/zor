"use client";

import { useState, useEffect } from "react";
import {
    Plus, Users, MapPin, Clock, Trash2, CheckCircle2,
    Briefcase, FileText, Globe, Mail, Phone, ExternalLink,
    Filter, Calendar
} from "lucide-react";
import {
    getJobs, saveJobs, JobPosition, DEFAULT_JOBS,
    getApplications, updateApplicationStatus, deleteApplication,
    JobApplication
} from "@/lib/careers-store";

export default function AdminCareersPage() {
    const [activeTab, setActiveTab] = useState<"jobs" | "applicants">("jobs");
    const [jobs, setJobs] = useState<JobPosition[]>(DEFAULT_JOBS);
    const [applications, setApplications] = useState<JobApplication[]>([]);
    const [selectedJobFilter, setSelectedJobFilter] = useState<string>("all");
    const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("all");

    // Modal state for adding jobs
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("Engineering");
    const [type, setType] = useState("Full-Time");
    const [location, setLocation] = useState("Remote");
    const [descEn, setDescEn] = useState("");
    const [descId, setDescId] = useState("");
    const [notice, setNotice] = useState<string | null>(null);

    const loadData = () => {
        setJobs(getJobs());
        setApplications(getApplications());
    };

    useEffect(() => {
        loadData();
        window.addEventListener("zors_jobs_updated", loadData);
        window.addEventListener("zors_applications_updated", loadData);
        window.addEventListener("storage", loadData);
        return () => {
            window.removeEventListener("zors_jobs_updated", loadData);
            window.removeEventListener("zors_applications_updated", loadData);
            window.removeEventListener("storage", loadData);
        };
    }, []);

    const showSaveNotice = (msg: string) => {
        setNotice(msg);
        setTimeout(() => setNotice(null), 3000);
    };

    const toggleStatus = (id: string) => {
        const updated = jobs.map((j) =>
            j.id === id ? { ...j, status: (j.status === "open" ? "closed" : "open") as "open" | "closed" } : j
        );
        setJobs(updated);
        saveJobs(updated);
        const changedJob = updated.find((j) => j.id === id);
        showSaveNotice(`Status lowongan "${changedJob?.title}" berhasil diubah menjadi ${changedJob?.status === "open" ? "DIBUKA" : "DITUTUP"}.`);
    };

    const handleDelete = (id: string, jobTitle: string) => {
        if (!confirm(`Hapus lowongan ${jobTitle}?`)) return;
        const updated = jobs.filter((j) => j.id !== id);
        setJobs(updated);
        saveJobs(updated);
        showSaveNotice(`Lowongan "${jobTitle}" berhasil dihapus.`);
    };

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const newJob: JobPosition = {
            id: `job_${Date.now()}`,
            title,
            department,
            type,
            location,
            status: "open",
            applicantsCount: 0,
            descEn: descEn || title,
            descId: descId || title,
            accent: department === "Engineering" ? "#A88C40" : department === "Design" ? "#7D568E" : "#586B6D",
        };
        const updated = [newJob, ...jobs];
        setJobs(updated);
        saveJobs(updated);
        setShowModal(false);
        setTitle("");
        setDescEn("");
        setDescId("");
        showSaveNotice(`Lowongan baru "${title}" berhasil ditambahkan dan langsung aktif.`);
    };

    const handleStatusChange = (appId: string, newStatus: JobApplication["status"]) => {
        updateApplicationStatus(appId, newStatus);
        loadData();
        showSaveNotice("Status pelamar berhasil diperbarui.");
    };

    const handleDeleteApplicant = (appId: string, applicantName: string) => {
        if (!confirm(`Hapus berkas pelamar ${applicantName}?`)) return;
        deleteApplication(appId);
        loadData();
        showSaveNotice(`Berkas pelamar "${applicantName}" berhasil dihapus.`);
    };

    // Filter applications
    const filteredApps = applications.filter((app) => {
        if (selectedJobFilter !== "all" && app.jobId !== selectedJobFilter) return false;
        if (selectedStatusFilter !== "all" && app.status !== selectedStatusFilter) return false;
        return true;
    });

    const newApplicantsCount = applications.filter((a) => a.status === "new").length;

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Karir & Rekrutmen
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Kelola lowongan pekerjaan, tinjau berkas pelamar masuk, dan pantau status kandidat secara real-time.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-medium transition-colors cursor-pointer"
                    >
                        <Plus className="size-4" />
                        <span>Buka Lowongan Baru</span>
                    </button>
                </div>
            </div>

            {/* Notification Banner */}
            {notice && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2.5 shadow-xs transition-all">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                    <span>{notice}</span>
                </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-[#171715]/10 pb-1">
                <button
                    onClick={() => setActiveTab("jobs")}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono transition-colors cursor-pointer ${
                        activeTab === "jobs"
                            ? "bg-[#171715] text-[#F0ECE2]"
                            : "text-[#5C5850] hover:text-[#171715] hover:bg-[#171715]/5"
                    }`}
                >
                    <Briefcase className="size-3.5" />
                    <span>Daftar Lowongan ({jobs.length})</span>
                </button>

                <button
                    onClick={() => setActiveTab("applicants")}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono transition-colors cursor-pointer relative ${
                        activeTab === "applicants"
                            ? "bg-[#171715] text-[#F0ECE2]"
                            : "text-[#5C5850] hover:text-[#171715] hover:bg-[#171715]/5"
                    }`}
                >
                    <Users className="size-3.5" />
                    <span>Pelamar Masuk ({applications.length})</span>
                    {newApplicantsCount > 0 && (
                        <span className="px-1.5 py-0.5 rounded-full bg-[#A88C40] text-white text-[10px] font-mono leading-none">
                            {newApplicantsCount} Baru
                        </span>
                    )}
                </button>
            </div>

            {/* TAB 1: LOWONGAN KERJA */}
            {activeTab === "jobs" && (
                <div className="bg-white rounded-2xl border border-[#171715]/10 overflow-hidden shadow-xs divide-y divide-[#171715]/5">
                    {jobs.map((job) => {
                        const actualApplicants = applications.filter((a) => a.jobId === job.id).length;

                        return (
                            <div key={job.id} className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors">
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border font-semibold ${
                                            job.status === "open"
                                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                : "bg-rose-50 text-rose-700 border-rose-200"
                                        }`}>
                                            {job.status === "open" ? "Dibuka (Aktif)" : "Ditutup"}
                                        </span>
                                        <span className="text-xs font-mono text-[#A88C40] font-semibold">
                                            {job.department}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[#171715]">
                                        {job.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-xs font-mono text-[#5C5850] flex-wrap">
                                        <span className="flex items-center gap-1">
                                            <Clock className="size-3" /> {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="size-3" /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1 text-[#171715] font-semibold bg-[#A88C40]/10 px-2 py-0.5 rounded-md border border-[#A88C40]/20">
                                            <Users className="size-3 text-[#A88C40]" /> {actualApplicants} Pelamar Masuk
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        onClick={() => {
                                            setSelectedJobFilter(job.id);
                                            setActiveTab("applicants");
                                        }}
                                        className="px-3 py-1.5 rounded-xl border border-[#171715]/15 text-xs font-mono hover:bg-white text-[#171715] transition-colors cursor-pointer"
                                    >
                                        Lihat Pelamar ({actualApplicants})
                                    </button>
                                    <button
                                        onClick={() => toggleStatus(job.id)}
                                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                                            job.status === "open"
                                                ? "border-rose-200 text-rose-700 hover:bg-rose-50"
                                                : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                                        }`}
                                    >
                                        {job.status === "open" ? "Tutup Posisi" : "Buka Kembali"}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(job.id, job.title)}
                                        className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                                        title="Hapus Lowongan"
                                    >
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 2: PELAMAR MASUK */}
            {activeTab === "applicants" && (
                <div className="space-y-4">
                    {/* Filters */}
                    <div className="bg-white p-4 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex items-center gap-1.5 text-xs font-mono text-[#5C5850]">
                                <Filter className="size-3.5" />
                                <span>Filter Lowongan:</span>
                            </div>
                            <select
                                value={selectedJobFilter}
                                onChange={(e) => setSelectedJobFilter(e.target.value)}
                                className="px-3 py-1.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white"
                            >
                                <option value="all">Semua Lowongan ({applications.length})</option>
                                {jobs.map((j) => (
                                    <option key={j.id} value={j.id}>
                                        {j.title} ({applications.filter((a) => a.jobId === j.id).length})
                                    </option>
                                ))}
                                <option value="open-application">
                                    Open Application / Inisiatif Bebas ({applications.filter((a) => a.jobId === "open-application").length})
                                </option>
                            </select>

                            <select
                                value={selectedStatusFilter}
                                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                                className="px-3 py-1.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white"
                            >
                                <option value="all">Semua Status</option>
                                <option value="new">Baru ({applications.filter((a) => a.status === "new").length})</option>
                                <option value="reviewed">Ditinjau</option>
                                <option value="shortlisted">Shortlist</option>
                                <option value="rejected">Ditolak</option>
                            </select>
                        </div>

                        <div className="text-xs font-mono text-[#5C5850]">
                            Menampilkan {filteredApps.length} dari {applications.length} total pelamar
                        </div>
                    </div>

                    {/* Applicants List */}
                    {filteredApps.length === 0 ? (
                        <div className="bg-white p-12 rounded-2xl border border-[#171715]/10 shadow-xs text-center space-y-3">
                            <div className="inline-flex p-3 rounded-2xl bg-[#A88C40]/10 text-[#A88C40]">
                                <Users className="size-8" />
                            </div>
                            <h3 className="text-base font-bold text-[#171715]">
                                Belum Ada Pelamar yang Terdaftar
                            </h3>
                            <p className="text-xs text-[#5C5850] max-w-md mx-auto">
                                Saat kandidat mengisi formulir lamaran online di halaman <code className="text-[#A88C40]">/career</code>, profil, link resume, dan portofolio mereka akan otomatis masuk ke sini.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredApps.map((app) => {
                                const appliedDate = new Date(app.appliedAt);
                                const formattedDate = isNaN(appliedDate.getTime())
                                    ? app.appliedAt
                                    : appliedDate.toLocaleString("id-ID", {
                                          dateStyle: "medium",
                                          timeStyle: "short",
                                      });

                                return (
                                    <div
                                        key={app.id}
                                        className="bg-white p-5 md:p-6 rounded-2xl border border-[#171715]/10 shadow-xs space-y-4 hover:border-[#A88C40]/30 transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border font-semibold ${
                                                        app.status === "new"
                                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                            : app.status === "shortlisted"
                                                            ? "bg-amber-50 text-amber-700 border-amber-200"
                                                            : app.status === "reviewed"
                                                            ? "bg-blue-50 text-blue-700 border-blue-200"
                                                            : "bg-slate-100 text-slate-500 border-slate-200"
                                                    }`}>
                                                        {app.status === "new" ? "Baru" : app.status === "shortlisted" ? "Shortlisted" : app.status === "reviewed" ? "Ditinjau" : "Ditolak"}
                                                    </span>
                                                    <span className="text-xs font-mono text-[#A88C40] font-medium">
                                                        Melamar: {app.jobTitle}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-[#171715]">
                                                    {app.fullName}
                                                </h3>
                                                <div className="flex items-center gap-3 text-xs font-mono text-[#5C5850] mt-1 flex-wrap">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="size-3" /> {formattedDate}
                                                    </span>
                                                    <a
                                                        href={`mailto:${app.email}`}
                                                        className="flex items-center gap-1 hover:text-[#A88C40] text-[#171715]"
                                                    >
                                                        <Mail className="size-3" /> {app.email}
                                                    </a>
                                                    {app.phone && (
                                                        <a
                                                            href={`https://wa.me/${app.phone.replace(/[^0-9]/g, "")}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 hover:text-emerald-600 text-emerald-700"
                                                        >
                                                            <Phone className="size-3" /> {app.phone} (WhatsApp)
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Status dropdown & actions */}
                                            <div className="flex items-center gap-2 shrink-0">
                                                <select
                                                    value={app.status}
                                                    onChange={(e) => handleStatusChange(app.id, e.target.value as JobApplication["status"])}
                                                    className="px-2.5 py-1.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white font-mono"
                                                >
                                                    <option value="new">Tandai Baru</option>
                                                    <option value="reviewed">Ditinjau</option>
                                                    <option value="shortlisted">Shortlist</option>
                                                    <option value="rejected">Tolak</option>
                                                </select>
                                                <button
                                                    onClick={() => handleDeleteApplicant(app.id, app.fullName)}
                                                    className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                                                    title="Hapus Berkas"
                                                >
                                                    <Trash2 className="size-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Links: Portfolio & Resume */}
                                        <div className="flex items-center gap-3 flex-wrap pt-1">
                                            <a
                                                href={app.portfolioUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0ECE2] hover:bg-[#A88C40] hover:text-white text-[#171715] text-xs font-mono font-medium transition-colors"
                                            >
                                                <Globe className="size-3.5" />
                                                <span>Buka Portofolio</span>
                                                <ExternalLink className="size-3" />
                                            </a>

                                            <a
                                                href={app.resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0ECE2] hover:bg-[#171715] hover:text-white text-[#171715] text-xs font-mono font-medium transition-colors"
                                            >
                                                <FileText className="size-3.5" />
                                                <span>Buka CV / Resume</span>
                                                <ExternalLink className="size-3" />
                                            </a>
                                        </div>

                                        {/* Cover Note */}
                                        {app.coverNote && (
                                            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#171715]/10 text-xs text-[#4A4740] leading-relaxed">
                                                <span className="font-semibold text-[#171715] block mb-1">Catatan / Motivasi:</span>
                                                {app.coverNote}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* Modal Buka Lowongan */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5">
                        <h3 className="text-base font-bold text-[#171715]">Buka Posisi Lowongan Baru</h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Judul Posisi *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Frontend Engineer"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">Departemen</label>
                                    <select
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        className="w-full px-3 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white"
                                    >
                                        <option value="Engineering">Engineering</option>
                                        <option value="Design">Design</option>
                                        <option value="Strategy">Strategy</option>
                                        <option value="Marketing">Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">Tipe Kerja</label>
                                    <select
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="w-full px-3 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white"
                                    >
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Part-Time">Part-Time</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Lokasi</label>
                                <input
                                    type="text"
                                    placeholder="Remote / Jakarta"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Deskripsi Singkat (ID)</label>
                                <textarea
                                    placeholder="Tugas & kualifikasi utama..."
                                    rows={2}
                                    value={descId}
                                    onChange={(e) => setDescId(e.target.value)}
                                    className="w-full px-3.5 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div className="pt-2 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-xs font-medium text-[#5C5850]"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl bg-[#171715] text-white text-xs font-semibold hover:bg-[#A88C40]"
                                >
                                    Publikasikan Lowongan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
