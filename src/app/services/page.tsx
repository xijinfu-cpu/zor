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
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services — ZORS",
    description: "Explore our full-spectrum digital services: Strategy, Branding, Design, Development, Optimization, and Support.",
};

export default function Services() {
    const workflowSteps = [
        {
            icon: 'solar:compass-bold-duotone',
            step: '01',
            name: 'Discover',
            desc: 'Understand the business, audience, core objectives, and project requirements.'
        },
        {
            icon: 'solar:target-bold-duotone',
            step: '02',
            name: 'Define',
            desc: 'Determine strategy, project scope, technical architecture, and creative direction.'
        },
        {
            icon: 'solar:palette-bold-duotone',
            step: '03',
            name: 'Design',
            desc: 'Craft intuitive wireframes, brand identity, UI/UX systems, and interactive prototypes.'
        },
        {
            icon: 'solar:code-square-bold-duotone',
            step: '04',
            name: 'Develop',
            desc: 'Engineer clean, modular code, integrate essential platforms, and conduct thorough tests.'
        },
        {
            icon: 'solar:rocket-bold-duotone',
            step: '05',
            name: 'Launch',
            desc: 'Execute seamless deployment, QA verification, DNS setup, and complete client handover.'
        },
        {
            icon: 'solar:chart-2-bold-duotone',
            step: '06',
            name: 'Grow',
            desc: 'Provide ongoing support, performance monitoring, continuous optimization, and updates.'
        },
    ];

    const FAQs = [
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
    ];

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

            {/* 10. How We Work: Discover → Define → Design → Develop → Launch → Grow */}
            <section className="py-16 md:py-24 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl bg-white/60">
                        How We Work
                    </span>
                    <h2 className="md:text-4xl md:leading-12 text-2xl my-3 font-semibold">
                        Our Process, <br />
                        <span className="text-neutral-400 font-normal">
                            Discover → Define → Design → Develop → Launch → Grow.
                        </span>
                    </h2>
                    <p className="md:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
                        A structured six-stage methodology designed for momentum, clarity, and predictable outcomes.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative max-w-6xl mx-auto">
                    {workflowSteps.map((item, i) => (
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
                        Questions & Answers
                    </span>
                    <h2 className="md:text-4xl md:leading-12 text-2xl my-3 font-semibold text-[#171715]">
                        Frequently Asked Questions<br />
                        <span className="text-[#171715]/50 font-normal">
                            Everything you need to know about working with ZORS.
                        </span>
                    </h2>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-6xl mx-auto rounded-2xl mt-12 grid md:grid-cols-2 gap-4 text-left"
                >
                    {FAQs.map((item) => (
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

            {/* 12. Final CTA: Let’s Craft It Together / Start a Project */}
            <section className="pt-10 md:pt-16 pb-16">
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
