import React from "react";
import { motion } from "framer-motion";

// Editable config: update this object to change content, colors, or add projects.
const CONFIG = {
  name: "Adarsh Singh",
  title: "MERN Stack Developer",
  location: "Hyderabad, India",
  contact: {
    phone: "8340745462",
    email: "adarshsingh5846@gmail.com",
    linkedin: "https://www.linkedin.com/in/adarsh-undefined-6213b8278"
  },
  about: `I am a motivated MERN Stack Developer with a passion for building useful and efficient web applications. I aim to continuously improve my technical skills and take on new challenges. My future goal is to grow into leadership roles, guide teams, and explore opportunities in entrepreneurship.`,
  skills: [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "HTML & CSS",
    "Python",
    "Git & GitHub",
    "Database Management",
    "Machine Learning (basics)"
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      desc: "A responsive, animated portfolio built with React and Tailwind CSS. Showcases projects, skills and contact info.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#"
    },
    {
      title: "E-commerce Demo (MERN)",
      desc: "A full-stack e-commerce demo with product pages, cart and simple admin features.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#"
    },
    {
      title: "AI Cultural Preservation Tool (Intern)",
      desc: "Contributed to AI tooling for cultural preservation and language projects during an internship.",
      tech: ["Python", "ML"],
      link: "#"
    }
  ],
  experience: [
    {
      role: "Web Developer Intern",
      company: "Internship",
      period: "Sep – Oct 2024",
      details: "Worked on frontend & backend, built features and collaborated in an Agile environment."
    },
    {
      role: "Python Intern",
      company: "Internship",
      period: "Sep – Oct 2024",
      details: "Problem-solving tasks, small projects, improved coding and teamwork skills."
    },
    {
      role: "AI Intern",
      company: "Internship",
      period: "May – Jun 2024",
      details: "Worked on AI tools for cultural preservation and language development."
    }
  ],
  theme: {
    bg: "bg-gray-900",
    card: "bg-gray-800/60",
    accent: "text-indigo-400"
  }
};

export default function Portfolio() {
  return (
    <div className={`min-h-screen ${CONFIG.theme.bg} text-gray-200 font-sans`}> 
      <div className="max-w-5xl mx-auto p-6">
        <Header />

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <About />
            <Projects />
            <Experience />
          </section>

          <aside className="lg:col-span-1">
            <ContactCard />
            <SkillsCard />
            <DownloadCard />
          </aside>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-400">© {new Date().getFullYear()} {CONFIG.name} — Built with ❤️</footer>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">{CONFIG.name}</h1>
        <p className="text-sm text-gray-400">{CONFIG.title} • {CONFIG.location}</p>
      </motion.div>

      <nav className="space-x-4 hidden md:flex">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <MobileMenu />
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="text-sm text-gray-300">
        <summary className="cursor-pointer">Menu</summary>
        <div className="mt-2 space-y-2">
          <a href="#about" className="block">About</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      </details>
    </div>
  );
}

function About() {
  return (
    <section id="about" className={`p-6 rounded-2xl ${CONFIG.theme.card} backdrop-blur-sm`}> 
      <motion.h2 className="text-2xl font-semibold mb-3" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>About</motion.h2>
      <motion.p className="text-gray-300 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.15 } }}>{CONFIG.about}</motion.p>

      <div className="mt-4 flex flex-wrap gap-3">
        {CONFIG.experience.slice(0,1).map((e,i)=> (
          <motion.div key={i} className="p-3 rounded-lg bg-gray-700/40" whileHover={{ scale: 1.02 }}>
            <p className="text-sm font-medium">{e.role} · {e.company}</p>
            <p className="text-xs text-gray-400">{e.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <div className="space-y-4">
        {CONFIG.projects.map((p, idx) => (
          <motion.article key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className={`p-4 rounded-lg ${CONFIG.theme.card} border border-gray-700/40`}> 
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {p.tech.map((t,i) => <span key={i} className="text-xs px-2 py-1 rounded bg-gray-700/30">{t}</span>)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a href={p.link} className="text-sm text-gray-300 hover:underline">View</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      <div className="space-y-3">
        {CONFIG.experience.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.06 }} className={`p-3 rounded-lg ${CONFIG.theme.card}`}>
            <p className="font-medium">{e.role} <span className="text-sm text-gray-400">@ {e.company}</span></p>
            <p className="text-xs text-gray-400">{e.period}</p>
            <p className="mt-2 text-sm text-gray-300">{e.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <motion.div id="contact" className={`p-4 rounded-2xl ${CONFIG.theme.card} mt-2`} initial={{ scale: 0.98 }} animate={{ scale: 1 }}>
      <h4 className="text-lg font-semibold mb-2">Contact</h4>
      <p className="text-sm">{CONFIG.contact.email}</p>
      <p className="text-sm">{CONFIG.contact.phone}</p>
      <a className="text-sm block mt-2 underline" href={CONFIG.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    </motion.div>
  );
}

function SkillsCard() {
  return (
    <motion.div className={`p-4 rounded-2xl ${CONFIG.theme.card} mt-4`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h4 className="text-lg font-semibold">Skills</h4>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {CONFIG.skills.map((s,i) => (
          <div key={i} className="text-sm p-2 rounded bg-gray-700/30">{s}</div>
        ))}
      </div>
    </motion.div>
  );
}

function DownloadCard() {
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(CONFIG, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div className={`p-4 rounded-2xl ${CONFIG.theme.card} mt-4`} whileHover={{ y: -3 }}>
      <h4 className="text-lg font-semibold">Editable</h4>
      <p className="text-sm text-gray-400 mt-2">Download this site's editable JSON config to update content quickly.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={downloadJSON} className="px-3 py-2 rounded bg-indigo-600 text-white text-sm">Download Config</button>
        <a href="/resume.pdf" className="px-3 py-2 rounded border border-gray-600 text-sm">Resume (upload to /resume.pdf)</a>
      </div>
    </motion.div>
  );
}

// Note: This component uses Tailwind CSS classes and framer-motion for animation.
// To run locally:
// 1. Create a React app (create-react-app or Vite).
// 2. Install framer-motion and Tailwind CSS.
// 3. Place this file in src/components and import into App.jsx.
// 4. Update CONFIG as needed or download the JSON using the "Download Config" button.
