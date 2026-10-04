import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MoveRight, ArrowUpRight, Shirt, ChartArea, ChartBar, ChartNetwork } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopment() {
    const FAQs = [
        {
            question: "Which tech stack do you use?",
            answer: "We use MERN (MongoDB, Express, React, Node.js), Django, Laravel, or Python — based on your needs. We pick what’s maintainable, not trendy."
        },
        {
            question: "Do you handle hosting and deployment?",
            answer: "Yes. We deploy on AWS, Vercel, or your preferred platform — with CI/CD and monitoring set up. We work close with our Infrasture partner, and provide you best deals out there."
        },
        {
            question: "Will I own the code?",
            answer: "Yes. 100% source code ownership upon final payment. We only retain rights to reusable tools or templates."
        },
        {
            question: "Can you integrate with third-party tools?",
            answer: "Yes. We’ve integrated Stripe, AWS S3, Resend, CRM, and more — securely and reliably."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes. We offer monthly retainers for updates, monitoring, and feature additions — optional."
        }
    ]
    return (
        <>
            <section className="max-w-5xl mx-auto pt-40 text-center font-medium relative">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Web Development</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    <span className="text-neutral-400">Modern. Clean. Fast. Extendable.</span> <br />Build Web Apps That Work — and Scale
                </h1>
                <p className="text-sm font-normal my-5 text-neutral-600 mx-auto relative max-w-lg">
                    No template themes. No technical debt. We build custom web apps that perform well, integrate smoothly, and evolve over time — whether it’s an MVP, Website, Dashboard, or SaaS platform.
                </p>
                <div className="grid grid-cols-3 gap-5 mt-10 mb-20">
                    <div className="bg-white rounded-lg h-96 p-1">
                        <div className="bg-neutral-100 flex h-full rounded-lg relative">
                            <div className="m-auto bg-white rounded h-50">
                                <div className="h-4 flex px-1 items-center bg-white w-64">
                                    <span className="text-[8px]">
                                        .LOGO
                                    </span>
                                    <span className="ml-auto h-2 w-5 bg-blue-600 rounded" />
                                </div>
                                <div className="p-1 pt-0 grid">
                                    <div className="bg-neutral-100 flex h-45">
                                        <div className="m-auto">
                                            <span className="h-1 w-3 bg-neutral-300 block mx-auto mb-2 rounded" />
                                            <h5 className="text-[8px] mb-1">
                                                Welcome to App Landing Page
                                            </h5>
                                            <p className="text-[5px]">
                                                Learn all about our business through our website
                                            </p>
                                            <div className="flex justify-center mt-3 gap-1">
                                                <span className="h-2 w-2 bg-neutral-300 rounded" />
                                                <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                                <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                            </div>
                                            <div className="flex items-center justify-center gap-1 mt-2">
                                                <span className="h-2 w-5 bg-blue-600 rounded" />
                                                <span className="h-2 w-5 bg-blue-200 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-5 left-8 absolute flex gap-2">
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    Website
                                </div>
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    Landing Page
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-96 p-1">
                        <div className="bg-neutral-100 flex h-full rounded-lg relative">
                            <div className="m-auto bg-white rounded h-50">
                                <div className="h-4 flex px-1 items-center bg-white w-64">
                                    <span className="text-[8px]">
                                        .LOGO
                                    </span>
                                    <span className="ml-auto h-2 w-2 bg-neutral-300 rounded" />
                                    <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                    <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                </div>
                                <div className="p-1 pt-0 grid">
                                    <div className="bg-neutral-100 p-2 flex flex-col h-45">
                                        <h5 className="text-[8px] mb-1 mr-auto">
                                            Featured Collection
                                        </h5>
                                        <div className="grid grid-cols-3 gap-1">
                                            <div className="bg-white h-20 flex items-center justify-center">
                                                <Shirt className="text-green-200" />
                                            </div>
                                            <div className="bg-white h-20 flex items-center justify-center">
                                                <Shirt className="text-red-200" />
                                            </div>
                                            <div className="bg-white h-20 flex items-center justify-center">
                                                <Shirt className="text-yellow-200" />
                                            </div>
                                        </div>
                                        <div className="mt-1 bg-white rounded flex h-20">
                                            <div className="m-auto">
                                                <h5 className="text-[8px] mb-1">
                                                    Welcome to Our Store
                                                </h5>
                                                <p className="text-[5px]">
                                                    Get 20% off on all summer clothes!
                                                </p>
                                                <div className="flex items-center justify-center gap-1 mt-2">
                                                    <span className="h-2 w-5 bg-green-600 rounded" />
                                                    <span className="h-2 w-5 bg-green-200 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-5 left-8 absolute flex gap-2">
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    eCommerce
                                </div>
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    Online Store
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg h-96 p-1">
                        <div className="bg-neutral-100 flex relative h-full rounded-lg">
                            <div className="m-auto bg-white rounded h-50">
                                <div className="h-4 flex px-1 items-center bg-white w-64">
                                    <span className="mr-1 h-2 w-2 bg-neutral-300 rounded" />
                                    <span className="text-[8px]">
                                        .LOGO
                                    </span>
                                    <span className="ml-auto h-2 w-2 bg-neutral-300 rounded" />
                                    <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                    <span className="ml-1 h-2 w-2 bg-neutral-300 rounded" />
                                </div>
                                <div className="p-1 pt-0 grid">
                                    <div className="bg-neutral-100 p-1 grid gap-1 grid-cols-4 h-45">
                                        <div className="col-span-1 bg-white"></div>
                                        <div className="col-span-3 flex flex-col">
                                            <h5 className="text-[8px] mr-auto">
                                                Hi, User!
                                            </h5>
                                            <p className="text-[5px] mr-auto mb-1">
                                                Welcome to your dashboard
                                            </p>
                                            <div className="grid grid-cols-3 gap-1 mb-2">
                                                <div className="bg-white h-14 flex items-center justify-center">
                                                    <ChartArea className="text-neutral-200" />
                                                </div>
                                                <div className="bg-white h-14 flex items-center justify-center">
                                                    <ChartBar className="text-neutral-200" />
                                                </div>
                                                <div className="bg-white h-14 flex items-center justify-center">
                                                    <ChartNetwork className="text-neutral-200" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 mb-2">
                                                <h5 className="text-[6px] mr-auto">
                                                    Recent Transactions
                                                </h5>
                                                <div className="bg-white flex h-15 rounded mb-0.5">
                                                    <div className="m-auto">
                                                        <h5 className="text-[8px] mb-1">
                                                            No transactions yet!
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-5 left-8 absolute flex gap-2">
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    Dashboard
                                </div>
                                <div className={`text-sm bg-black text-white w-fit px-4 py-1.5 rounded-2xl font-medium`}>
                                    Web App
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">How We Work</span>
                <h1 className="text-4xl leading-12 my-2">
                    Our Web Development Process<br /><span className="text-neutral-400">From concept to live — structured, agile, and transparent.</span>
                </h1>
                <div className="mt-10 grid grid-cols-3 gap-4 min-h-64">
                    {[
                        {
                            icon: 'solar:card-search-bold-duotone',
                            name: 'Scope',
                            desc: 'Define features, tech stack, and timeline'
                        },
                        {
                            icon: 'solar:pen-new-square-bold-duotone',
                            name: 'Design',
                            desc: 'UI/UX (if needed) or handoff from your team'
                        }, {
                            icon: 'solar:code-square-bold-duotone',
                            name: 'Develop',
                            desc: 'Clean code, version control, CI/CD'
                        }, {
                            icon: 'solar:filter-bold-duotone',
                            name: 'Test',
                            desc: 'QA, performance, and security checks'
                        }, {
                            icon: 'solar:rocket-2-bold-duotone',
                            name: 'Launch',
                            desc: 'Deploy, monitor, and support'
                        }].map((item, i) => <div key={i} className="bg-white flex h-64 flex-col rounded-xl p-5">
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
                <span className="text-blue-500 text-sm">Your App, Delivered</span>
                <h1 className="text-4xl leading-12 my-2">
                    What’s Included<br /><span className="text-neutral-400">A complete, production-ready web application.</span>
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 min-h-64">
                    {[
                        "Fully functional web app (frontend + backend)",
                        "Responsive design (desktop + mobile)",
                        "Secure user authentication",
                        "APIs for integrations",
                        "Database architecture",
                        "CI/CD pipeline (GitHub Actions, Docker, etc.)",
                        "Documentation (setup, deployment, API)",
                        "30-day post-launch bug fix support"
                    ].map((item, i) => <div key={i} className="bg-white flex items-center py-2 px-5 rounded-xl">
                        <Icon icon={"solar:check-read-line-duotone"} className="text-3xl text-green-500 mr-4" />  {item}
                    </div>)}
                </div>
            </section>
            <section className="max-w-5xl mx-auto py-20 font-medium relative">
                <span className="text-blue-500 text-sm">Real Results</span>
                <h1 className="text-4xl leading-12 my-2">
                    Real Work. Real Impact.<br /><span className="text-neutral-400">One partner & planned out objective — Build ready in weeks.</span>
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
                    Frequently Asked Questions<br /><span className="text-neutral-400"> Everything you need to know about our web development process, tech stack, and how we work.</span>
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
                    <span className="text-blue-500 text-sm">Ready to Build Your Web App?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Turn Your Idea Into a Real Product
                    </h1>
                    <p className="text-neutral-400">No more delays. No more broken promises. Just clean code, clear communication, and a product that works.</p>
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