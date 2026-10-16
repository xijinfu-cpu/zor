"use client";

import ProjectBriefForm from "@/components/forms/project-brief-form";
import { ArrowUpRight, Calendar, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";

const content = {
    en: {
        badge: "Start a Project",
        h1: "Let's Craft It Together.",
        subtitle: "Tell us what you're building, changing, or trying to solve.",
        body: "Whether you have a clear brief or just the beginning of an idea, tell us where you are. We'll help figure out what comes next.",
        responseLabel: "Response Commitment",
        responseText: "We usually reply within 24 hours.",
        emailLabel: "VIA EMAIL",
        emailDesc: "For general inquiries, partnerships, and everything in between.",
        waLabel: "VIA WHATSAPP",
        waDesc: "Chat directly for quick discussions, short questions, or a casual conversation.",
        waButton: "Start Chat",
        waMessage: "Hello ZORS CRAFT, I'd like to discuss my project.",
        studioLabel: "DIGITAL STUDIO",
        studioDesc: "Based in Bandung, Indonesia — working with ambitious businesses and teams wherever good ideas take us.",
        callLabel: "DISCOVERY CALL",
        callTitle: "Not sure where to start?",
        callDesc: "A short conversation is often enough to find the right direction.",
        callNote: "15 minutes. No hard sell. Just tell us what you're working on.",
        callButton: "Book a Discovery Call",
    },
    id: {
        badge: "Mulai Proyek",
        h1: "Ayo Wujudkan Bersama.",
        subtitle: "Ceritakan apa yang sedang kamu bangun, ubah, atau coba selesaikan.",
        body: "Baik kamu sudah punya brief yang jelas atau baru punya ide awal, ceritakan saja posisimu sekarang. Kami bantu tentukan langkah selanjutnya.",
        responseLabel: "Komitmen Respons",
        responseText: "Kami biasanya membalas dalam 24 jam.",
        emailLabel: "VIA EMAIL",
        emailDesc: "Untuk pertanyaan umum, kolaborasi, atau hal lainnya.",
        waLabel: "VIA WHATSAPP",
        waDesc: "Chat langsung untuk diskusi cepat, pertanyaan singkat, atau sekadar ngobrol santai.",
        waButton: "Mulai Chat",
        waMessage: "Halo ZORS CRAFT, saya ingin berdiskusi tentang proyek saya.",
        studioLabel: "DIGITAL STUDIO",
        studioDesc: "Berbasis di Bandung, Indonesia — kami bekerja dengan bisnis dan tim ambisius di mana pun ide bagus itu berada.",
        callLabel: "DISCOVERY CALL",
        callTitle: "Belum tahu harus mulai dari mana?",
        callDesc: "Sebuah percakapan singkat sering kali sudah cukup untuk menemukan arah yang tepat.",
        callNote: "15 menit. Tidak ada tekanan. Ceritakan saja apa yang sedang kamu kerjakan.",
        callButton: "Jadwalkan Discovery Call",
    },
};

export default function ContactContent() {
    const { lang } = useLang();
    const t = content[lang];

    return (
        <section className="pt-36 md:pt-44 pb-20">
            {/* 1. Hero Section */}
            <div className="max-w-4xl mx-auto px-5 text-center mb-16">
                <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                    {t.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] mb-4">
                    {t.h1}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#171715]/60 max-w-2xl mx-auto mb-4 leading-snug">
                    {t.subtitle}
                </p>
                <p className="text-sm md:text-base text-[#171715]/75 max-w-xl mx-auto leading-relaxed">
                    {t.body}
                </p>
            </div>

            {/* 2. Main Content Grid */}
            <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Brief Form */}
                <div className="lg:col-span-7">
                    <ProjectBriefForm />
                </div>

                {/* Right: Direct Channels & Information */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Response Commitment Card */}
                    <div className="bg-[#A88C40]/10 border border-[#A88C40]/30 p-5 rounded-2xl flex items-center gap-3.5">
                        <div className="size-10 rounded-full bg-white flex items-center justify-center text-[#A88C40] shrink-0 border border-[#A88C40]/20 shadow-2xs">
                            <Clock className="size-5" />
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#A88C40] font-semibold block">
                                {t.responseLabel}
                            </span>
                            <p className="text-sm font-semibold text-[#171715]">
                                {t.responseText}
                            </p>
                        </div>
                    </div>

                    {/* Via Email Card */}
                    <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                            <Mail className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#171715]/50 font-mono font-medium">
                                {t.emailLabel}
                            </span>
                        </div>
                        <a href="mailto:hello@zorscraft.id" className="text-xl md:text-2xl font-semibold text-[#171715] hover:text-[#586B6D] transition-colors block">
                            hello@zorscraft.id
                        </a>
                        <p className="text-xs md:text-sm text-[#171715]/60 mt-2 leading-relaxed">
                            {t.emailDesc}
                        </p>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                            <MessageCircle className="size-4 text-[#25D366]" />
                            <span className="text-xs uppercase tracking-wider text-[#171715]/50 font-mono font-medium">
                                {t.waLabel}
                            </span>
                        </div>
                        <a href="https://wa.me/6287775566404" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-semibold text-[#171715] hover:text-[#25D366] transition-colors block">
                            +62 877 7556 6404
                        </a>
                        <p className="text-xs md:text-sm text-[#171715]/60 mt-2 leading-relaxed">
                            {t.waDesc}
                        </p>
                        <div className="mt-4">
                            <a
                                href={`https://wa.me/6287775566404?text=${encodeURIComponent(t.waMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20b858] transition-colors duration-200"
                            >
                                <MessageCircle className="size-4" />
                                {t.waButton}
                            </a>
                        </div>
                    </div>

                    {/* Digital Studio Card */}
                    <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#171715]/50 font-mono font-medium">
                                {t.studioLabel}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#171715] mb-1">ZORS CRAFT</h3>
                        <p className="text-xs md:text-sm text-[#171715]/70 leading-relaxed">
                            {t.studioDesc}
                        </p>
                    </div>

                    {/* Discovery Call Card */}
                    <div className="bg-[#171715] text-[#F0ECE2] p-6 md:p-8 rounded-2xl border border-[#171715] shadow-xs space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#F0ECE2]/60 font-mono font-medium">
                                {t.callLabel}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#F0ECE2] mb-1">{t.callTitle}</h3>
                            <p className="text-sm text-[#F0ECE2]/80 leading-relaxed">{t.callDesc}</p>
                        </div>
                        <p className="text-xs font-mono text-[#F0ECE2]/60">{t.callNote}</p>
                        <div className="pt-2">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://calendar.app.google/D5zNA5sETNtreLvL6"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#F0ECE2] text-[#171715] font-medium hover:bg-[#A88C40] hover:text-[#171715] text-sm transition-colors duration-200"
                            >
                                {t.callButton} <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
