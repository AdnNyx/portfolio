"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Lock, ArrowRight, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        username,
        password,
      });

      if (response.data.status === "success") {
        Cookies.set("admin_token", response.data.token, { expires: 1 });
        router.push("/admin/dashboard");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.error || "Gagal login. Periksa server Anda.",
        );
      } else {
        setError("Terjadi kesalahan yang tidak terduga.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center p-6 relative">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-neutral-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-xl transition-all font-medium text-sm z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Kembali ke Beranda</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-secondary tracking-tight">
            Admin Access
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Authorized personnel only.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-500 tracking-wider">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-secondary focus:outline-hidden focus:border-accent transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-500 tracking-wider">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-secondary focus:outline-hidden focus:border-accent transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-full bg-secondary text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Enter System"}
            {!isLoading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
