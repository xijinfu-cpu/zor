import { Metadata } from "next";
import CookiePolicyContent from "./cookie-policy-content";

export const metadata: Metadata = {
    title: "Cookie Policy — ZORS CRAFT",
    description: "Understand how ZORS CRAFT utilizes cookies and essential web technologies in accordance with data privacy regulations.",
};

export default function CookiePolicyPage() {
    return <CookiePolicyContent />;
}
