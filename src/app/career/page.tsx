import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers — ZORS CRAFT",
    description: "Craft meaningful digital products with purpose, intention, and zero shortcuts. Explore open roles and career opportunities at ZORS CRAFT.",
};

const whyWorkPoints = [
    {
        number: "01",
        title: "Ownership",
        tagline: "You build things that matter.",
        desc: "Take direct ownership from discovery to launch. We trust craftspeople to make decisions without red tape or bureaucratic layers.",
    },
    {
        number: "02",
        title: "Craftsmanship",
        tagline: "Quality over shortcuts.",
        desc: "We don't churn generic templates. We value typographic rigor, resilient architectures, and digital products built to endure.",
    },
    {
        number: "03",
        title: "Growth",
        tagline: "Always learning.",
        desc: "Continuous refinement of technical craft, design sensitivity, and strategic perspective through challenging, high-impact projects.",
    },
];

const openRoles = [
    {
        id: "senior-frontend-engineer",
        title: "Senior Frontend Engineer",
        discipline: "Development",
        accent: "#A88C40",
        type: "Full-time / Remote (Indonesia / SEA)",
        desc: "Lead web application architecture across Next.js, TypeScript, and modern headless ecosystems with extreme attention to micro-interactions and performance.",
    },
    {
        id: "brand-ui-designer",
        title: "Senior Brand & UI/UX Designer",
        discipline: "Design",
        accent: "#7D568E",
        type: "Full-time / Remote (Indonesia / SEA)",
        desc: "Shape brand identities, design systems, and digital product experiences that balance typographic rigor with human-centered interaction.",
    },
    {
        id: "digital-strategist",
        title: "Digital Strategist & Producer",
        discipline: "Strategy",
        accent: "#586B6D",
        type: "Full-time / Hybrid (Jakarta, Indonesia)",
        desc: "Bridge client business objectives with creative and engineering roadmaps, facilitating discovery, sprints, and verified delivery.",
    },
];

export default function CareerPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="pt-36 md:pt-44 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                        Careers at ZORS CRAFT
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] leading-tight mb-4">
                        Craft With Purpose. <br className="hidden sm:inline" />
                        Build Work That Lasts.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-normal text-[#5C5850] max-w-2xl mx-auto mb-6">
                        We are a tight-knit digital studio where strategy, design, and engineering converge to create enduring business value.
                    </p>
                    <p className="text-sm md:text-base text-[#4A4740] max-w-xl mx-auto leading-relaxed">
                        If you believe in craftsmanship over shortcuts, clear communication, and taking genuine pride in your work, we would love to build together.
                    </p>
                </div>
            </section>

            {/* 2. Why Work With ZORS */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                            Culture & Principles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1 mb-2">
                            Why Work With ZORS
                        </h2>
                        <p className="text-base text-[#5C5850]">
                            A focused studio environment built for craftspeople who care about details.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {whyWorkPoints.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/80 p-7 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-mono font-semibold text-[#A88C40] bg-[#A88C40]/10 border border-[#A88C40]/25 rounded-md px-2.5 py-1">
                                        {item.number}
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-wider text-[#5C5850]">
                                        ZORS CRAFT
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#171715] mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-medium text-[#A88C40] mb-3">
                                        {item.tagline}
                                    </p>
                                    <p className="text-sm text-[#4A4740] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Open Roles */}
            <section className="py-16 bg-[#F0ECE2] border-y border-[#171715]/10">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                Opportunities
                            </span>
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1">
                                Open Roles
                            </h2>
                        </div>
                        <p className="text-sm text-[#5C5850] max-w-sm">
                            We hire talented individuals based on portfolio, problem-solving depth, and dedication to craftsmanship.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {openRoles.map((role) => (
                            <div
                                key={role.id}
                                className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#A88C40]/40 transition-colors"
                            >
                                <div className="space-y-2 max-w-2xl">
                                    <div className="flex items-center gap-2.5">
                                        <span
                                            className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium"
                                            style={{
                                                backgroundColor: `${role.accent}15`,
                                                color: role.accent,
                                                borderColor: `${role.accent}30`,
                                                borderWidth: 1,
                                            }}
                                        >
                                            {role.discipline}
                                        </span>
                                        <span className="text-xs text-[#5C5850] font-mono">
                                            {role.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#171715]">
                                        {role.title}
                                    </h3>
                                    <p className="text-sm text-[#4A4740] leading-relaxed">
                                        {role.desc}
                                    </p>
                                </div>
                                <div className="shrink-0">
                                    <a
                                        href={`mailto:careers@zorscraft.id?subject=Application for ${encodeURIComponent(role.title)}`}
                                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] text-sm font-medium transition-colors"
                                    >
                                        Apply Now <ArrowUpRight className="size-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Open Application CTA */}
            <section className="py-20">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/80 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                General Inquiries
                            </span>
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171715] mt-2 mb-3">
                                Don’t See Your Exact Role?
                            </h2>
                            <p className="text-[#5C5850] font-normal text-base md:text-lg max-w-xl">
                                We are always keen to meet curious engineers, thoughtful designers, and systems strategists. Send your portfolio and thoughts to our studio.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <a
                                href="mailto:careers@zorscraft.id?subject=Open Application"
                                className="px-6 py-3.5 rounded-full bg-[#171715] text-[#F0ECE2] font-medium hover:bg-[#A88C40] hover:text-[#171715] duration-300 inline-flex items-center gap-2 text-base shadow-sm"
                            >
                                Say Hello <ArrowUpRight className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
