"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight, Loader2, FileText, Globe, Mail, User, Phone, Sparkles } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { submitApplication } from "@/lib/careers-store";

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobId: string;
    jobTitle: string;
    department?: string;
}

export default function JobApplicationModal({
    isOpen,
    onClose,
    jobId,
    jobTitle,
    department,
}: JobApplicationModalProps) {
    const { lang } = useLang();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [portfolioUrl, setPortfolioUrl] = useState("");
    const [resumeUrl, setResumeUrl] = useState("");
    const [coverNote, setCoverNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!fullName.trim() || !email.trim() || !portfolioUrl.trim() || !resumeUrl.trim()) {
            setError(lang === "id" ? "Mohon lengkapi semua kolom bertanda bintang (*)." : "Please complete all required fields (*).");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(lang === "id" ? "Format email tidak valid." : "Invalid email address.");
            return;
        }

        setIsSubmitting(true);

        // Simulate smooth network delay for UX
        await new Promise((res) => setTimeout(res, 600));

        try {
            submitApplication({
                jobId,
                jobTitle,
                fullName: fullName.trim(),
                email: email.trim(),
                phone: phone.trim() || undefined,
                portfolioUrl: portfolioUrl.trim(),
                resumeUrl: resumeUrl.trim(),
                coverNote: coverNote.trim() || undefined,
            });

            setIsSubmitting(false);
            setIsSuccess(true);
        } catch {
            setIsSubmitting(false);
            setError(lang === "id" ? "Terjadi kendala saat mengirim. Silakan coba lagi." : "Failed to submit. Please try again.");
        }
    };

    const handleClose = () => {
        setIsSuccess(false);
        setError(null);
        setFullName("");
        setEmail("");
        setPhone("");
        setPortfolioUrl("");
        setResumeUrl("");
        setCoverNote("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF9F5] border border-[#171715]/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 p-2 rounded-full text-[#5C5850] hover:text-[#171715] hover:bg-[#171715]/5 transition-colors cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="size-5" />
                </button>

                {isSuccess ? (
                    <div className="text-center py-8 space-y-4">
                        <div className="inline-flex p-4 rounded-2xl bg-emerald-100 text-emerald-700">
                            <CheckCircle2 className="size-10" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-[#171715]">
                            {lang === "id" ? "Lamaran Berhasil Dikirim!" : "Application Submitted!"}
                        </h3>
                        <p className="text-sm md:text-base text-[#5C5850] max-w-md mx-auto leading-relaxed">
                            {lang === "id"
                                ? `Terima kasih, ${fullName}. Portofolio dan resume Anda untuk posisi "${jobTitle}" telah tersimpan di sistem kami. Tim ZORS CRAFT akan segera meninjau profil Anda.`
                                : `Thank you, ${fullName}. Your profile for "${jobTitle}" has been received. Our team will review your portfolio and reach out shortly.`}
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={handleClose}
                                className="px-6 py-2.5 rounded-xl bg-[#171715] text-[#F0ECE2] text-xs font-mono font-medium hover:bg-[#A88C40] transition-colors"
                            >
                                {lang === "id" ? "Selesai" : "Close"}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Header */}
                        <div className="mb-6 pr-8">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#A88C40]/15 text-[#A88C40] border border-[#A88C40]/30 font-medium">
                                    {department || "Career"}
                                </span>
                                <span className="text-xs text-[#5C5850] font-mono">
                                    ZORS CRAFT
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-[#171715]">
                                {lang === "id" ? "Formulir Lamaran" : "Job Application"}
                            </h2>
                            <p className="text-sm text-[#5C5850] mt-1 font-medium">
                                {jobTitle}
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                        {lang === "id" ? "Nama Lengkap *" : "Full Name *"}
                                    </label>
                                    <div className="relative">
                                        <User className="size-4 text-[#5C5850] absolute left-3 top-3 pointer-events-none" />
                                        <input
                                            type="text"
                                            required
                                            placeholder={lang === "id" ? "Nama Anda" : "Your full name"}
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                        Email *
                                    </label>
                                    <div className="relative">
                                        <Mail className="size-4 text-[#5C5850] absolute left-3 top-3 pointer-events-none" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="nama@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone / WhatsApp */}
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                    {lang === "id" ? "Nomor WhatsApp / Telepon (Opsional)" : "WhatsApp / Phone (Optional)"}
                                </label>
                                <div className="relative">
                                    <Phone className="size-4 text-[#5C5850] absolute left-3 top-3 pointer-events-none" />
                                    <input
                                        type="tel"
                                        placeholder="+62 812..."
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>
                            </div>

                            {/* Portfolio URL */}
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                    {lang === "id" ? "Tautan Portofolio / GitHub / Dribbble *" : "Portfolio / GitHub / Dribbble Link *"}
                                </label>
                                <div className="relative">
                                    <Globe className="size-4 text-[#5C5850] absolute left-3 top-3 pointer-events-none" />
                                    <input
                                        type="url"
                                        required
                                        placeholder="https://behance.net/portfolio atau https://github.com/..."
                                        value={portfolioUrl}
                                        onChange={(e) => setPortfolioUrl(e.target.value)}
                                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>
                            </div>

                            {/* Resume / CV Link */}
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                    {lang === "id" ? "Tautan Resume / CV (Google Drive / LinkedIn / PDF Link) *" : "Resume / CV Link (Google Drive / LinkedIn / PDF Link) *"}
                                </label>
                                <div className="relative">
                                    <FileText className="size-4 text-[#5C5850] absolute left-3 top-3 pointer-events-none" />
                                    <input
                                        type="url"
                                        required
                                        placeholder="https://drive.google.com/... (Pastikan akses dapat dibuka)"
                                        value={resumeUrl}
                                        onChange={(e) => setResumeUrl(e.target.value)}
                                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                    />
                                </div>
                            </div>

                            {/* Cover Note */}
                            <div>
                                <label className="block text-xs font-mono text-[#5C5850] mb-1">
                                    {lang === "id" ? "Catatan Singkat / Motivasi (Opsional)" : "Short Note / Cover Letter (Optional)"}
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder={lang === "id" ? "Ceritakan secara singkat keahlian dan karya terbaik Anda..." : "Briefly tell us about your expertise and favorite work..."}
                                    value={coverNote}
                                    onChange={(e) => setCoverNote(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 bg-white text-xs text-[#171715] placeholder:text-[#5C5850]/50 focus:outline-none focus:border-[#A88C40]"
                                />
                            </div>

                            {/* Submit & Cancel */}
                            <div className="pt-3 flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="px-4 py-2.5 text-xs font-medium text-[#5C5850] hover:text-[#171715] transition-colors"
                                >
                                    {lang === "id" ? "Batal" : "Cancel"}
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="size-3.5 animate-spin" />
                                            <span>{lang === "id" ? "Mengirim..." : "Submitting..."}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="size-3.5" />
                                            <span>{lang === "id" ? "Kirim Lamaran" : "Submit Application"}</span>
                                            <ArrowRight className="size-3.5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
