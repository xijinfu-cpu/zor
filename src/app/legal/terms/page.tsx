import { Metadata } from "next";
import TermsContent from "./terms-content";

export const metadata: Metadata = {
    title: "Terms & Conditions — ZORS CRAFT",
    description: "The rules for using ZORS CRAFT’s website and services.",
};

export default function TermsPage() {
    return <TermsContent />;
}
