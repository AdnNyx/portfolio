"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

// 1. Definisikan Interface (Clean Code: Type Safety)
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tech: string;
  link: string;
}

export default function ProjectGrid() {
  // 2. State Management
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // 3. Fetch Data dari API Golang
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/projects",
        );

        if (response.data?.data) {
          // Membatasi maksimal 4 proyek untuk ditampilkan di halaman depan
          const latestProjects = response.data.data.slice(0, 4);
          setProjects(latestProjects);
        }
      } catch (err: unknown) {
        console.error("Gagal mengambil data proyek:", err);
        setError("Gagal memuat portofolio terbaru. Periksa koneksi server.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full py-32 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
              Karya <span className="text-neutral-500">Pilihan.</span>
            </h2>
            <p className="text-neutral-400 max-w-md text-lg">
              Kumpulan proyek terbaik yang memadukan arsitektur sistem yang
              solid dengan antarmuka yang indah.
            </p>
          </motion.div>

          <Link href="/projects">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary hover:text-accent font-medium flex items-center gap-2 transition-colors group"
            >
              Lihat Semua Proyek
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* --- UX States: Loading & Error --- */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
            <p className="text-neutral-500 font-medium">
              Memuat data proyek...
            </p>
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center py-20 text-red-400 font-medium bg-red-500/5 rounded-3xl border border-red-500/10">
            {error}
          </div>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center py-20 text-neutral-500 font-medium bg-white/5 rounded-3xl border border-dashed border-white/10">
            Belum ada proyek yang dipublikasikan.
          </div>
        )}

        {/* --- Grid Proyek --- */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900 aspect-4/3 md:aspect-square lg:aspect-4/3"
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
                <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

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

                    {/* 4. Data Transformation: Tech Stack Tags */}
                    {/* Karena dari database bentuknya string "Next.js, Golang", kita ubah jadi Array */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech &&
                        project.tech.split(",").map((techItem, i) => (
                          <span
                            key={i}
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
                            Live Preview <ExternalLink className="w-4 h-4" />
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
          </div>
        )}
      </div>
    </section>
  );
}
