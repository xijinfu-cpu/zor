"use client";

import {
    Layers,
    Code2,
    Briefcase,
    Palette,
    ShieldCheck,
    Search
} from "lucide-react";
import { useLang } from "@/lib/language-context";

// Structured breakdown data
const EXECUTIVE_TEAM = [
    { title: "CEO / Founder", name: "Muhammad Raykram", roleEn: "Executive Leadership & Strategic Direction", roleId: "Kepemimpinan Eksekutif & Arah Strategis", tag: "Executive", badge: "#FFD700 " },
    { title: "Chief Technology Officer", name: "Luis Wirawan", roleEn: "Product Architecture, Engineering & Design Oversight", roleId: "Arsitektur Produk, Rekayasa Teknologi & Pengawasan Desain", tag: "Executive", badge: "#171715" },
    { title: "Chief Operating Officer", name: "Siti Aminah", roleEn: "Operations, Client Relations & Project Delivery", roleId: "Operasional, Relasi Klien & Manajemen Pengiriman Proyek", tag: "Executive", badge: "#171715" },
];

const CTO_DIVISIONS = [
    {
        deptEn: "UI/UX Design Team",
        deptId: "Tim Desain UI/UX",
        icon: Palette,
        color: "#7D568E",
        members: [
            { role: "UX Researcher", name: "Ayu Larasati", focusEn: "User discovery, usability testing, and qualitative behavior insights", focusId: "Riset pengguna, pengujian kegunaan, dan wawasan perilaku kualitatif" },
            { role: "UI Designer", name: "Dimas Anggara", focusEn: "Design systems, typography, micro-interactions, and component libraries", focusId: "Sistem desain, tipografi, mikro-interaksi, dan pustaka komponen" },
        ],
    },
    {
        deptEn: "Technical Engineering Team",
        deptId: "Tim Rekayasa Teknologi",
        icon: Code2,
        color: "#586B6D",
        members: [
            { role: "Frontend Developer", name: "Kevin Pratama", focusEn: "Modern web architecture, animations, and micro-interactions", focusId: "Arsitektur web modern, animasi, dan performa mikro-interaksi" },
            { role: "Backend Developer", name: "Surya Darma", focusEn: "API design, database schemas, and server performance", focusId: "Desain API, skema database, dan keandalan performa server" },
            { role: "Full-Stack Developer", name: "Eko Saputra", focusEn: "End-to-end features, system integration, and headless stacks", focusId: "Pengembangan fitur menyeluruh, integrasi sistem, dan headless stack" },
            { role: "DevOps Engineer", name: "Iwan Setiawan", focusEn: "CI/CD pipelines, containerization, and infrastructure reliability", focusId: "Pipeline CI/CD, kontainerisasi, dan stabilitas infrastruktur cloud" },
        ],
    },
    {
        deptEn: "Quality Assurance (QA) Team",
        deptId: "Tim Penjamin Mutu (QA)",
        icon: ShieldCheck,
        color: "#2D8065",
        members: [
            { role: "QA Tester", name: "Nadia Safira", focusEn: "Cross-device testing, automated regression, and release validation", focusId: "Pengujian lintas perangkat, regresi otomatis, dan validasi rilis" },
        ],
    },
];

const COO_DIVISIONS = [
    {
        deptEn: "Business & Client Relations",
        deptId: "Bisnis & Hubungan Klien",
        icon: Briefcase,
        color: "#586B6D",
        members: [
            { role: "Business Development", name: "Reza Pahlevi", focusEn: "Strategic partnerships, client acquisition, and scope alignment", focusId: "Kemitraan strategis, akuisisi klien, dan penyelarasan cakupan" },
            { role: "Account Manager", name: "Dina Lestari", focusEn: "Client communication, milestone updates, and ongoing retainers", focusId: "Komunikasi klien, laporan berkala, dan manajemen retainer" },
        ],
    },
    {
        deptEn: "Project Management Team",
        deptId: "Tim Manajemen Proyek",
        icon: Layers,
        color: "#A88C40",
        members: [
            { role: "Project Manager", name: "Faisal Rahman", focusEn: "Sprint timelines, resource allocation, and budget tracking", focusId: "Linimasa sprint, alokasi sumber daya, dan pengawasan anggaran" },
            { role: "Scrum Master", name: "Rina Melati", focusEn: "Agile ceremonies, blocker resolution, and team workflow velocity", focusId: "Koordinasi agile, penyelesaian hambatan tim, dan kecepatan alur kerja" },
        ],
    },
    {
        deptEn: "Marketing & Growth Team",
        deptId: "Tim Pemasaran & Pertumbuhan",
        icon: Search,
        color: "#7D568E",
        members: [
            { role: "SEO Specialist", name: "Hendra Gunawan", focusEn: "Search architecture, keyword strategy, and technical indexation", focusId: "Arsitektur pencarian, strategi kata kunci, dan indeksasi teknis SEO" },
            { role: "Copywriter", name: "Maya Putri", focusEn: "Brand messaging, product narrative, and conversion copywriting", focusId: "Pesan brand, narasi produk, dan penulisan persuasif berbasis konversi" },
        ],
    },
];

