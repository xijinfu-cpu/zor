"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { submitContactForm } from "@/app/actions/contact";
import { useLang } from "@/lib/language-context";

const formText = {
    en: {
        badge: "START A PROJECT",
        title: "Project Brief",
        subtitle: "Already know what you need? Tell us about your business, goals, timeline, and what you would like us to help with.",
        receivedBadge: "Brief Received",
        receivedDesc: "Thank you for sharing your project goals. We will review your brief and get back to you with clear next steps within 24 hours.",
        anotherBrief: "Submit another brief",
        nameLabel: "Name *",
        namePlaceholder: "Your full name",
        companyLabel: "Company / Brand *",
        companyPlaceholder: "Company or project name",
        emailLabel: "Email Address *",
        emailPlaceholder: "name@company.com",
        websiteLabel: "Website (Optional)",
        websitePlaceholder: "https://yourwebsite.com",
        servicesLabel: "Services Needed",
        summaryLabel: "Project Summary *",
        summaryPlaceholder: "Briefly describe what you are building, changing, or planning...",
        goalsLabel: "Goals & Key Challenges",
        goalsPlaceholder: "What specific outcome or problem are you trying to solve?",
        timelineLabel: "Target Timeline",
        timelinePlaceholder: "Select target timeline",
        budgetLabel: "Budget Range (Optional)",
        budgetPlaceholder: "Select budget range",
        referralLabel: "How Did You Hear About Us?",
        referralPlaceholder: "Referral, social, client work, search...",
        consentPrefix: "By submitting this form, you acknowledge our ",
        privacyLink: "Privacy Policy",
        consentSuffix: " and consent to ZORS CRAFT using the information provided to respond to your inquiry.",
        submitBtn: "Send Project Brief",
        submittingBtn: "Sending Brief...",
        replyNote: "We usually reply within 24 hours.",
    },
    id: {
        badge: "MULAI PROYEK",
        title: "Brief Proyek",
        subtitle: "Sudah tahu apa yang kamu butuhkan? Ceritakan tentang bisnis, tujuan, linimasa, dan apa yang ingin kamu bangun bersama kami.",
        receivedBadge: "Brief Telah Diterima",
        receivedDesc: "Terima kasih telah berbagi visi proyek kamu. Kami akan meninjau brief ini dan menghubungi kamu beserta langkah selanjutnya dalam 24 jam.",
        anotherBrief: "Kirim brief lainnya",
        nameLabel: "Nama Lengkap *",
        namePlaceholder: "Nama lengkap kamu",
        companyLabel: "Perusahaan / Brand *",
        companyPlaceholder: "Nama perusahaan atau brand",
        emailLabel: "Alamat Email *",
        emailPlaceholder: "nama@perusahaan.com",
        websiteLabel: "Website (Opsional)",
        websitePlaceholder: "https://websitekamu.com",
        servicesLabel: "Layanan yang Dibutuhkan",
        summaryLabel: "Ringkasan Proyek *",
        summaryPlaceholder: "Ceritakan secara singkat apa yang sedang kamu bangun, perbaiki, atau rencanakan...",
        goalsLabel: "Tujuan & Tantangan Utama",
        goalsPlaceholder: "Target atau masalah spesifik apa yang ingin diselesaikan?",
        timelineLabel: "Target Linimasa",
        timelinePlaceholder: "Pilih target linimasa",
        budgetLabel: "Perkiraan Anggaran (Opsional)",
        budgetPlaceholder: "Pilih estimasi anggaran",
        referralLabel: "Dari mana kamu mengetahui tentang kami?",
        referralPlaceholder: "Rekomendasi, media sosial, karya klien, pencarian...",
        consentPrefix: "Dengan mengirimkan formulir ini, kamu menyetujui ",
        privacyLink: "Kebijakan Privasi",
        consentSuffix: " kami dan mengizinkan ZORS CRAFT menggunakan data tersebut untuk membalas pesan kamu.",
        submitBtn: "Kirim Brief Proyek",
        submittingBtn: "Mengirimkan Brief...",
        replyNote: "Kami biasanya merespons dalam waktu 24 jam.",
    },
};

