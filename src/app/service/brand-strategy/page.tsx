import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Brand_strategy() {
    const FAQs = [
        {
            question: "What is brand strategy?",
            answer: "Brand strategy is the foundation of your brand — it defines your mission, audience, voice, and market position. It’s not just a logo; it’s clarity on who you are and why you matter."
        },
        {
            question: "Why do I need brand strategy before building my product?",
            answer: "Without a clear brand, your product can feel confusing or forgettable. A strong strategy ensures your messaging, design, and experience are aligned — so you launch with confidence, not guesswork."
        },
        {
            question: "What does your brand strategy process include?",
            answer: "We cover discovery, audience definition, competitive analysis, mission & values, tone of voice, messaging framework, and visual direction. You get a complete brand strategy document ready to share."
        },
        {
            question: "How long does it take to build a brand strategy?",
            answer: "Most projects take 2–4 weeks. We move fast but don’t rush — ensuring every decision is intentional and aligned with your vision."
        },
        {
            question: "Who is this service for?",
            answer: "Founders, startups, and teams launching a new product, rebranding, or preparing for investor pitches. If you’re unsure how to describe your brand — this is for you."
        },
        {
            question: "Will I get a logo or visual identity included?",
            answer: "The brand strategy includes visual direction (moodboard, color intent, typography). Logo and full design can be added as a next step — we offer that too."
        },
        {
            question: "Who owns the brand strategy after delivery?",
            answer: "You do — 100%. All documents, insights, and recommendations are yours to use, adapt, and build upon."
        },
        {
            question: "Can we work remotely?",
            answer: "Yes. We work with founders globally. All workshops, reviews, and handoffs happen online — via Google Meet, Figma, and shared docs."
        },
        {
            question: "Do you work with funded startups only?",
            answer: "No. We work with bootstrapped founders, solopreneurs, and funded teams. If you value clarity and want to build a brand that lasts, we’re here to help."
        },
        {
            question: "How is this different from a branding agency?",
            answer: "We’re not just creatives — we’re builders. We focus on strategy that works in the real world, aligns with your tech, and supports long-term growth — not just aesthetics."
        }
    ]
    return (
        <>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Branding That Speaks</span>
                <h1 className="text-4xl leading-12 my-2">
                    Clarity before code. Positioning before pixels.<br /><span className="text-neutral-400">Build a Brand That Knows What It Stands For.</span>
                </h1>
                <p className="font-normal text-xl mt-5 text-neutral-600 relative max-w-xl">
                    At ZORS, we don’t just design logos — we define your voice, vision, and value. Whether you&apos;re pre-launch or rebranding, we help you stand out with a strategy that works, not just looks good.
                </p>
                <div className="mt-10 bg-white rounded-xl grid grid-cols-5 gap-5 p-5">
                    <div className="h-52 col-span-2 duration-300 overflow-hidden rounded-xl right-0 bg-background">
                        <Image src={"/fashion-collage.png"} width={640} height={355} alt="fashion-collage" />
                    </div>
                    <div className="col-span-3 space-y-2">
                        <span className="text-blue-500 text-sm">Beyond the Logo</span>
                        <h1 className="text-2xl">
                            Why Branding Strategy Matters? <br /><span className="text-neutral-400"> Your Brand Is Your First Impression — Make It Count</span>
                        </h1>
                        <p className="font-normal text-neutral-600 relative max-w-xl">
                            A strong brand isn’t just visual — it’s clarity, trust, and positioning. Without it, even great products get ignored.
                        </p>
                        <div className="flex gap-2 mt-5 items-center">
                            <Button asChild className="px-5 group">
                                <Link href={"/publication/why-branding-strategy-matters"}>
                                    Learn more <MoveRight strokeWidth={1} className="size-5 group-hover:translate-x-1 duration-300" />
                                </Link>
                            </Button>
                            <Button asChild variant={"outline"} className="px-5 group border-neutral-200">
                                <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                                    Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">How We Work</span>
                <h1 className="text-4xl leading-12 my-2">
                    Our Branding Strategy Process<br /><span className="text-neutral-400">From discovery to delivery — a clear, collaborative journey.</span>
                </h1>
                <div className="mt-10 grid grid-cols-4 gap-4 min-h-64">
                    {[{ icon: 'solar:card-search-bold-duotone', name: 'Discovery', desc: 'We learn about your vision, audience, competition, and goals.' }, {
                        icon: 'solar:pen-new-square-bold-duotone',
                        name: 'Define',
                        desc: 'We craft your mission, value proposition, tone of voice, and brand pillars.'
                    }, {
                        icon: 'solar:settings-minimalistic-bold-duotone',
                        name: 'Develop',
                        desc: 'We build a messaging framework, naming strategy (if needed), and audience profile.'
                    }, {
                        icon: 'solar:rocket-2-bold-duotone',
                        name: 'Deliver',
                        desc: 'You get a clean, shareable brand strategy — ready for your team, investors, or designers.'
                    }].map((item, i) => <div key={i} className="bg-white flex flex-col rounded-xl p-5">
                        <Icon icon={item.icon} className="size-10 text-blue-500" />
                        <h3 className="text-xl mt-auto">
                            {item.name}
                        </h3>
                        <p className="text-sm text-neutral-600">
                            {item.desc}
                        </p>
                    </div>)}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Your Brand Toolkit</span>
                <h1 className="text-4xl leading-12 my-2">
                    What’s Included<br /><span className="text-neutral-400">Everything you need to communicate clearly and consistently.</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    {["Brand positioning & mission statement", "Target audience persona", "Competitive landscape analysis", "Tone of voice guide", "Messaging framework", "Naming strategy", "Visual direction", "Final Brand Strategy PDF"].map((item, i) => <div key={i} className="bg-white flex items-center py-2 px-5 rounded-xl">
                        <Icon icon={"solar:check-read-line-duotone"} className="text-3xl text-green-500 mr-4" />  {item}
                    </div>)}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Proof in Production</span>
                <h1 className="text-4xl leading-12 my-2">
                    Real Work. Real Impact.<br /><span className="text-neutral-400">We don’t just pitch. We build — from MVPs to market-ready products</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    <div className="h-100 bg-white rounded-xl group p-5">
                        <div className="h-70 mb-5 duration-300 overflow-hidden rounded-xl right-0 bg-background">
                            <Image src={"/case-studies/how-we-built-a-digital-guardian-from-scratch/thumbnail.png"} width={512} height={400} alt="wireframe" className="group-hover:scale-125 duration-300" />
                        </div>
                        <Link className="hover:text-orange-600 duration-300" href={"/case-study/how-we-built-a-digital-guardian-from-scratch"}>
                            <h1 className="text-2xl mt-auto">
                                How we built a digital guardian from scratch — Case Study
                            </h1>
                        </Link>
                    </div>
                    <div className="h-100 bg-white rounded-xl text-center flex flex-col p-5 items-center justify-center">
                        <div className="grid grid-cols-2 mt-auto w-32 h-15 mb-2 gap-2">
                            <div className="rounded-lg flex items-center justify-center bg-[var(--unoversion)]">
                                <Image src={"/unoversion.png"} width={48} height={48} alt="unoversion" className="object-cover" />
                            </div>
                            <div className="rounded-lg flex items-center justify-center bg-blue-600">
                                <Image src={"/kartikey.png"} width={48} height={48} alt="kartikey" className="object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 w-48 h-15 gap-2">
                            <div className="rounded-lg flex items-center justify-center bg-[var(--hyperwafer)]">
                                <Image src={"/hyperwafer.png"} width={48} height={48} alt="hyperwafer" className="object-cover" />
                            </div>
                            <div className="rounded-lg flex items-center justify-center bg-[var(--mahalik)]">
                                <Image src={"/mahalik.png"} width={48} height={48} alt="mahalik" className="object-cover" />
                            </div>
                            <div className="rounded-lg flex items-center justify-center bg-neutral-800">
                                <Image src={"/scihawk.png"} width={48} height={48} alt="mahalik" className="object-cover" />
                            </div>
                        </div>
                        <h1 className="text-xl mt-auto">
                            Businesses who trusted us.<br /><span className="text-neutral-400"> From bootstrapped startups to funded scale-ups — we’re the quiet force behind smart products.</span>
                        </h1>
                        <div className="flex gap-2 mt-5 items-center">
                            <Button asChild className="px-5 group">
                                <Link href={"/projects"}>
                                    View projects<MoveRight strokeWidth={1} className="size-5 group-hover:translate-x-1 duration-300" />
                                </Link>
                            </Button>
                            <Button asChild variant={"outline"} className="px-5 group border-neutral-200">
                                <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                                    Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Questions? We’ve Got Answers</span>
                <h1 className="text-4xl leading-12 my-2">
                    Frequently Asked Questions<br /><span className="text-neutral-400"> Everything you need to know about our brand strategy process, deliverables, and how we work.</span>
                </h1>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl mt-10 grid grid-cols-2 gap-5 text-left">
                    {FAQs.map((item) => (
                        <div
                            className="group"
                            key={item.question}>
                            <AccordionItem
                                value={item.question}
                                className="bg-white peer rounded-xl border-none px-7 py-1">
                                <AccordionTrigger className="cursor-pointer hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                        </div>
                    ))}
                </Accordion>
            </section>
            <section className="max-w-5xl mx-auto px-5 py-20 font-medium overflow-hidden relative text-center bg-white rounded-xl">
                <Image src={"/hands.png"} width={512} height={400} alt="hands" className="absolute rotate-90 top-30 -left-30" />
                <div className="max-w-xl mx-auto">
                    <span className="text-blue-500 text-sm">Ready to Build Your Brand?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Define What You Stand For
                    </h1>
                    <p className="text-neutral-400">No more guessing. Just clarity, confidence, and a brand that speaks.</p>
                </div>
                <div className="flex w-full gap-2 mt-15 items-center justify-center">
                    <Button asChild className="px-5 group">
                        <Link href={"/service/brand-strategy"}>
                            Contact us <MoveRight strokeWidth={1.5} className="size-5 group-hover:translate-x-1 duration-300" />
                        </Link>
                    </Button>
                    <Button asChild variant={"outline"} className="px-5 group border-neutral-200">
                        <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                            Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    )
}