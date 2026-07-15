import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Zap, Brain, Cloud } from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("adarsh242729@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-slate-800/50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <motion.h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AS
          </motion.h1>
          <div className="flex gap-3">
            <a href="#skills" className="text-sm text-slate-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        {/* HERO */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="text-center space-y-5 pt-10"
        >
          <motion.p
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/40 bg-purple-900/30 text-xs sm:text-sm text-purple-200"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Full-Stack & AI Integration roles
          </motion.p>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Adarsh Singh
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Full-Stack Developer & AI-Ready Engineer crafting scalable web applications 
            with modern tech. React • Next.js • Node.js • AI Integration
          </p>

          {/* Hero buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/30 flex items-center gap-2"
            >
              <Mail size={18} />
              {copied ? "Email Copied!" : "Get in Touch"}
            </motion.button>
            <motion.a
              href="https://github.com/adarsh242729-pixel"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full border border-slate-500 hover:border-slate-200 text-sm sm:text-base flex items-center gap-2 transition"
            >
              <Github size={18} />
              GitHub
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
          <div className="md:col-span-2 space-y-4 bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6 shadow-lg shadow-black/40">
            <h2 className="text-2xl sm:text-3xl font-semibold">About me</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I'm a full-stack developer and engineer who specializes in building scalable, 
              performant web applications. With 3+ years of experience, I focus on clean architecture, 
              user-centered design, and seamless user experiences.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Proficient in <span className="font-medium text-purple-300">React</span>, 
              <span className="font-medium text-purple-300"> Next.js</span>, 
              <span className="font-medium text-purple-300"> Node.js</span>, and exploring 
              <span className="font-medium text-pink-300"> AI/ML integration</span>. 
              Passionate about performance optimization and modern DevOps practices.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { icon: Code2, label: "Full-Stack Development" },
              { icon: Brain, label: "AI/ML Integration" },
              { icon: Cloud, label: "Cloud & DevOps" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="bg-slate-900/70 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm sm:text-base flex items-center gap-3"
                whileHover={{ x: 4, scale: 1.01 }}
                custom={1.5 + i * 0.1}
                variants={sectionVariant}
              >
                <Icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-slate-200">{label}</span>
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
            <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Experience
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-slate-100">Full-Stack Developer</p>
                <p className="text-xs text-slate-400 mb-1">Freelance / Personal • 2023 – Present</p>
                <p className="text-slate-300">
                  Built 10+ production applications using React, Next.js, Node.js, and Firebase. 
                  Implemented AI features using OpenAI API and Langchain.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Frontend Development Focus</p>
                <p className="text-xs text-slate-400 mb-1">2023 – 2024</p>
                <p className="text-slate-300">
                  Mastered responsive design, animations, and component architecture with 
                  React and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-1">Education</h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-slate-100">B.Tech in Computer Science</p>
                <p className="text-xs text-slate-400 mb-1">Your College • 20XX – 20XX</p>
                <p className="text-slate-300">
                  Core CS fundamentals, Data Structures, Algorithms, and Web Technologies with focus on modern JavaScript ecosystems.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Continuous Learning</p>
                <p className="text-xs text-slate-400 mb-1">Ongoing</p>
                <p className="text-slate-300">
                  Exploring AI/ML, Advanced TypeScript, and modern DevOps practices like Docker & GitHub Actions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills & Tools (2026 Ready)</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Frontend",
                icon: Code2,
                items: ["React 18+", "Next.js 14+", "TypeScript", "Tailwind CSS", "Vite", "Vue.js", "Shadcn/ui"],
              },
              {
                title: "Backend",
                icon: Cloud,
                items: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Firebase"],
              },
              {
                title: "AI/ML",
                icon: Brain,
                items: ["OpenAI API", "Langchain", "Vector DBs", "Prompt Engineering", "LLM Integration"],
              },
              {
                title: "DevOps",
                icon: Zap,
                items: ["Docker", "GitHub Actions", "Netlify", "Vercel", "AWS", "Git"],
              },
            ].map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5 text-sm sm:text-base"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <p className="font-semibold text-slate-50">{group.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-700/30 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-sm sm:text-base">
            <ProjectCard
              title="Advanced Portfolio Website"
              description="Full-featured portfolio with animations, dark mode, AI-ready backend integration, and SEO optimization."
              tech="React • Next.js • Tailwind • Framer Motion"
              link="https://startling-zuccutto-f87933.netlify.app/"
              stars={5}
            />
            <ProjectCard
              title="AI Chat Dashboard"
              description="Real-time chat interface integrated with OpenAI API. Features message history, streaming responses, and vector DB search."
              tech="React • Node.js • OpenAI • LangChain"
              stars={4}
            />
            <ProjectCard
              title="Performance-Optimized SPA"
              description="Single Page App with lazy loading, code splitting, service workers, and 90+ Lighthouse score."
              tech="React • Vite • Webpack • PWA"
              stars={5}
            />
            <ProjectCard
              title="Full-Stack E-Commerce App"
              description="Complete e-commerce platform with payment integration, admin dashboard, and real-time inventory management."
              tech="Next.js • MongoDB • Stripe • Docker"
              stars={4}
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              description="Interactive analytics dashboard with real-time charts, filtering, and export capabilities."
              tech="React • D3.js • Firebase • Tailwind"
              stars={4}
            />
            <ProjectCard
              title="AI Content Generator"
              description="Web app to generate SEO-optimized content using prompt engineering and LLM APIs with caching."
              tech="React • FastAPI • OpenAI • Redis"
              stars={5}
            />
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={5}
          className="pb-10 sm:pb-14 pt-8 text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Let&apos;s Work Together</h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or want to collaborate, feel free to reach out!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/30 flex items-center gap-2"
            >
              <Mail size={18} />
              {copied ? "Copied!" : "Email me"}
            </motion.button>
            <a
              href="https://github.com/adarsh242729-pixel"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-slate-500 hover:border-slate-200 text-sm sm:text-base flex items-center gap-2 transition"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-singh-dev/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-slate-500 hover:border-slate-200 text-sm sm:text-base flex items-center gap-2 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-slate-500 pt-4">
            © {new Date().getFullYear()} Adarsh Singh • Permanently Hosted
          </p>
        </motion.section>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, link, stars }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group"
    >
      <div className="space-y-3">
        <p className="font-semibold text-slate-50 text-base">{title}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-400">{tech}</p>
          {stars && (
            <div className="flex gap-0.5 ml-auto">
              {[...Array(stars)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          )}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-cyan-300 hover:text-cyan-200 mt-4 inline-flex items-center gap-1 transition"
        >
          Live demo <ExternalLink size={14} />
        </a>
      )}
    </motion.div>
  );
}
