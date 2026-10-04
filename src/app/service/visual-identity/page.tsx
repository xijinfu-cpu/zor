import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Brand_strategy() {
    const FAQs = [
        {
            question: "Do you design logos from scratch?",
            answer: "Yes. We create original logos based on your brand’s values, audience, and market — no templates or stock."
        },
        {
            question: "Can I use the logo for print and web?",
            answer: "Yes. We deliver all formats: SVG, PNG, PDF, AI — optimized for both digital and print use."
        },
        {
            question: "What if I don’t like the initial concepts?",
            answer: "We include 2–3 directions and 2 revision rounds. Most clients finalize by Round 2."
        },
        {
            question: "Do you provide Figma/Sketch files?",
            answer: "Yes. You get full access to the design file with layers, styles, and components."
        },
        {
            question: "Can you match an existing brand?",
            answer: "Yes. We can refine or systematize an existing look into a professional visual identity."
        }
    ]
    return (
        <>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Visual Identity</span>
                <h1 className="text-4xl leading-12 my-2">
                    Design a Look That Lasts<br /><span className="text-neutral-400">Your Visuals Are Your First Impression</span>
                </h1>
                <p className="font-normal text-xl mt-5 text-neutral-600 relative max-w-2xl">
                    We don’t just pick colors — we build a cohesive visual language. Logo, typography, spacing, and usage guidelines — all designed to make your brand instantly recognizable and consistently professional.
                </p>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    <div className="h-120 duration-300 overflow-hidden rounded right-0 bg-background">
                        <video preload="metadata" autoPlay className="object-cover" controls={false} muted loop id="visual-identity-vid-1" >
                            <source src="/vi-msg.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="h-120 duration-300 overflow-hidden rounded right-0 bg-background">
                        <Image src={"/vi-colors.png"} width={900} height={600} className="object-cover scale-125 pt-5" alt="fashion-collage" />
                    </div>
                    <div className="h-120 duration-300 overflow-hidden rounded right-0 bg-background">
                        <video preload="metadata" autoPlay className="object-cover scale-125 pt-10" controls={false} muted loop id="visual-identity-vid-2" >
                            <source src="/vi-identity.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                .
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">How We Work</span>
                <h1 className="text-4xl leading-12 my-2">
                    Our Visual Identity Process<br /><span className="text-neutral-400">From concept to final assets — a collaborative, iterative journey.</span>
                </h1>
                <div className="mt-10 grid grid-cols-4 gap-4 min-h-64">
                    {[
                        {
                            icon: 'solar:card-search-bold-duotone',
                            name: 'Align',
                            desc: 'Review your brand strategy and goals'
                        },
                        {
                            icon: 'solar:pen-new-square-bold-duotone',
                            name: 'Explore',
                            desc: 'Moodboards, style directions, logo concepts'
                        }, {
                            icon: 'solar:settings-minimalistic-bold-duotone',
                            name: 'Refine',
                            desc: 'Feedback rounds and finalization'
                        }, {
                            icon: 'solar:rocket-2-bold-duotone',
                            name: 'Deliver',
                            desc: 'Full visual identity kit with guidelines'
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
                <span className="text-blue-500 text-sm">Your Visual Toolkit</span>
                <h1 className="text-4xl leading-12 my-2">
                    What’s Included<br /><span className="text-neutral-400">Everything you need to use your brand consistently.</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    {[
                        "Primary & secondary logo variants",
                        "Color palette (primary, secondary, dark/light mode)",
                        "Typography system (headings, body, code)",
                        "Icon set (optional)",
                        "Spacing & layout rules",
                        "Usage guidelines (do’s and don’ts)",
                        "Figma/Sketch file"
                    ].map((item, i) => <div key={i} className="bg-white flex items-center py-2 px-5 rounded-xl">
                        <Icon icon={"solar:check-read-line-duotone"} className="text-3xl text-green-500 mr-4" />  {item}
                    </div>)}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Generic to Distinctive</span>
                <h1 className="text-4xl leading-12 my-2">
                    Real Work. Real Impact.<br /><span className="text-neutral-400">From abstract idea to public-ready brand look in weeks</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    <div className="h-100 bg-white rounded-xl group p-5">
                        <div className="h-70 mb-5 duration-300 overflow-hidden rounded-xl right-0 bg-background">
                            <Image src={"/case-studies/revamping-the-visual-identity-of-an-ai-startup/thumbnail.png"} width={512} height={400} alt="wireframe" className="group-hover:scale-125 duration-300 object-cover" />
                        </div>
                        <Link className="hover:text-orange-600 duration-300" href={"/case-study/revamping-the-visual-identity-of-an-ai-startup"}>
                            <h1 className="text-2xl mt-auto">
                                Revamping the visual identity of an AI Startup — Case Study
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
                    Frequently Asked Questions<br /><span className="text-neutral-400"> Everything you need to know about our visual identity process, deliverables, and how we work.</span>
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
                    <span className="text-blue-500 text-sm">Ready to Build Your Look?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Design a Visual Identity That Stands Out
                    </h1>
                    <p className="text-neutral-400">No more mismatched slides or weak branding. Just a clean, professional look that works everywhere.</p>
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