export default function TeamStructure() {
    const { lang } = useLang();
    const isId = lang === "id";

    return (
        <section className="py-16 md:py-24 border-t border-[#171715]/10">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header Section */}
                <div className="max-w-3xl mb-14">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3.5 py-1 rounded-full bg-[#A88C40]/10 border border-[#A88C40]/25 inline-block mb-4">
                        {isId ? "Struktur Organisasi" : "Organization Structure"}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#171715] tracking-tight leading-tight">
                        {isId ? "Hierarki & Struktur Tim ZORS CRAFT" : "ZORS CRAFT Team Hierarchy"}
                    </h2>
                    <p className="text-base md:text-lg text-[#5C5850] mt-3 leading-relaxed">
                        {isId
                            ? "Sinergi lintas disiplin antara jajaran kepemimpinan eksekutif, rekayasa teknologi, desain produk, dan operasi klien."
                            : "Cross-disciplinary alignment between executive leadership, technical engineering, product design, and client operations."}
                    </p>
                </div>

                <div className="space-y-12">
                    {/* 1. Executive Board */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A88C40]">
                                {isId ? "01 / Kepemimpinan Eksekutif" : "01 / Executive Leadership"}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {EXECUTIVE_TEAM.map((exec, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#171715] text-[#F0ECE2] p-7 rounded-2xl border border-[#A88C40]/40 shadow-sm flex flex-col justify-between"
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/10 text-[#F0ECE2]/90 border border-white/10">
                                            {exec.tag}
                                        </span>
                                        <span className="text-xs font-mono font-semibold text-[#A88C40]">C-Suite</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {exec.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-[#A88C40] mb-2.5">
                                            {exec.name}
                                        </p>
                                        <p className="text-xs text-[#F0ECE2]/70 leading-relaxed">
                                            {isId ? exec.roleId : exec.roleEn}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. CTO Column - Product, Design & Tech */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A88C40]">
                                {isId
                                    ? "02 / Di Bawah CTO — Produk, Desain & Rekayasa Teknologi"
                                    : "02 / Under CTO — Product, Design & Technical Engineering"}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {CTO_DIVISIONS.map((div, idx) => {
                                const IconComp = div.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2.5 mb-4">
                                                <div
                                                    className="p-2 rounded-xl text-white shrink-0"
                                                    style={{ backgroundColor: div.color }}
                                                >
                                                    <IconComp className="size-4" />
                                                </div>
                                                <h3 className="text-base font-semibold text-[#171715]">
                                                    {isId ? div.deptId : div.deptEn}
                                                </h3>
                                            </div>

                                            <div className="space-y-3 pt-3 border-t border-[#171715]/10">
                                                {div.members.map((member, mIdx) => (
                                                    <div key={mIdx} className="bg-[#F0ECE2]/50 p-3.5 rounded-xl border border-[#171715]/5">
                                                        <div className="flex items-baseline justify-between gap-2">
                                                            <span className="text-xs font-semibold text-[#171715]">
                                                                {member.role}
                                                            </span>
                                                            <span className="text-xs font-mono text-[#A88C40] font-medium">
                                                                {member.name}
                                                            </span>
                                                        </div>
                                                        <p className="text-[11px] text-[#5C5850] mt-1 leading-snug">
                                                            {isId ? member.focusId : member.focusEn}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 3. COO Column - Business, Operations & Marketing */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A88C40]">
                                {isId
                                    ? "03 / Di Bawah COO — Bisnis, Operasional & Eksekusi Proyek"
                                    : "03 / Under COO — Business, Operations & Project Delivery"}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {COO_DIVISIONS.map((div, idx) => {
                                const IconComp = div.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2.5 mb-4">
                                                <div
                                                    className="p-2 rounded-xl text-white shrink-0"
                                                    style={{ backgroundColor: div.color }}
                                                >
                                                    <IconComp className="size-4" />
                                                </div>
                                                <h3 className="text-base font-semibold text-[#171715]">
                                                    {isId ? div.deptId : div.deptEn}
                                                </h3>
                                            </div>

                                            <div className="space-y-3 pt-3 border-t border-[#171715]/10">
                                                {div.members.map((member, mIdx) => (
                                                    <div key={mIdx} className="bg-[#F0ECE2]/50 p-3.5 rounded-xl border border-[#171715]/5">
                                                        <div className="flex items-baseline justify-between gap-2">
                                                            <span className="text-xs font-semibold text-[#171715]">
                                                                {member.role}
                                                            </span>
                                                            <span className="text-xs font-mono text-[#A88C40] font-medium">
                                                                {member.name}
                                                            </span>
                                                        </div>
                                                        <p className="text-[11px] text-[#5C5850] mt-1 leading-snug">
                                                            {isId ? member.focusId : member.focusEn}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
