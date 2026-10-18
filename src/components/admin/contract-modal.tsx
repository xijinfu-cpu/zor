"use client";

import { useState, useRef } from "react";
import {
    X, Printer, Copy, Check, Send, FileSignature,
    Plus, Trash2, Eye, Edit3
} from "lucide-react";
import {
    ProjectContract,
    generateContractNumber,
    saveContract
} from "@/lib/contracts-store";

interface ContractModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: {
        messageId?: string;
        clientName?: string;
        clientEmail?: string;
        clientCompany?: string;
        projectTitle?: string;
    };
    onContractSaved?: (contract: ProjectContract) => void;
}

export default function ContractModal({
    isOpen,
    onClose,
    initialData,
    onContractSaved,
}: ContractModalProps) {
    const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");
    const [copied, setCopied] = useState(false);
    const [savedNotice, setSavedNotice] = useState(false);

    // Form states
    const [contractNumber] = useState(generateContractNumber());
    const [clientName, setClientName] = useState(initialData?.clientName || "Klien Zors Craft");
    const [clientEmail, setClientEmail] = useState(initialData?.clientEmail || "");
    const [clientCompany, setClientCompany] = useState(initialData?.clientCompany || "Perusahaan Klien");
    const [projectTitle, setProjectTitle] = useState(initialData?.projectTitle || "Pengembangan Aplikasi Web & Desain UI/UX");
    const [engagementModel, setEngagementModel] = useState<ProjectContract["engagementModel"]>("Fixed Scope Project");
    const [contractValue, setContractValue] = useState("Rp 35.000.000");
    const [timeline, setTimeline] = useState("4 Minggu");
    const [paymentTerms, setPaymentTerms] = useState("50% Uang Muka (DP) sebelum proyek dimulai, 50% Pelunasan setelah peluncuran & serah terima.");
    const [warrantyDays, setWarrantyDays] = useState(30);
    const [deliverables, setDeliverables] = useState<string[]>([
        "Perancangan UI/UX & Prototipe Interaktif Figma",
        "Pengembangan Frontend & Backend Berbasis Next.js & TypeScript",
        "Integrasi Database & API Serverless",
        "Audit Kecepatan (PageSpeed) & Konfigurasi SEO Dasar",
        "Dokumentasi Teknis & Sesi Serah Terima (Handover)"
    ]);
    const [newDeliverable, setNewDeliverable] = useState("");
    const [specialNotes, setSpecialNotes] = useState("Revisi desain mencakup hingga 2 kali putaran mayor pada fase prototipe.");

    const printRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    const handleAddDeliverable = () => {
        if (!newDeliverable.trim()) return;
        setDeliverables([...deliverables, newDeliverable.trim()]);
        setNewDeliverable("");
    };

    const handleRemoveDeliverable = (idx: number) => {
        setDeliverables(deliverables.filter((_, i) => i !== idx));
    };

    const currentContract: ProjectContract = {
        id: `contract_${Date.now()}`,
        contractNumber,
        messageId: initialData?.messageId,
        clientName,
        clientEmail,
        clientCompany,
        projectTitle,
        engagementModel,
        contractValue,
        timeline,
        paymentTerms,
        deliverables,
        warrantyDays,
        specialNotes,
        createdAt: new Date().toISOString(),
        status: "draft",
    };

    const handleSave = () => {
        saveContract(currentContract);
        setSavedNotice(true);
        if (onContractSaved) onContractSaved(currentContract);
        setTimeout(() => setSavedNotice(false), 3000);
    };

    const handleCopyText = () => {
        const text = `
SURAT PERJANJIAN KERJASAMA (SPK) LAYANAN DIGITAL
Nomor: ${contractNumber}
Tanggal: ${new Date().toLocaleDateString("id-ID", { dateStyle: "long" })}

PIHAK PERTAMA (Penyedia Jasa):
Zors Craft (Studio Produk Digital)
Email: hello@zorscraft.id
Website: https://zorscraft.id

PIHAK KEDUA (Klien):
Nama: ${clientName}
Perusahaan: ${clientCompany}
Email: ${clientEmail}

PASAL 1: RUANG LINGKUP PEKERJAAN & DELIVERABLES
Proyek: ${projectTitle}
Model Kerja Sama: ${engagementModel}
Hasil Kerja (Deliverables):
${deliverables.map((d, i) => `${i + 1}. ${d}`).join("\n")}

PASAL 2: JANGKA WAKTU PENGERJAAN
Total durasi pengerjaan proyek disepakati selama ${timeline} terhitung sejak pembayaran uang muka diterima dan materi pendukung diserahkan.

PASAL 3: BIAYA DAN TERMIN PEMBAYARAN
Total Nilai Kontrak: ${contractValue}
Ketentuan Pembayaran: ${paymentTerms}

PASAL 4: HAK KEKAYAAN INTELEKTUAL (HKI)
Hak cipta dan seluruh aset kode sumber serta file desain akan diserahkan sepenuhnya kepada PIHAK KEDUA setelah seluruh kewajiban pembayaran lunas.

PASAL 5: KERAHASIAAN INFORMASI (NDA)
Kedua belah pihak sepakat menjaga kerahasiaan seluruh data bisnis, strategi, dan kredensial proyek yang dibagikan selama masa kerja sama.

PASAL 6: GARANSI & PEMELIHARAAN
PIHAK PERTAMA memberikan jaminan perbaikan kendala teknis (bug fix) selama ${warrantyDays} hari kalender setelah serah terima proyek.

Catatan Khusus: ${specialNotes || "-"}

PIHAK PERTAMA,                      PIHAK KEDUA,
Zors Craft                         ${clientCompany}


( _______________________ )         ( _______________________ )
        `.trim();

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-[#FAF9F5] border border-[#171715]/15 rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative my-6 max-h-[92vh] flex flex-col">
                {/* Header Actions */}
                <div className="flex items-center justify-between border-b border-[#171715]/10 pb-4 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-xl bg-[#A88C40]/15 text-[#A88C40] flex items-center justify-center">
                            <FileSignature className="size-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-[#171715]">
                                Formulir Surat Perjanjian Kontrak (SPK)
                            </h2>
                            <p className="text-xs text-[#5C5850] font-mono">
                                No: {contractNumber} · Klien: {clientName}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Tab Switcher */}
                        <div className="bg-white p-1 rounded-xl border border-[#171715]/10 flex items-center gap-1 text-xs font-mono">
                            <button
                                onClick={() => setViewMode("edit")}
                                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                                    viewMode === "edit" ? "bg-[#171715] text-white font-semibold" : "text-[#5C5850] hover:text-[#171715]"
                                }`}
                            >
                                <span className="flex items-center gap-1.5"><Edit3 className="size-3" /> Edit</span>
                            </button>
                            <button
                                onClick={() => setViewMode("preview")}
                                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                                    viewMode === "preview" ? "bg-[#171715] text-white font-semibold" : "text-[#5C5850] hover:text-[#171715]"
                                }`}
                            >
                                <span className="flex items-center gap-1.5"><Eye className="size-3" /> Pratinjau Dokumen</span>
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-full text-[#5C5850] hover:text-[#171715] hover:bg-[#171715]/5 transition-colors cursor-pointer"
                        >
                            <X className="size-5" />
                        </button>
                    </div>
                </div>

                {savedNotice && (
                    <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 shrink-0">
                        <Check className="size-4 text-emerald-600" />
                        <span>Draft kontrak berhasil disimpan ke sistem!</span>
                    </div>
                )}

                {/* Body Area */}
                <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
                    {viewMode === "edit" ? (
                        <div className="space-y-5">
                            {/* General Info */}
                            <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 space-y-4">
                                <h3 className="text-xs font-mono uppercase text-[#A88C40] font-bold tracking-wider">
                                    1. Informasi Proyek & Identitas Klien
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Judul Proyek</label>
                                        <input
                                            type="text"
                                            value={projectTitle}
                                            onChange={(e) => setProjectTitle(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Model Kerja Sama</label>
                                        <select
                                            value={engagementModel}
                                            onChange={(e) => setEngagementModel(e.target.value as ProjectContract["engagementModel"])}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] bg-white"
                                        >
                                            <option value="Fixed Scope Project">Fixed Scope Project (Target Pasti)</option>
                                            <option value="Monthly Sprint Retainer">Monthly Sprint Retainer (Retainer Bulanan)</option>
                                            <option value="Dedicated Pod">Dedicated Pod (Tim Khusus Penuh)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Nama Klien / Perwakilan</label>
                                        <input
                                            type="text"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Nama Perusahaan / Brand Klien</label>
                                        <input
                                            type="text"
                                            value={clientCompany}
                                            onChange={(e) => setClientCompany(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Email Resmi Klien</label>
                                        <input
                                            type="email"
                                            value={clientEmail}
                                            onChange={(e) => setClientEmail(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Commercial & Terms */}
                            <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 space-y-4">
                                <h3 className="text-xs font-mono uppercase text-[#A88C40] font-bold tracking-wider">
                                    2. Ketentuan Komersial & Waktu
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Nilai Total Kontrak</label>
                                        <input
                                            type="text"
                                            value={contractValue}
                                            onChange={(e) => setContractValue(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] font-semibold focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Durasi Pengerjaan</label>
                                        <input
                                            type="text"
                                            value={timeline}
                                            onChange={(e) => setTimeline(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Garansi Bug Fix (Hari)</label>
                                        <input
                                            type="number"
                                            value={warrantyDays}
                                            onChange={(e) => setWarrantyDays(Number(e.target.value))}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Termin Pembayaran</label>
                                        <textarea
                                            rows={2}
                                            value={paymentTerms}
                                            onChange={(e) => setPaymentTerms(e.target.value)}
                                            className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Deliverables Checklist */}
                            <div className="bg-white p-5 rounded-2xl border border-[#171715]/10 space-y-4">
                                <h3 className="text-xs font-mono uppercase text-[#A88C40] font-bold tracking-wider">
                                    3. Daftar Output Kerja (Deliverables)
                                </h3>
                                <div className="space-y-2">
                                    {deliverables.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#171715]/5 text-xs">
                                            <span className="font-mono text-[#A88C40]">{idx + 1}.</span>
                                            <span className="flex-1 text-[#171715]">{item}</span>
                                            <button
                                                onClick={() => handleRemoveDeliverable(idx)}
                                                className="p-1 text-rose-500 hover:bg-rose-50 rounded cursor-pointer"
                                            >
                                                <Trash2 className="size-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="text"
                                        placeholder="Tambah deliverable baru..."
                                        value={newDeliverable}
                                        onChange={(e) => setNewDeliverable(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddDeliverable())}
                                        className="flex-1 px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddDeliverable}
                                        className="px-3.5 py-2 rounded-xl bg-[#171715] text-[#F0ECE2] text-xs font-mono hover:bg-[#A88C40] cursor-pointer"
                                    >
                                        <Plus className="size-4" />
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">Catatan Tambahan / Syarat Khusus</label>
                                    <textarea
                                        rows={2}
                                        value={specialNotes}
                                        onChange={(e) => setSpecialNotes(e.target.value)}
                                        className="w-full px-3 py-2 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Document Preview Mode */
                        <div
                            ref={printRef}
                            className="bg-white p-8 sm:p-12 rounded-2xl border border-[#171715]/15 shadow-sm space-y-8 text-[#171715] font-sans print:border-none print:shadow-none print:p-0"
                        >
                            {/* Kop Surat Dokumen */}
                            <div className="flex items-start justify-between border-b-2 border-[#171715] pb-6">
                                <div>
                                    <h1 className="text-2xl font-black tracking-tight uppercase">ZORS CRAFT</h1>
                                    <p className="text-xs text-[#5C5850] font-mono mt-0.5">Studio Produk Digital & Rekayasa Web Modern</p>
                                    <p className="text-[11px] text-[#5C5850] font-mono">hello@zorscraft.id · https://zorscraft.id</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs uppercase font-mono font-bold px-2.5 py-1 rounded bg-[#A88C40]/15 text-[#A88C40] border border-[#A88C40]/30 inline-block">
                                        SURAT PERJANJIAN KERJASAMA
                                    </span>
                                    <p className="text-xs font-mono font-semibold text-[#171715] mt-2">
                                        No: {contractNumber}
                                    </p>
                                    <p className="text-[11px] font-mono text-[#5C5850]">
                                        Tanggal: {new Date().toLocaleDateString("id-ID", { dateStyle: "long" })}
                                    </p>
                                </div>
                            </div>

                            {/* Identitas Para Pihak */}
                            <div className="text-xs leading-relaxed space-y-3">
                                <p>Pada hari ini, dibuat kesepakatan perjanjian kerja sama antara:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF9F5] p-4 rounded-xl border border-[#171715]/10">
                                    <div>
                                        <span className="font-bold font-mono text-[11px] text-[#A88C40] block mb-1">PIHAK PERTAMA (Penyedia Jasa):</span>
                                        <p className="font-bold">Zors Craft</p>
                                        <p className="text-[#5C5850]">Email: hello@zorscraft.id</p>
                                        <p className="text-[#5C5850]">Domain: zorscraft.id</p>
                                    </div>
                                    <div>
                                        <span className="font-bold font-mono text-[11px] text-[#A88C40] block mb-1">PIHAK KEDUA (Klien):</span>
                                        <p className="font-bold">{clientName}</p>
                                        <p className="text-[#5C5850]">Perusahaan: {clientCompany}</p>
                                        <p className="text-[#5C5850]">Email: {clientEmail || "-"}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pasal-Pasal Kontrak */}
                            <div className="space-y-6 text-xs leading-relaxed">
                                <div>
                                    <h4 className="font-bold font-mono text-sm uppercase text-[#171715] border-b border-[#171715]/10 pb-1 mb-2">
                                        PASAL 1: LINGKUP PEKERJAAN & DELIVERABLES
                                    </h4>
                                    <p className="mb-2">
                                        PIHAK PERTAMA sepakat untuk melaksanakan proyek <strong>&quot;{projectTitle}&quot;</strong> dengan skema <strong>{engagementModel}</strong> dengan rincian hasil kerja (deliverables) sebagai berikut:
                                    </p>
                                    <ul className="list-decimal pl-5 space-y-1">
                                        {deliverables.map((item, idx) => (
                                            <li key={idx} className="text-[#171715]">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold font-mono text-sm uppercase text-[#171715] border-b border-[#171715]/10 pb-1 mb-2">
                                        PASAL 2: JANGKA WAKTU & TIMELINE
                                    </h4>
                                    <p>
                                        Pekerjaan disepakati memiliki estimasi waktu pengerjaan selama <strong>{timeline}</strong> sejak pembayaran uang muka diterima dan seluruh materi pendukung proyek telah diserahkan oleh PIHAK KEDUA.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold font-mono text-sm uppercase text-[#171715] border-b border-[#171715]/10 pb-1 mb-2">
                                        PASAL 3: NILAI KONTRAK & KETENTUAN PEMBAYARAN
                                    </h4>
                                    <p className="mb-1">
                                        Total biaya jasa yang disepakati untuk keseluruhan lingkup kerja ini adalah <strong>{contractValue}</strong>.
                                    </p>
                                    <p className="text-[#5C5850]">
                                        Ketentuan Termin: {paymentTerms}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold font-mono text-sm uppercase text-[#171715] border-b border-[#171715]/10 pb-1 mb-2">
                                        PASAL 4: HAK KEKAYAAN INTELEKTUAL & KODE SUMBER
                                    </h4>
                                    <p>
                                        Seluruh hak milik atas aset desain, kode sumber aplikasi, dan hak kepemilikan produk digital akan diserahkan secara utuh dan menjadi hak milik PIHAK KEDUA setelah seluruh kewajiban pembayaran lunas.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold font-mono text-sm uppercase text-[#171715] border-b border-[#171715]/10 pb-1 mb-2">
                                        PASAL 5: KERAHASIAAN INFORMASI (NDA) & JAMINAN BUG FIX
                                    </h4>
                                    <p className="mb-1">
                                        Kedua belah pihak wajib melindungi kerahasiaan materi bisnis, data teknis, dan informasi non-publik yang saling dibagikan selama proyek berlangsung.
                                    </p>
                                    <p>
                                        PIHAK PERTAMA memberikan jaminan bebas galat teknis (*bug fix warranty*) selama <strong>{warrantyDays} hari kalender</strong> terhitung setelah serah terima hasil pekerjaan.
                                    </p>
                                </div>

                                {specialNotes && (
                                    <div className="p-3 bg-[#FAF9F5] border-l-4 border-l-[#A88C40] rounded-r-xl">
                                        <span className="font-bold block mb-0.5">Catatan Khusus:</span>
                                        <p className="text-[#5C5850]">{specialNotes}</p>
                                    </div>
                                )}
                            </div>

                            {/* Area Tanda Tangan */}
                            <div className="pt-8 border-t border-[#171715]/15 grid grid-cols-2 gap-8 text-center text-xs">
                                <div className="space-y-16">
                                    <div>
                                        <p className="font-bold">PIHAK PERTAMA,</p>
                                        <p className="text-[#5C5850]">Zors Craft</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold underline">Zors Craft</p>
                                        <p className="text-[10px] text-[#5C5850]">Penyedia Jasa</p>
                                    </div>
                                </div>

                                <div className="space-y-16">
                                    <div>
                                        <p className="font-bold">PIHAK KEDUA,</p>
                                        <p className="text-[#5C5850]">{clientCompany}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold underline">{clientName}</p>
                                        <p className="text-[10px] text-[#5C5850]">Klien / Pemberi Kerja</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#171715]/10 shrink-0">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleCopyText}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#171715]/15 text-xs font-mono text-[#171715] hover:bg-white transition-colors cursor-pointer"
                        >
                            {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                            <span>{copied ? "Tersalin!" : "Salin Teks Perjanjian"}</span>
                        </button>

                        <button
                            type="button"
                            onClick={handlePrint}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#171715]/15 text-xs font-mono text-[#171715] hover:bg-white transition-colors cursor-pointer"
                        >
                            <Printer className="size-3.5" />
                            <span>Cetak / Simpan PDF</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="px-4 py-2 rounded-xl border border-[#171715]/20 bg-white text-xs font-mono font-medium hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                        >
                            Simpan Draft Kontrak
                        </button>

                        {clientEmail && (
                            <a
                                href={`mailto:${clientEmail}?subject=Draft Surat Perjanjian Kontrak (SPK) - ${encodeURIComponent(projectTitle)}&body=${encodeURIComponent(
                                    `Halo ${clientName},\n\nTerima kasih atas diskusi mengenai proyek ${projectTitle}. Terlampir ringkasan draf Surat Perjanjian Kerjasama (SPK) Nomor ${contractNumber} untuk ditinjau:\n\n- Model Kerja Sama: ${engagementModel}\n- Nilai Kontrak: ${contractValue}\n- Estimasi Timeline: ${timeline}\n- Termin Pembayaran: ${paymentTerms}\n\nSilakan tinjau draf ini. Jika ada penyesuaian yang diinginkan, kami siap mendiskusikannya.\n\nSalam hangat,\nTim Zors Craft\nhttps://zorscraft.id`
                                )}`}
                                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-white text-xs font-semibold transition-colors cursor-pointer"
                            >
                                <Send className="size-3.5" />
                                <span>Kirim via Email</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
