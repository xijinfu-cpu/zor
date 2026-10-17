"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAdminAuth } from "@/lib/admin-auth";
import { ZorsSymbol } from "@/components/custom/logo";
import { Lock, Mail, Eye, EyeOff, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const { isAuthenticated, isLoading, login } = useAdminAuth();

    const [email, setEmail] = useState("admin@zorscraft.id");
    const [password, setPassword] = useState("admin123");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push("/admin");
        }
    }, [isAuthenticated, isLoading, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        const res = await login(email, password);
        if (res.success) {
            router.push("/admin");
        } else {
            setError(res.error || "Gagal masuk. Periksa email dan password Anda.");
            setIsSubmitting(false);
        }
    };

    const handleQuickLogin = async () => {
        setEmail("admin@zorscraft.id");
        setPassword("admin123");
        setIsSubmitting(true);
        setError(null);
        const res = await login("admin@zorscraft.id", "admin123");
        if (res.success) {
            router.push("/admin");
        } else {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#171715] flex items-center justify-center">
                <div className="size-8 border-2 border-[#A88C40] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#171715] text-[#F0ECE2] flex flex-col justify-between relative overflow-hidden select-none">
            {/* Ambient background glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#A88C40]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Topbar */}
            <header className="px-6 py-6 flex items-center justify-between relative z-10 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <ZorsSymbol tone="reverse" className="w-8 h-auto duration-200 group-hover:scale-105" />
                    <span className="font-semibold tracking-tight text-white">ZORS CRAFT</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#A88C40]/20 text-[#A88C40] border border-[#A88C40]/30 ml-1">
                        PORTAL
                    </span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors duration-200"
                >
                    <ArrowLeft className="size-3.5" />
                    <span>Kembali ke Website</span>
                </Link>
            </header>

            {/* Center Card */}
            <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
                <div className="w-full max-w-md bg-[#21201D]/90 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-4 shadow-xl">
                            <ZorsSymbol tone="reverse" className="w-9 h-auto" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
                            Masuk Admin Dashboard
                        </h1>
                        <p className="text-xs text-white/50 font-mono">
                            Akses panel kontrol & operasional ZORS CRAFT
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2 animate-shake">
                            <span className="size-1.5 rounded-full bg-red-400 shrink-0" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                                Email Administrator
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@zorscraft.id"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A88C40] transition-colors font-mono"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                                Kata Sandi
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A88C40] transition-colors font-mono"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#A88C40] hover:bg-[#b89b4a] text-[#171715] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#A88C40]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <div className="size-4 border-2 border-[#171715] border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <ShieldCheck className="size-4" />
                                    <span>Masuk ke Dashboard</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Quick Demo Access */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <button
                            type="button"
                            onClick={handleQuickLogin}
                            disabled={isSubmitting}
                            className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Sparkles className="size-3.5 text-[#A88C40]" />
                            <span>Akses Cepat (Demo Mode 1-Klik)</span>
                        </button>

                        <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/40 space-y-1">
                            <div className="flex justify-between">
                                <span>Default Email:</span>
                                <span className="text-white/70">admin@zorscraft.id</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Default Password:</span>
                                <span className="text-white/70">admin123</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-xs text-white/30 font-mono relative z-10">
                &copy; {new Date().getFullYear()} ZORS CRAFT. Internal Control Management.
            </footer>
        </div>
    );
}
