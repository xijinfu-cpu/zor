"use client";

import { useState, useEffect } from "react";
import { Mail, Save, CheckCircle2, Lock } from "lucide-react";

export default function AdminSettingsPage() {
    // Studio General Info
    const [studioEmail, setStudioEmail] = useState("hello@zorscraft.id");
    const [studioPhone, setStudioPhone] = useState("+62 812 3456 7890");
    const [studioAddress, setStudioAddress] = useState("Jakarta, Indonesia");
    const [instagram, setInstagram] = useState("https://instagram.com/zorscraft");
    const [linkedin, setLinkedin] = useState("https://linkedin.com/company/zorscraft");

    // Admin Credentials
    const [adminEmail, setAdminEmail] = useState("admin@zorscraft.id");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [saveSuccess, setSaveSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const custom = localStorage.getItem("zors_admin_custom_credentials");
            if (custom) {
                const parsed = JSON.parse(custom);
                if (parsed.email) setAdminEmail(parsed.email);
            }
        } catch {
            // ignore
        }
    }, []);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (newPassword) {
            if (newPassword.length < 6) {
                setError("Password baru minimal 6 karakter.");
                return;
            }
            if (newPassword !== confirmPassword) {
                setError("Konfirmasi password tidak cocok.");
                return;
            }

            // Save custom credentials
            localStorage.setItem(
                "zors_admin_custom_credentials",
                JSON.stringify({
                    email: adminEmail,
                    password: newPassword,
                })
            );
        }

        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                    Pengaturan Studio & Keamanan
                </h1>
                <p className="text-sm text-[#5C5850] mt-1">
                    Konfigurasi informasi kontak resmi, profil agensi, dan akun administrator.
                </p>
            </div>

            {saveSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>Perubahan pengaturan berhasil disimpan!</span>
                </div>
            )}

            {error && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                    {error}
                </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
                {/* Section 1: Studio Contact Info */}
                <div className="bg-white rounded-3xl border border-[#171715]/10 p-6 md:p-8 space-y-5 shadow-xs">
                    <div className="flex items-center gap-2 border-b border-[#171715]/10 pb-4">
                        <Mail className="size-5 text-[#A88C40]" />
                        <h2 className="text-base font-bold text-[#171715]">Informasi Kontak Publik</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">Email Resmi</label>
                            <input
                                type="email"
                                value={studioEmail}
                                onChange={(e) => setStudioEmail(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">WhatsApp / Telepon</label>
                            <input
                                type="text"
                                value={studioPhone}
                                onChange={(e) => setStudioPhone(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Lokasi Studio / Base</label>
                        <input
                            type="text"
                            value={studioAddress}
                            onChange={(e) => setStudioAddress(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">URL Instagram</label>
                            <input
                                type="text"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">URL LinkedIn</label>
                            <input
                                type="text"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Admin Account & Security */}
                <div className="bg-white rounded-3xl border border-[#171715]/10 p-6 md:p-8 space-y-5 shadow-xs">
                    <div className="flex items-center gap-2 border-b border-[#171715]/10 pb-4">
                        <Lock className="size-5 text-[#A88C40]" />
                        <h2 className="text-base font-bold text-[#171715]">Keamanan & Akun Admin</h2>
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-[#5C5850] mb-1">Email Administrator</label>
                        <input
                            type="email"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">Password Baru (Opsional)</label>
                            <input
                                type="password"
                                placeholder="Kosongkan jika tidak ingin ganti"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-[#5C5850] mb-1">Konfirmasi Password Baru</label>
                            <input
                                type="password"
                                placeholder="Ulangi password baru"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                            />
                        </div>
                    </div>
                </div>

                {/* Save button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] text-xs font-semibold transition-all shadow-md cursor-pointer"
                    >
                        <Save className="size-4" />
                        <span>Simpan Pengaturan</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
