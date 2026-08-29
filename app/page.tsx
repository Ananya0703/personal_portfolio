"use client";

import { motion, useReducedMotion } from "framer-motion";

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
    imageLabel: "Multimodal AI diagram",
    imageSrc: "/project-images/comet.png",
    imageHref: "https://medium.com/%40khayyam.h/why-multimodal-ai-is-harder-to-productionize-than-you-think-f8706483d9e8",
  },
  {
    title: "Subtitling",
    date: "2026",
    stat: "3,000+ videos subtitled · Broadcast production",
    summary:
      "Automated Multilingual Subtitling. Built an end-to-end speech-to-text and subtitle generation pipeline designed for broadcast content, combining transcription, language-specific processing, and automated quality improvements.",
    imageLabel: "Subtitling timeline",
    imageSrc: "/project-images/subtitling.png",
  },
  {
    title: "AI Voiceover & Dubbing",
    date: "2025-26",
    stat: "End-to-end multilingual voice generation",
    summary:
      "Built an automated multilingual voiceover pipeline that takes content from transcription and translation through speaker-aware voice generation.",
    imageLabel: "Voiceover pipeline",
    imageSrc: "/project-images/voiceover.png",
  },
  {
    title: "Intelligent Ad Break Detection",
    date: "2025",
    stat: "Automated ad-break recommendations from multimodal signals",
    summary:
      "Built a multimodal system to identify natural ad insertion points by combining signals from speech, audio, and visual transitions.",
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
    github: "https://github.com/Ananya0703",
    imageLabel: "Face verification pipeline",
    imageSrc: "/project-images/face-verification.png",
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
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
      {children}
    </motion.section>
  );
}

