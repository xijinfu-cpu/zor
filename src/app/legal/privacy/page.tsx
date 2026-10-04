import LegalLayout from "@/components/custom/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — ZORS CRAFT",
    description: "How we collect, use, and protect personal information under applicable Indonesian data protection laws.",
};

const privacySections = [
    {
        number: "01",
        title: "Information We May Collect",
        content: "Depending on how you interact with ZORS CRAFT, we may receive information such as your name, email address, company or brand name, website, project requirements, messages, and other information you voluntarily provide. Our website may also generate basic technical information necessary for security, performance, and operation.",
    },
    {
        number: "02",
        title: "How We Use Information",
        content: "We use information when reasonably necessary to respond to inquiries, evaluate project requests, communicate with clients and prospective clients, provide agreed services, maintain our website, protect our systems, meet legal obligations, and improve our operations.",
    },
    {
        number: "03",
        title: "Legal Basis and Consent",
        content: "Where required, we process personal information on an appropriate legal basis and obtain consent when consent is required. Providing information through our contact or project brief forms means we may use that information to respond to the request for which it was submitted.",
    },
    {
        number: "04",
        title: "Information Sharing",
        content: "We do not sell personal information. Information may be shared with service providers or professional partners when reasonably necessary to operate our business or deliver an agreed service, subject to appropriate confidentiality and security expectations.",
    },
    {
        number: "05",
        title: "Data Retention",
        content: "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, contractual or business requirements, dispute resolution, security, and applicable legal obligations.",
    },
    {
        number: "06",
        title: "Data Security",
        content: "We apply reasonable organizational and technical measures intended to protect information against unauthorized access, misuse, alteration, disclosure, or loss. No digital system can guarantee absolute security, so we continually review how information is handled.",
    },
    {
        number: "07",
        title: "Your Rights",
        content: "Subject to applicable law, including Indonesia's UU No. 27 Tahun 2022 on Personal Data Protection (UU PDP), individuals have rights relating to their personal information, including rights to obtain clarity on processing, access or rectify information, withdraw consent, and request deletion or restriction of processing.",
        callout: "To exercise any of your data subject rights under UU PDP, contact our privacy desk directly at hello@zorscraft.id.",
    },
    {
        number: "08",
        title: "International Services",
        content: "Some technology providers used in operating our website or delivering projects may process information from infrastructure located outside Indonesia. Where applicable, we take reasonable steps to ensure such processing is handled in accordance with applicable requirements and contractual safeguards.",
    },
    {
        number: "09",
        title: "Third-Party Links",
        content: "This website may contain links to third-party websites or services. Their privacy practices are governed by their own policies, not this Privacy Policy.",
    },
    {
        number: "10",
        title: "Cookies & Analytics",
        content: "We do not currently use non-essential tracking cookies for advertising purposes. We may use limited technical cookies or similar technologies strictly for essential website functions, performance, and security.",
    },
    {
        number: "11",
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy as our website, operations, technologies, or legal obligations change. The latest revision date will always appear at the top of this page.",
    },
    {
        number: "12",
        title: "Contact",
        content: "Privacy-related requests, questions, or data notices can be sent directly to hello@zorscraft.id.",
    },
];

export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            subtitle="How we collect, use, and protect personal information."
            lastUpdated="4 October 2026"
            accentColor="#586B6D"
            opening="ZORS CRAFT respects your privacy. This policy explains how PT Zors Craft Digital may collect, use, store, disclose, and protect personal information when you visit our website, contact us, submit a project brief, or otherwise interact with us."
            importantNotice={{
                title: "Statutory Compliance",
                content: "This policy is structured in compliance with Indonesia's Law No. 27 of 2022 on Personal Data Protection (UU PDP) and Government Regulation No. 71 of 2019 on Electronic Systems and Transactions.",
            }}
            sections={privacySections}
        />
    );
}
