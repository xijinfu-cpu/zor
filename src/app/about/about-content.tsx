"use client";

import { useLang } from "@/lib/language-context";
import { ArrowUpRight, Compass, ShieldCheck, HeartHandshake, Eye, Sparkles, Users2, Lightbulb, Zap, Clock } from "lucide-react";
import Link from "next/link";
import TeamStructure from "@/components/sections/team-structure";

const aboutData = {
    en: {
        badge: "About Us",
        heroH1: "We Craft With Purpose — And Build With What Comes Next in Mind.",
        heroSubtitle: "Strategy before assumptions. Purpose before decoration. Quality before shortcuts.",
        heroP1: "ZORS CRAFT is a digital agency built around one simple belief: meaningful digital work starts with understanding.",
        heroP2: "We bring strategy, branding, design, development, and continuous improvement together to create digital experiences that help businesses communicate clearly, build trust, and grow.",
        believeBadge: "Perspective",
        believeTitle: "What We Believe",
        quote: "“Good digital work is not about doing more. It is about understanding what matters — and crafting it well.”",
        missionLabel: "Our Mission",
        missionDesc: "To help businesses build stronger digital foundations through thoughtful strategy, purposeful design, reliable technology, and long-term partnership.",
        storyBadge: "Origin & Path",
        storyTitle: "The ZORS Story",
        storyBeginning: "The Beginning",
        storyP1: "ZORS CRAFT started from a belief that businesses deserve more than generic digital solutions.",
        storyP2: "They deserve work that understands where they are, where they want to go, and what needs to be built to get there.",
        pillar1Title: "01 · Understand Before We Build",
        pillar1Desc: "We begin with the business — not the tool. Every decision starts from understanding the problem, audience, goals, and context.",
        pillar2Title: "02 · Craft Over Shortcuts",
        pillar2Desc: "We believe details matter. Good work takes intention, clear thinking, and care — not templates applied without purpose.",
        pillar3Title: "03 · Built for What Comes Next",
        pillar3Desc: "What we create should not only work today. It should give the business room to adapt, improve, and grow.",
        teamBadge: "The Team Behind ZORS",
        teamTitle: "Built by designers, developers, and thinkers who care about details.",
        teamSubtitle: "A small team. A focused process. Meaningful outcomes.",
        teamDesc: "We are an independent digital studio founded on the belief that meaningful work doesn't require agency bloat. We stay intentionally focused so every project receives direct senior attention, honest collaboration, and obsessive attention to craft.",
        teamPillars: [
            {
                number: "01 / SENIOR FOCUS",
                title: "Direct Collaboration",
                desc: "You work directly with the practitioners who think, design, and code your product — never junior handoffs or layers of account managers."
            },
            {
                number: "02 / UNIFIED CRAFT",
                title: "Cross-Discipline Rigor",
                desc: "Designers who understand code architecture. Engineers who obsess over typography and micro-interactions. Zero friction between vision and execution."
            },
            {
                number: "03 / ACCOUNTABILITY",
                title: "Genuine Ownership",
                desc: "We treat every project as our own benchmark. We take pride in what we launch, and we support what we build long after the initial handover."
            }
        ],
        valuesBadge: "Principles",
        valuesTitle: "Our Values",
        valuesSubtitle: "The principles behind how we think, work, and build.",
        values: [
            { number: "01", title: "Zero Compromise", desc: "Quality is never an afterthought.", icon: ShieldCheck },
            { number: "02", title: "Ownership", desc: "We treat every project as if it were our own.", icon: Compass },
            { number: "03", title: "Raw Honesty", desc: "Clear communication, even when the answer is difficult.", icon: Eye },
            { number: "04", title: "Show, Don’t Tell", desc: "The work should speak louder than the promise.", icon: Sparkles },
            { number: "05", title: "Craft Over Speed", desc: "We move with purpose — not carelessness.", icon: Zap },
            { number: "06", title: "Roots in Relationship", desc: "Clients are partners, not transactions.", icon: HeartHandshake },
            { number: "07", title: "Always Learning", desc: "Digital changes. We keep moving with it.", icon: Lightbulb },
            { number: "08", title: "Fearless Ideas", desc: "Meaningful work requires the courage to think differently.", icon: Users2 },
            { number: "09", title: "Time Is Sacred", desc: "We respect the time clients trust us with.", icon: Clock },
        ],
        approachBadge: "Workflow",
        approachTitle: "Our Approach",
        approachSubtitle: "Understand. Craft. Build. Grow.",
        approaches: [
            { number: "01", step: "Understand", desc: "We learn the business, audience, challenges, and goals before proposing a solution." },
            { number: "02", step: "Craft", desc: "Strategy, identity, structure, and experience are shaped around what actually matters." },
            { number: "03", step: "Build", desc: "We turn the direction into reliable digital products with attention to every layer." },
            { number: "04", step: "Grow", desc: "Launch is not the end. We improve, support, and evolve what we build." },
        ],
        commitBadge: "Accountability",
        commitTitle: "Our Commitment",
        commitP1: "We believe good partnerships are built on clarity.",
        commitP2: "You should know what we are building, why we are building it, where the project stands, and what comes next.",
        commitP3: "We communicate clearly, respect agreed timelines and scope, take responsibility for our work, and raise problems early — not after they become surprises.",
        commitFooter: "Clear work. Clear communication. Shared responsibility.",
        whyBadge: "Purpose",
        whyTitle: "Why ZORS Exists",
        whyP1: "ZORS CRAFT was created for businesses that care about how they show up in the digital world.",
        whyP2: "Too often, strategy, branding, design, and development are treated as separate pieces. We believe the strongest digital experiences happen when those layers work together.",
        whyP3: "That is why ZORS exists: to bring thinking and execution into one process — crafting digital work that is purposeful, useful, and built to last.",
        whyFooter: "Built Different. Meant to Last.",
        ctaBadge: "Have something in mind?",
        ctaTitle: "Let’s Craft It Together.",
        ctaDesc: "Tell us about your goals, timeline, and vision. We will get back within 24 hours with clear next steps.",
        ctaBtn: "Start a Project"
    },
    id: {
        badge: "Tentang Kami",
        heroH1: "Kami Merancang dengan Niat — Dan Membangun dengan Masa Depan di Pikiran.",
        heroSubtitle: "Strategi sebelum asumsi. Tujuan sebelum sekadar dekorasi. Kualitas sebelum jalan pintas.",
        heroP1: "ZORS CRAFT adalah agensi digital yang didirikan atas dasar satu keyakinan sederhana: karya digital yang bermakna dimulai dari pemahaman mendalam.",
        heroP2: "Kami menyatukan strategi, branding, desain antarmuka, rekayasa teknologi, dan optimasi berkelanjutan demi menghadirkan pengalaman digital yang membantu brand berkomunikasi secara gamblang, meraih kepercayaan, dan melesat maju.",
        believeBadge: "Sudut Pandang",
        believeTitle: "Apa yang Kami Yakini",
        quote: "“Karya digital yang hebat bukan tentang membuat sebanyak-banyaknya, melainkan memahami apa yang esensial — lalu mengeksekusinya dengan sempurna.”",
        missionLabel: "Misi Kami",
        missionDesc: "Membantu bisnis membangun fondasi digital yang tangguh melalui strategi matang, desain terarah, teknologi andal, dan kemitraan jangka panjang.",
        storyBadge: "Asal Usul & Arah",
        storyTitle: "Kisah di Balik ZORS",
        storyBeginning: "Titik Awal",
        storyP1: "ZORS CRAFT lahir dari keresahan bahwa bisnis layak mendapatkan lebih dari sekadar solusi template yang pasaran.",
        storyP2: "Mereka layak menerima karya yang sungguh-sungguh memahami posisi mereka sekarang, tujuan yang ingin dicapai, serta instrumen apa yang wajib dibangun untuk mencapainya.",
        pillar1Title: "01 · Pahami Sebelum Membangun",
        pillar1Desc: "Kami mulai dari esensi bisnis — bukan sekadar tren teknologi. Setiap keputusan berakar dari pemahaman terhadap problem, audiens, dan konteks.",
        pillar2Title: "02 · Ketelitian di Atas Jalan Pintas",
        pillar2Desc: "Kami percaya detail menentukan mutu. Hasil berkualitas butuh niat, pemikiran jernih, dan ketelitian — bukan template instan tanpa jiwa.",
        pillar3Title: "03 · Dibangun untuk Masa Depan",
        pillar3Desc: "Apa yang kami ciptakan tidak hanya prima hari ini, tetapi juga memberi ruang lapang bagi bisnis untuk berkembang dan beradaptasi.",
        teamBadge: "Tim di Balik ZORS",
        teamTitle: "Dibangun oleh desainer, pengembang, dan pemikir yang peduli pada setiap detail.",
        teamSubtitle: "Tim terfokus. Alur kerja terarah. Hasil nyata.",
        teamDesc: "Kami adalah studio digital independen yang percaya bahwa karya luar biasa tidak butuh birokrasi berbelit. Kami sengaja menjaga ukuran tim tetap terfokus agar setiap proyek mendapat perhatian langsung dari para praktisi senior.",
        teamPillars: [
            {
                number: "01 / FOKUS SENIOR",
                title: "Kolaborasi Langsung",
                desc: "Anda berkolaborasi langsung dengan para praktisi yang merancang, mendesain, dan memprogram produk Anda — tanpa dilempar ke pihak junior atau account manager berlapis."
            },
            {
                number: "02 / INTEGRASI KARYA",
                title: "Disiplin Lintas Bidang",
                desc: "Desainer yang memahami arsitektur kode. Engineer yang peduli pada tipografi dan mikro-interaksi. Nol friksi antara konsep dan realisasi."
            },
            {
                number: "03 / AKUNTABILITAS",
                title: "Rasa Memiliki yang Nyata",
                desc: "Kami memperlakukan setiap proyek sebagai standar kehormatan karya kami sendiri. Kami bangga dengan apa yang kami rilis, dan terus mendampinginya paska peluncuran."
            }
        ],
        valuesBadge: "Prinsip",
        valuesTitle: "Nilai-Nilai Kami",
        valuesSubtitle: "Prinsip dasar di balik cara kami berpikir, bekerja, dan berkarya.",
        values: [
            { number: "01", title: "Tanpa Kompromi", desc: "Kualitas tidak pernah menjadi renungan belakangan.", icon: ShieldCheck },
            { number: "02", title: "Rasa Memiliki", desc: "Kami memperlakukan setiap proyek seperti milik kami sendiri.", icon: Compass },
            { number: "03", title: "Kejujuran Mutlak", desc: "Komunikasi transparan, bahkan saat jawabannya tidak mudah.", icon: Eye },
            { number: "04", title: "Buktikan Lewat Karya", desc: "Kualitas hasil kerja berbicara lebih lantang daripada janji.", icon: Sparkles },
            { number: "05", title: "Presisi di Atas Ketergesaan", desc: "Kami melangkah dengan cermat dan penuh perhitungan.", icon: Zap },
            { number: "06", title: "Akar pada Relasi", desc: "Klien adalah mitra strategis jangka panjang, bukan transaksi.", icon: HeartHandshake },
            { number: "07", title: "Terus Belajar", desc: "Dunia digital selalu bergerak. Kami terus berevolusi bersamanya.", icon: Lightbulb },
            { number: "08", title: "Gagasan Berani", desc: "Karya berdampak butuh keberanian untuk berpikir berbeda.", icon: Users2 },
            { number: "09", title: "Waktu Itu Berharga", desc: "Kami menghargai kepercayaan waktu yang klien amanahkan.", icon: Clock },
        ],
        approachBadge: "Alur Kerja",
        approachTitle: "Pendekatan Kami",
        approachSubtitle: "Pahami. Rancang. Bangun. Kembangkan.",
        approaches: [
            { number: "01", step: "Pahami (Understand)", desc: "Kami telaah model bisnis, audiens, kendala, dan target sebelum merumuskan solusi." },
            { number: "02", step: "Rancang (Craft)", desc: "Strategi, identitas visual, struktur informasi, dan pengalaman dirancang dari hal yang esensial." },
            { number: "03", step: "Bangun (Build)", desc: "Kami ubah arah strategis menjadi produk digital andal dengan presisi di setiap lapisan." },
            { number: "04", step: "Kembangkan (Grow)", desc: "Peluncuran bukanlah akhir. Kami terus memantau, mendukung, dan menyempurnakan produk Anda." },
        ],
        commitBadge: "Tanggung Jawab",
        commitTitle: "Komitmen Kami",
        commitP1: "Kami percaya kemitraan yang solid dibangun di atas keterbukaan dan kejelasan.",
        commitP2: "Anda berhak tahu apa yang sedang dibangun, alasan di baliknya, status kemajuan saat ini, dan tahapan berikutnya.",
        commitP3: "Kami berkomunikasi lugas, mematuhi kesepakatan linimasa dan ruang lingkup, bertanggung jawab atas hasil kerja, dan mendiskusikan kendala lebih dini.",
        commitFooter: "Karya jelas. Komunikasi transparan. Tanggung jawab bersama.",
        whyBadge: "Tujuan",
        whyTitle: "Mengapa ZORS Hadir",
        whyP1: "ZORS CRAFT diciptakan untuk bisnis yang benar-benar peduli bagaimana mereka tampil di dunia digital.",
        whyP2: "Kerap kali strategi, branding, desain, dan coding diperlakukan terpisah. Kami meyakini karya terbaik hadir ketika semua lapisan tersebut saling terhubung dan bersinergi.",
        whyP3: "Itulah alasan ZORS ada: menyatukan daya pikir strategis dan eksekusi teknis dalam satu napas — menciptakan karya digital yang bermakna, fungsional, dan berdaya tahan.",
        whyFooter: "Dibangun Berbeda. Dirancang Tahan Lama.",
        ctaBadge: "Ada proyek dalam benak Anda?",
        ctaTitle: "Mari Kita Wujudkan Bersama.",
        ctaDesc: "Ceritakan visi, target, dan kebutuhan Anda. Kami akan merespons dalam 24 jam dengan langkah nyata.",
        ctaBtn: "Mulai Proyek"
    }
};

