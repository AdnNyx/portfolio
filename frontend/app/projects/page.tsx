"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Loader2 } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import axios from "axios";

// 1. Clean Code: Tipe Data Interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tech: string;
  link: string;
}

export default function ProjectsPage() {
  // 2. State Management
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 3. Fetch Data API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/v1/projects");
        if (response.data?.data) {
          setProjects(response.data.data);
        }
      } catch (err: unknown) {
        console.error("Gagal mengambil data proyek:", err);
        setError("Gagal memuat arsip proyek. Periksa koneksi server Anda.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 4. Optimasi: Kategori Dinamis (Hanya akan direkalkulasi jika data projects berubah)
  const categories = useMemo(() => {
    // Mengekstrak semua kategori unik dari data proyek yang ada
    const uniqueCategories = Array.from(
      new Set(projects.map((p) => p.category)),
    );
    return ["Semua", ...uniqueCategories];
  }, [projects]);

  // 5. Optimasi: Filter Proyek
  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <main className="min-h-screen pt-32 pb-32 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-secondary mb-6">
            Eksplorasi <span className="text-accent">Karya.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Arsip lengkap dari berbagai proyek perangkat lunak yang pernah saya
            rancang dan kembangkan, dari sisi antarmuka hingga arsitektur
            server.
          </p>
        </motion.div>

        {/* --- UX States: Loading & Error --- */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-accent" />
            <p className="text-neutral-500 font-medium tracking-wide">
              Menganalisis repositori server...
            </p>
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center py-20 text-red-400 font-medium bg-red-500/5 rounded-3xl border border-red-500/10 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {/* Jika Data Tersedia, Tampilkan Filter dan Grid */}
        {!isLoading && !error && projects.length > 0 && (
          <>
            {/* Filter Buttons (Tabs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-secondary text-primary shadow-[0_0_20px_rgba(245,245,247,0.2)]"
                      : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Grid Proyek dengan Animasi Layout */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout // Memberikan animasi layout yang mulus saat grid berubah
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-3xl overflow-hidden bg-neutral-900 aspect-4/3"
                  >
                    {/* Gambar Background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        project.image ||
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80"
                      }
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />

                    {/* Overlay Hitam Transparan */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Konten yang muncul saat Hover */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {/* Kategori */}
                        <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
                          {project.category}
                        </span>

                        {/* Judul Proyek */}
                        <h3 className="text-3xl font-bold text-secondary mb-4 tracking-tight">
                          {project.title}
                        </h3>

                        {/* Transformasi Data Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech &&
                            project.tech.split(",").map((techItem, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium text-neutral-300 bg-white/10 backdrop-blur-md rounded-full border border-white/5"
                              >
                                {techItem.trim()}
                              </span>
                            ))}
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex flex-wrap items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.link ? (
                            <>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-secondary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors"
                              >
                                Live Preview{" "}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/10 text-secondary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-md border border-white/5"
                              >
                                Source Code <Code className="w-4 h-4" />
                              </a>
                            </>
                          ) : (
                            <span className="text-neutral-500 text-sm italic">
                              Tautan belum tersedia
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* State Kosong (Jika filter tidak menemukan hasil, misal krn bug data) */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full py-20 flex flex-col items-center justify-center text-neutral-500"
              >
                <Code className="w-12 h-12 mb-4 opacity-50" />
                <p className="text-lg">Belum ada proyek di kategori ini.</p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
