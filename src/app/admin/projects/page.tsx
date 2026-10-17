"use client";

import { useState } from "react";
import clientStoriesData from "@/data/client-stories.json";
import {
    Plus,
    Search,
    ExternalLink,
    Star,
    Clock,
    Trash2,
    X,
    TrendingUp
} from "lucide-react";

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState(clientStoriesData);
    const [search, setSearch] = useState("");
    const [selectedService, setSelectedService] = useState("all");
    const [showAddModal, setShowAddModal] = useState(false);

    // Form state for adding new project
    const [newCompany, setNewCompany] = useState("");
    const [newIndustry, setNewIndustry] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newResult, setNewResult] = useState("");
    const [newTimeline, setNewTimeline] = useState("4 Weeks");
    const [newServices, setNewServices] = useState("Development, Design");

    const filtered = projects.filter((p) => {
        const matchesSearch =
            p.company.toLowerCase().includes(search.toLowerCase()) ||
            p.title.toLowerCase().includes(search.toLowerCase());
        const matchesService =
            selectedService === "all" ||
            p.services.some((s) => s.toLowerCase() === selectedService.toLowerCase());
        return matchesSearch && matchesService;
    });

    const toggleFeatured = (id: number) => {
        setProjects(
            projects.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
        );
    };

    const handleDelete = (id: number, company: string) => {
        if (!confirm(`Hapus proyek ${company}?`)) return;
        setProjects(projects.filter((p) => p.id !== id));
    };

    const handleAddProject = (e: React.FormEvent) => {
        e.preventDefault();
        const newProj = {
            id: Date.now(),
            company: newCompany,
            industry: newIndustry,
            services: newServices.split(",").map((s) => s.trim()),
            title: newTitle,
            className: "text-white",
            slug: newCompany.toLowerCase().replace(/\s+/g, "-") + "-case-study",
            featured: false,
            timeline: newTimeline,
            result: newResult,
            year: new Date().getFullYear().toString(),
            platform: "Web & Mobile",
            website: "https://" + newCompany.toLowerCase().replace(/\s+/g, "") + ".com",
            domain: newCompany.toLowerCase().replace(/\s+/g, "") + ".com",
            image: "/unoversion-case.png",
            clientName: "Client Lead",
            clientRole: "CEO",
            atAGlance: newTitle,
            challenge: { headline: "Challenge", summary: "", narrative: "" },
            solution: { headline: "Solution", summary: "", narrative: "" },
            outcome: { headline: "Outcome", summary: "", narrative: "" },
            metrics: [{ label: "Impact", value: newResult || "100%" }],
            deliverables: ["Product Strategy", "UI/UX Design", "Web Development"],
            quote: "Outstanding collaboration with ZORS CRAFT.",
        };

        setProjects([newProj, ...projects]);
        setShowAddModal(false);
        // Reset form
        setNewCompany("");
        setNewIndustry("");
        setNewTitle("");
        setNewResult("");
    };

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Client Stories & Portofolio
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Kelola etalase proyek dan studi kasus yang ditampilkan di halaman publik.
                    </p>
                </div>

                <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-medium transition-colors shadow-sm cursor-pointer"
                >
                    <Plus className="size-4" />
                    <span>Tambah Proyek Baru</span>
                </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#5C5850]" />
                    <input
                        type="text"
                        placeholder="Cari brand atau judul studi kasus..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171715]/10 text-xs text-[#171715] placeholder-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                    />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                    {["all", "Strategy", "Design", "Development", "Branding"].map((s) => (
                        <button
                            key={s}
                            onClick={() => setSelectedService(s)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono capitalize transition-colors whitespace-nowrap cursor-pointer ${
                                selectedService === s
                                    ? "bg-[#171715] text-[#F0ECE2] font-semibold"
                                    : "bg-white border border-[#171715]/10 text-[#5C5850] hover:text-[#171715]"
                            }`}
                        >
                            {s === "all" ? "Semua Layanan" : s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((proj) => (
                    <div
                        key={proj.id}
                        className="bg-white rounded-2xl border border-[#171715]/10 overflow-hidden shadow-xs hover:border-[#A88C40]/40 transition-all flex flex-col justify-between"
                    >
                        <div className="p-5 space-y-4">
                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A88C40] font-semibold">
                                        {proj.industry}
                                    </span>
                                    <h3 className="text-base font-bold text-[#171715] leading-snug mt-0.5">
                                        {proj.company}
                                    </h3>
                                </div>

                                <button
                                    onClick={() => toggleFeatured(proj.id)}
                                    title={proj.featured ? "Proyek Unggulan (Featured)" : "Jadikan Unggulan"}
                                    className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                        proj.featured
                                            ? "bg-[#A88C40]/15 text-[#A88C40] border-[#A88C40]/30"
                                            : "text-[#171715]/20 hover:text-[#A88C40] border-transparent"
                                    }`}
                                >
                                    <Star className={`size-4 ${proj.featured ? "fill-current" : ""}`} />
                                </button>
                            </div>

                            <p className="text-xs text-[#5C5850] line-clamp-2">
                                {proj.title}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {proj.services.map((srv, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#171715]/5 text-[#5C5850] border border-[#171715]/5"
                                    >
                                        {srv}
                                    </span>
                                ))}
                            </div>

                            {/* Metrics highlight */}
                            {proj.result && (
                                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-[11px] text-emerald-800 font-mono">
                                    <TrendingUp className="size-3.5 text-emerald-600 shrink-0" />
                                    <span className="truncate">{proj.result}</span>
                                </div>
                            )}
                        </div>

                        {/* Card Footer Actions */}
                        <div className="px-5 py-3 border-t border-[#171715]/5 bg-[#FAF9F5] flex items-center justify-between text-xs font-mono">
                            <span className="text-[#5C5850] flex items-center gap-1">
                                <Clock className="size-3" /> {proj.timeline}
                            </span>

                            <div className="flex items-center gap-2">
                                <a
                                    href={`/client-stories`}
                                    target="_blank"
                                    className="p-1.5 rounded-lg text-[#5C5850] hover:text-[#171715] hover:bg-white transition-colors"
                                    title="Lihat di Web"
                                >
                                    <ExternalLink className="size-3.5" />
                                </a>
                                <button
                                    onClick={() => handleDelete(proj.id, proj.company)}
                                    className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                                    title="Hapus Proyek"
                                >
                                    <Trash2 className="size-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Tambah Proyek */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#171715]/10 space-y-5">
                        <div className="flex items-center justify-between border-b border-[#171715]/10 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-[#171715]">Tambah Studi Kasus Baru</h3>
                                <p className="text-xs text-[#5C5850]">Publikasikan karya terbaru studio ZORS CRAFT</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="p-1.5 rounded-lg text-[#5C5850] hover:text-[#171715]"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <form onSubmit={handleAddProject} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Nama Brand / Klien *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Acme Tech"
                                    value={newCompany}
                                    onChange={(e) => setNewCompany(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Industri / Sektor *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Fintech & Web3"
                                    value={newIndustry}
                                    onChange={(e) => setNewIndustry(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Judul Studi Kasus *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Scaling a Digital Platform to 100k Users"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">Layanan (Pisah koma)</label>
                                    <input
                                        type="text"
                                        placeholder="Development, Design"
                                        value={newServices}
                                        onChange={(e) => setNewServices(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">Timeline Kerja</label>
                                    <input
                                        type="text"
                                        placeholder="4 Weeks"
                                        value={newTimeline}
                                        onChange={(e) => setNewTimeline(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Hasil Utama (Metric Highlight)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. +220% conversion rate · 0.4s page speed"
                                    value={newResult}
                                    onChange={(e) => setNewResult(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            <div className="pt-3 flex items-center justify-end gap-2 border-t border-[#171715]/10">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="px-4 py-2 rounded-xl text-xs font-medium text-[#5C5850] hover:text-[#171715]"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-white text-xs font-semibold transition-colors"
                                >
                                    Simpan Proyek
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
