'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { TextLoop } from "../../ui/text-loop";
import Image from "next/image";
import Card from "@/components/ui/card";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const services = [
        {
            name: 'Strategy',
            tagline: 'Start With The Right Direction',
            href: '/services/#strategy',
            image: '/brainstorming.png',
            imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
        },
        {
            name: 'Branding',
            tagline: 'Build A Brand People Remember',
            href: '/services/#branding',
            image: '/branding.png',
            imgClassName: 'scale-110 group-hover:scale-125 duration-500 object-contain'
        },
        {
            name: 'Design',
            tagline: 'Design With Purpose',
            href: '/services/#design',
            image: '/designing.png',
            imgClassName: 'scale-85 group-hover:scale-100 duration-500 object-contain'
        },
        {
            name: 'Development',
            tagline: 'Build Beyond The Visual',
            href: '/services/#development',
            image: '/development.png',
            imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
        },
        {
            name: 'Optimization',
            tagline: 'Make Good Even Better',
            href: '/services/#optimization',
            image: '/auditing.png',
            imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
        },
        {
            name: 'Support',
            tagline: 'Built To Keep Growing',
            href: '/services/#support',
            image: '/apps.png',
            imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
        }
    ]
    return (<>
        <section className={cn("w-full relative bg-no-repeat bg-contain md:bg-[url(/forest.png)]", className)}>
            <div className="py-32 md:py-40 max-sm:px-5" style={{ background: 'linear-gradient(343deg,rgba(245, 245, 245, 1) 70%, rgba(0, 0, 0, 0) 100%)' }}>
                <div className="text-center pb-20 font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">
                        Crafted End to End
                    </span>

                    <h1 className="text-2xl md:text-5xl md:leading-14 my-3 font-semibold">
                        We craft <TextLoop>
                            <span>brands</span>
                            <span>websites</span>
                            <span>experiences</span>
                            <span>digital products</span>
                            <span>solutions</span>
                        </TextLoop>,
                        <br />
                        <span className="text-neutral-400 font-normal">
                            Built with purpose. Made to move businesses forward.
                        </span>
                    </h1>

                    <p className="font-normal md:text-xl mt-5 text-neutral-600 relative max-w-3xl mx-auto leading-relaxed">
                        From strategy and brand identity to design, development, optimization, and ongoing support,
                        we bring every layer together to create digital experiences that look right,
                        work right, and grow with your business.
                    </p>
                </div>
                <div className="grid font-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 relative">
                    {services.map((item, i) => <Card arrowDirDown key={i} title={item.name} sub={item.tagline} link={item.href} className="min-h-96 w-full">
                        <div className="h-72 duration-300 overflow-hidden flex items-center justify-center rounded-xl bg-neutral-100/70 p-4">
                            <Image src={item.image} unoptimized width={260} height={200} alt={item.name} className={item.imgClassName} />
                        </div>
                    </Card>)}
                </div>
            </div>
        </section>
    </>);
}

export default Hero;