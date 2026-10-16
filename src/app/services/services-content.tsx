"use client";

import { useLang } from "@/lib/language-context";
import Branding from "@/components/sections/services/branding";
import Designing from "@/components/sections/services/design";
import Development from "@/components/sections/services/development";
import Hero from "@/components/sections/services/hero";
import Optimization from "@/components/sections/services/optimization";
import SelectedWork from "@/components/sections/services/selected-work";
import Strategy from "@/components/sections/services/strategy";
import Support from "@/components/sections/services/support";
import WhatYouGet from "@/components/sections/services/what-you-get";
import EngagementModel from "@/components/sections/services/engagement-model";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const servicesPageData = {
    en: {
        processBadge: "How We Work",
        processTitle: "Our Process,",
        processSubtitle: "Discover → Define → Design → Develop → Launch → Grow.",
        processDesc: "A structured six-stage methodology designed for momentum, clarity, and predictable outcomes.",
        workflowSteps: [
            { icon: 'solar:compass-bold-duotone', step: '01', name: 'Discover', desc: 'Understand the business, audience, core objectives, and project requirements.' },
            { icon: 'solar:target-bold-duotone', step: '02', name: 'Define', desc: 'Determine strategy, project scope, technical architecture, and creative direction.' },
            { icon: 'solar:palette-bold-duotone', step: '03', name: 'Design', desc: 'Craft intuitive wireframes, brand identity, UI/UX systems, and interactive prototypes.' },
            { icon: 'solar:code-square-bold-duotone', step: '04', name: 'Develop', desc: 'Engineer clean, modular code, integrate essential platforms, and conduct thorough tests.' },
            { icon: 'solar:rocket-bold-duotone', step: '05', name: 'Launch', desc: 'Execute seamless deployment, QA verification, DNS setup, and complete client handover.' },
            { icon: 'solar:chart-2-bold-duotone', step: '06', name: 'Grow', desc: 'Provide ongoing support, performance monitoring, continuous optimization, and updates.' },
        ],
        faqBadge: "Questions & Answers",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Everything you need to know about working with ZORS.",
        faqs: [
            {
                question: "What services does ZORS offer?",
                answer: "We offer end-to-end digital craftsmanship across six core disciplines: Strategy (discovery, market insight, roadmap), Branding (brand direction, visual identity, brand systems), Design (UX wireframing, UI design, design systems), Development (modern websites, eCommerce/CMS, custom integrations), Optimization (speed audits, UX/conversion reviews, technical SEO), and Support (monitoring, maintenance, feature updates)."
            },
            {
                question: "Can I hire ZORS for only one service?",
                answer: "Yes, absolutely. While many clients partner with us for end-to-end projects (from strategy to launch), we frequently collaborate on standalone engagements — such as brand identity redesigns, dedicated website development, UI/UX design sprints, or technical performance audits."
            },
            {
                question: "Can you redesign an existing website or refresh an existing brand?",
                answer: "Yes. We regularly help established businesses and growing startups modernize their digital presence. We audit what is currently working, identify friction points, and rebuild with clearer positioning, higher speed, and elevated aesthetics."
            },
            {
                question: "Do you work with early-stage startups as well as established brands?",
                answer: "Yes. For early-stage startups, we focus on speed-to-market, clear value propositions, and investor-ready MVPs. For established brands, we focus on conversion optimization, robust architecture, brand cohesion, and scalable design systems."
            },
            {
                question: "How long does a typical project take?",
                answer: "Dedicated sprints (such as Branding or an Audit) typically take 2–4 weeks. Comprehensive website design and development projects typically take 4–8 weeks. Full-scale platforms or custom applications range from 8–12 weeks. Following our discovery phase, we deliver a guaranteed timeline and stick to it."
            },
            {
                question: "Who owns the IP and source files after delivery?",
                answer: "You do — 100%. Upon project completion and final handover, all Figma design files, brand guidelines, production code repositories, and assets belong entirely to you with no lock-in."
            },
            {
                question: "How do revisions and client feedback work during a project?",
                answer: "We treat design and development as a collaborative sprint. Each phase has structured review checkpoints. We share interactive Figma prototypes and staging links with recorded async walkthroughs, allowing your team to leave specific feedback before we move to the next stage."
            },
            {
                question: "What happens after launch? Do you provide maintenance and ongoing support?",
                answer: "Yes. Every project includes a post-launch warranty period to ensure total stability. Beyond launch, we offer retainer-based Support & Optimization packages covering 24/7 uptime monitoring, security patches, content updates, speed optimization, and ongoing feature rollouts."
            },
            {
                question: "How do we communicate and track project progress?",
                answer: "We keep communication transparent and direct. We set up a dedicated Slack channel with your team, share weekly video progress updates via Loom, and conduct milestone alignment calls to ensure zero misalignment."
            },
            {
                question: "Do you sign an NDA before discussing our project?",
                answer: "Yes. We respect confidentiality and frequently sign mutual Non-Disclosure Agreements (NDAs) before reviewing sensitive company data, product specs, or business strategies."
            }
        ],
        ctaBadge: "Have something in mind?",
        ctaTitle: "Let’s Craft It Together.",
        ctaDesc: "Tell us about your goals, timeline, and vision. We will get back within 24 hours with clear next steps.",
        ctaBtn: "Start a Project"
    },
    id: {
        processBadge: "Alur Kerja Kami",
        processTitle: "Metodologi Kerja,",
        processSubtitle: "Eksplorasi → Definisi → Desain → Koding → Rilis → Bertumbuh.",
        processDesc: "Enam tahapan kerja terstruktur yang dirancang untuk menjaga ritme kerja, kejelasan komunikasi, dan kepastian hasil akhir.",
        workflowSteps: [
            { icon: 'solar:compass-bold-duotone', step: '01', name: 'Eksplorasi (Discover)', desc: 'Memahami model bisnis, karakteristik audiens, tujuan esensial, dan kebutuhan proyek.' },
            { icon: 'solar:target-bold-duotone', step: '02', name: 'Definisi (Define)', desc: 'Menentukan strategi matang, batasan ruang lingkup, arsitektur teknis, dan arahan kreatif.' },
            { icon: 'solar:palette-bold-duotone', step: '03', name: 'Desain (Design)', desc: 'Merancang wireframe terstruktur, identitas brand, sistem desain UI/UX, dan prototipe interaktif.' },
            { icon: 'solar:code-square-bold-duotone', step: '04', name: 'Koding (Develop)', desc: 'Merekayasa kode modular yang bersih, menghubungkan platform penting, dan menguji fungsionalitas secara menyeluruh.' },
            { icon: 'solar:rocket-bold-duotone', step: '05', name: 'Rilis (Launch)', desc: 'Menjalankan deployment mulus, verifikasi QA, konfigurasi domain/DNS, dan serah terima penuh.' },
            { icon: 'solar:chart-2-bold-duotone', step: '06', name: 'Bertumbuh (Grow)', desc: 'Memberikan dukungan teknis berkala, pemantauan stabilitas server, serta optimasi performa berkelanjutan.' },
        ],
        faqBadge: "Tanya Jawab",
        faqTitle: "Pertanyaan yang Sering Diajukan",
        faqSubtitle: "Semua hal penting yang perlu Anda ketahui tentang berkolaborasi bersama ZORS.",
        faqs: [
            {
                question: "Layanan apa saja yang disediakan oleh ZORS?",
                answer: "Kami menyediakan layanan pengerjaan digital menyeluruh lintas 6 disiplin utama: Strategi (riset bisnis & peta jalan), Branding (karakter & identitas visual terpadu), Desain (wireframe UX & antarmuka UI modern), Pengembangan (website modern, eCommerce, integrasi API), Optimasi (audit kecepatan, perbaikan UX konversi, SEO teknis), dan Dukungan (monitoring berkala & pembaruan fitur)."
            },
            {
                question: "Bisakah saya menggunakan jasa ZORS hanya untuk satu layanan tertentu?",
                answer: "Tentu saja bisa. Meskipun banyak klien mempercayakan proyek hulu-ke-hilir (dari strategi sampai rilis), kami sangat terbuka untuk pengerjaan modul tunggal — seperti redesign identitas brand saja, koding website Next.js, sprint desain UI/UX, atau audit performa teknis."
            },
            {
                question: "Bisakah ZORS merombak (redesign) website atau me-refresh brand yang sudah ada?",
                answer: "Bisa. Kami secara rutin membantu perusahaan dan startup meremajakan kehadiran digital mereka. Kami mengaudit apa yang berjalan baik, memperbaiki titik hambatan, dan membangun ulang dengan positioning yang lebih tajam, kecepatan tinggi, dan visual berkelas."
            },
            {
                question: "Apakah ZORS melayani startup tahap awal maupun perusahaan besar?",
                answer: "Ya. Untuk startup tahap awal, kami memprioritaskan kecepatan masuk pasar (speed-to-market), nilai proporsional yang jelas, dan MVP siap investor. Untuk perusahaan mapan, fokus kami adalah optimasi konversi, keandalan arsitektur kode, konsistensi brand, dan sistem desain yang mudah diperluas."
            },
            {
                question: "Berapa lama waktu pengerjaan proyek pada umumnya?",
                answer: "Sprint terarah (seperti Branding atau Audit) umumnya berlangsung 2–4 minggu. Desain dan pengembangan website komprehensif membutuhkan 4–8 minggu. Platform kustom skala besar berkisar 8–12 minggu. Setelah fase discovery awal, kami memberikan linimasa pasti yang kami patuhi bersama."
            },
            {
                question: "Siapa yang memiliki hak kekayaan intelektual (IP) dan file sumber setelah proyek selesai?",
                answer: "Anda seutuhnya — 100%. Setelah proyek tuntas dan serah terima dilakukan, seluruh file desain Figma, pedoman brand, repositori kode sumber di GitHub, dan aset digital menjadi milik sah Anda tanpa ikatan tersembunyi."
            },
            {
                question: "Bagaimana alur revisi dan pemberian feedback selama proyek berlangsung?",
                answer: "Kami memandang proses kreasi sebagai kerja sama tim yang transparan. Setiap fase memiliki checkpoint tinjauan. Kami membagikan prototipe Figma interaktif dan tautan staging uji coba disertai rekaman penjelasan video, memudahkan tim Anda memberikan catatan langsung sebelum melangkah ke tahap selanjutnya."
            },
            {
                question: "Apa yang terjadi setelah peluncuran? Apakah ada dukungan pemeliharaan berkelanjutan?",
                answer: "Ya. Setiap proyek dilengkapi masa garansi paska peluncuran untuk memastikan sistem 100% stabil. Setelah itu, kami menyediakan paket Retainer Dukungan & Optimasi berkala mencakup pemantauan uptime, patch keamanan, update konten, hingga rilis fitur-fitur baru."
            },
            {
                question: "Bagaimana cara kita berkomunikasi dan memantau perkembangan proyek?",
                answer: "Komunikasi dilakukan secara langsung dan transparan. Kami membuat kanal koordinasi khusus bersama tim Anda (Slack/WhatsApp), laporan progres berkala, serta sesi evaluasi milestone agar nol miskomunikasi."
            },
            {
                question: "Apakah ZORS bersedia menandatangani NDA sebelum mendiskusikan ide kami?",
                answer: "Tentu. Kami sangat menghormati kerahasiaan bisnis dan rutin menandatangani perjanjian Non-Disclosure Agreement (NDA) sebelum meninjau data perusahaan, rancangan produk, atau strategi bisnis Anda."
            }
        ],
        ctaBadge: "Punya rencana proyek?",
        ctaTitle: "Mari Kita Bangun Bersama.",
        ctaDesc: "Ceritakan target, linimasa, dan visi bisnis Anda. Kami akan merespons dalam 24 jam dengan langkah konkret.",
        ctaBtn: "Mulai Proyek"
    }
};

