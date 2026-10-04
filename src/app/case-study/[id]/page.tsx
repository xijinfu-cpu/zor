import Stories from "@/data/client-stories.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Quote } from "lucide-react";
import { Safari } from "@/components/magicui/safari";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Compare } from "@/components/ui/compare";
import ClientStoryCard from "@/components/ui/clientstorycard";
import { Metadata } from "next";

export async function generateStaticParams() {
    return Stories.map((s) => ({ id: String(s.id) }));
}

type CaseStudyParams = { id: string };

export async function generateMetadata({
    params,
}: {
    params: Promise<CaseStudyParams>;
}): Promise<Metadata> {
    const { id } = await params;
    const currentStory = Stories.find((v) => v.id === Number(id));
    return {
        title: currentStory
            ? `${currentStory.company} — Case Study | ZORS CRAFT`
            : "Case Study | ZORS CRAFT",
        description: currentStory?.atAGlance || "Case study by ZORS CRAFT.",
    };
}

const serviceDescriptions: Record<string, string> = {
    Strategy: "Clarified the audience, positioning, priorities, and content structure.",
    Branding: "Refined the visual language and built a consistent identity system.",
    Design: "Created an intuitive experience around clear hierarchy and user journeys.",
    Development: "Turned the design into a responsive, reliable, and maintainable digital product.",
    Optimization: "Enhanced performance, SEO metadata, and reduced conversion friction.",
    Support: "Delivered documentation, team handover, and proactive platform guidance.",
};

const serviceAnchorMap: Record<string, string> = {
    Strategy: "/services/#strategy",
    Branding: "/services/#branding",
    Design: "/services/#design",
    Development: "/services/#development",
    Optimization: "/services/#optimization",
    Support: "/services/#support",
};

