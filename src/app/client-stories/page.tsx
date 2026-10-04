import ClientStoriesGrid from "@/components/sections/client-stories-grid";
import Clients from "@/components/sections/clients";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Client Stories — ZORS CRAFT",
    description: "Crafted in Partnership. From Challenges to Digital Experiences That Move Businesses Forward.",
};

export default function ClientStories() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="pt-36 md:pt-44 pb-12 md:pb-16 text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <span className="inline-block border text-xs md:text-sm py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-6 bg-[#A88C40]/10 backdrop-blur-xs">
                        Real Work. Real Partnerships.
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-[#171715] mb-3">
                        Crafted in Partnership.
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#171715]/60 max-w-3xl mx-auto mb-6 leading-snug">
                        From Challenges to Digital Experiences That Move Businesses Forward.
                    </p>
                    <p className="text-base md:text-lg text-[#171715]/75 max-w-2xl mx-auto leading-relaxed">
                        From strategy and identity to design, development, and growth — these are the stories behind what we build together.
                    </p>
                </div>
            </section>

            {/* 2. Selected Stories */}
            <section className="py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-5 mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                        Selected Stories
                    </span>
                </div>
                <ClientStoriesGrid />
            </section>

            {/* 3. Collaborations */}
            <Clients />

            {/* 4. Final CTA */}
            <section className="pt-10 md:pt-16 pb-20">
                <div className="max-w-5xl p-8 md:p-14 rounded-2xl bg-white/80 border border-[#171715]/10 shadow-xs mx-5 md:mx-auto">
                    <Link href={"/contact"} className="flex flex-col md:flex-row md:items-center justify-between group gap-6">
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
                                Start a Project <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