function ProjectImage({
  src,
  label,
  href,
  placeholder = false,
}: {
  src?: string;
  label: string;
  placeholder?: boolean;
  href?: string;
}) {
  const image = (
    <div className="group relative overflow-hidden rounded-[1.6rem] border border-black/10 bg-[color:var(--paper-2)] aspect-[16/10]">
      {placeholder ? (
        <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#f6efe6_0%,#fbfaf7_42%,#e8decf_100%)] p-5">
          <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.24em] text-black/45">
            <span>{label}</span>
            <span>Placeholder</span>
          </div>
          <div className="grid gap-3">
            <div className="h-2.5 w-2/3 rounded-full bg-black/10" />
            <div className="h-2.5 w-5/6 rounded-full bg-black/8" />
            <div className="h-2.5 w-1/2 rounded-full bg-black/8" />
          </div>
          <div className="flex items-end justify-between gap-3">
            <div className="h-20 w-20 rounded-2xl border border-black/10 bg-[linear-gradient(135deg,rgba(122,91,47,0.2),rgba(122,91,47,0.05))]" />
            <div className="text-right text-xs leading-5 text-black/45">
              Abstract visual
              <br />
              for NetCDF tooling
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/28 to-transparent px-4 py-4">
        <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.24em] text-white/90">
          <span>{label}</span>
          <span>{href ? "Read article" : placeholder ? "Placeholder visual" : "Project visual"}</span>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} - open link`}>
      {image}
    </a>
  ) : (
    image
  );
}

function ProjectCard({
  project,
  kind,
}: {
  project: {
    title: string;
    date: string;
    stat: string;
    summary: string;
    github?: string;
    imageLabel: string;
    imageSrc?: string;
    imagePlaceholder?: boolean;
    imageHref?: string;
  };
  kind: "Work" | "Personal";
}) {
  const tagClass =
    kind === "Work"
      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
      : "bg-black/5 text-black/70";

  return (
    <div
      className="grid gap-5 rounded-[1.8rem] border border-black/8 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,15,12,0.04)] backdrop-blur-sm sm:p-6 lg:grid-cols-[1.05fr_1.2fr]"
    >
      <ProjectImage
        src={project.imageSrc}
        label={project.imageLabel}
        href={project.imageHref}
        placeholder={project.imagePlaceholder}
      />
      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-medium ${tagClass}`}>
              {kind}
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--ink)]">
              {project.title}
            </h3>
          </div>
          <span className="pt-1 text-sm text-black/55">{project.date}</span>
        </div>
        <p className="mt-5 text-[1rem] leading-7 text-black/72">{project.summary}</p>
        <div className="mt-6 rounded-2xl border border-black/8 bg-[color:var(--paper-2)] px-4 py-4">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-black/48">Impact</div>
          <div className="mt-2 text-lg font-medium text-[color:var(--ink)]">{project.stat}</div>
        </div>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-[color:var(--accent)] underline-offset-4 transition hover:underline"
          >
            View GitHub
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 -mx-5 border-b border-black/5 bg-[color:var(--paper)]/92 px-5 py-4 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-baseline gap-4">
                <a href="#top" className="text-lg font-semibold tracking-[0.22em] uppercase">
                  Ananya Giliyal
                </a>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                Usually found somewhere between a laptop, a yoga mat, and a good book.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <nav aria-label="Primary" className="flex flex-wrap gap-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              >
                Resume
              </a>
            </div>
          </div>
        </header>

        <div className="fixed left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
          <div className="flex flex-col items-start gap-4 rounded-full border border-black/8 bg-white/65 px-3 py-4 shadow-[0_10px_30px_rgba(15,15,12,0.06)]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="rotate-180 [writing-mode:vertical-rl] text-xs uppercase tracking-[0.26em] text-black/55 transition hover:text-[color:var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <section id="top" className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-black/45">Portfolio</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                I spend a lot of time figuring out what people actually mean and then building it.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
                I work across data science, AI, and automation, turning ambiguous problems into systems that can actually be used.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,15,12,0.04)]">
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">Current focus</p>
              <p className="mt-4 text-[1.05rem] leading-8 text-black/72">
                Taking AI beyond the prototype by building production systems across video, audio, and text, with a focus on automation, reliability, and scale.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-24">
          <Section id="about" className="max-w-none">
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">About</p>
            <div className="mt-6 rounded-[1.8rem] border border-black/8 bg-white/65 p-6 sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                I genuinely like what I do.
              </h3>
              <div className="mt-5 space-y-5 text-[1.02rem] leading-8 text-black/75">
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
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">Skills</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} className="rounded-[1.6rem] border border-black/8 bg-white/65 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-black/55">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-black/8 bg-[color:var(--paper-2)] px-3 py-2 text-sm text-black/72">
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
                <p className="text-sm uppercase tracking-[0.24em] text-black/45">Projects</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  From messy problems to things that work.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-black/55">
                Work projects show selected production systems I&apos;ve built and contributed to. Personal projects explore ideas I&apos;ve wanted to take further.
              </p>
            </div>

            <div className="mt-10 space-y-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
                  Work
                </h3>
                <div className="mt-5 space-y-5">
                  {workProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} kind="Work" />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
                  Personal Projects
                </h3>
                <div className="mt-5 space-y-5">
                  {personalProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} kind="Personal" />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="education" className="max-w-none">
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">Education</p>
            <div className="mt-5 rounded-[1.6rem] border border-black/8 bg-white/65 p-6">
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
            <div className="rounded-[2rem] border border-black/8 bg-white/70 px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-sm uppercase tracking-[0.24em] text-black/45">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s talk.
              </h2>
              <div className="mt-8 grid gap-8">
                <div>
                  <p className="text-lg font-semibold text-[color:var(--ink)]">Have a role in mind?</p>
                  <p className="mt-3 text-base leading-8 text-black/70">
                    I&apos;m open to interesting opportunities in data science, AI, and related fields. If you think there could be a fit, I&apos;d love to hear about it.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[color:var(--ink)]">Want to build something?</p>
                  <p className="mt-3 text-base leading-8 text-black/70">
                    Have an idea, project, or problem you&apos;d like to explore? I&apos;m always interested in good problems and interesting collaborations.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[color:var(--ink)]">Just want to connect?</p>
                  <p className="mt-3 text-base leading-8 text-black/70">
                    Always happy to meet people working on interesting things, exchange ideas, or simply have a conversation.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-[0.24em] text-black/55">
                <a href="mailto:gilliyal.ananya@gmail.com" className="transition hover:text-[color:var(--accent)]">Email</a>
                <a href="https://github.com/Ananya0703" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">GitHub</a>
                <a href="https://www.linkedin.com/in/ananyagiliyal/" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">LinkedIn</a>
                <a href="/resume.pdf" download className="transition hover:text-[color:var(--accent)]">Resume</a>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