export default function AboutContent() {
    const { lang } = useLang();
    const t = aboutData[lang];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="pt-36 md:pt-44 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                        {t.badge}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] leading-tight mb-4">
                        {t.heroH1}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-normal text-[#171715]/60 max-w-2xl mx-auto mb-6">
                        {t.heroSubtitle}
                    </p>
                    <div className="text-sm md:text-base text-[#171715]/75 max-w-2xl mx-auto leading-relaxed space-y-3">
                        <p>{t.heroP1}</p>
                        <p className="text-[#171715]/60">{t.heroP2}</p>
                    </div>
                </div>
            </section>

            {/* 2. What We Believe & The ZORS Story */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: What We Believe & Mission */}
                    <div className="space-y-6 flex flex-col">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                {t.believeBadge}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight mt-1">
                                {t.believeTitle}
                            </h2>
                        </div>

                        <div className="bg-[#171715] text-[#F0ECE2] p-8 md:p-12 rounded-2xl flex-1 flex flex-col justify-between border border-[#171715] shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A88C40]/15 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10 my-auto">
                                <span className="text-xs uppercase tracking-wider font-mono text-[#A88C40] block mb-4">
                                    Core Philosophy
                                </span>
                                <p className="text-2xl md:text-3xl font-serif italic text-[#F0ECE2] leading-snug">
                                    {t.quote}
                                </p>
                            </div>
                            <div className="pt-8 mt-8 border-t border-[#F0ECE2]/15 relative z-10">
                                <span className="text-xs uppercase tracking-wider font-mono text-[#A88C40] block mb-1">
                                    {t.missionLabel}
                                </span>
                                <p className="text-sm md:text-base text-[#F0ECE2]/80 font-normal leading-relaxed">
                                    {t.missionDesc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: The ZORS Story */}
                    <div className="space-y-6 flex flex-col">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                {t.storyBadge}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight mt-1">
                                {t.storyTitle}
                            </h2>
                        </div>

                        <div className="space-y-4 flex-1 flex flex-col justify-between">
                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    {t.storyBeginning}
                                </span>
                                <p className="text-base text-[#171715] leading-relaxed font-medium">
                                    {t.storyP1}
                                </p>
                                <p className="text-sm text-[#171715]/60 leading-relaxed mt-1.5">
                                    {t.storyP2}
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    {t.pillar1Title}
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    {t.pillar1Desc}
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    {t.pillar2Title}
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    {t.pillar2Desc}
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    {t.pillar3Title}
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    {t.pillar3Desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Team Behind ZORS */}
            <section className="py-16 md:py-20 border-t border-[#171715]/10">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block mb-4">
                            {t.teamBadge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#171715] tracking-tight leading-tight">
                            {t.teamTitle}
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-[#A88C40] mt-3">
                            {t.teamSubtitle}
                        </p>
                        <p className="text-[#5C5850] text-base md:text-lg mt-4 leading-relaxed">
                            {t.teamDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.teamPillars.map((col, idx) => (
                            <div key={idx} className="bg-white/80 p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider block mb-3">
                                    {col.number}
                                </span>
                                <h3 className="text-xl font-semibold text-[#171715] mb-2">
                                    {col.title}
                                </h3>
                                <p className="text-sm text-[#5C5850] leading-relaxed">
                                    {col.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.1 Organization Structure */}
            <TeamStructure />

            {/* 4. Our Values */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                            {t.valuesBadge}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1 mb-2">
                            {t.valuesTitle}
                        </h2>
                        <p className="text-base text-[#171715]/60">
                            {t.valuesSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {t.values.map((val, idx) => {
                            const IconComponent = val.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs hover:border-[#A88C40]/40 transition-colors flex flex-col justify-between"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-semibold text-[#A88C40] bg-[#A88C40]/10 border border-[#A88C40]/25 rounded-md px-2 py-0.5">
                                            {val.number}
                                        </span>
                                        <IconComponent className="size-4 text-[#171715]/40" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-[#171715] mb-1.5">
                                            {val.title}
                                        </h3>
                                        <p className="text-sm text-[#171715]/70 leading-relaxed">
                                            {val.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Our Approach */}
            <section className="py-16 bg-[#F0ECE2] border-y border-[#171715]/10">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                            {t.approachBadge}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1 mb-2">
                            {t.approachTitle}
                        </h2>
                        <p className="text-base md:text-lg text-[#171715]/60 font-medium">
                            {t.approachSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {t.approaches.map((appr, idx) => (
                            <div
                                key={idx}
                                className="bg-white/80 p-6 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                            >
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-4">
                                    {appr.number}
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#171715] mb-2">
                                        {appr.step}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#171715]/70 leading-relaxed">
                                        {appr.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Commitment & Why ZORS Exists */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Commitment */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-2">
                                {t.commitBadge}
                            </span>
                            <h3 className="text-2xl font-semibold text-[#171715] tracking-tight mb-4">
                                {t.commitTitle}
                            </h3>
                            <div className="space-y-3 text-sm md:text-base text-[#171715]/75 leading-relaxed">
                                <p>{t.commitP1}</p>
                                <p>{t.commitP2}</p>
                                <p>{t.commitP3}</p>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#171715]/10">
                            <p className="text-xs font-mono text-[#A88C40] font-medium tracking-wide">
                                {t.commitFooter}
                            </p>
                        </div>
                    </div>

                    {/* Why ZORS Exists */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-2">
                                {t.whyBadge}
                            </span>
                            <h3 className="text-2xl font-semibold text-[#171715] tracking-tight mb-4">
                                {t.whyTitle}
                            </h3>
                            <div className="space-y-3 text-sm md:text-base text-[#171715]/75 leading-relaxed">
                                <p>{t.whyP1}</p>
                                <p>{t.whyP2}</p>
                                <p>{t.whyP3}</p>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#171715]/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-[#171715] font-semibold uppercase tracking-wider">
                                {t.whyFooter}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA Section */}
            <section className="pt-4 pb-20">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/90 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <Link
                        href={"/contact"}
                        className="flex flex-col md:flex-row md:items-center justify-between group gap-6"
                    >
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                {t.ctaBadge}
                            </span>
                            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#171715] mt-2 mb-3">
                                {t.ctaTitle}
                            </h2>
                            <p className="text-[#171715]/60 font-normal text-base md:text-lg max-w-xl">
                                {t.ctaDesc}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 mt-4 md:mt-0">
                            <span className="px-6 py-3.5 rounded-full bg-[#171715] text-[#F0ECE2] font-medium group-hover:bg-[#A88C40] group-hover:text-[#171715] duration-300 flex items-center gap-2 text-base shadow-sm">
                                {t.ctaBtn}{" "}
                                <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
