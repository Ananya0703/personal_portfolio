"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Email", href: "mailto:gilliyal.ananya@gmail.com" },
  { label: "GitHub", href: "https://github.com/Ananya0703" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ananyagiliyal/" },
];

const skills = [
  {
    title: "Data Science & ML",
    items: [
      "Python",
      "SQL",
      "Bash / Shell",
      "Machine Learning",
      "Predictive Modelling",
      "Clustering",
      "Segmentation",
      "PySpark",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
    ],
  },
  {
    title: "GenAI & LLMs",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "LLM Orchestration",
      "Agent Workflows",
      "Evaluation",
      "Fine-tuning",
      "Multimodal AI",
      "OpenAI",
      "Vertex AI",
      "Gemini",
      "ElevenLabs",
      "Hugging Face",
    ],
  },
  {
    title: "Vision, Video & Audio",
    items: [
      "Computer Vision",
      "Video Processing",
      "Object & Scene Understanding",
      "OCR",
      "Face Recognition",
      "Speech-to-Text",
      "Speaker Diarisation",
      "Audio Processing",
    ],
  },
  {
    title: "Production & Infrastructure",
    items: [
      "AI/ML Pipelines",
      "Microservices",
      "Automation",
      "APIs",
      "Docker",
      "AWS",
      "GPU Acceleration",
      "GPU/CPU Deployment",
      "FastAPI",
      "Streamlit",
      "Git",
    ],
  },
];

const workProjects = [
  {
    title: "Comet",
    date: "2026",
    stat: "6+ AI microservices · Production-scale multimodal processing",
    summary:
      "AI Content Intelligence Platform. Built a multimodal AI platform that processes video at scale and generates structured, time-coded intelligence across speech, people, scenes, objects, and other content signals.",
    tech: ["LLMs", "Computer Vision", "Speech-to-Text", "OCR", "Vector DB", "GPU/CPU"],
    imageLabel: "Multimodal AI diagram",
    imageSrc: "/project-images/comet.png",
  },
  {
    title: "Subtitling",
    date: "2026",
    stat: "3,000+ videos subtitled · Broadcast production",
    summary:
      "Automated Multilingual Subtitling. Built an end-to-end speech-to-text and subtitle generation pipeline designed for broadcast content, combining transcription, language-specific processing, and automated quality improvements.",
    tech: ["Whisper", "NLP", "FFmpeg", "GPU Acceleration"],
    imageLabel: "Subtitling timeline",
    imageSrc: "/project-images/subtitling.png",
  },
  {
    title: "AI Voiceover & Dubbing",
    date: "2025-26",
    stat: "End-to-end multilingual voice generation",
    summary:
      "Built an automated multilingual voiceover pipeline that takes content from transcription and translation through speaker-aware voice generation.",
    tech: ["ElevenLabs", "Vertex AI", "OpenAI", "Speaker Diarisation", "LLMs", "Python"],
    imageLabel: "Voiceover pipeline",
    imageSrc: "/project-images/voiceover.png",
  },
  {
    title: "Intelligent Ad Break Detection",
    date: "2025",
    stat: "Automated ad-break recommendations from multimodal signals",
    summary:
      "Built a multimodal system to identify natural ad insertion points by combining signals from speech, audio, and visual transitions.",
    tech: ["VAD", "Speech-to-Text", "Audio Processing", "Computer Vision", "Python", "FFmpeg"],
    imageLabel: "Ad break signal chart",
    imageSrc: "/project-images/ad-break.png",
  },
];

const personalProjects = [
  {
    title: "NetCDF Unpacker",
    date: "2023",
    stat: "Published on PyPI · Designed for 50GB+ datasets",
    summary:
      "GPU-Accelerated Geospatial Data Processing. Built and published an open-source Python package for unpacking and processing large NetCDF geospatial datasets, originally developed as part of my crop-yield prediction capstone.",
    tech: ["Python", "NetCDF", "NVIDIA RAPIDS", "GPU Acceleration", "Geospatial Data"],
    github: "https://github.com/Ananya0703",
    imageLabel: "NetCDF placeholder",
    imagePlaceholder: true,
  },
  {
    title: "Crop Yield Prediction",
    date: "2023",
    stat: "End-to-end ML pipeline using large-scale geospatial data",
    summary:
      "Satellite-Based Crop Yield Prediction. Developed a machine-learning pipeline using large-scale satellite, climate, and geospatial data to explore crop-yield prediction.",
    tech: ["Machine Learning", "Python", "NVIDIA RAPIDS", "LANDSAT", "MODIS", "GridMET", "NetCDF"],
    github: "https://github.com/Ananya0703",
    imageLabel: "Crop-yield map",
    imageSrc: "/project-images/netcdf.png",
  },
  {
    title: "Face Verification with Siamese Networks",
    date: "2023",
    stat: "Similarity learning using Siamese architecture",
    summary:
      "Built a deep-learning face verification system using Siamese neural networks to learn facial similarity and determine whether two images belong to the same person.",
    tech: ["Siamese Networks", "Deep Learning", "Computer Vision", "PyTorch / TensorFlow", "OpenCV"],
    github: "https://github.com/Ananya0703",
    imageLabel: "Face verification pipeline",
    imageSrc: "/project-images/face-verification.png",
  },
];

