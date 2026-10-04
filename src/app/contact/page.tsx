import ProjectBriefForm from "@/components/forms/project-brief-form";
import { ArrowUpRight, Calendar, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Start a Project — ZORS CRAFT",
    description: "Tell us what you’re building, changing, or trying to solve. Whether you have a clear brief or just the beginning of an idea, we will help figure out what comes next.",
};

export default function Contact() {
    return (
        <section className="pt-36 md:pt-44 pb-20">
            {/* 1. Hero Section */}
            <div className="max-w-4xl mx-auto px-5 text-center mb-16">
                <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                    Start a Project
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] mb-4">
                    Let’s Craft It Together.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#171715]/60 max-w-2xl mx-auto mb-4 leading-snug">
                    Tell us what you’re building, changing, or trying to solve.
                </p>
                <p className="text-sm md:text-base text-[#171715]/75 max-w-xl mx-auto leading-relaxed">
                    Whether you have a clear brief or just the beginning of an idea, tell us where you are. We’ll help figure out what comes next.
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
                    {/* Expected Response Time Card */}
                    <div className="bg-[#A88C40]/10 border border-[#A88C40]/30 p-5 rounded-2xl flex items-center gap-3.5">
                        <div className="size-10 rounded-full bg-white flex items-center justify-center text-[#A88C40] shrink-0 border border-[#A88C40]/20 shadow-2xs">
                            <Clock className="size-5" />
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#A88C40] font-semibold block">
                                Response Commitment
                            </span>
                            <p className="text-sm font-semibold text-[#171715]">
                                We usually reply within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Via Email Card */}
                    <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                            <Mail className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#171715]/50 font-mono font-medium">
                                VIA EMAIL
                            </span>
                        </div>
                        <a
                            href="mailto:hello@zorscraft.id"
                            className="text-xl md:text-2xl font-semibold text-[#171715] hover:text-[#586B6D] transition-colors block"
                        >
                            hello@zorscraft.id
                        </a>
                        <p className="text-xs md:text-sm text-[#171715]/60 mt-2 leading-relaxed">
                            For general inquiries, partnerships, and everything in between.
                        </p>
                    </div>

                    {/* Digital Studio Card */}
                    <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#171715]/50 font-mono font-medium">
                                DIGITAL STUDIO
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#171715] mb-1">
                            ZORS CRAFT
                        </h3>
                        <p className="text-xs md:text-sm text-[#171715]/70 leading-relaxed">
                            Based in Jakarta, Indonesia — working with ambitious businesses and teams wherever good ideas take us.
                        </p>
                    </div>

                    {/* Discovery Call Card */}
                    <div className="bg-[#171715] text-[#F0ECE2] p-6 md:p-8 rounded-2xl border border-[#171715] shadow-xs space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-4 text-[#586B6D]" />
                            <span className="text-xs uppercase tracking-wider text-[#F0ECE2]/60 font-mono font-medium">
                                DISCOVERY CALL
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#F0ECE2] mb-1">
                                Not sure where to start?
                            </h3>
                            <p className="text-sm text-[#F0ECE2]/80 leading-relaxed">
                                A short conversation is often enough to find the right direction.
                            </p>
                        </div>
                        <p className="text-xs font-mono text-[#F0ECE2]/60">
                            15 minutes. No hard sell. Just tell us what you’re working on.
                        </p>
                        <div className="pt-2">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://calendar.app.google/D5zNA5sETNtreLvL6"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#F0ECE2] text-[#171715] font-medium hover:bg-[#A88C40] hover:text-[#171715] text-sm transition-colors duration-200"
                            >
                                Book a Discovery Call <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
