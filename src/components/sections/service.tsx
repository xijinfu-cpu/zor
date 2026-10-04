import { cn, getAssetPath } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import Card from "../ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

interface ServiceProps {
    className?: string;
}

const Service: FunctionComponent<ServiceProps> = ({ className }) => {
    const services = [
        {
            name: 'Strategy',
            tagline: 'Start With The Right Direction',
            href: '/services/#strategy',
            image: '/brainstorming.png',
            accent: '#586B6D',
            imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
        },
        {
            name: 'Branding',
            tagline: 'Build A Brand People Remember',
            href: '/services/#branding',
            image: '/branding.png',
            accent: '#C76043',
            imgClassName: 'scale-110 group-hover:scale-125 duration-500 object-contain'
        },
        {
            name: 'Design',
            tagline: 'Design With Purpose',
            href: '/services/#design',
            image: '/designing.png',
            accent: '#7D568E',
            imgClassName: 'scale-85 group-hover:scale-100 duration-500 object-contain'
        },
        {
            name: 'Development',
            tagline: 'Build Beyond The Visual',
            href: '/services/#development',
            image: '/development.png',
            accent: '#A88C40',
            imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
        },
        {
            name: 'Optimization',
            tagline: 'Make Good Even Better',
            href: '/services/#optimization',
            image: '/auditing.png',
            accent: '#2D8065',
            imgClassName: 'scale-95 group-hover:scale-110 duration-500 object-contain'
        },
        {
            name: 'Support',
            tagline: 'Built To Keep Growing',
            href: '/services/#support',
            image: '/apps.png',
            accent: '#2D8065',
            imgClassName: 'scale-90 group-hover:scale-105 duration-500 object-contain'
        }
    ];

    return (
        <section className={cn("w-full py-20", className)} id="services-preview">
            <div className="max-w-5xl mx-5 md:mx-auto mb-10 font-medium">
                <span className="border text-xs py-1 px-3.5 border-[#171715]/15 rounded-full bg-white/80 shadow-xs font-mono text-[#A88C40]">
                    Disciplines
                </span>
                <h2 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-[#171715]">
                    We craft digital products, <br />
                    <span className="text-neutral-500 font-normal">
                        From strategy to launch — we craft every layer with purpose.
                    </span>
                </h2>
            </div>

            <div className="grid font-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-5 md:mx-auto gap-5 relative">
                {services.map((item, i) => (
                    <Card
                        key={i}
                        title={item.name}
                        sub={item.tagline}
                        link={item.href}
                        className="min-h-96 w-full"
                    >
                        <div className="h-72 duration-300 overflow-hidden flex items-center justify-center rounded-xl bg-[#F0ECE2]/60 p-4 border border-[#171715]/5 relative">
                            <span
                                className="absolute top-3 right-3 size-2 rounded-full"
                                style={{ backgroundColor: item.accent }}
                                title={item.name}
                            />
                            <Image
                                src={getAssetPath(item.image)}
                                width={260}
                                height={200}
                                alt={item.name}
                                className={item.imgClassName}
                            />
                        </div>
                    </Card>
                ))}
            </div>

            <div className="max-w-6xl mx-5 md:mx-auto mt-8 flex justify-end">
                <Button asChild variant="outline" className="rounded-full px-5 py-2 group hover:bg-[#171715] hover:text-[#F0ECE2] border-[#171715]/15 bg-white/70">
                    <Link href="/services" className="flex items-center gap-1.5 text-xs font-mono">
                        Explore Full Services Breakdown <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default Service;