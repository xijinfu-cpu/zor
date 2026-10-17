"use client";

import { useState } from "react";
import { Plus, Quote, Trash2, ExternalLink } from "lucide-react";

interface ClientBrand {
    id: string;
    name: string;
    industry: string;
    logoSrc: string;
    website: string;
    featured: boolean;
}

const INITIAL_CLIENTS: ClientBrand[] = [
    { id: "1", name: "DYU", industry: "Education & EdTech", logoSrc: "/dyu.png", website: "https://dyu.ac.in", featured: true },
    { id: "2", name: "SciHawk", industry: "Research & Science", logoSrc: "/scihawk.png", website: "https://scihawk.com", featured: true },
    { id: "3", name: "Unoversion", industry: "AI & Data Platform", logoSrc: "/unoversion.png", website: "https://unoversion.com", featured: true },
    { id: "4", name: "Hyperwafer", industry: "Deep Tech & Silicon", logoSrc: "/hyperwafer.png", website: "https://hyperwafer.com", featured: true },
    { id: "5", name: "Mahalik Foundation", industry: "Non-Profit & Philanthropy", logoSrc: "/mahalik-foundation.png", website: "https://mahalik.org", featured: true },
    { id: "6", name: "BharatSaga", industry: "Culture & Media", logoSrc: "/bharatsaga.png", website: "https://bharatsaga.com", featured: true },
];

export default function AdminClientsPage() {
    const [clients, setClients] = useState<ClientBrand[]>(INITIAL_CLIENTS);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [industry, setIndustry] = useState("");
    const [website, setWebsite] = useState("");

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const newClient: ClientBrand = {
            id: Date.now().toString(),
            name,
            industry,
            logoSrc: "/unoversion.png",
            website: website.startsWith("http") ? website : `https://${website}`,
            featured: true,
        };
        setClients([...clients, newClient]);
        setShowModal(false);
        setName("");
        setIndustry("");
        setWebsite("");
    };

    const handleDelete = (id: string, clientName: string) => {
        if (!confirm(`Hapus brand ${clientName}?`)) return;
        setClients(clients.filter((c) => c.id !== id));
    };

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                        Klien & Bukti Sosial (Social Proof)
                    </h1>
                    <p className="text-sm text-[#5C5850] mt-1">
                        Kelola logo brand partner dan testimoni yang tampil di barisan klien website.
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-medium transition-colors cursor-pointer"
                >
                    <Plus className="size-4" />
                    <span>Tambah Brand Klien</span>
                </button>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white rounded-2xl border border-[#171715]/10 p-5 shadow-xs hover:border-[#A88C40]/40 transition-all flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3.5 min-w-0">
                            <div className="size-12 rounded-xl bg-[#171715]/5 border border-[#171715]/10 flex items-center justify-center font-bold font-mono text-sm text-[#171715] shrink-0">
                                {client.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-sm font-bold text-[#171715] truncate">
                                    {client.name}
                                </h3>
                                <p className="text-xs text-[#5C5850] truncate">
                                    {client.industry}
                                </p>
                                <a
                                    href={client.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[10px] font-mono text-[#A88C40] hover:underline flex items-center gap-1 mt-0.5"
                                >
                                    <span>{client.website.replace("https://", "")}</span>
                                    <ExternalLink className="size-2.5" />
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => handleDelete(client.id, client.name)}
                            className="p-2 rounded-lg text-[#171715]/30 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer shrink-0"
                            title="Hapus"
                        >
                            <Trash2 className="size-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Testimonials Spotlight */}
            <div className="bg-white rounded-3xl border border-[#171715]/10 p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <Quote className="size-5 text-[#A88C40]" />
                    <h2 className="text-base font-bold text-[#171715]">Testimoni Klien Pilihan</h2>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#171715]/5 space-y-3">
                    <p className="text-sm text-[#171715] italic leading-relaxed">
                        &ldquo;ZORS didn’t just build what we asked for. They helped us understand what the product actually needed to communicate, and turned it into something clean, fast, and ready to scale.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <strong className="text-[#171715]">Saurav Jha</strong>
                        <span className="text-[#5C5850]">&mdash; Product Lead at Unoversion</span>
                    </div>
                </div>
            </div>

            {/* Modal Tambah Klien */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5">
                        <h3 className="text-base font-bold text-[#171715]">Tambah Brand Klien Baru</h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Nama Brand *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Acme Corp"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Industri *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. SaaS / E-Commerce"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">Website Klien</label>
                                <input
                                    type="text"
                                    placeholder="e.g. acme.com"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
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
                                    Simpan Brand
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
