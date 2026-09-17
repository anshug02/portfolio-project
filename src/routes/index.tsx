import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FaNodeJs } from "react-icons/fa";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Rocket,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Send,
  ArrowUp,
  Heart,
  Menu,
  X,
} from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import resumeUrl from "@/assets/Anshikaguptaresume.pdf";
import boothmgt from "@/assets/Boothmgt.png";
import portfolio from "@/assets/portfolio.png";

const SOCIALS = {
  github: "https://gitlab.com/guptaanshikaa05",
  linkedin: "https://www.linkedin.com/in/anshika-gupta-94956230a/",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=guptaanshika05@gmail.com",
} as const;

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anshika Gupta| Full Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer specialising in React.js, Node.js, Express.js and MongoDB. Explore projects, technical skills, experience and get in touch with Anshika Gupta.",
      },
      { property: "og:title", content: "Anshika Gupta | Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Frontend Developer specialising in React.js. Explore projects, tech stack, experience and get in touch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ------------------------------- DATA ---------------------------------- */

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

const ROLES = ["Frontend Developer", "React.js Developer", "Node.js Developer", "Open to Work"];

const TECH = {
  Frontend: [
    { name: "HTML5", color: "#E34F26", level: 95 },
    { name: "CSS3", color: "#1572B6", level: 92 },
    { name: "JavaScript", color: "#F7DF1E", level: 90 },
    { name: "React.js", color: "#61DAFB", level: 88 },
    { name: "Tailwind CSS", color: "#06B6D4", level: 92 },
    { name: "Redux", color: "#764ABC", level: 78 },
  ],
  Backend: [
    { name: "Node.js", color: "#5FA04E", level: 72 },
    { name: "Express.js", color: "#ffffff", level: 70 },
  ],
  Database: [
    { name: "MongoDB", color: "#47A248", level: 70 },
    { name: "Postgres", color: "#47A248", level: 90 },
  ],
  Tools: [
    { name: "Git", color: "#F05032", level: 88 },
    { name: "GitHub", color: "#ffffff", level: 90 },
    { name: "GitLab", color: "#ffffff", level: 90 },
    { name: "Postman", color: "#FF6C37", level: 82 },
  ],
  Deployment: [
    { name: "Netlify", color: "#00C7B7", level: 84 },
    { name: "Vercel", color: "#ffffff", level: 90 },
    { name: "Render", color: "#ffffff", level: 80 },
  ],
} as const;

const PROJECTS = [
  {
    title: "Booth-Management-System",
    description:
      " Developed a multi-tenant Booth Management System using Node.js, Express.js, PostgreSQL and Prisma ORM to manage voters, booths, geographical assignments, users, tasks and field activities with secure role-based access control",
    tech: ["Express.js", "Postgres", "Prisma-ORM", "Tailwind CSS", "REST API"],
    features: [
      "Multi-Tenant",
      "Voter Management",
      "RBAC",
      "Task Assignment",
      "REST API",
      "PostgreSQL",
    ],
    accent: "from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]",
    github: "https://github.com/anshug02",
    demo: "",
    image: boothmgt,
  },
  {
    title: "Portfolio- Project",
    description:
      "A modern personal portfolio website built with .js, showcasing my skills, experience, projects, certificates, and contact information with a responsive and interactive UI.",
    tech: ["HTML", "CSS", "React"],
    features: ["Smooth Animations", "Interactive Scrolling", "Responsive", "Modern UI"],
    accent: "from-[#8B5CF6] via-[#06B6D4] to-[#3B82F6]",
    github: "https://github.com/anshug02",
    demo: "https://portfolio-project-lilac-phi.vercel.app/",
    image: portfolio,
  },
];

const LEARNING = [
  { title: "Modern React Patterns", icon: "⚛️" },
  { title: "Next.js", icon: "🧠" },
  { title: "TypeScript", icon: "🟢" },
  { title: "Docker", icon: "🍃" },
  { title: "Kubernetes", icon: "🔗" },
  { title: "CI/CD", icon: "🏛️" },
  { title: "Nginx", icon: "🏛️" },
  { title: "Performance Optimization", icon: "⚡" },
  { title: "System Design", icon: "✨" },
  { title: "Clean Code Principles", icon: "✨" },
];

const CERTS = [
  {
    title: "Lavange Company",
    body: "Full-Stack Developer Internship Certificate.",
    url: "htReacttps://drive.google.com/file/d/1XuhWbhoBh6cbSxrmKCbmD01JHy6pjNsW/view",
  },
  {
    title: "Kushit-World",
    body: "Worked as a Full-Stack Developer, building web applications and backend services using React.js, Node.js and Express.js.",
    url: "",
  },
];

const EDUCATION = [
  {
    title: "Bachelor of Computer Applications",
    place: "Maa Shakumbari University",
    year: "2025",
  },
  { title: "Intermediate", place: "MTS Public School", year: "2022" },
];

const STATS = [
  { value: 4000, suffix: "+", label: "Articles Published" },
  { value: 30, suffix: "", label: "Daily Articles Managed" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "+", label: "Projects Completed" },
];

/* ------------------------------ HELPERS -------------------------------- */

function useMounted() {
  const [m, s] = useState(false);
  useEffect(() => {
    s(true);
  }, []);
  return m;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 md:px-10 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-14 text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

/* ------------------------- LOADING SCREEN ------------------------------ */

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1400);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#3B82F6",
              borderRightColor: "#8B5CF6",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{ borderBottomColor: "#06B6D4", borderLeftColor: "#8B5CF6" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 grid place-items-center text-xl font-black text-gradient">
            AG
          </div>
        </div>
        <motion.p
          className="text-xs uppercase tracking-[0.35em] text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Loading experience
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------- CURSOR GLOW ------------------------------- */

function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 h-[420px] w-[420px] rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.18), rgba(59,130,246,0.08) 40%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

/* ---------------------- SCROLL PROGRESS BAR ---------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]" />
    </motion.div>
  );
}

/* ------------------------ FLOATING TECH ICONS -------------------------- */

const FLOAT_ICONS = [
  { label: "React", color: "#61DAFB", top: "12%", left: "8%", size: 42 },
  { label: "JS", color: "#F7DF1E", top: "20%", left: "82%", size: 36 },
  { label: "CSS", color: "#1572B6", top: "70%", left: "12%", size: 34 },
  { label: "HTML", color: "#E34F26", top: "78%", left: "78%", size: 38 },
  { label: "Node", color: "#5FA04E", top: "45%", left: "92%", size: 32 },
  { label: "TS", color: "#3178C6", top: "55%", left: "4%", size: 30 },
];

function FloatingIcons() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {FLOAT_ICONS.map((it, i) => (
        <motion.div
          key={it.label}
          className="absolute grid place-items-center rounded-2xl glass font-bold"
          style={{
            top: it.top,
            left: it.left,
            width: it.size + 12,
            height: it.size + 12,
            color: it.color,
            fontSize: it.size * 0.4,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {it.label}
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------- FLOATING PARTICLES -------------------------- */

function Particles() {
  const mounted = useMounted();
  if (!mounted) return null;
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = ((i * 7) % 4) + 2;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              filter: "blur(0.5px)",
            }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 6 + (i % 6),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* ----------------------------- NAVBAR ---------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`fixed inset-x-0 top-3 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all sm:px-6 ${
        scrolled ? "glass-strong shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]" : "glass"
      }`}
      style={{ width: "calc(100% - 24px)" }}
    >
      <a href="#top" className="flex items-center gap-2 text-sm font-bold tracking-tight">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] text-white shadow-[0_8px_30px_-6px_rgba(139,92,246,0.6)]">
          AG
        </span>
        <span className="hidden sm:inline">Anshika Gupta</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex items-center gap-1">
          {[
            { Icon: Github, href: SOCIALS.github, label: "GitHub" },
            { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: SOCIALS.email, label: "Email" },
          ].map(({ Icon, href, label }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? EXT : {})}
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-6px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.03]"
        >
          Hire me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute left-2 right-2 top-full mt-2 flex flex-col rounded-2xl p-2 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

/* ------------------------------ HERO ----------------------------------- */

function TypedRoles() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-8 overflow-hidden text-lg sm:h-9 sm:text-xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 font-semibold text-gradient"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setMx((e.clientX / w - 0.5) * 20);
      setMy((e.clientY / h - 0.5) * 20);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  return (
    <div id="top" ref={ref} className="relative overflow-hidden pt-32">
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#3B82F6]/30 blur-[140px] animate-blob" />
        <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/25 blur-[130px] animate-blob" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#06B6D4]/20 blur-[130px] animate-blob" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>
      <FloatingIcons />

      <Section className="!py-16 sm:!py-20">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transform: `translate3d(${mx * -0.4}px, ${my * -0.4}px, 0)` }}
            className="order-2 md:order-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              </span>
              Available for Opportunities
            </div>
            <p className="mb-3 text-lg text-muted-foreground">Hi 👋 I'm</p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Anshika<span className="text-gradient animate-gradient-pan"> Gupta</span>
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              {/* <span className="text-lg text-muted-foreground sm:text-xl">
                I'm a
              </span> */}
              <TypedRoles />
            </div>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              "Building responsive, scalable and user-friendly full-stack applications using the
              MERN stack, with a focus on React.js, Node.js and modern web technologies."
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.7)] transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resumeUrl}
                download="Anshikaguptaresume.pdf"
                {...EXT}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Github, href: SOCIALS.github, label: "GitHub" },
                { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: SOCIALS.email, label: "Email" },
              ].map(({ Icon, href, label }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? EXT : {})}
                    className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:glow-blue"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto md:order-2"
            style={{ transform: `translate3d(${mx * 0.6}px, ${my * 0.6}px, 0)` }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Soft glow halo */}
              <motion.div
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] opacity-60 blur-3xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Rotating conic ring */}
              <motion.div
                aria-hidden
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                  filter: "blur(2px)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              {/* Second slower counter-rotating ring */}
              <motion.div
                aria-hidden
                className="absolute -inset-6 rounded-full opacity-60"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent, #8B5CF6, transparent, #06B6D4, transparent)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-[220px] w-[220px] rounded-full p-[3px] sm:h-[260px] sm:w-[260px] md:h-[340px] md:w-[340px]">
                <div className="h-full w-full rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] p-[3px] shadow-[0_30px_80px_-20px_rgba(59,130,246,0.55)]">
                  <div className="h-full w-full rounded-full bg-[#0F172A] p-1">
                    <img
                      src={profileImg}
                      alt="Anshika Gupta, Full Stack Developer"
                      width={720}
                      height={720}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute -left-4 top-10 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚛️ React
              </motion.div>
              <motion.div
                className="absolute -right-6 top-24 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-lg"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <FaNodeJs className="h-6 w-6" />
                  <span>Express.js</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-6 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
              >
                ⚡ 1+ yrs
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------ ABOUT ---------------------------------- */