export default function ServicesContent() {
    const { lang } = useLang();
    const t = servicesPageData[lang];

    return (
        <>
            {/* 1. Services Hero with 6 Core Services Overview */}
            <Hero />

            {/* 2. Strategy */}
            <Strategy />

            {/* 3. Branding */}
            <Branding />

            {/* 4. Design */}
            <Designing />

            {/* 5. Development */}
            <Development />

            {/* 6. Optimization */}
            <Optimization />

            {/* 7. Support */}
            <Support />

            {/* 8. Selected Client Story / Proof */}
            <SelectedWork />

            {/* 9. What You Get */}
            <WhatYouGet />

            {/* 10. How We Work */}
            <section className="py-16 md:py-24 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl bg-white/60">
                        {t.processBadge}
                    </span>
                    <h2 className="md:text-4xl md:leading-12 text-2xl my-3 font-semibold">
                        {t.processTitle} <br />
                        <span className="text-neutral-400 font-normal">
                            {t.processSubtitle}
                        </span>
                    </h2>
                    <p className="md:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
                        {t.processDesc}
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative max-w-6xl mx-auto">
                    {t.workflowSteps.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/80 rounded-xl p-7 border border-[#171715]/10 shadow-xs flex flex-col justify-between min-h-[220px]"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="size-11 rounded-lg bg-[#A88C40]/10 flex items-center justify-center text-[#A88C40]">
                                    <Icon icon={item.icon} className="size-6" />
                                </div>
                                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#F0ECE2] text-[#A88C40]">
                                    STEP {item.step}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#171715] mb-1.5">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-[#171715]/70 font-normal leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 11. Engagement Models */}
            <EngagementModel />

            {/* 12. FAQ Section */}
            <section className="py-16 md:py-24 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                        {t.faqBadge}
                    </span>
                    <h2 className="md:text-4xl md:leading-12 text-2xl my-3 font-semibold text-[#171715]">
                        {t.faqTitle} <br />
                        <span className="text-[#171715]/50 font-normal">
                            {t.faqSubtitle}
                        </span>
                    </h2>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-6xl mx-auto rounded-2xl mt-12 grid md:grid-cols-2 gap-4 text-left"
                >
                    {t.faqs.map((item) => (
                        <div className="group" key={item.question}>
                            <AccordionItem
                                value={item.question}
                                className="bg-white/80 rounded-xl border border-[#171715]/10 px-6 py-2 shadow-xs"
                            >
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-base font-semibold text-[#171715] text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-[#171715]/70 font-normal leading-relaxed text-sm pt-1 pb-2">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </div>
                    ))}
                </Accordion>
            </section>

            {/* 13. Final CTA */}
            <section className="pt-10 md:pt-16 pb-16">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/80 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <Link href={"/contact"} className="flex flex-col md:flex-row md:items-center justify-between group gap-6">
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
                                {t.ctaBtn} <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
