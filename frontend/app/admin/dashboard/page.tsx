"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOut,
  LayoutGrid,
  FileText,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  X,
  Loader2,
  ChevronDown,
} from "lucide-react";

// Interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tech: string;
  link: string;
}

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  read_time: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"projects" | "blogs">("projects");

  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    category: "Fullstack",
    image: "",
    tech: "",
    link: "",
  });

  // Custom Dropdown State
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const categories = [
    "Fullstack",
    "Frontend",
    "Backend",
    "Mobile",
    "Machine Learning",
    "Web3",
    "UI/UX",
  ];

  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogForm, setBlogForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    image: "",
    read_time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!Cookies.get("admin_token")) router.push("/admin");
  }, [router]);

  const loadData = async (tab: "projects" | "blogs") => {
    setIsLoading(true);
    setError("");
    try {
      if (tab === "projects") {
        const res = await api.get("/projects");
        setProjects(res.data?.data || []);
      } else {
        const res = await api.get("/blogs");
        setBlogs(res.data?.data || []);
      }
    } catch (err: unknown) {
      console.error("Fetch Error:", err);
      setError(`Gagal memuat data ${tab}.`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadData(activeTab);
    };
    fetchData();
  }, [activeTab]);

  const openProjectModal = (project?: Project) => {
    if (project) {
      setEditingProjectId(project.id);
      setProjectForm({
        title: project.title,
        category: project.category,
        image: project.image,
        tech: project.tech,
        link: project.link,
      });
    } else {
      setEditingProjectId(null);
      setProjectForm({
        title: "",
        category: "Fullstack",
        image: "",
        tech: "",
        link: "",
      });
    }
    setIsCategoryDropdownOpen(false);
    setIsProjectModalOpen(true);
  };

  const submitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingProjectId) {
        await api.put(`/admin/projects/${editingProjectId}`, projectForm);
      } else {
        await api.post("/admin/projects", projectForm);
      }
      setIsProjectModalOpen(false);
      loadData("projects");
    } catch (err: unknown) {
      console.error("Submit Project Error:", err);
      alert("Gagal menyimpan proyek.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteProject = async (id: number) => {
    if (!confirm("Hapus proyek ini permanen?")) return;
    try {
      await api.delete(`/admin/projects/${id}`);
      loadData("projects");
    } catch (err: unknown) {
      console.error("Delete Project Error:", err);
      alert("Gagal menghapus proyek.");
    }
  };

  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post("/admin/blogs", blogForm);
      setIsBlogModalOpen(false);
      setBlogForm({
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        image: "",
        read_time: "",
      });
      loadData("blogs");
    } catch (err: unknown) {
      console.error("Submit Blog Error:", err);
      alert("Gagal menyimpan blog. Pastikan slug unik.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("admin_token");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-black flex text-secondary font-sans overflow-hidden">
      {/* SIDEBAR NAVIGATION (Desktop) */}
      <aside className="w-64 bg-neutral-900 border-r border-white/5 flex flex-col justify-between md:flex shrink-0">
        <div className="p-8">
          <div className="text-2xl font-bold mb-12 tracking-tighter">
            Admin<span className="text-accent">.</span>
          </div>
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all duration-300 ${activeTab === "projects" ? "bg-secondary text-primary font-bold shadow-lg" : "text-neutral-400 font-medium hover:text-white hover:bg-white/5"}`}
            >
              <LayoutGrid className="w-4 h-4" /> Manajemen Proyek
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all duration-300 ${activeTab === "blogs" ? "bg-secondary text-primary font-bold shadow-lg" : "text-neutral-400 font-medium hover:text-white hover:bg-white/5"}`}
            >
              <FileText className="w-4 h-4" /> Manajemen Blog
            </button>
          </nav>
        </div>
        <div className="p-6 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors text-sm font-bold w-full px-4 py-3 rounded-xl"
          >
            <LogOut className="w-4 h-4" /> Keluar Sistem
          </button>
        </div>
      </aside>

      {/* MOBILE NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/90 backdrop-blur-xl border-t border-white/5 p-4 flex gap-2">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors ${activeTab === "projects" ? "bg-secondary text-primary" : "text-neutral-400 bg-white/5"}`}
        >
          <LayoutGrid className="w-4 h-4" /> Proyek
        </button>
        <button
          onClick={() => setActiveTab("blogs")}
          className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors ${activeTab === "blogs" ? "bg-secondary text-primary" : "text-neutral-400 bg-white/5"}`}
        >
          <FileText className="w-4 h-4" /> Blog
        </button>
      </div>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-primary pb-20 md:pb-0">
        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">
                {activeTab === "projects" ? "Daftar Proyek" : "Artikel Blog"}
              </h1>
              <p className="text-neutral-400 mt-2 text-sm">
                Kelola portofolio Anda secara real-time.
              </p>
            </div>
            <button
              onClick={() =>
                activeTab === "projects"
                  ? openProjectModal()
                  : setIsBlogModalOpen(true)
              }
              className="flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Plus className="w-5 h-5" /> Tambah Baru
            </button>
          </header>

          {isLoading && (
            <div className="py-20 flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          )}
          {error && !isLoading && (
            <div className="py-10 text-center text-red-400 font-medium">
              {error}
            </div>
          )}

          {/* PROJECT GRID */}
          {!isLoading && !error && activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <div className="col-span-full py-20 text-center border border-dashed border-white/20 rounded-3xl bg-white/5">
                  <p className="text-neutral-400">Belum ada proyek.</p>
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
                  >
                    <div className="relative aspect-video w-full bg-black overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-accent mb-2 uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 truncate">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-6 truncate">
                        {project.tech}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" /> Preview
                          </a>
                        ) : (
                          <span />
                        )}
                        <div className="flex gap-2">
                          <button
                            onClick={() => openProjectModal(project)}
                            className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* BLOG GRID */}
          {!isLoading && !error && activeTab === "blogs" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogs.length === 0 ? (
                <div className="col-span-full py-20 text-center border border-dashed border-white/20 rounded-3xl bg-white/5">
                  <p className="text-neutral-400">Belum ada artikel blog.</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-neutral-900 border border-white/5 rounded-3xl p-6 flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-1">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-neutral-500">/{blog.slug}</p>
                      </div>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-neutral-400 whitespace-nowrap">
                        {blog.read_time}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
                      <button className="text-xs font-bold text-accent hover:text-white transition-colors">
                        Edit Artikel (Segera)
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* --- MODAL PROYEK --- */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-xl flex flex-col shadow-2xl overflow-hidden max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-neutral-900 shrink-0">
                <h2 className="text-xl font-bold">
                  {editingProjectId ? "Edit Proyek" : "Tambah Proyek"}
                </h2>
                <button
                  onClick={() => setIsProjectModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 
                1. SOLUSI SCROLL MODAL:
                Ditambahkan atribut data-lenis-prevent agar fungsi scroll bawaan browser aktif kembali.
                overscroll-contain mencegah background ikut ter-scroll saat modal sudah mencapai batas mentok.
              */}
              <div
                className="p-6 overflow-y-auto overscroll-contain"
                data-lenis-prevent
              >
                <form
                  id="projectForm"
                  onSubmit={submitProject}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      JUDUL PROYEK
                    </label>
                    <input
                      type="text"
                      required
                      value={projectForm.title}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          title: e.target.value,
                        })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>

                  {/* 
                    2. SOLUSI CUSTOM DROPDOWN KATEGORI
                  */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      KATEGORI
                    </label>
                    <div
                      onClick={() =>
                        setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors flex justify-between items-center cursor-pointer hover:border-white/20 select-none"
                    >
                      <span
                        className={
                          projectForm.category
                            ? "text-secondary"
                            : "text-neutral-500"
                        }
                      >
                        {projectForm.category || "Pilih Kategori"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    <AnimatePresence>
                      {isCategoryDropdownOpen && (
                        <>
                          {/* Invisible overlay untuk mendeteksi klik di luar dropdown */}
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full mt-2 left-0 right-0 bg-[#161616] border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl py-2"
                          >
                            {categories.map((cat) => (
                              <div
                                key={cat}
                                onClick={() => {
                                  setProjectForm({
                                    ...projectForm,
                                    category: cat,
                                  });
                                  setIsCategoryDropdownOpen(false);
                                }}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                                  projectForm.category === cat
                                    ? "bg-accent/10 text-accent font-bold"
                                    : "text-neutral-300 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {cat}
                              </div>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      URL GAMBAR
                    </label>
                    <input
                      type="url"
                      required
                      value={projectForm.image}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          image: e.target.value,
                        })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      TECH STACK{" "}
                      <span className="text-neutral-600 font-normal">
                        (Pemisah Koma)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={projectForm.tech}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, tech: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      LINK DEMO/REPO
                    </label>
                    <input
                      type="url"
                      value={projectForm.link}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, link: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-white/5 bg-neutral-900 shrink-0 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 font-bold rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  form="projectForm"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-secondary text-primary font-bold hover:bg-white rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : editingProjectId ? (
                    "Simpan"
                  ) : (
                    "Tambah"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL BLOG (Ditambahkan juga proteksi scroll) --- */}
      <AnimatePresence>
        {isBlogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-neutral-900 shrink-0">
                <h2 className="text-xl font-bold">Tulis Artikel Baru</h2>
                <button
                  onClick={() => setIsBlogModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Data-lenis-prevent ditambahkan ke Modal Blog juga */}
              <div
                className="p-6 overflow-y-auto overscroll-contain"
                data-lenis-prevent
              >
                <form
                  id="blogForm"
                  onSubmit={submitBlog}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      JUDUL ARTIKEL
                    </label>
                    <input
                      type="text"
                      required
                      value={blogForm.title}
                      onChange={(e) =>
                        setBlogForm({ ...blogForm, title: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-neutral-500 tracking-wider">
                        SLUG (URL Unik)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="cara-install-golang"
                        value={blogForm.slug}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, slug: e.target.value })
                        }
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-neutral-500 tracking-wider">
                        WAKTU BACA
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="5 min read"
                        value={blogForm.read_time}
                        onChange={(e) =>
                          setBlogForm({
                            ...blogForm,
                            read_time: e.target.value,
                          })
                        }
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      RINGKASAN (EXCERPT)
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={blogForm.excerpt}
                      onChange={(e) =>
                        setBlogForm({ ...blogForm, excerpt: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors resize-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      URL GAMBAR
                    </label>
                    <input
                      type="url"
                      required
                      value={blogForm.image}
                      onChange={(e) =>
                        setBlogForm({ ...blogForm, image: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-500 tracking-wider">
                      KONTEN LENGKAP
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={blogForm.content}
                      onChange={(e) =>
                        setBlogForm({ ...blogForm, content: e.target.value })
                      }
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 focus:border-accent outline-hidden transition-colors resize-none"
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-white/5 bg-neutral-900 shrink-0 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 font-bold rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  form="blogForm"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-secondary text-primary font-bold hover:bg-white rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Terbitkan Artikel"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
