"use client";

import { useState } from "react";
import { Plus, Users, MapPin, Clock, Trash2 } from "lucide-react";

interface JobPosition {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    status: "open" | "closed";
    applicantsCount: number;
}

const INITIAL_JOBS: JobPosition[] = [
    {
        id: "job_1",
        title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
        department: "Engineering",
        type: "Full-Time",
        location: "Remote (ID/SEA)",
        status: "open",
        applicantsCount: 14,
    },
    {
        id: "job_2",
        title: "Lead UI/UX Designer & Design Systems",
        department: "Design",
        type: "Full-Time",
        location: "Remote / Hybrid Jakarta",
        status: "open",
        applicantsCount: 22,
    },
    {
        id: "job_3",
        title: "Digital Product Strategist",
        department: "Strategy",
        type: "Contract",
        location: "Remote",
        status: "closed",
        applicantsCount: 8,
    },
];

export default function AdminCareersPage() {
    const [jobs, setJobs] = useState<JobPosition[]>(INITIAL_JOBS);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("Engineering");
    const [type, setType] = useState("Full-Time");
    const [location, setLocation] = useState("Remote");

    const toggleStatus = (id: string) => {
        setJobs(
            jobs.map((j) =>
                j.id === id ? { ...j, status: j.status === "open" ? "closed" : "open" } : j
            )
        );
    };

    const handleDelete = (id: string, jobTitle: string) => {
        if (!confirm(`Hapus lowongan ${jobTitle}?`)) return;
        setJobs(jobs.filter((j) => j.id !== id));
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
        };
        setJobs([newJob, ...jobs]);
        setShowModal(false);
        setTitle("");
    };

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Karir & Rekrutmen
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Kelola lowongan pekerjaan yang dibuka pada halaman `/career` dan pantau jumlah pelamar.
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-medium transition-colors cursor-pointer"
                >
                    <Plus className="size-4" />
                    <span>Buka Lowongan Baru</span>
                </button>
            </div>

            {/* Jobs List */}
            <div className="bg-white rounded-2xl border border-[#171715]/10 overflow-hidden shadow-xs divide-y divide-[#171715]/5">
                {jobs.map((job) => (
                    <div key={job.id} className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors">
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                                    job.status === "open"
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                        : "bg-slate-100 text-slate-500 border-slate-200"
                                }`}>
                                    {job.status === "open" ? "Dibuka" : "Ditutup"}
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
                                <span className="flex items-center gap-1 text-[#171715] font-semibold">
                                    <Users className="size-3" /> {job.applicantsCount} Pelamar Masuk
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => toggleStatus(job.id)}
                                className="px-3 py-1.5 rounded-xl border border-[#171715]/10 text-xs font-mono hover:bg-white transition-colors cursor-pointer"
                            >
                                {job.status === "open" ? "Tutup Posisi" : "Buka Kembali"}
                            </button>
                            <button
                                onClick={() => handleDelete(job.id, job.title)}
                                className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                                title="Hapus"
                            >
                                <Trash2 className="size-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

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
