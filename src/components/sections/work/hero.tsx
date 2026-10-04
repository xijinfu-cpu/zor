import { cn } from "@/lib/utils";
import { FunctionComponent, } from "react";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const projects = [{
        name: 'Hyperwafer',
        desc: 'AI-powered platform for workflow automation.',
        icon: '/hyperwafer.png',
        color: 'bg-[var(--hyperwafer)]',
        link: 'https://hyperwafer.com'
    }, {
        name: 'Unoversion',
        desc: 'AI-powered platform for recommendation & search.',
        icon: '/unoversion.png',
        color: 'bg-[var(--unoversion)]',
        link: 'https://unoversion.com'
    }, {
        name: 'Kartikey AI',
        desc: 'AI-powered platform for enterprise-level digital security.',
        icon: '/kartikey.png',
        color: 'bg-blue-600',
        link: 'https://kartikey.ai'
    }, {
        name: 'Mahalik Foundation',
        desc: 'Grass-level Private-backed NGO for Social Good.',
        icon: '/mahalik.png',
        color: 'bg-[var(--mahalik)] text-black',
        link: 'https://mahalik.org'
    }, {
        name: 'SciHawk SecureTech',
        desc: "India's first C.E.M.A offering, R&D company based in India.",
        icon: '/scihawk.png',
        color: 'bg-slate-900',
        link: 'https://sci-hawk.com'
    },]
    return (<>
        <section className={cn("w-full", className)}>
            <div className="max-w-5xl mx-auto pt-17 pb-10 font-medium relative">
                <span className="text-[#A88C40] text-xs font-mono uppercase tracking-wider">Real Work. Real Partnerships.</span>
                <h1 className="text-4xl leading-12 my-2 text-[#171715]">
                    Built by ZORS, <br /><span className="text-[#171715]/50">Our Work, End to End.</span>
                </h1>
                <p className="text-xl leading-8 font-normal my-5 text-[#171715]/75 relative max-w-xl">
                    From brand identity to digital experiences and engineered solutions — we build and refine products end to end.
                </p>
                <div className="flex mt-5 gap-2">
                    <Button asChild variant={"outline"} className="!px-5 border-[#171715]/20 hover:bg-[#171715] hover:text-[#F0ECE2]">
                        <Link href="/contact">
                            Start a Project <ArrowUpRight className="size-5" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 font-medium relative">
                <div className="bg-white/80 border border-[#171715]/10 shadow-xs rounded-xl flex flex-col min-h-96 p-5">
                    <div className="flex">
                        <h1 className="mt-auto text-xl text-[#171715]">
                            Projects We’ve Shipped <br /><span className="text-[#171715]/50">Real builds. Live apps.</span>
                        </h1>
                        <Link href={"/client-stories"} className="flex items-center gap-1 ml-auto my-auto bg-[#F0ECE2] px-4 py-2 h-fit rounded-full group hover:text-[#A88C40] text-[#171715]">
                            View all <ArrowUpRight className="group-hover:translate-x-1 duration-200 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                    <InfiniteSlider gap={24} speed={40} className="rounded-xl bg-background mt-5 py-5">
                        {projects.map((project, index) => {
                            return (<div key={index} className={cn("text-white h-100 w-80 rounded-xl p-5 flex flex-col", project.color)}>
                                <Image src={project.icon} alt={project.name} width={100} className="-ml-3" height={100} />
                                <h1 className="mt-auto text-xl">
                                    {project.name}
                                </h1>
                                <p className="text-sm opacity-50">
                                    {project.desc}
                                </p>
                            </div>)
                        })}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    </>);
}

export default Hero;