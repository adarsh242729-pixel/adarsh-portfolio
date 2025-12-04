import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Background animated blob */}
      <motion.div
        className="fixed inset-0 -z-10 blur-3xl opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-600/40 animate-pulse" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-cyan-500/40 animate-pulse" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        {/* HERO */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="text-center space-y-5"
        >
          <motion.p
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/40 bg-purple-900/30 text-xs sm:text-sm text-purple-200"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            Open to UI/UX & Frontend roles
          </motion.p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Adarsh Singh
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            UI/UX-focused Frontend Developer with a passion for clean design,
            smooth animations and responsive web experiences.
          </p>

          {/* Hero buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <motion.a
              href="mailto:adarshsingh5846@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/30"
            >
              Contact me
            </motion.a>
            <motion.a
              href="https://github.com/adarsh242729-pixel"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-full border border-slate-500 hover:border-slate-200 text-sm sm:text-base"
            >
              View GitHub
            </motion.a>
          </div>
        </motion.section>

        {/* ABOUT + HIGHLIGHTS */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          <div className="md:col-span-2 space-y-3 bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6 shadow-lg shadow-black/40">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              About me
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I’m a frontend developer and designer who enjoys turning ideas
              into smooth interfaces. I focus on accessibility, thoughtful UX
              and animations that feel natural rather than distracting.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Comfortable with <span className="font-medium">React</span>,{" "}
              <span className="font-medium">Tailwind CSS</span>,{" "}
              <span className="font-medium">JavaScript</span> and modern design
              tools. I’m always learning and improving my design eye and code
              quality.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Pixel-perfect, responsive layouts",
              "User-centered design thinking",
              "Clean component-based code",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="bg-slate-900/70 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm sm:text-base flex items-center gap-3"
                whileHover={{ x: 4, scale: 1.01 }}
                custom={1.5 + i * 0.1}
                variants={sectionVariant}
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-xs">
                  ✓
                </span>
                <span className="text-slate-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE + EDUCATION */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          <div className="space-y-4 bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">
              Experience
            </h2>
            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-slate-100">
                  UI/UX & Frontend Projects
                </p>
                <p className="text-xs text-slate-400 mb-1">
                  Freelance / Personal • 2023 – Present
                </p>
                <p className="text-slate-300">
                  Built landing pages, dashboards and portfolio sites using
                  React, Tailwind and Figma, focusing on animation and UX
                  clarity.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">
              Education
            </h2>
            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-slate-100">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-xs text-slate-400 mb-1">
                  Your College Name • 20XX – 20XX
                </p>
                <p className="text-slate-300">
                  Core CS fundamentals with focus on web technologies, UI/UX
                  and modern JavaScript frameworks.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Skills & Tools
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Frontend",
                items: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
              },
              {
                title: "UI/UX",
                items: ["Figma", "Wireframing", "Prototyping", "Design systems"],
              },
              {
                title: "Styling & Animations",
                items: ["Tailwind CSS", "Framer Motion", "Responsive design"],
              },
            ].map((group, gi) => (
              <motion.div
                key={group.title}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5 text-sm sm:text-base"
              >
                <p className="font-semibold mb-2 text-slate-50">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded-full bg-slate-800/80 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={4}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Selected Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-sm sm:text-base">
            <ProjectCard
              title="Personal Portfolio"
              description="Responsive portfolio site with dark theme, smooth scroll and animated sections."
              tech="React • Vite • Tailwind • Framer Motion"
              link="https://startling-zuccutto-f87933.netlify.app/"
            />
            <ProjectCard
              title="UI Dashboard Concept"
              description="Multi-card dashboard focused on typography, spacing and clean data visualization."
              tech="Figma • React"
            />
            <ProjectCard
              title="Animated Landing Page"
              description="Hero animations, CTA focus and gradient backgrounds for a modern product landing page."
              tech="HTML • Tailwind CSS • JS"
            />
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={5}
          className="pb-10 sm:pb-14 pt-4 text-center space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Let&apos;s build something
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            I&apos;m happy to collaborate on internships, freelance work or
            full-time roles related to UI/UX and frontend development.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:adarshsingh5846@gmail.com"
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-sm sm:text-base font-semibold text-slate-900"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-undefined-6213b8278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full border border-slate-500 hover:border-slate-200 text-sm sm:text-base"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            © {new Date().getFullYear()} Adarsh Singh
          </p>
        </motion.section>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5 flex flex-col justify-between"
    >
      <div className="space-y-2">
        <p className="font-semibold text-slate-50">{title}</p>
        <p className="text-slate-300 text-sm">{description}</p>
        <p className="text-xs text-slate-400 mt-1">{tech}</p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-cyan-300 hover:text-cyan-200 mt-3 inline-flex items-center gap-1"
        >
          Live demo ↗
        </a>
      )}
    </motion.div>
  );
}
