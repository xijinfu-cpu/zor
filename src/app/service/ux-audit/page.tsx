import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Brand_strategy() {
    const FAQs = [
        {
            question: "What’s the difference between UX and UI audit?",
            answer: "UI is about visuals (colors, fonts, layout). UX is about experience (flow, usability, task success). This audit focuses on how well your product works — not just how it looks."
        },
        {
            question: "Do you test with real users?",
            answer: "Yes, optionally. We can run remote usability tests with 5 target users — included as an add-on."
        },
        {
            question: "Can you audit mobile apps too?",
            answer: "Yes. We audit web, mobile, and desktop apps — focusing on user behavior and interaction flow."
        },
        {
            question: "How long does it take?",
            answer: "Most UX audits take 5–7 days. We deliver a report with findings and clear next steps."
        },
        {
            question: "Will you suggest redesigns?",
            answer: "Yes. We include wireframe-level suggestions for key screens and flows — so you know exactly what to change."
        }
    ]
    return (
        <>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">UX Audit</span>
                <h1 className="text-4xl leading-12 my-2">
                    Fix the Experience — Not Just the UI<br /><span className="text-neutral-400">We evaluate your product’s usability, flow, and accessibility.</span>
                </h1>
                <p className="font-normal text-xl mt-5 text-neutral-600 relative max-w-2xl">
                    A beautiful interface won’t save a confusing experience. We identify friction points, dead ends, and missed opportunities — so your users can achieve their goals faster and with less frustration.
                </p>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    {/* 
                    show better user flow cards, and so on.
                    */}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">How We Work</span>
                <h1 className="text-4xl leading-12 my-2">
                    Our UX Audit Process<br /><span className="text-neutral-400">From observation to action — fast, focused, and user-centered.</span>
                </h1>
                <div className="mt-10 grid grid-cols-5 gap-4 min-h-64">
                    {[
                        {
                            icon: 'solar:card-search-bold-duotone',
                            name: 'Define',
                            desc: 'Goals, user personas, key tasks'
                        },
                        {
                            icon: 'solar:pen-new-square-bold-duotone',
                            name: 'Review',
                            desc: 'Heuristic evaluation & competitor benchmarking'
                        }, {
                            icon: 'solar:settings-minimalistic-bold-duotone',
                            name: 'Test',
                            desc: 'Remote usability testing (optional)'
                        }, {
                            icon: 'solar:settings-minimalistic-bold-duotone',
                            name: 'Analyze',
                            desc: 'Pain points, friction, and drop-off zones'
                        }, {
                            icon: 'solar:rocket-2-bold-duotone',
                            name: 'Deliver',
                            desc: 'Report with prioritized fixes and redesign suggestions'
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
                <span className="text-blue-500 text-sm">Your UX Report</span>
                <h1 className="text-4xl leading-12 my-2">
                    What’s Included<br /><span className="text-neutral-400">A clear, actionable guide to improve your product’s experience.</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    {[
                        "Heuristic evaluation (10 usability principles)",
                        "User flow analysis (where users get stuck)",
                        "Competitor UX benchmarking",
                        "Accessibility review (WCAG basics)",
                        "Hotspot map of friction points",
                        "Priority-ranked list of fixes",
                        "Redesign suggestions for key screens",
                        "Optional: Remote usability test with 5 users",
                        "30-minute debrief call"
                    ].map((item, i) => <div key={i} className="bg-white flex items-center py-2 px-5 rounded-xl">
                        <Icon icon={"solar:check-read-line-duotone"} className="text-3xl text-green-500 mr-4" />  {item}
                    </div>)}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Real Results</span>
                <h1 className="text-4xl leading-12 my-2">
                    Real Work. Real Impact.<br /><span className="text-neutral-400">One partner & planned out objectives — Audit done in weeks.</span>
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
                    Frequently Asked Questions<br /><span className="text-neutral-400"> Everything you need to know about our UX audit process, scope, and how we work.</span>
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
                    <span className="text-blue-500 text-sm">Ready to Improve Your UX?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Find the Friction — Then Fix It
                    </h1>
                    <p className="text-neutral-400">No more guesswork. No more user confusion. Just a smoother, smarter experience that keeps people engaged.</p>
                </div>
                <div className="flex w-full gap-2 mt-15 items-center justify-center">
                    <Button asChild className="px-5 group">
                        <Link href={"/contact"}>
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