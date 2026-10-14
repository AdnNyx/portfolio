"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Loader2, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// 1. Clean Code: Definisi Tipe Data yang presisi (Sesuai Golang Struct)
interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  read_time: string;
  created_at: string;
}

export default function BlogPage() {
  // 2. State Management
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // 3. Fetch Data API Golang
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/blogs");
        if (response.data?.data) {
          // Sortir dari yang terbaru berdasarkan ID atau tanggal (opsional jika backend belum sort)
          const sortedData = response.data.data.sort(
            (a: Blog, b: Blog) => b.id - a.id,
          );
          setPosts(sortedData);
        }
      } catch (err: unknown) {
        console.error("Gagal mengambil data blog:", err);
        setError("Gagal memuat artikel terbaru. Periksa koneksi server Anda.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 4. Optimasi: Format Tanggal (Native JavaScript, ringan tanpa library)
  const formatDate = (dateString: string) => {
    if (!dateString) return "Baru saja";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); // Output: "12 Okt 2026"
  };

  // 5. Variants Animasi Halaman
  const pageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2, // Efek berantai
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-32 bg-primary">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Animasi */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-secondary mb-6">
            Tulisan & <span className="text-neutral-500">Pemikiran.</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            Catatan perjalanan tentang rekayasa perangkat lunak, desain
            arsitektur, dan eksplorasi teknologi web modern.
          </p>
        </motion.div>

        {/* --- UX States: Loading & Error --- */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
            <p className="text-neutral-500 font-medium tracking-wide">
              Mengambil manuskrip dari server...
            </p>
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center py-16 text-red-400 font-medium bg-red-500/5 rounded-3xl border border-red-500/10 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-24 flex flex-col items-center justify-center text-neutral-500 bg-white/5 rounded-3xl border border-dashed border-white/10"
          >
            <FileText className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-lg">Belum ada artikel yang diterbitkan.</p>
          </motion.div>
        )}

        {/* --- List Artikel --- */}
        {!isLoading && !error && posts.length > 0 && (
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-16 md:gap-24"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                >
                  {/* Bagian Kiri: Preview Image */}
                  <div className="w-full md:w-5/12 aspect-4/3 rounded-3xl overflow-hidden relative border border-white/5 bg-neutral-900 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        post.image ||
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80"
                      }
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 grayscale-30 group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                    />
                    {/* Overlay shadow */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>

                  {/* Bagian Kanan: Konten Teks */}
                  <div className="w-full md:w-7/12 flex flex-col justify-center">
                    {/* Meta (Tanggal & Waktu) */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 tracking-widest uppercase mb-4">
                      <span>{formatDate(post.created_at)}</span>
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{post.read_time}</span>
                    </div>

                    {/* Judul Artikel */}
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight group-hover:text-accent transition-colors duration-500 tracking-tight">
                      {post.title}
                    </h2>

                    {/* Ringkasan */}
                    <p className="text-neutral-400 leading-relaxed text-lg mb-8 max-w-xl">
                      {post.excerpt}
                    </p>

                    {/* Call to Action Read More */}
                    <div className="flex items-center gap-2 text-sm font-bold text-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      Baca Artikel{" "}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
