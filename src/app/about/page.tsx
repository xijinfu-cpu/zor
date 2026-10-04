import { ArrowUpRight, Compass, ShieldCheck, HeartHandshake, Eye, Sparkles, Users2, Lightbulb, Zap, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us — ZORS CRAFT",
    description: "We Craft With Purpose — And Build With What Comes Next in Mind. Strategy before assumptions. Purpose before decoration. Quality before shortcuts.",
};

const values = [
    {
        number: "01",
        title: "Zero Compromise",
        desc: "Quality is never an afterthought.",
        icon: ShieldCheck,
    },
    {
        number: "02",
        title: "Ownership",
        desc: "We treat every project as if it were our own.",
        icon: Compass,
    },
    {
        number: "03",
        title: "Raw Honesty",
        desc: "Clear communication, even when the answer is difficult.",
        icon: Eye,
    },
    {
        number: "04",
        title: "Show, Don’t Tell",
        desc: "The work should speak louder than the promise.",
        icon: Sparkles,
    },
    {
        number: "05",
        title: "Craft Over Speed",
        desc: "We move with purpose — not carelessness.",
        icon: Zap,
    },
    {
        number: "06",
        title: "Roots in Relationship",
        desc: "Clients are partners, not transactions.",
        icon: HeartHandshake,
    },
    {
        number: "07",
        title: "Always Learning",
        desc: "Digital changes. We keep moving with it.",
        icon: Lightbulb,
    },
    {
        number: "08",
        title: "Fearless Ideas",
        desc: "Meaningful work requires the courage to think differently.",
        icon: Users2,
    },
    {
        number: "09",
        title: "Time Is Sacred",
        desc: "We respect the time clients trust us with.",
        icon: Clock,
    },
];

const approaches = [
    {
        number: "01",
        step: "Understand",
        desc: "We learn the business, audience, challenges, and goals before proposing a solution.",
    },
    {
        number: "02",
        step: "Craft",
        desc: "Strategy, identity, structure, and experience are shaped around what actually matters.",
    },
    {
        number: "03",
        step: "Build",
        desc: "We turn the direction into reliable digital products with attention to every layer.",
    },
    {
        number: "04",
        step: "Grow",
        desc: "Launch is not the end. We improve, support, and evolve what we build.",
    },
];