export default function ProjectBriefForm() {
    const { lang } = useLang();
    const t = formText[lang];
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const services = [
        "Strategy",
        "Branding",
        "Design",
        "Development",
        "Optimization",
        "Support"
    ];

    const toggleService = (svc: string) => {
        setSelectedServices((prev) =>
            prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const data = new FormData(form);

        const result = await submitContactForm({
            name: data.get("name") as string,
            company: data.get("company") as string,
            email: data.get("email") as string,
            website: data.get("website") as string,
            services: selectedServices,
            summary: data.get("summary") as string,
            goals: data.get("goals") as string,
            timeline: data.get("timeline") as string,
            budget: data.get("budget") as string,
            referral: data.get("referral") as string,
        });

        setLoading(false);

        if (result.success) {
            setSubmitted(true);
        } else {
            setError(result.message);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white/90 p-8 md:p-12 rounded-2xl border border-[#171715]/10 shadow-xs text-center space-y-4 my-auto">
                <div className="size-12 rounded-full bg-[#2D8065]/10 text-[#2D8065] flex items-center justify-center mx-auto border border-[#2D8065]/25">
                    <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#171715]">
                    {t.receivedBadge}
                </h3>
                <p className="text-sm md:text-base text-[#171715]/70 max-w-md mx-auto leading-relaxed">
                    {t.receivedDesc}
                </p>
                <div className="pt-4">
                    <button
                        type="button"
                        onClick={() => { setSubmitted(false); setError(null); setSelectedServices([]); }}
                        className="text-xs font-mono text-[#171715]/60 hover:text-[#171715] underline underline-offset-4"
                    >
                        {t.anotherBrief}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/90 p-6 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs space-y-6">
            <div>
                <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium block mb-1">
                    {t.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-[#171715]">
                    {t.title}
                </h3>
                <p className="text-xs md:text-sm text-[#171715]/60 mt-1">
                    {t.subtitle}
                </p>
            </div>

            {/* Error message */}
            {error && (
                <div className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                    <AlertCircle className="size-4 mt-0.5 shrink-0" />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.nameLabel}
                    </label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder={t.namePlaceholder}
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.companyLabel}
                    </label>
                    <input
                        required
                        name="company"
                        type="text"
                        placeholder={t.companyPlaceholder}
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.emailLabel}
                    </label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.websiteLabel}
                    </label>
                    <input
                        name="website"
                        type="url"
                        placeholder={t.websitePlaceholder}
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Service Needed */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-2">
                    {t.servicesLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                    {services.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                            <button
                                key={svc}
                                type="button"
                                onClick={() => toggleService(svc)}
                                className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-colors ${
                                    isSelected
                                        ? "bg-[#171715] text-[#F0ECE2] border-[#171715]"
                                        : "bg-[#F0ECE2]/50 text-[#171715]/80 border-[#171715]/15 hover:border-[#171715]/30"
                                }`}
                            >
                                {svc}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Project Summary */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    {t.summaryLabel}
                </label>
                <textarea
                    required
                    name="summary"
                    rows={3}
                    placeholder={t.summaryPlaceholder}
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl p-3.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all resize-none"
                />
            </div>

            {/* Goals / Challenges */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    {t.goalsLabel}
                </label>
                <textarea
                    name="goals"
                    rows={2}
                    placeholder={t.goalsPlaceholder}
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl p-3.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all resize-none"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.timelineLabel}
                    </label>
                    <select name="timeline" className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all">
                        <option value="">{t.timelinePlaceholder}</option>
                        <option value="ASAP (within 1 month)">{lang === "id" ? "Secepatnya (dalam 1 bulan)" : "ASAP (within 1 month)"}</option>
                        <option value="1–2 Months">{lang === "id" ? "1–2 Bulan" : "1–2 Months"}</option>
                        <option value="2–3 Months">{lang === "id" ? "2–3 Bulan" : "2–3 Months"}</option>
                        <option value="Flexible">{lang === "id" ? "Fleksibel" : "Flexible"}</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        {t.budgetLabel}
                    </label>
                    <select name="budget" className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all">
                        <option value="">{t.budgetPlaceholder}</option>
                        <option value="Under IDR 5.000.000">&lt; IDR 5.000.000</option>
                        <option value="IDR 5.000.000 – 15.000.000">IDR 5.000.000 – 15.000.000</option>
                        <option value="IDR 15.000.000 – 30.000.000">IDR 15.000.000 – 30.000.000</option>
                        <option value="IDR 30.000.000 – 75.000.000">IDR 30.000.000 – 75.000.000</option>
                        <option value="IDR 75.000.000 – 150.000.000">IDR 75.000.000 – 150.000.000</option>
                        <option value="Above IDR 150.000.000">&gt; IDR 150.000.000</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    {t.referralLabel}
                </label>
                <input
                    name="referral"
                    type="text"
                    placeholder={t.referralPlaceholder}
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                />
            </div>

            {/* Consent check */}
            <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-[#171715]/65 leading-relaxed cursor-pointer">
                    <input
                        required
                        type="checkbox"
                        className="mt-0.5 rounded border-[#171715]/30 text-[#171715] focus:ring-0"
                    />
                    <span>
                        {t.consentPrefix}
                        <Link href="/legal/privacy" className="text-[#586B6D] underline underline-offset-2 hover:text-[#171715]">
                            {t.privacyLink}
                        </Link>
                        {t.consentSuffix}
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] font-medium flex items-center justify-center gap-2 text-sm transition-colors duration-200 disabled:opacity-70 shadow-sm"
            >
                {loading ? t.submittingBtn : t.submitBtn} <ArrowUpRight className="size-4" />
            </button>

            <p className="text-center text-xs font-mono text-[#5C5850] pt-1">
                {t.replyNote}
            </p>
        </form>
    );
}
