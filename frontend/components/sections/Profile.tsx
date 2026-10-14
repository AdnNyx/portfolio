"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";
import { useRef } from "react";

// Extracted constant data outside component to prevent re-creation on renders
const SKILLS_DATA = [
  {
    name: "Frontend Development",
    tools: "Next.js, React, Tailwind CSS",
    icon: <Layout className="w-6 h-6 text-accent" />,
  },
  {
    name: "Backend Architecture",
    tools: "Golang, RESTful API, Microservices",
    icon: <Server className="w-6 h-6 text-accent" />,
  },
  {
    name: "Database & Storage",
    tools: "PostgreSQL, Redis, Neon (Serverless DB)",
    icon: <Database className="w-6 h-6 text-accent" />,
  },
  {
    name: "System Design",
    tools: "Clean Architecture, Git/Github, CI/CD",
    icon: <Code2 className="w-6 h-6 text-accent" />,
  },
];

export default function ProfileSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Sync pipeline tip exactly with the center of the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Apply spring physics for fluid fill animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="profile"
      className="w-full py-32 text-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight"
              >
                Engineer yang <br className="hidden md:block" />
                Berpikir <span className="text-neutral-500">Desain.</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "80px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 bg-accent mt-8"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-6 font-light"
            >
              <p>
                Perkenalkan saya{" "}
                <strong className="text-secondary font-medium">
                  Mahfudin Adnan
                </strong>
                . Sebagai seorang Software Engineer, saya didorong oleh rasa
                ingin tahu yang mendalam untuk terus mengeksplorasi batas-batas
                teknologi modern. Saya berfokus pada perancangan arsitektur
                sistem yang{" "}
                <strong className="text-secondary font-medium">
                  tangguh dan skalabel
                </strong>
                , sembari menyajikan interaksi visual yang mulus dan intuitif
                bagi pengguna.
              </p>
              <p>
                Selain fondasi yang kuat dalam pengembangan <em>Fullstack</em>{" "}
                menggunakan ekosistem Golang dan Next.js, saya memiliki
                antusiasme yang tinggi terhadap inovasi di ranah{" "}
                <strong className="text-secondary font-medium">Web3</strong> dan{" "}
                <strong className="text-secondary font-medium">
                  Machine Learning
                </strong>
                . Saya percaya bahwa integrasi antara sistem terdesentralisasi
                dan kecerdasan buatan akan mendefinisikan ulang masa depan
                perangkat lunak.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-5xl mx-auto" ref={timelineRef}>
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.75 flex justify-center z-0">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent rounded-full shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            />
          </div>

          <div className="flex flex-col py-10">
            {SKILLS_DATA.map((skill, index) => (
              <TimelineCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component adhering to Clean Architecture
function TimelineCard({
  skill,
  index,
}: {
  skill: (typeof SKILLS_DATA)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:justify-start" : "md:justify-end"
      } ${index !== 0 ? "mt-12 md:-mt-8 lg:-mt-12" : ""}`}
    >
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary border border-white/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        <div className="w-3 h-3 rounded-full bg-white/10" />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            boxShadow: "0px 0px 15px rgba(255,255,255,0.8)",
          }}
          viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute w-3 h-3 bg-accent rounded-full"
        />
      </div>

      <div
        className={`w-full md:w-[48%] pl-20 md:pl-0 ${
          isEven ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            boxShadow: "0px 0px 0px rgba(255,255,255,0)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            boxShadow: "0px 0px 40px -10px rgba(255,255,255,0.08)",
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-inner">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-secondary tracking-tight">
              {skill.name}
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              {skill.tools}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
