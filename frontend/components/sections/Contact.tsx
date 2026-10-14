"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact-cta"
      className="w-full relative py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Efek Cahaya / Glow Samar di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Teks Utama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-secondary mb-6 leading-tight">
            Punya Ide <span className="text-accent">Besar?</span> <br />
            Mari Wujudkan.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12">
            Saya selalu terbuka untuk mendiskusikan proyek pengembangan produk,
            arsitektur perangkat lunak, atau peluang kemitraan.
          </p>
        </motion.div>

        {/* Tombol CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 bg-secondary text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Mulai Percakapan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Info Tambahan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-2 text-neutral-500 text-sm"
        >
          <MapPin className="w-4 h-4" />
          <span>Berbasis di Indonesia. Bekerja secara Global.</span>
        </motion.div>
      </div>

      {/* Footer Minimalis */}
      <div className="container mx-auto px-6 mt-32 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/adnnyx"
            className="hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adnnyx"
            className="hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/adn_nyx"
            className="hover:text-secondary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