function Section({
  id,
  children,
  className = "",
  revealClassName = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  revealClassName?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10% 0px" },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 ${className}`}
      {...motionProps}
    >
      <div className={revealClassName}>{children}</div>
    </motion.section>
  );
}

function ProjectCard({
  project,
  kind,
  size = "default",
}: {
  project: {
    title: string;
    date: string;
    stat: string;
    summary: string;
    github?: string;
    imageHref?: string;
    tech: string[];
  };
  kind: "Work" | "Personal";
  size?: "default" | "feature";
}) {
  const shouldReduceMotion = useReducedMotion();
  const showProjectLink = kind === "Personal" && Boolean(project.github);
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      whileFocus={shouldReduceMotion ? undefined : { y: -3 }}
      tabIndex={0}
      className={`group relative rounded-[1.8rem] border ${
        kind === "Work" ? "border-black/8 bg-white/80" : "border-black/7 bg-white/65"
      } p-6 shadow-[0_10px_30px_rgba(15,15,12,0.04)] transition-[transform,border-color,background-color] duration-300 hover:border-black/14 focus-visible:border-[color:var(--accent)] focus-visible:outline-none sm:p-7`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-black/45 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
            {kind === "Work" ? "Work · @ JioStar" : kind}
          </p>
          <span className="text-sm tracking-[0.18em] text-black/48">{project.date}</span>
        </div>
        <h3
          className={`mt-5 font-semibold tracking-tight text-[color:var(--ink)] transition-transform duration-300 group-hover:-translate-y-[2px] group-focus-visible:-translate-y-[2px] ${
            size === "feature" ? "text-[2rem] sm:text-[2.4rem]" : "text-[1.45rem] sm:text-[1.7rem]"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-black/70">{project.summary}</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-10 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-16 group-focus-visible:w-16" />
          <span className="text-sm font-medium text-[color:var(--ink)]">{project.stat}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/8 bg-[color:var(--paper-2)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-black/68 transition-[transform,border-color,opacity] duration-200 group-hover:-translate-y-px group-focus-visible:-translate-y-px group-hover:border-black/12 group-focus-visible:border-black/12"
            >
              {item}
            </span>
          ))}
        </div>
        {showProjectLink ? (
          <div className="mt-auto pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--ink)] opacity-80 transition-[transform,opacity,color] duration-300 group-hover:translate-x-[2px] group-hover:opacity-100 group-hover:text-[color:var(--accent)] group-focus-visible:translate-x-[2px] group-focus-visible:opacity-100 group-focus-visible:text-[color:var(--accent)]"
            >
              View project
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-[2px]">
                ↗
              </span>
            </a>
          </div>
        ) : null}
        {showProjectLink ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-5 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-black/55 opacity-0 shadow-[0_8px_24px_rgba(15,15,12,0.06)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            View Project ↗
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function ProjectGrid({
  projects,
  kind,
}: {
  projects: Array<{
    title: string;
    date: string;
    stat: string;
    summary: string;
    github?: string;
    imageHref?: string;
    tech: string[];
  }>;
  kind: "Work" | "Personal";
}) {
  if (kind === "Work") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <ProjectCard project={projects[0]} kind={kind} />
        <ProjectCard project={projects[1]} kind={kind} />
        <ProjectCard project={projects[2]} kind={kind} />
        <ProjectCard project={projects[3]} kind={kind} />
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} kind={kind} />
      ))}
    </div>
  );
}

function MotionLine({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const shouldReduceMotion = useReducedMotion();
  const introRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [showChrome, setShowChrome] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const landingOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const landingY = useTransform(scrollYProgress, [0, 0.12], [0, -18]);
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!isIntroVisible) {
      setShowChrome(true);
      return undefined;
    }

    const onScroll = () => {
      const introBottom = introRef.current?.getBoundingClientRect().bottom ?? window.innerHeight;
      const hasLeftIntro = introBottom <= window.innerHeight * 0.82 || window.scrollY > 72;
      if (hasLeftIntro) {
        setIsIntroVisible(false);
        setShowChrome(true);
      } else {
        setShowChrome(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isIntroVisible]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 560 && !isIntroVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isIntroVisible]);

  useEffect(() => {
    if (isIntroVisible && !shouldReduceMotion) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [isIntroVisible, shouldReduceMotion]);

  const scrollToPortfolio = () => {
    setIsIntroVisible(false);
    setShowChrome(true);
    requestAnimationFrame(() => {
      portfolioRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <main className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[color:var(--accent)]"
        style={{ scaleX: progressScaleX }}
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-5 sm:px-8 lg:px-10">
        <header
          className={`relative z-20 -mx-5 border-b border-black/5 bg-[color:var(--paper)]/92 px-5 py-4 backdrop-blur-sm transition-all duration-300 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 md:sticky md:top-0 ${
            showChrome ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-baseline gap-4">
                <a href="#top" className="text-lg font-semibold tracking-[0.22em] uppercase">
                  Ananya Giliyal
                </a>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                You&apos;ll usually find me at a laptop, on a yoga mat, or halfway through a book.
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3 md:w-auto md:flex-row md:items-center">
              <nav
                aria-label="Primary"
                className="grid w-full grid-cols-3 gap-x-2 gap-y-2 md:flex md:w-auto md:flex-wrap md:gap-1.5"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-2 py-2 text-center text-sm text-black/70 transition hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] md:px-3"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="/resume.pdf"
                download="ananya_giliyal_resume.pdf"
                className="inline-flex shrink-0 items-center rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              >
                Resume
              </a>
            </div>
          </div>
        </header>

        <div
          className={`fixed left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block transition-all duration-300 ${
            showChrome ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-start gap-4 rounded-full border border-black/8 bg-white/65 px-3 py-4 shadow-[0_10px_30px_rgba(15,15,12,0.06)]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="rotate-180 [writing-mode:vertical-rl] text-xs uppercase tracking-[0.26em] text-black/55 transition-all duration-200 hover:translate-x-[2px] hover:text-[color:var(--accent)] focus-visible:translate-x-[2px] focus-visible:text-[color:var(--accent)] focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })}
          className={`fixed bottom-4 right-4 z-20 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black/65 shadow-[0_10px_24px_rgba(15,15,12,0.08)] backdrop-blur-sm transition-all duration-300 md:hidden ${
            showBackToTop ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          ↑
        </button>

        {isIntroVisible ? (
          <motion.section
            ref={introRef}
            id="landing"
            className="min-h-[calc(100svh-5rem)] pt-10 sm:pt-12 lg:pt-16"
            style={shouldReduceMotion ? undefined : { opacity: landingOpacity, y: landingY }}
          >
            <div className="flex min-h-[calc(100svh-9rem)] items-center">
              <div className="max-w-3xl">
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl font-semibold tracking-tight text-black/70 sm:text-5xl"
                >
                  ANANYA GILIYAL
                </motion.p>
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 text-lg uppercase tracking-[0.22em] text-black/60"
                >
                  Data Scientist
                  <span className="mx-3 text-black/35">·</span>
                  AI · Automation
                </motion.p>
                <motion.button
                  type="button"
                  onClick={scrollToPortfolio}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                >
                  See my work
                  <motion.span
                    aria-hidden="true"
                    animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
                    transition={shouldReduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ↓
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </motion.section>
        ) : null}

        <div ref={portfolioRef} />

        <section id="top" className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <MotionLine delay={0.08} className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                I spend a lot of time figuring out what people actually mean and then building it.
              </MotionLine>
              <MotionLine delay={0.16} className="mt-6 max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
                I work across data science, AI, and automation, turning ambiguous problems into systems that can actually be used.
              </MotionLine>
            </div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,15,12,0.04)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">Current focus</p>
              <p className="mt-4 text-[1.05rem] leading-8 text-black/72">
                Taking AI beyond the prototype by building production systems across video, audio, and text, with a focus on automation, reliability, and scale.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="space-y-24">
          <Section id="about" className="max-w-none">
            <p className="text-[0.95rem] font-medium uppercase tracking-[0.22em] text-black/50">About</p>
            <MotionLine className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              Plot twist: I actually like what I do.
            </MotionLine>
            <div className="mt-6 rounded-[1.8rem] border border-black/8 bg-white/65 p-6 sm:p-7">
              <div className="space-y-5 text-[1.02rem] leading-8 text-black/75">
                <p>
                  I&apos;m a Data Scientist at JioStar, and I enjoy the mix of technology, problem-solving, and people that comes with the work.
                </p>
                <p>
                  I&apos;ve had the chance to work in technical roles while also working closely with stakeholders and non-technical teams. I enjoy understanding what people are trying to solve, figuring out the right approach, and then building it. For me, the balance between technical work and communication is a big part of what makes the work interesting.
                </p>
                <p>
                  I&apos;m always curious to learn something new and get inspired by ideas beyond my immediate field.
                </p>
                <p>
                  Outside of work, I enjoy working out, yoga, reading, and watching movies.
                </p>
                <p>
                  <strong className="font-semibold text-black">Based in Bombay. Always learning and always curious.</strong>
                </p>
              </div>
            </div>
          </Section>

          <Section id="skills">
            <p className="text-[0.95rem] font-medium uppercase tracking-[0.22em] text-black/50">Skills</p>
            <MotionLine className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              A few things I've gotten reasonably good at.
            </MotionLine>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} className="rounded-[1.6rem] border border-black/8 bg-white/65 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-black/55">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/8 bg-[color:var(--paper-2)] px-3 py-2 text-sm text-black/72 transition-all duration-200 hover:-translate-y-px hover:border-black/14 hover:text-black focus-visible:-translate-y-px focus-visible:border-[color:var(--accent)] focus-visible:text-black focus-visible:outline-none"
                        tabIndex={0}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="projects">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.95rem] font-medium uppercase tracking-[0.22em] text-black/50">Projects</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  From messy problems to things that work.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-black/55">
                Work projects show selected production systems I&apos;ve built and contributed to. Personal projects are things I&apos;ve explored because I wanted to take the idea further.
              </p>
            </div>

            <div className="mt-10 space-y-12">
              <div>
                <ProjectGrid projects={workProjects} kind="Work" />
              </div>
              <div>
                <ProjectGrid projects={personalProjects} kind="Personal" />
              </div>
            </div>
          </Section>

          <Section id="education" className="max-w-none">
            <p className="text-[0.95rem] font-medium uppercase tracking-[0.22em] text-black/50">Education</p>
            <MotionLine className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              Not IIT. Still know what I'm doing.
            </MotionLine>
            <div className="mt-5 rounded-[1.6rem] border border-black/8 bg-white/65 p-6 transition-all duration-200 hover:-translate-y-px hover:border-black/12 focus-within:-translate-y-px focus-within:border-[color:var(--accent)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Mukesh Patel School of Technology, Management & Engineering, NMIMS
                  </h3>
                  <p className="mt-2 text-black/70">B.Tech in Data Science · 2020–2024</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-black/65">
                Dean&apos;s List · Overall Rank 1 · GPA 3.94 / 4.0
              </p>
            </div>
          </Section>

          <Section id="contact" className="max-w-none">
            <p className="text-[0.95rem] font-medium uppercase tracking-[0.22em] text-black/50">Contact</p>
            <MotionLine className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              Let&apos;s talk.
            </MotionLine>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Have a role in mind?",
                  copy: "I'm open to interesting opportunities in data science, AI, and related fields. If you think there could be a fit, I would love to hear about it.",
                },
                {
                  title: "Want to build something?",
                  copy: "Have an idea, project, or problem you'd like to explore? I'm always interested in good problems and interesting collaborations.",
                },
                {
                  title: "Just want to connect?",
                  copy: "Always happy to meet people working on interesting things, exchange ideas, or simply have a conversation.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.6rem] border border-black/8 bg-white/70 p-6 transition-all duration-200 hover:-translate-y-px hover:border-black/12 focus-within:-translate-y-px focus-within:border-[color:var(--accent)]"
                >
                  <p className="text-lg font-semibold text-[color:var(--ink)]">{item.title}</p>
                  <p className="mt-3 text-base leading-8 text-black/70">{item.copy}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-[0.24em] text-black/55">
                <a href="mailto:giliyal.ananya@gmail.com" className="transition-all duration-200 hover:translate-x-[2px] hover:text-[color:var(--accent)] focus-visible:translate-x-[2px] focus-visible:text-[color:var(--accent)] focus-visible:outline-none">Email</a>
                <a href="https://github.com/Ananya0703" target="_blank" rel="noreferrer" className="transition-all duration-200 hover:translate-x-[2px] hover:text-[color:var(--accent)] focus-visible:translate-x-[2px] focus-visible:text-[color:var(--accent)] focus-visible:outline-none">GitHub</a>
                <a href="https://www.linkedin.com/in/ananyagiliyal/" target="_blank" rel="noreferrer" className="transition-all duration-200 hover:translate-x-[2px] hover:text-[color:var(--accent)] focus-visible:translate-x-[2px] focus-visible:text-[color:var(--accent)] focus-visible:outline-none">LinkedIn</a>
                <a href="/resume.pdf" download="ananya_giliyal_resume.pdf" className="transition-all duration-200 hover:translate-x-[2px] hover:text-[color:var(--accent)] focus-visible:translate-x-[2px] focus-visible:text-[color:var(--accent)] focus-visible:outline-none">Resume</a>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
