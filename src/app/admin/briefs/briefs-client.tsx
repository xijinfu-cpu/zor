"use client";

import { useEffect, useState, useTransition } from "react";
import { getBriefs, markBriefStatus, deleteBrief } from "@/app/actions/contact";
import type { BriefEntry } from "@/app/actions/contact";
import {
    Mail, Building2, Globe, Clock, Trash2, CheckCheck,
    MessageCircle, RefreshCw, ChevronDown, ChevronUp, Tag,
    FileSignature
} from "lucide-react";
import ContractModal from "@/components/admin/contract-modal";

const STATUS_COLORS: Record<BriefEntry["status"], string> = {
    new: "bg-[#A88C40]/15 text-[#A88C40] border-[#A88C40]/30",
    read: "bg-[#586B6D]/15 text-[#586B6D] border-[#586B6D]/30",
    replied: "bg-[#2D8065]/15 text-[#2D8065] border-[#2D8065]/30",
};

const STATUS_LABEL: Record<BriefEntry["status"], string> = {
    new: "Baru",
    read: "Dibaca",
    replied: "Dibalas",
};

function BriefCard({
    brief,
    onRefresh,
    onOpenContract
}: {
    brief: BriefEntry;
    onRefresh: () => void;
    onOpenContract: (brief: BriefEntry) => void;
}) {
    const [expanded, setExpanded] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleStatus = (status: BriefEntry["status"]) => {
        startTransition(async () => {
            await markBriefStatus(brief.id, status);
            onRefresh();
        });
    };

    const handleDelete = () => {
        if (!confirm(`Hapus brief dari ${brief.name}?`)) return;
        startTransition(async () => {
            await deleteBrief(brief.id);
            onRefresh();
        });
    };

    const date = new Date(brief.submittedAt);
    const formatted = date.toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    return (
        <div className={`bg-white rounded-2xl border shadow-xs overflow-hidden transition-all ${brief.status === "new" ? "border-[#A88C40]/40" : "border-[#171715]/10"}`}>
            {/* Header */}
            <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${STATUS_COLORS[brief.status]}`}>
                                {STATUS_LABEL[brief.status]}
                            </span>
                            <span className="text-xs text-[#5C5850] font-mono flex items-center gap-1">
                                <Clock className="size-3" /> {formatted}
                            </span>
                        </div>
                        <h3 className="text-base font-semibold text-[#171715]">{brief.name}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5C5850]">
                            <span className="flex items-center gap-1">
                                <Building2 className="size-3" /> {brief.company}
                            </span>
                            <a href={`mailto:${brief.email}`} className="flex items-center gap-1 hover:text-[#A88C40]">
                                <Mail className="size-3" /> {brief.email}
                            </a>
                            {brief.website && (
                                <a href={brief.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#A88C40]">
                                    <Globe className="size-3" /> {brief.website}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        <button
                            onClick={() => onOpenContract(brief)}
                            title="Buat Draft Kontrak (SPK)"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#A88C40]/15 hover:bg-[#A88C40] text-[#A88C40] hover:text-white border border-[#A88C40]/30 text-xs font-mono font-medium transition-colors cursor-pointer"
                        >
                            <FileSignature className="size-3.5" />
                            <span className="hidden sm:inline">Buat Kontrak (SPK)</span>
                        </button>

                        {brief.status !== "read" && (
                            <button
                                onClick={() => handleStatus("read")}
                                disabled={isPending}
                                title="Tandai Dibaca"
                                className="p-2 rounded-lg hover:bg-[#586B6D]/10 text-[#586B6D] transition-colors disabled:opacity-50"
                            >
                                <CheckCheck className="size-4" />
                            </button>
                        )}
                        {brief.status !== "replied" && (
                            <button
                                onClick={() => handleStatus("replied")}
                                disabled={isPending}
                                title="Tandai Dibalas"
                                className="p-2 rounded-lg hover:bg-[#2D8065]/10 text-[#2D8065] transition-colors disabled:opacity-50"
                            >
                                <MessageCircle className="size-4" />
                            </button>
                        )}
                        {brief.status !== "new" && (
                            <button
                                onClick={() => handleStatus("new")}
                                disabled={isPending}
                                title="Tandai Baru"
                                className="p-2 rounded-lg hover:bg-[#A88C40]/10 text-[#A88C40] transition-colors disabled:opacity-50"
                            >
                                <RefreshCw className="size-3.5" />
                            </button>
                        )}
                        <button
                            onClick={handleDelete}
                            disabled={isPending}
                            title="Hapus"
                            className="p-2 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
                        >
                            <Trash2 className="size-4" />
                        </button>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="p-2 rounded-lg hover:bg-[#171715]/5 text-[#171715]/60 transition-colors"
                        >
                            {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </button>
                    </div>
                </div>

                {/* Services tags */}
                {brief.services && brief.services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {brief.services.map((svc) => (
                            <span
                                key={svc}
                                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#171715]/5 text-[#171715]/80 border border-[#171715]/10"
                            >
                                <Tag className="size-2.5 text-[#A88C40]" />
                                {svc}
                            </span>
                        ))}
                    </div>
                )}

                {/* Summary teaser */}
                <p className="mt-3 text-sm text-[#171715]/80 leading-relaxed line-clamp-2">
                    {brief.summary}
                </p>
            </div>

            {/* Expanded details */}
            {expanded && (
                <div className="border-t border-[#171715]/10 bg-[#FAF9F5] p-5 md:p-6 space-y-4 text-xs">
                    <div>
                        <span className="font-mono font-semibold uppercase text-[#A88C40] tracking-wider block mb-1">
                            Ringkasan Proyek
                        </span>
                        <p className="text-[#171715] leading-relaxed text-sm bg-white p-4 rounded-xl border border-[#171715]/10">
                            {brief.summary}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {brief.goals && (
                            <div className="bg-white p-3.5 rounded-xl border border-[#171715]/10">
                                <span className="font-mono uppercase text-[#5C5850] block mb-1">Goals</span>
                                <p className="text-[#171715] font-medium">{brief.goals}</p>
                            </div>
                        )}
                        {brief.timeline && (
                            <div className="bg-white p-3.5 rounded-xl border border-[#171715]/10">
                                <span className="font-mono uppercase text-[#5C5850] block mb-1">Timeline</span>
                                <p className="text-[#171715] font-medium">{brief.timeline}</p>
                            </div>
                        )}
                        {brief.budget && (
                            <div className="bg-white p-3.5 rounded-xl border border-[#171715]/10">
                                <span className="font-mono uppercase text-[#5C5850] block mb-1">Budget</span>
                                <p className="text-[#171715] font-medium">{brief.budget}</p>
                            </div>
                        )}
                    </div>

                    {brief.referral && (
                        <div className="text-[#5C5850]">
                            <span className="font-mono uppercase">Sumber info:</span> {brief.referral}
                        </div>
                    )}

                    <div className="pt-2 flex items-center gap-3 flex-wrap">
                        <button
                            onClick={() => onOpenContract(brief)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-xl bg-[#A88C40] hover:bg-[#8f7532] text-white transition-colors cursor-pointer"
                        >
                            <FileSignature className="size-3.5" /> Buat Formulir Kontrak (SPK)
                        </button>

                        <a
                            href={`mailto:${brief.email}?subject=Re: Project Brief dari ${brief.company}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] transition-colors"
                        >
                            <Mail className="size-3.5" /> Balas via Email
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function AdminBriefsClient() {
    const [briefs, setBriefs] = useState<BriefEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<BriefEntry["status"] | "all">("all");

    // Contract Modal State
    const [isContractModalOpen, setIsContractModalOpen] = useState(false);
    const [contractInitialData, setContractInitialData] = useState<{
        messageId?: string;
        clientName?: string;
        clientEmail?: string;
        clientCompany?: string;
        projectTitle?: string;
    }>({});

    const load = async () => {
        setLoading(true);
        const data = await getBriefs();
        setBriefs(data);
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const handleOpenContractForBrief = (brief: BriefEntry) => {
        setContractInitialData({
            messageId: brief.id,
            clientName: brief.name,
            clientEmail: brief.email,
            clientCompany: brief.company,
            projectTitle: `Pengembangan Proyek ${brief.services.join(" & ")} untuk ${brief.company}`,
        });
        setIsContractModalOpen(true);
    };

    const filtered = filter === "all" ? briefs : briefs.filter((b) => b.status === filter);
    const counts = {
        all: briefs.length,
        new: briefs.filter((b) => b.status === "new").length,
        read: briefs.filter((b) => b.status === "read").length,
        replied: briefs.filter((b) => b.status === "replied").length,
    };

    return (
        <div className="min-h-screen bg-[#F0ECE2] pt-16 pb-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#A88C40]">Internal</span>
                        <h1 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1">
                            Project Briefs
                        </h1>
                        <p className="text-sm text-[#5C5850] mt-1">
                            Semua brief yang masuk dari halaman contact, lengkap dengan generator kontrak perjanjian (SPK).
                        </p>
                    </div>
                    <button
                        onClick={load}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#171715]/10 text-sm font-medium text-[#171715] hover:bg-[#171715] hover:text-[#F0ECE2] transition-colors shadow-xs"
                    >
                        <RefreshCw className="size-3.5" /> Refresh
                    </button>
                </div>

                {/* Filter tabs */}
                <div className="flex gap-2 flex-wrap mb-6">
                    {(["all", "new", "read", "replied"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold border transition-colors ${
                                filter === tab
                                    ? "bg-[#171715] text-[#F0ECE2] border-[#171715]"
                                    : "bg-white text-[#171715]/70 border-[#171715]/15 hover:border-[#171715]/30"
                            }`}
                        >
                            {tab === "all" ? "Semua" : STATUS_LABEL[tab]} ({counts[tab]})
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="text-center py-20 text-[#5C5850] text-sm font-mono">
                        Memuat data...
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-[#171715]/10">
                        <Mail className="size-8 text-[#171715]/20 mx-auto mb-3" />
                        <p className="text-sm text-[#5C5850]">
                            {filter === "all" ? "Belum ada brief yang masuk." : `Tidak ada brief dengan status "${STATUS_LABEL[filter as BriefEntry["status"]]}".`}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filtered.map((brief) => (
                            <BriefCard
                                key={brief.id}
                                brief={brief}
                                onRefresh={load}
                                onOpenContract={handleOpenContractForBrief}
                            />
                        ))}
                    </div>
                )}

                {/* Data file info */}
                <div className="mt-8 p-4 rounded-xl bg-white/60 border border-[#171715]/10 text-xs font-mono text-[#5C5850]">
                    📁 Data tersimpan di: <span className="text-[#171715]">data/briefs.json</span> · {briefs.length} brief total
                </div>
            </div>

            {/* Contract Modal Form & Generator */}
            <ContractModal
                isOpen={isContractModalOpen}
                onClose={() => setIsContractModalOpen(false)}
                initialData={contractInitialData}
            />
        </div>
    );
}