export default async function Page({
    params,
}: {
    params: Promise<CaseStudyParams>;
}) {
    const { id } = await params;
    const currentStory = Stories.find((v) => v.id === Number(id));

    if (!currentStory) {
        notFound();
    }

    const relatedStories = Stories.filter((s) => s.id !== currentStory.id).slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-5 pt-36 md:pt-44 pb-20">
            {/* Top Grid: Left Sticky Details + Right Content Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* LEFT COLUMN: Hero Title & Sticky Project Details Card */}
                <div className="lg:col-span-4">
                    <div className="mb-8">
                        <span className="inline-block border text-xs py-1 px-3.5 border-[#A88C40]/30 rounded-full font-mono text-[#A88C40] mb-3 bg-[#A88C40]/10 backdrop-blur-xs">
                            {currentStory.company}
                        </span>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#171715] leading-snug">
                            {currentStory.title}
                        </h1>
                    </div>

                    <div className="bg-white/80 p-6 md:p-8 lg:sticky lg:top-28 space-y-5 rounded-2xl border border-[#171715]/10 shadow-xs">
                        <h3 className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium">
                            Project Details
                        </h3>

                        <div>
                            <p className="text-xs text-[#171715]/50 font-mono">Client</p>
                            <p className="text-sm font-medium text-[#171715] mt-0.5">
                                {currentStory.company}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-[#171715]/50 font-mono">Industry</p>
                            <p className="text-sm font-medium text-[#171715] mt-0.5">
                                {currentStory.industry}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-[#171715]/50 font-mono mb-1.5">Services</p>
                            <div className="flex flex-wrap gap-1.5">
                                {currentStory.services.map((service, i) => (
                                    <Link
                                        key={i}
                                        href={serviceAnchorMap[service] || "/services"}
                                        className="text-xs bg-[#F0ECE2]/70 hover:bg-[#A88C40]/15 hover:text-[#A88C40] border border-[#171715]/10 px-2.5 py-1 rounded-md transition-colors"
                                    >
                                        {service}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-[#171715]/50 font-mono">Timeline</p>
                            <p className="text-sm font-medium text-[#171715] mt-0.5">
                                {currentStory.timeline}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-[#171715]/50 font-mono">Year</p>
                            <p className="text-sm font-medium text-[#171715] mt-0.5">
                                {currentStory.year || "2025"}
                            </p>
                        </div>

                        {currentStory.platform && (
                            <div>
                                <p className="text-xs text-[#171715]/50 font-mono">Platform</p>
                                <p className="text-sm font-medium text-[#171715] mt-0.5">
                                    {currentStory.platform}
                                </p>
                            </div>
                        )}

                        {currentStory.website && (
                            <div className="pt-2 border-t border-[#171715]/10">
                                <Link
                                    href={currentStory.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171715] hover:bg-[#A88C40] hover:text-[#171715] bg-[#F0ECE2] border border-[#171715]/15 px-3 py-2 rounded-lg transition-colors w-full justify-center"
                                >
                                    Visit Website <ArrowUpRight className="size-3.5" />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: Case Study Narrative & Outcomes */}
                <div className="lg:col-span-8">
                    {/* 1. At a Glance */}
                    {currentStory.atAGlance && (
                        <div className="bg-white/80 p-6 md:p-8 rounded-2xl border border-[#171715]/10 shadow-xs mb-8">
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium block mb-2">
                                At a Glance
                            </span>
                            <p className="text-base md:text-lg text-[#171715] leading-relaxed font-normal">
                                {currentStory.atAGlance}
                            </p>
                        </div>
                    )}

                    {/* 2. Hero Project Visual */}
                    <div className="bg-white/80 rounded-2xl p-2 border border-[#171715]/10 shadow-xs mb-10 overflow-hidden">
                        <div className="bg-[#F0ECE2]/60 rounded-xl p-4 md:p-8 flex items-center justify-center min-h-[340px] md:min-h-[460px]">
                            <Safari
                                url={currentStory.domain || `${currentStory.company.toLowerCase()}.com`}
                                className="size-full shadow-md"
                                mode="simple"
                                imageSrc={currentStory.hero || currentStory.image}
                            />
                        </div>
                    </div>

                    {/* 3. The Challenge */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs mb-10">
                        <span className="inline-block text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3 py-1 bg-[#A88C40]/10 rounded-full border border-[#A88C40]/25 mb-4">
                            The Challenge
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug">
                            {currentStory.challenge.headline || "The business had grown. Its digital presence hadn’t."}
                        </h2>
                        <p className="text-base md:text-lg text-[#171715]/80 font-normal leading-relaxed mt-4">
                            {currentStory.challenge.summary}
                        </p>
                        <p className="text-sm md:text-base text-[#171715]/60 font-normal leading-relaxed mt-3">
                            {currentStory.challenge.narrative}
                        </p>
                    </div>

                    {/* 4. Client Testimonial (Real quotes only) */}
                    {currentStory.quote && (
                        <div className="relative bg-[#171715] text-[#F0ECE2] p-8 md:p-12 rounded-2xl mb-10 overflow-hidden border border-[#171715] shadow-sm">
                            <Quote className="absolute -top-4 -left-4 size-28 text-[#F0ECE2]/5 pointer-events-none" />
                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl font-serif italic font-normal text-[#F0ECE2] leading-relaxed">
                                    “{currentStory.quote}”
                                </p>
                                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#F0ECE2]/15 pt-5 gap-2">
                                    <div>
                                        <p className="font-semibold text-white text-base">
                                            {currentStory.clientName}
                                        </p>
                                        <p className="text-xs text-[#F0ECE2]/60 font-mono">
                                            {currentStory.clientRole}, {currentStory.company}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono text-[#A88C40] uppercase tracking-wider">
                                        Verified Partnership
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 5. Our Approach */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs mb-10">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium block mb-2">
                            Our Approach
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug mb-2">
                            Understand First. Build Second.
                        </h2>
                        <p className="text-[#171715]/60 text-sm md:text-base mb-6 leading-relaxed">
                            Every engagement follows a structured discipline to eliminate guesswork and align every asset to real business outcomes.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-2">
                                    01 Discover
                                </span>
                                <h4 className="text-sm font-semibold text-[#171715] mb-1">
                                    Understand the Foundation
                                </h4>
                                <p className="text-xs text-[#171715]/70 leading-relaxed">
                                    Understand the business, target users, market friction, and tangible commercial goals.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-2">
                                    02 Define
                                </span>
                                <h4 className="text-sm font-semibold text-[#171715] mb-1">
                                    Set the Direction
                                </h4>
                                <p className="text-xs text-[#171715]/70 leading-relaxed">
                                    Turn insights into priorities, brand positioning, architecture, and a clear roadmap.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-2">
                                    03 Craft
                                </span>
                                <h4 className="text-sm font-semibold text-[#171715] mb-1">
                                    Design with Purpose
                                </h4>
                                <p className="text-xs text-[#171715]/70 leading-relaxed">
                                    Design the identity, interfaces, and user journeys crafted around real customer needs.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40">
                                <span className="text-xs font-mono font-semibold text-[#A88C40] block mb-2">
                                    04 Build
                                </span>
                                <h4 className="text-sm font-semibold text-[#171715] mb-1">
                                    Engineer to Last
                                </h4>
                                <p className="text-xs text-[#171715]/70 leading-relaxed">
                                    Develop, test, launch, and prepare the digital experience to sustainably grow.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. The Solution */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs mb-10">
                        <span className="inline-block text-xs uppercase tracking-wider text-[#2D8065] font-mono font-medium px-3 py-1 bg-[#2D8065]/10 rounded-full border border-[#2D8065]/25 mb-4">
                            The Solution
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug">
                            One Direction. Every Layer Working Together.
                        </h2>
                        <p className="text-base md:text-lg text-[#171715]/80 font-normal leading-relaxed mt-4">
                            We brought strategy, brand, design, and technology into one clear system. Rather than treating each deliverable separately, every decision was made to support the same business goal and create a consistent experience from first impression to final interaction.
                        </p>
                        <p className="text-sm md:text-base text-[#171715]/60 font-normal leading-relaxed mt-3 mb-6">
                            {currentStory.solution.narrative}
                        </p>

                        {/* Services Involved Breakdown */}
                        <div className="border-t border-[#171715]/10 pt-6">
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono block mb-4">
                                Services Delivered
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentStory.services.map((service, i) => (
                                    <div key={i} className="p-4 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <h4 className="text-sm font-semibold text-[#171715]">{service}</h4>
                                            <Link
                                                href={serviceAnchorMap[service] || "/services"}
                                                className="text-xs text-[#A88C40] hover:text-[#171715] flex items-center gap-0.5 font-mono"
                                            >
                                                Explore <ArrowUpRight className="size-3" />
                                            </Link>
                                        </div>
                                        <p className="text-xs text-[#171715]/70 leading-relaxed">
                                            {serviceDescriptions[service] ||
                                                "Delivered with precision and aligned with long-term business goals."}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 7. Process / Visual Journey */}
                    {currentStory.wireframes && currentStory.wireframes.length > 0 && (
                        <div className="bg-white/80 rounded-2xl p-2 border border-[#171715]/10 shadow-xs mb-10 overflow-hidden">
                            <div className="bg-[#F0ECE2]/60 rounded-xl py-8 flex items-center justify-center">
                                <InfiniteSlider speed={25} gap={24} speedOnHover={10}>
                                    {currentStory.wireframes.map((wr, i) => (
                                        <Image
                                            key={i}
                                            src={wr}
                                            width={360}
                                            height={280}
                                            alt={`Wireframe ${i + 1}`}
                                            className="border border-[#171715]/10 rounded-xl bg-white shadow-xs object-cover"
                                        />
                                    ))}
                                </InfiniteSlider>
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-mono font-medium text-[#171715]">
                                        Process & Visual Journey
                                    </span>
                                    <p className="text-xs text-[#171715]/60">
                                        Early Direction → Wireframe & Structure → Final Product
                                    </p>
                                </div>
                                <span className="text-xs bg-[#171715] text-[#F0ECE2] px-3 py-1 rounded-full font-mono">
                                    Wireframes
                                </span>
                            </div>
                        </div>
                    )}

                    {currentStory.compare && currentStory.compare.length >= 2 && (
                        <div className="bg-white/80 rounded-2xl p-2 border border-[#171715]/10 shadow-xs mb-10 overflow-hidden">
                            <div className="bg-[#F0ECE2]/60 rounded-xl p-4 md:p-8 flex items-center justify-center min-h-[320px] md:min-h-[420px]">
                                <Compare
                                    firstImage={currentStory.compare[0]}
                                    secondImage={currentStory.compare[1]}
                                    firstImageClassName="rounded-xl object-contain"
                                    secondImageClassname="rounded-xl object-contain"
                                    className="size-full"
                                    slideMode="hover"
                                    showHandlebar={false}
                                    autoplay={true}
                                />
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-mono font-medium text-[#171715]">
                                        Transformation
                                    </span>
                                    <p className="text-xs text-[#171715]/60">
                                        Hover or drag to compare early architecture with finished product
                                    </p>
                                </div>
                                <span className="text-xs bg-[#171715] text-[#F0ECE2] px-3 py-1 rounded-full font-mono">
                                    Wireframe to Product
                                </span>
                            </div>
                        </div>
                    )}

                    {/* 8. The Outcome & Metrics */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs mb-10">
                        <span className="inline-block text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium px-3 py-1 bg-[#A88C40]/10 rounded-full border border-[#A88C40]/25 mb-4">
                            The Outcome
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug">
                            Built to Work Today — Ready for What Comes Next.
                        </h2>
                        <p className="text-base md:text-lg text-[#171715]/80 font-normal leading-relaxed mt-4">
                            The result is a clearer, more cohesive digital experience that represents the business more accurately, gives users a better journey, and provides the client with a stronger foundation for future growth.
                        </p>
                        <p className="text-sm md:text-base text-[#171715]/60 font-normal leading-relaxed mt-3 mb-8">
                            {currentStory.outcome.narrative}
                        </p>

                        {currentStory.metrics && currentStory.metrics.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#171715]/10">
                                {currentStory.metrics.map((metric, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40 text-center"
                                    >
                                        <span className="text-2xl md:text-3xl font-bold text-[#171715] block tracking-tight">
                                            {metric.value}
                                        </span>
                                        <span className="text-xs text-[#171715]/60 font-mono mt-1 block">
                                            {metric.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 9. What We Delivered */}
                    <div className="bg-white/80 p-8 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs mb-10">
                        <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium block mb-2">
                            Tangible Output
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug mb-6">
                            What We Delivered
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {currentStory.deliverables.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-[#171715]/10 bg-[#F0ECE2]/40 flex items-center gap-3"
                                >
                                    <span className="text-xs font-mono font-semibold text-[#A88C40] bg-[#A88C40]/10 border border-[#A88C40]/25 rounded-md size-7 flex items-center justify-center shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm font-medium text-[#171715]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 10. More Client Stories */}
            <section className="pt-20 pb-12 border-t border-[#171715]/10 mt-10">
                <div className="mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                        Continue Exploring
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] tracking-tight mt-1">
                        More Client Stories
                    </h2>
                    <p className="text-[#171715]/60 text-sm md:text-base mt-1">
                        Different Challenges. Thoughtful Solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedStories.map((story) => (
                        <ClientStoryCard
                            key={story.id}
                            company={story.company}
                            industry={story.industry}
                            services={story.services}
                            title={story.title}
                            bgimg={story.image}
                            result={(story as { result?: string }).result}
                            link={`/case-study/${story.id}`}
                        />
                    ))}
                </div>
            </section>

            {/* 11. Final Case Study CTA */}
            <section className="pt-8 pb-10">
                <div className="p-8 md:p-14 rounded-2xl bg-white/80 border border-[#171715]/10 shadow-xs">
                    <Link
                        href={"/contact"}
                        className="flex flex-col md:flex-row md:items-center justify-between group gap-6"
                    >
                        <div>
                            <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                                Have a challenge of your own?
                            </span>
                            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#171715] mt-2 mb-3">
                                Let’s Craft What Comes Next.
                            </h2>
                            <p className="text-[#171715]/60 font-normal text-base md:text-lg max-w-xl">
                                Tell us about your business goals and where you want to go. We will map out a clear, actionable plan together.
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
        </div>
    );
}