function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About Me" title="A developer who cares about the details" />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl glass-strong p-1">
            <div className="relative aspect-square overflow-hidden rounded-[calc(theme(borderRadius.3xl)-4px)] bg-[#0F172A]">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.35), transparent 55%)",
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* Illustrated stack */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-56 w-56">
                  {["⚛️", "{ }", "</>", "🚀", "✨"].map((s, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute grid h-16 w-16 place-items-center rounded-2xl glass-strong text-2xl font-bold"
                      style={{
                        top: `${50 + 42 * Math.sin((idx / 5) * Math.PI * 2)}%`,
                        left: `${50 + 42 * Math.cos((idx / 5) * Math.PI * 2)}%`,
                        translate: "-50% -50%",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {s}
                    </motion.div>
                  ))}
                  <motion.div
                    className="absolute inset-0 grid place-items-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] blur-md" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            <span className="text-foreground">Full-Stack Developer</span> with hands-on experience
            building responsive and scalable web applications using React.js, Node.js and modern web
            technologies.
          </p>

          <p>
            Skilled in developing reusable UI components, building REST APIs, integrating frontend
            and backend systems, and implementing complete CRUD functionality using Node.js,
            Express.js and databases.
          </p>

          <p>
            Passionate about creating scalable, user-centric applications with clean, maintainable
            code and modern full-stack development practices.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { k: "Focus", v: "Node.js" },
              { k: "Based in", v: "India" },
              { k: "Experience", v: "1+ years" },
              { k: "Availability", v: "Open to work" },
            ].map((it) => (
              <div key={it.k} className="rounded-2xl glass px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {it.k}
                </div>
                <div className="mt-1 font-semibold text-foreground">{it.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------------- TECH STACK --------------------------------- */

function TechStack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools I use to ship"
        subtitle="A modern, battle-tested set of technologies for building fast, maintainable frontends."
      />
      <div className="space-y-10">
        {Object.entries(TECH).map(([cat, items]) => (
          <div key={cat}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {cat}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {items.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl glass p-4 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
                  title={t.name}
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                    style={{ background: t.color }}
                  />
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-10 w-10 place-items-center rounded-xl text-lg font-black"
                      style={{
                        background: `${t.color}20`,
                        color: t.color,
                        boxShadow: `inset 0 0 0 1px ${t.color}40`,
                      }}
                    >
                      {t.name.slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {t.level}%
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${t.color}, #8B5CF6)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- EXPERIENCE -------------------------------- */

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've worked" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative md:grid md:grid-cols-2 md:gap-10"
        >
          <div className="hidden md:block" />
          <div className="relative pl-12 md:pl-10">
            <div className="absolute left-2.5 top-3 h-3 w-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-[0_0_0_6px_rgba(139,92,246,0.15)] md:-left-[26px]" />
            <div className="rounded-2xl glass-strong p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Briefcase className="h-3.5 w-3.5" /> May 2026 — Present
              </div>
              <h3 className="mt-2 text-xl font-bold">Website Developer</h3>
              <p className="text-sm text-[color:var(--brand-cyan)]">Kush-It-World</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Developed and maintained responsive web applications using React.js.",
                  "Built and integrated REST APIs using Node.js and Express.js.",
                  "Implemented CRUD functionality and database integration.",
                  "Developed reusable frontend components and improved UI responsiveness.",
                  "Collaborated with team members to deliver and maintain web applications.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative pl-12 md:pl-10 mt-10">
            <div className="absolute left-2.5 top-3 h-3 w-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-[0_0_0_6px_rgba(139,92,246,0.15)] md:-left-[26px]" />

            <div className="rounded-2xl glass-strong p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                March 2026 — Past
              </div>

              <h3 className="mt-2 text-xl font-bold">Full-Stack Developer Intern</h3>

              <p className="text-sm text-[color:var(--brand-cyan)]">Lavange Company</p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Developed responsive web applications using React.js.",
                  "Built backend APIs using Node.js and Express.js.",
                  "Worked with MongoDB for database integration and CRUD operations.",
                  "Integrated frontend and backend functionality to build full-stack features.",
                  "Collaborated with the development team to implement and improve web application features.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* --------------------------- PROJECTS ---------------------------------- */

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="group relative overflow-hidden rounded-3xl glass-strong"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`} />
        {p.image && (
          <img
            src={p.image}
            alt={`${p.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-xl glass-strong px-3 py-1.5 text-sm font-semibold text-white">
          {p.title}
        </div>
        {/* Hover shine */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {p.features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-cyan)]" />
              {f}
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          <a
            href={SOCIALS.github}
            {...EXT}
            className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a
            href={p.demo && p.demo !== "#" ? p.demo : SOCIALS.github}
            {...EXT}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.04]"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured Work"
        title="Selected projects"
        subtitle="A few things I've built recently."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}

/* ------------------------ CURRENTLY LEARNING --------------------------- */

function Learning() {
  return (
    <Section id="learning">
      <SectionHeader eyebrow="Roadmap" title="Currently Learning 🚀" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LEARNING.map((l, i) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl glass p-5"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#3B82F6]/40 to-[#8B5CF6]/40 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="text-3xl">{l.icon}</div>
            <h3 className="mt-3 text-base font-semibold">{l.title}</h3>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${40 + ((i * 13) % 45)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------- CERTS & EDUCATION ----------------------------- */

function CertsAndEducation() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Certifications" title="Recognitions" />
          <div className="space-y-4">
            {CERTS.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex gap-4 rounded-2xl glass p-5 transition-colors hover:border-[#8B5CF6]/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                  <span className="mt-2 inline-block text-xs text-[#8B5CF6]">
                    View certificate →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Education" title="Academic path" />
          <div className="relative">
            <div className="absolute left-4 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-transparent" />
            <div className="space-y-4">
              {EDUCATION.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-4 h-3 w-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-[0_0_0_6px_rgba(139,92,246,0.15)]" />
                  <div className="rounded-2xl glass p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" /> {e.year}
                    </div>
                    <h3 className="mt-1 font-semibold">{e.title}</h3>
                    <p className="text-sm text-[color:var(--brand-cyan)]">{e.place}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------- STATS ------------------------------------ */

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return (
    <div ref={ref} className="text-4xl font-black sm:text-5xl md:text-6xl">
      <span className="text-gradient">
        {n.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}

function Stats() {
  return (
    <Section>
      <div className="rounded-3xl glass-strong p-8 sm:p-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------- CONTACT ---------------------------------- */

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "guptaanshika05@gmail.com",
              href: "mailto:guptaanshikaa05@gmail.com",
            },
            {
              Icon: Phone,
              label: "Phone",
              value: "+91 8433409765",
              href: "tel:+8433409765",
            },
            {
              Icon: MapPin,
              label: "Location",
              value: "Saharanpur, Uttar Pradesh",
              href: "#",
            },
          ].map(({ Icon, label, value, href }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                {...(external ? EXT : {})}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/10"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="truncate font-semibold">{value}</div>
                </div>
              </a>
            );
          })}
          <div className="flex items-center gap-2 pt-1">
            {[
              { Icon: Github, href: SOCIALS.github, label: "GitHub" },
              { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...EXT}
                className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:glow-blue"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl glass-strong p-1">
            <div className="relative h-48 overflow-hidden rounded-2xl bg-[#0F172A]">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.35), transparent 55%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-[color:var(--brand-cyan)]" />
                  Saharanpur, UP, India
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            const fd = new FormData(e.target as HTMLFormElement);
            const name = String(fd.get("name") || "");
            const email = String(fd.get("email") || "");
            const message = String(fd.get("message") || "");
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:guptaanshikaa05@gmail.com?subject=${subject}&body=${body}`;
            setTimeout(() => {
              setSending(false);
              setSent(true);
              setTimeout(() => setSent(false), 2400);
              (e.target as HTMLFormElement).reset();
            }, 800);
          }}
          className="rounded-3xl glass-strong p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </span>
              <input
                required
                name="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-[#8B5CF6] focus:bg-white/10 focus:ring-2 focus:ring-[#8B5CF6]/30"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-[#8B5CF6] focus:bg-white/10 focus:ring-2 focus:ring-[#8B5CF6]/30"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-[#8B5CF6] focus:bg-white/10 focus:ring-2 focus:ring-[#8B5CF6]/30"
              placeholder="Tell me about your project..."
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
            {sent ? (
              <>Sent ✓</>
            ) : sending ? (
              <>Sending…</>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ---------------------------- FOOTER ----------------------------------- */

function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-8 md:px-10">
      <div className="mb-10 flex justify-center">
        <svg
          width="100%"
          height="24"
          viewBox="0 0 800 24"
          preserveAspectRatio="none"
          className="max-w-3xl"
        >
          <defs>
            <linearGradient id="fdiv" x1="0" x2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            d="M0 12 Q 200 -8 400 12 T 800 12"
            stroke="url(#fdiv)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="rounded-3xl glass-strong p-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground">
              Designed & Developed by{" "}
              <span className="font-semibold text-foreground">Anshika Gupta</span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground md:justify-start">
              Made with <Heart className="h-3.5 w-3.5 fill-[#F43F5E] text-[#F43F5E]" /> using React
            </div>
          </div>
          <div className="flex items-center gap-2">
            {[
              { Icon: Github, href: SOCIALS.github, label: "GitHub" },
              { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: SOCIALS.email, label: "Email" },
            ].map(({ Icon, href, label }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? EXT : {})}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------- PORTFOLIO -------------------------------- */

function Portfolio() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatePresence>
        {loading ? <LoadingScreen onDone={() => setLoading(false)} /> : null}
      </AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Learning />
        <CertsAndEducation />
        <Stats />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
