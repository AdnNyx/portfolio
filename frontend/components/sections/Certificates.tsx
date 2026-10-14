"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function CertificateSlider() {
  // Data dummy sertifikat
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Okt 2023",
      link: "#",
    },
    {
      id: 2,
      title: "Google Cloud Professional Engineer",
      issuer: "Google",
      date: "Mar 2024",
      link: "#",
    },
    {
      id: 3,
      title: "Golang Microservices Masterclass",
      issuer: "Udemy",
      date: "Jan 2024",
      link: "#",
    },
    {
      id: 4,
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "Des 2023",
      link: "#",
    },
    {
      id: 5,
      title: "PostgreSQL Database Administration",
      issuer: "Coursera",
      date: "Nov 2023",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
            Pengakuan & <span className="text-neutral-500">Sertifikasi.</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Bukti komitmen saya dalam terus belajar dan beradaptasi dengan
            teknologi terbaru.
          </p>
        </motion.div>
      </div>

      {/* Kontainer Slider (Horizontal Scroll) */}
      <div className="w-full relative">
        {/* Gradient Blur di kiri dan kanan agar ujungnya terlihat memudar (Fading edges) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-primary to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-primary to-transparent z-10 pointer-events-none hidden md:block" />

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 gap-6 pb-10 pt-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-87.5 group relative p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:bg-neutral-800 transition-colors duration-300 flex flex-col justify-between min-h-62.5"
            >
              {/* Icon & Date */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/20 group-hover:text-accent text-secondary transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              {/* Info Sertifikat */}
              <div>
                <p className="text-sm text-neutral-400 mb-2">{cert.issuer}</p>
                <h3 className="text-xl font-bold text-secondary mb-6 leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Tombol Link (Muncul perlahan saat hover) */}
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
              >
                Lihat Kredensial <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
