"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";

export default function ProjectBriefForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const services = [
        "Strategy",
        "Branding",
        "Design",
        "Development",
        "Optimization",
        "Support"
    ];

    const toggleService = (svc: string) => {
        setSelectedServices((prev) =>
            prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate quick submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 600);
    };

    if (submitted) {
        return (
            <div className="bg-white/90 p-8 md:p-12 rounded-2xl border border-[#171715]/10 shadow-xs text-center space-y-4 my-auto">
                <div className="size-12 rounded-full bg-[#2D8065]/10 text-[#2D8065] flex items-center justify-center mx-auto border border-[#2D8065]/25">
                    <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#171715]">
                    Brief Received
                </h3>
                <p className="text-sm md:text-base text-[#171715]/70 max-w-md mx-auto leading-relaxed">
                    Thank you for sharing your project goals. We will review your brief and get back to you with clear next steps within 24 hours.
                </p>
                <div className="pt-4">
                    <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-mono text-[#171715]/60 hover:text-[#171715] underline underline-offset-4"
                    >
                        Submit another brief
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/90 p-6 md:p-10 rounded-2xl border border-[#171715]/10 shadow-xs space-y-6">
            <div>
                <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono font-medium block mb-1">
                    START A PROJECT
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-[#171715]">
                    Project Brief
                </h3>
                <p className="text-xs md:text-sm text-[#171715]/60 mt-1">
                    Already know what you need? Tell us about your business, goals, timeline, and what you would like us to help with.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Name *
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Company / Brand *
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="Company or project name"
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Email Address *
                    </label>
                    <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Website (Optional)
                    </label>
                    <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Service Needed */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-2">
                    Services Needed
                </label>
                <div className="flex flex-wrap gap-2">
                    {services.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                            <button
                                key={svc}
                                type="button"
                                onClick={() => toggleService(svc)}
                                className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-colors ${
                                    isSelected
                                        ? "bg-[#171715] text-[#F0ECE2] border-[#171715]"
                                        : "bg-[#F0ECE2]/50 text-[#171715]/80 border-[#171715]/15 hover:border-[#171715]/30"
                                }`}
                            >
                                {svc}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Project Summary */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    Project Summary *
                </label>
                <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe what you are building, changing, or planning..."
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl p-3.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all resize-none"
                />
            </div>

            {/* Goals / Challenges */}
            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    Goals & Key Challenges
                </label>
                <textarea
                    rows={2}
                    placeholder="What specific outcome or problem are you trying to solve?"
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl p-3.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all resize-none"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Target Timeline
                    </label>
                    <select className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all">
                        <option value="">Select target timeline</option>
                        <option value="ASAP (within 1 month)">ASAP (within 1 month)</option>
                        <option value="1–2 Months">1–2 Months</option>
                        <option value="2–3 Months">2–3 Months</option>
                        <option value="Flexible">Flexible</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                        Budget Range (Optional)
                    </label>
                    <select className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all">
                        <option value="">Select budget range</option>
                        <option value="$100 – $500">$100 – $500</option>
                        <option value="$500 – $1,000">$500 – $1,000</option>
                        <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                        <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="text-xs font-mono text-[#171715]/60 block mb-1.5">
                    How Did You Hear About Us?
                </label>
                <input
                    type="text"
                    placeholder="Referral, social, client work, search..."
                    className="w-full text-sm bg-[#F0ECE2]/50 border border-[#171715]/15 rounded-xl px-3.5 py-2.5 text-[#171715] focus:outline-none focus:border-[#586B6D] focus:ring-1 focus:ring-[#586B6D]/20 focus:bg-white transition-all"
                />
            </div>

            {/* Consent check */}
            <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-[#171715]/65 leading-relaxed cursor-pointer">
                    <input
                        required
                        type="checkbox"
                        className="mt-0.5 rounded border-[#171715]/30 text-[#171715] focus:ring-0"
                    />
                    <span>
                        By submitting this form, you acknowledge our{" "}
                        <Link href="/legal/privacy" className="text-[#586B6D] underline underline-offset-2 hover:text-[#171715]">
                            Privacy Policy
                        </Link>{" "}
                        and consent to ZORS CRAFT using the information provided to respond to your inquiry.
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] font-medium flex items-center justify-center gap-2 text-sm transition-colors duration-200 disabled:opacity-70 shadow-sm"
            >
                {loading ? "Sending Brief..." : "Send Project Brief"} <ArrowUpRight className="size-4" />
            </button>
        </form>
    );
}
