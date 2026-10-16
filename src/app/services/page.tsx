import { Metadata } from "next";
import ServicesContent from "./services-content";

export const metadata: Metadata = {
    title: "Services — ZORS CRAFT",
    description: "Explore our full-spectrum digital services: Strategy, Branding, Design, Development, Optimization, and Support.",
};

export default function Services() {
    return <ServicesContent />;
}
