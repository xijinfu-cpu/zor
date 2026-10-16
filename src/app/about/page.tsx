import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
    title: "About Us — ZORS CRAFT",
    description: "We Craft With Purpose — And Build With What Comes Next in Mind. Strategy before assumptions. Purpose before decoration. Quality before shortcuts.",
};

export default function About() {
    return <AboutContent />;
}
