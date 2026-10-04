import Hero from "@/components/sections/hero";
import Service from "@/components/sections/service";
import Work from "@/components/sections/work";
import Clients from "@/components/sections/clients";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Industries from "@/components/sections/industries";
import Solutions from "@/components/sections/solutions";
import About from "@/components/sections/about";
import WhyZors from "@/components/sections/why-zors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZORS CRAFT — Think. Craft. Grow.",
  description: "From strategy and brand identity to websites, digital experiences, and product solutions, we help businesses build trust, attract customers, and grow.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Clients />
      <Service />
      <Industries />
      <Solutions />
      <WhyZors />

      {/* Final CTA: Let’s Craft It Together / Start a Project */}
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
