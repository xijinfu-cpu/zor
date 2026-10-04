import LegalLayout from "@/components/custom/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions — ZORS CRAFT",
    description: "The rules for using ZORS CRAFT’s website and services.",
};

const termsSections = [
    {
        number: "01",
        title: "About These Terms",
        content: "These Terms & Conditions govern your use of the ZORS CRAFT website operated by PT Zors Craft Digital (“ZORS CRAFT”, “we”, “our”, or “us”). By accessing or using this website, you agree to use it lawfully and in accordance with these terms.",
    },
    {
        number: "02",
        title: "Website Use",
        content: "You may use this website to learn about ZORS CRAFT, explore our work and services, and contact us regarding potential projects or partnerships. You must not misuse the website, interfere with its operation, attempt unauthorized access, or use its content for unlawful purposes.",
    },
    {
        number: "03",
        title: "Information on This Website",
        content: "We aim to keep the information on this website accurate and current. However, service descriptions, availability, portfolio information, pricing references, timelines, and other content may change without prior notice. Website content should not be interpreted as a binding proposal or guarantee unless expressly stated in a written agreement issued by ZORS CRAFT.",
    },
    {
        number: "04",
        title: "Project Engagements",
        content: "Contacting ZORS CRAFT, submitting a project brief, or participating in an initial discussion does not automatically create a contractual relationship. Projects begin only after the relevant scope, deliverables, timeline, commercial terms, and other conditions have been agreed in writing by the parties.",
    },
    {
        number: "05",
        title: "Intellectual Property",
        content: "Unless otherwise stated, the ZORS CRAFT name, identity, website design, copy, graphics, illustrations, and original website materials are owned by or licensed to PT Zors Craft Digital. They may not be reproduced, republished, distributed, or commercially exploited without permission.",
    },
    {
        number: "06",
        title: "Client Work",
        content: "Intellectual property arrangements for client projects are governed by the applicable proposal, agreement, statement of work, or contract. Portfolio materials displayed on this website remain subject to any confidentiality or usage terms agreed with the relevant client.",
    },
    {
        number: "07",
        title: "Third-Party Services",
        content: "Our website may link to or integrate services operated by third parties. ZORS CRAFT is not responsible for the availability, content, security, or privacy practices of third-party services.",
    },
    {
        number: "08",
        title: "Limitation of Liability",
        content: "To the extent permitted by applicable law, ZORS CRAFT will not be responsible for indirect or consequential loss resulting solely from the use of, or inability to use, this website. Nothing in these terms excludes liability that cannot legally be excluded.",
    },
    {
        number: "09",
        title: "Privacy",
        content: "Personal information submitted through this website is handled in accordance with our Privacy Policy and applicable data protection requirements.",
    },
    {
        number: "10",
        title: "Changes to These Terms",
        content: "We may update these terms when our website, services, or legal obligations change. The latest version will be published on this page together with its revision date.",
    },
    {
        number: "11",
        title: "Governing Law",
        content: "These terms are governed by the laws of the Republic of Indonesia, unless another governing law is expressly agreed in a separate written contract.",
    },
    {
        number: "12",
        title: "Contact",
        content: "Questions about these terms may be sent to hello@zorscraft.id.",
    },
];

export default function TermsPage() {
    return (
        <LegalLayout
            title="Terms & Conditions"
            subtitle="The rules for using ZORS CRAFT’s website and services."
            lastUpdated="4 October 2026"
            accentColor="#171715"
            importantNotice={{
                title: "Important Notice",
                content: "Submitting a project brief or participating in discovery discussions does not constitute a binding contract until formal project terms and scope are confirmed in writing.",
            }}
            sections={termsSections}
        />
    );
}
