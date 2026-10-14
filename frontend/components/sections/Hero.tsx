"use client";

// 1. Import tipe 'Variants' dari framer-motion
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  // 2. Beri tipe data 'Variants' agar TypeScript tahu format easing-nya
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 3. Perbaikan Tailwind v4: Gunakan bg-linear-to-b */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-primary via-transparent to-primary pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-4xl px-6"
      >
        {/* 4. Perbaikan Tailwind: Gunakan text-accent alih-alih warna Hex */}
        <motion.p
          variants={itemVariants}
          className="text-accent font-medium tracking-widest uppercase text-sm mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-secondary mb-6 leading-tight"
        >
          Membangun <br className="hidden md:block" />
          <span className="text-neutral-500">Pengalaman Digital.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Saya merancang dan membangun arsitektur web berskala besar dengan
          fokus pada performa, desain minimalis, dan pengalaman pengguna yang
          luar biasa.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projects">
            <button className="group flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
              Lihat Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-4 rounded-full font-semibold text-secondary border border-white/20 hover:bg-white/5 transition-colors duration-300">
              Hubungi Saya
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
