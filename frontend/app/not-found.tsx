"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
          <Code2 className="w-10 h-10 text-accent opacity-80" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-secondary mb-4 drop-shadow-lg">
          404<span className="text-accent">.</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 tracking-tight">
          Sistem Sedang Dikembangkan
        </h2>

        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
          Halaman atau fitur yang Anda cari saat ini sedang dalam tahap
          perancangan arsitektur dan belum siap untuk dipublikasikan.
        </p>

        {/* Tombol Navigasi Kembali */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
