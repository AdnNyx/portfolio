"use client";

import { motion, Variants } from "framer-motion";
import { Send, MapPin, Mail, Code, Briefcase, X, Download } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Animasi variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 2000);
  };

  // Handler Download CV
  const handleDownloadCV = () => {
    window.open("/cv/cv-adnan.pdf", "_blank");
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-primary flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-5/12 flex flex-col"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-secondary mb-6 leading-tight">
                Mari <br />
                <span className="text-neutral-500">Terhubung.</span>
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                Tertarik berkolaborasi dalam proyek inovatif atau butuh
                konsultasi teknis? Jangan ragu untuk menghubungi saya melalui
                form atau kontak langsung di bawah ini.
              </p>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="mb-12">
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-secondary border border-white/10 px-6 py-3.5 rounded-2xl font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5 text-accent group-hover:-translate-y-1 transition-transform" />
                <span>Unduh Curriculum Vitae</span>
              </button>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <a
                href="mailto:mahfudinadnan@gmail.com"
                className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors w-fit"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-accent/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium tracking-wide">
                  mahfudinadnan@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-4 text-neutral-400 w-fit">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium tracking-wide">
                  Tegal, Jawa Tengah - ID
                </span>
              </div>
            </motion.div>

            {/* Media Sosial */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/5"
            >
              <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-4">
                Platform Digital
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Code className="w-4 h-4" />,
                    link: "https://github.com/adnnyx",
                    label: "Github",
                  },
                  {
                    icon: <Briefcase className="w-4 h-4" />,
                    link: "https://www.linkedin.com/in/adnnyx",
                    label: "LinkedIn",
                  },
                  {
                    icon: <X className="w-4 h-4" />,
                    link: "https://twitter.com/adn_nyx",
                    label: "Twitter",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    aria-label={social.label}
                    className="p-3 bg-white/5 rounded-xl border border-white/5 text-neutral-400 hover:text-accent hover:bg-white/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-neutral-900 border border-white/5 p-8 md:p-12 rounded-3xl h-full">
              <h3 className="text-2xl font-bold text-secondary mb-8">
                Kirim Pesan Langsung
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-neutral-500 tracking-wider"
                    >
                      NAMA LENGKAP
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-secondary focus:outline-hidden focus:border-accent transition-colors disabled:opacity-50"
                      placeholder="Nan"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-neutral-500 tracking-wider"
                    >
                      ALAMAT EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-secondary focus:outline-hidden focus:border-accent transition-colors disabled:opacity-50"
                      placeholder="nan@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-neutral-500 tracking-wider"
                  >
                    PESAN ATAU PERTANYAAN
                  </label>
                  <textarea
                    id="message"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-secondary focus:outline-hidden focus:border-accent transition-colors resize-none disabled:opacity-50"
                    placeholder="Ceritakan secara singkat apa yang ingin Anda diskusikan..."
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 disabled:bg-neutral-600 disabled:cursor-not-allowed w-full shadow-lg"
                  >
                    <span>
                      {isSubmitting
                        ? "Mengirim..."
                        : isSuccess
                          ? "Terkirim!"
                          : "Kirim Pesan"}
                    </span>
                    {!isSubmitting && !isSuccess && (
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </button>

                  {isSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 font-medium text-sm text-center"
                    >
                      Pesan berhasil dikirim. Saya akan membalas via email.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
