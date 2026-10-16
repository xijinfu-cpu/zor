import { Metadata } from "next";
import CareerContent from "./career-content";

export const metadata: Metadata = {
    title: "Careers — ZORS CRAFT",
    description: "Craft meaningful digital products with purpose, intention, and zero shortcuts. Explore open roles and career opportunities at ZORS CRAFT.",
};

export default function CareerPage() {
    return <CareerContent />;
}
