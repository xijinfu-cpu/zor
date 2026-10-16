import Hero from "@/components/sections/hero";
import Service from "@/components/sections/service";
import Work from "@/components/sections/work";
import Clients from "@/components/sections/clients";
import Industries from "@/components/sections/industries";
import Solutions from "@/components/sections/solutions";
import About from "@/components/sections/about";
import WhyZors from "@/components/sections/why-zors";
import HomeCTA from "@/components/sections/home-cta";
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
      <HomeCTA />
    </>
  );
}
