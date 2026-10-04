import LegalLayout from "@/components/custom/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy — ZORS CRAFT",
    description: "Understand how ZORS CRAFT utilizes cookies and essential web technologies in accordance with data privacy regulations.",
};

const cookieSections = [
    {
        number: "01",
        title: "What Are Cookies",
        content: "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, provide security against automated abuse, and supply essential diagnostic information to website operators.",
    },
    {
        number: "02",
        title: "How ZORS CRAFT Uses Cookies",
        content: "At ZORS CRAFT, we believe in digital restraint. We only deploy cookies and local storage tokens when technically necessary to ensure page integrity, route optimization, font delivery, and brief form session persistence. We do not use intrusive tracking mechanisms.",
    },
    {
        number: "03",
        title: "Cookie Categories",
        content: "We classify our technical storage into distinct categories:\n\n• Strictly Necessary: Essential for core navigation, asset routing, and secure HTTPS protocol enforcement.\n• Functional & Performance: Helps us observe anonymous, aggregated page load speeds and ensure fluid delivery across global CDNs.\n• Zero Marketing Trackers: We do not deploy third-party advertising cookies, cross-site trackers, or behavioral profiling scripts.",
        callout: "ZORS CRAFT will never monetize your browsing data or participate in third-party ad-tracking exchanges.",
    },
    {
        number: "04",
        title: "Third-Party Services",
        content: "Our website is hosted on modern high-performance infrastructure and content delivery networks. These platforms may log anonymous network-level telemetry (such as IP addresses and browser agent headers) strictly to detect malicious traffic, DDoS attempts, and server errors.",
    },
    {
        number: "05",
        title: "Controlling & Disabling Cookies",
        content: "You can control, restrict, or delete cookies at any time through your browser settings. Most browsers (Chrome, Safari, Firefox, Edge) allow you to refuse cookies or remove existing tokens. Note that blocking essential cookies may affect the delivery of certain interactive features.",
    },
    {
        number: "06",
        title: "Regulatory Alignment & Inquiries",
        content: "This Cookie Policy complies with Indonesia's UU No. 27 Tahun 2022 (UU PDP) and relevant international privacy principles. For questions regarding our technical cookies or data practices, contact us at hello@zorscraft.id.",
    },
];

export default function CookiePolicyPage() {
    return (
        <LegalLayout
            title="Cookie Policy"
            subtitle="Transparent standards for technical cookies and web storage."
            lastUpdated="4 October 2026"
            accentColor="#A88C40"
            opening="This Cookie Policy explains how PT Zors Craft Digital (operating as ZORS CRAFT) uses cookies and related technologies to provide a fast, secure, and respectful browsing experience across our digital properties."
            importantNotice={{
                title: "Privacy-First Architecture",
                content: "We do not deploy invasive marketing trackers or cross-site profiling cookies. Any data processed is strictly technical and handled under Indonesian UU PDP standards.",
            }}
            sections={cookieSections}
        />
    );
}