export default function About() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="pt-36 md:pt-44 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                        About Us
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] leading-tight mb-4">
                        We Craft With Purpose — <br className="hidden sm:inline" />
                        And Build With What Comes Next in Mind.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-normal text-[#171715]/60 max-w-2xl mx-auto mb-6">
                        Strategy before assumptions. Purpose before decoration. Quality before shortcuts.
                    </p>
                    <div className="text-sm md:text-base text-[#171715]/75 max-w-2xl mx-auto leading-relaxed space-y-3">
                        <p>
                            ZORS CRAFT is a digital agency built around one simple belief: meaningful digital work starts with understanding.
                        </p>
                        <p className="text-[#171715]/60">
                            We bring strategy, branding, design, development, and continuous improvement together to create digital experiences that help businesses communicate clearly, build trust, and grow.
                        </p>
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
                                Perspective
                            </span>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight mt-1">
                                What We Believe
                            </h2>
                        </div>

                        <div className="bg-[#171715] text-[#F0ECE2] p-8 md:p-12 rounded-2xl flex-1 flex flex-col justify-between border border-[#171715] shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A88C40]/15 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10 my-auto">
                                <span className="text-xs uppercase tracking-wider font-mono text-[#A88C40] block mb-4">
                                    Core Philosophy
                                </span>
                                <p className="text-2xl md:text-3xl font-serif italic text-[#F0ECE2] leading-snug">
                                    “Good digital work is not about doing more. It is about understanding what matters — and crafting it well.”
                                </p>
                            </div>
                            <div className="pt-8 mt-8 border-t border-[#F0ECE2]/15 relative z-10">
                                <span className="text-xs uppercase tracking-wider font-mono text-[#A88C40] block mb-1">
                                    Our Mission
                                </span>
                                <p className="text-sm md:text-base text-[#F0ECE2]/80 font-normal leading-relaxed">
                                    To help businesses build stronger digital foundations through thoughtful strategy, purposeful design, reliable technology, and long-term partnership.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: The ZORS Story */}
                    <div className="space-y-6 flex flex-col">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                Origin & Path
                            </span>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight mt-1">
                                The ZORS Story
                            </h2>
                        </div>

                        <div className="space-y-4 flex-1 flex flex-col justify-between">
                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    The Beginning
                                </span>
                                <p className="text-base text-[#171715] leading-relaxed font-medium">
                                    ZORS CRAFT started from a belief that businesses deserve more than generic digital solutions.
                                </p>
                                <p className="text-sm text-[#171715]/60 leading-relaxed mt-1.5">
                                    They deserve work that understands where they are, where they want to go, and what needs to be built to get there.
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    01 · Understand Before We Build
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    We begin with the business — not the tool. Every decision starts from understanding the problem, audience, goals, and context.
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    02 · Craft Over Shortcuts
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    We believe details matter. Good work takes intention, clear thinking, and care — not templates applied without purpose.
                                </p>
                            </div>

                            <div className="bg-white/80 p-6 md:p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-1.5">
                                    03 · Built for What Comes Next
                                </span>
                                <p className="text-sm text-[#171715]/75 leading-relaxed">
                                    What we create should not only work today. It should give the business room to adapt, improve, and grow.
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
                            The Team Behind ZORS
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#171715] tracking-tight leading-tight">
                            Built by designers, developers, and thinkers who care about details.
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-[#A88C40] mt-3">
                            A small team. A focused process. Meaningful outcomes.
                        </p>
                        <p className="text-[#5C5850] text-base md:text-lg mt-4 leading-relaxed">
                            We are an independent digital studio founded on the belief that meaningful work doesn't require agency bloat.
                            We stay intentionally focused so every project receives direct senior attention, honest collaboration,
                            and obsessive attention to craft.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/80 p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                            <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider block mb-3">
                                01 / SENIOR FOCUS
                            </span>
                            <h3 className="text-xl font-semibold text-[#171715] mb-2">
                                Direct Collaboration
                            </h3>
                            <p className="text-sm text-[#5C5850] leading-relaxed">
                                You work directly with the practitioners who think, design, and code your product — never junior handoffs or layers of account managers.
                            </p>
                        </div>

                        <div className="bg-white/80 p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                            <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider block mb-3">
                                02 / UNIFIED CRAFT
                            </span>
                            <h3 className="text-xl font-semibold text-[#171715] mb-2">
                                Cross-Discipline Rigor
                            </h3>
                            <p className="text-sm text-[#5C5850] leading-relaxed">
                                Designers who understand code architecture. Engineers who obsess over typography and micro-interactions. Zero friction between vision and execution.
                            </p>
                        </div>

                        <div className="bg-white/80 p-7 rounded-2xl border border-[#171715]/10 shadow-xs">
                            <span className="font-mono text-xs text-[#A88C40] font-semibold tracking-wider block mb-3">
                                03 / ACCOUNTABILITY
                            </span>
                            <h3 className="text-xl font-semibold text-[#171715] mb-2">
                                Genuine Ownership
                            </h3>
                            <p className="text-sm text-[#5C5850] leading-relaxed">
                                We treat every project as our own benchmark. We take pride in what we launch, and we support what we build long after the initial handover.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Values (9 values in 3x3 grid) */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                            Principles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1 mb-2">
                            Our Values
                        </h2>
                        <p className="text-base text-[#171715]/60">
                            The principles behind how we think, work, and build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {values.map((val, idx) => {
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

            {/* 4. Our Approach */}
            <section className="py-16 bg-[#F0ECE2] border-y border-[#171715]/10">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                            Workflow
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#171715] tracking-tight mt-1 mb-2">
                            Our Approach
                        </h2>
                        <p className="text-base md:text-lg text-[#171715]/60 font-medium">
                            Understand. Craft. Build. Grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {approaches.map((appr, idx) => (
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

            {/* 5. Commitment & Why ZORS Exists */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Commitment */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-2">
                                Accountability
                            </span>
                            <h3 className="text-2xl font-semibold text-[#171715] tracking-tight mb-4">
                                Our Commitment
                            </h3>
                            <div className="space-y-3 text-sm md:text-base text-[#171715]/75 leading-relaxed">
                                <p>
                                    We believe good partnerships are built on clarity.
                                </p>
                                <p>
                                    You should know what we are building, why we are building it, where the project stands, and what comes next.
                                </p>
                                <p>
                                    We communicate clearly, respect agreed timelines and scope, take responsibility for our work, and raise problems early — not after they become surprises.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#171715]/10">
                            <p className="text-xs font-mono text-[#A88C40] font-medium tracking-wide">
                                Clear work. Clear communication. Shared responsibility.
                            </p>
                        </div>
                    </div>

                    {/* Why ZORS Exists */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs flex flex-col justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-2">
                                Purpose
                            </span>
                            <h3 className="text-2xl font-semibold text-[#171715] tracking-tight mb-4">
                                Why ZORS Exists
                            </h3>
                            <div className="space-y-3 text-sm md:text-base text-[#171715]/75 leading-relaxed">
                                <p>
                                    ZORS CRAFT was created for businesses that care about how they show up in the digital world.
                                </p>
                                <p>
                                    Too often, strategy, branding, design, and development are treated as separate pieces. We believe the strongest digital experiences happen when those layers work together.
                                </p>
                                <p>
                                    That is why ZORS exists: to bring thinking and execution into one process — crafting digital work that is purposeful, useful, and built to last.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#171715]/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-[#171715] font-semibold uppercase tracking-wider">
                                Built Different. Meant to Last.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <section className="pt-4 pb-20">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/90 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <Link
                        href={"/contact"}
                        className="flex flex-col md:flex-row md:items-center justify-between group gap-6"
                    >
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                Have something in mind?
                            </span>
                            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#171715] mt-2 mb-3">
                                Let’s Craft It Together.
                            </h2>
                            <p className="text-[#171715]/60 font-normal text-base md:text-lg max-w-xl">
                                Tell us about your goals, timeline, and vision. We will get back within 24 hours with clear next steps.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 mt-4 md:mt-0">
                            <span className="px-6 py-3.5 rounded-full bg-[#171715] text-[#F0ECE2] font-medium group-hover:bg-[#A88C40] group-hover:text-[#171715] duration-300 flex items-center gap-2 text-base shadow-sm">
                                Start a Project{" "}
                                <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
