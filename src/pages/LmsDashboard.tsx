"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

type Module = {
  id: string;
  title: string;
  weeks?: string;
  topics: string[];
  resources?: { title: string; kind: "PDF" | "Video" | "Link"; href?: string }[];
  dates?: { label: string; date: string }[];
};

const modules: Module[] = [
  {
    id: "m0",
    title: "Orientation & Fundamentals",
    weeks: "Week 0",
    topics: [
      "Welcome & programme overview",
      "How to learn online effectively",
      "Ethics & research integrity",
    ],
    resources: [
      { title: "Programme Handbook (PDF)", kind: "PDF" },
      { title: "Orientation Video", kind: "Video" },
    ],
  },
  {
    id: "m1",
    title: "Basic Mathematics & Modelling",
    weeks: "Weeks 1–3",
    topics: [
      "Functions, calculus refresher",
      "Difference & differential equations",
      "Model structure & assumptions",
    ],
  },
  {
    id: "m2",
    title: "Statistics & Statistical Modelling",
    weeks: "Weeks 4–6",
    topics: ["Sampling & inference", "Regression basics", "Uncertainty & sensitivity"],
  },
  {
    id: "m3",
    title: "Mathematical Models of Depression",
    weeks: "Weeks 7–9",
    topics: ["State variables & transitions", "Parameterization", "Validation"],
  },
  {
    id: "m4",
    title: "Spatial Modelling",
    weeks: "Weeks 10–11",
    topics: ["Spatial data 101", "Mapping disparities", "Intro to geostatistics"],
  },
  {
    id: "m5",
    title: "Health Economics & Gender",
    weeks: "Weeks 12–13",
    topics: ["Cost-effectiveness basics", "Equity & access", "Gender-responsive policy"],
  },
  {
    id: "m6",
    title: "From Research to Policy (Briefs)",
    weeks: "Weeks 14–16",
    topics: ["Evidence translation", "Writing policy briefs", "Stakeholder engagement"],
  },
];

const importantDates = [
  { label: "Assessment 1 (Modelling Basics)", date: "2025-11-08" },
  { label: "Mid-course Check-in (Mentorship)", date: "2025-12-05" },
  { label: "Capstone Proposal Due", date: "2026-01-20" },
];

const announcements = [
  {
    title: "Welcome to WEALTH!",
    body:
      "Phase 1 runs ~4–5 months at 8–10 hrs/week. Join the orientation session to meet the faculty and mentors.",
    date: "Today",
  },
  {
    title: "📹 Orientation Recording",
    body: "The video will be uploaded under Orientation & Fundamentals > Resources.",
    date: "This week",
  },
];

// Motion helpers
const ease = cubicBezier(0.22, 1, 0.36, 1);
const fadeInUp = (delay = 0.05, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease } },
});

// Sticky tabs config
const TABS = [
  { id: "announcements", label: "Announcements" },
  { id: "courses", label: "Courses" },
  { id: "resources", label: "Resources" },
  { id: "forum", label: "Forum" },
  { id: "calendar", label: "Calendar" },
] as const;

// Heights (px) used for scroll offset
const HEADER_HEIGHT_MD = 72;
const HEADER_HEIGHT_SM = 64;
const TABS_HEIGHT = 56;

export default function LMSPage() {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<(typeof TABS)[number]["id"]>("announcements");

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId)!,
    [activeModuleId]
  );

  // --- Underline measurement state/refs (parent-owned)
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [underline, setUnderline] = useState({ width: 0, x: 0 });

  const measureUnderline = useCallback(() => {
    const container = tabsRef.current;
    const btn = tabRefs.current[activeSection];
    if (!container || !btn) return;
    const x = btn.offsetLeft;
    const width = btn.offsetWidth;
    setUnderline({ x, width });
  }, [activeSection]);

  useEffect(() => {
    measureUnderline();
    const id = requestAnimationFrame(measureUnderline);
    const onResize = () => requestAnimationFrame(measureUnderline);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [measureUnderline]);

  // Observe sections to highlight active tab while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          const id = visible.target.id as (typeof TABS)[number]["id"];
          if (TABS.find((t) => t.id === id)) setActiveSection(id);
        }
      },
      {
        rootMargin: `-${HEADER_HEIGHT_SM + TABS_HEIGHT + 8}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    TABS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll with offset (header + tabs)
  const handleTabClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const isMd = window.matchMedia("(min-width: 768px)").matches;
    const offset = (isMd ? HEADER_HEIGHT_MD : HEADER_HEIGHT_SM) + TABS_HEIGHT + 8;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Skip link */}
      <a
        href="#maincontent"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded bg-black px-3 py-2 text-white"
      >
        Skip to content
      </a>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="WEALTH Logo" className="h-10 w-10 rounded-full border" />
              <div>
                <p className="text-sm tracking-wide text-emerald-700 font-semibold">WEALTH</p>
                <p className="text-xs text-slate-500">
                  Women Derive Mathematical Models for Mental Health
                </p>
              </div>
            </div>

            <button
              className="md:hidden inline-flex items-center gap-2 rounded border px-3 py-1.5 text-sm hover:bg-emerald-50"
              onClick={() => setNavOpen((s) => !s)}
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
            >
              {navOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile nav (optional quick links) */}
        <AnimatePresence>
          {navOpen && (
            <motion.nav
              id="mobile-nav"
              className="md:hidden border-t bg-white"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1, transition: { duration: 0.25, ease } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease } }}
            >
              <div className="px-4 py-3 grid grid-cols-2 gap-3 text-sm">
                {TABS.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="rounded-lg border px-3 py-2 hover:bg-emerald-50"
                    onClick={(e) => {
                      handleTabClick(t.id)(e);
                      setNavOpen(false);
                    }}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky centered tabs */}
      <div className="sticky z-30 bg-white/90 backdrop-blur border-b top-16 md:top-[72px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <nav
              role="tablist"
              aria-label="Section tabs"
              ref={tabsRef}
              className="relative flex items-center justify-center gap-2 md:gap-3 px-4 py-3 h-14"
            >
              {/* baseline line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />

              {/* animated underline (parent measured) */}
              <motion.div
                className="absolute -bottom-px h-[2px] bg-emerald-600 rounded-full"
                initial={false}
                animate={{ x: underline.x, width: underline.width }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />

              {TABS.map((t) => (
                <button
                  key={t.id}
                  ref={(node) => (tabRefs.current[t.id] = node)}
                  role="tab"
                  aria-selected={activeSection === t.id}
                  aria-controls={t.id}
                  onClick={handleTabClick(t.id)}
                  className={`relative rounded-full px-3 md:px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeSection === t.id ? "text-emerald-700" : "text-slate-600 hover:text-emerald-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <section id="maincontent" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 h-max">
          <div className="rounded-xl border">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold tracking-wide text-emerald-700">
                Course Navigation <span className="text-slate-400">· {modules.length} modules</span>
              </p>
            </div>

            <nav className="p-2">
              <ul className="space-y-1">
                {modules.map((m) => {
                  const isActive = activeModuleId === m.id;
                  return (
                    <li key={m.id}>
                      <button
                        onClick={() => setActiveModuleId(m.id)}
                        className={`w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                          isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="block font-medium">{m.title}</span>
                        {m.weeks && (
                          <span className={`block text-xs ${isActive ? "text-emerald-100" : "text-slate-500"}`}>
                            {m.weeks}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="my-3 border-t" />

              <ul className="space-y-1">
                {[
                  { id: "resources", label: "Resources" },
                  { id: "forum", label: "Forum" },
                  { id: "calendar", label: "Calendar" },
                  { id: "contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={handleTabClick(link.id)}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content column */}
        <div className="space-y-10">
          {/* Announcements */}
          <section id="announcements" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Announcements
            </motion.h2>
            <motion.div className="mt-4 grid sm:grid-cols-2 gap-4" {...fadeInUp(0.08, 14)}>
              {announcements.map((a, i) => (
                <article key={i} className="rounded-xl border p-4">
                  <p className="text-xs text-slate-500">{a.date}</p>
                  <h3 className="mt-1 font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{a.body}</p>
                </article>
              ))}
            </motion.div>
          </section>

          {/* Courses */}
          <section id="courses" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Courses
            </motion.h2>
            <motion.p className="mt-2 text-sm text-slate-600 max-w-prose" {...fadeInUp(0.06, 10)}>
              Phase 1 introduces core skills in mathematics, statistics, modelling, spatial analysis,
              and health economics with a strong gender lens. Click a module on the left to preview topics.
            </motion.p>

            <div className="mt-4 rounded-xl border p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease } }}
                  exit={{ opacity: 0, y: -6, transition: { duration: 0.2, ease } }}
                >
                  <h3 className="font-semibold">{activeModule.title}</h3>
                  {activeModule.weeks && <p className="text-xs text-slate-500">{activeModule.weeks}</p>}

                  <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                    {activeModule.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>

                  {activeModule.resources && (
                    <>
                      <p className="mt-4 text-sm font-medium">Module resources</p>
                      <ul className="mt-1 text-sm space-y-1">
                        {activeModule.resources.map((r, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="inline-block rounded-full border px-2 py-0.5 text-xs">{r.kind}</span>
                            {r.href ? (
                              <a
                                href={r.href}
                                className="hover:underline underline-offset-4"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {r.title}
                              </a>
                            ) : (
                              <span>{r.title}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Resources
            </motion.h2>
            <motion.div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" {...fadeInUp(0.08, 12)}>
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">Programme Handbook</p>
                <p className="text-xs text-slate-500">PDF · overview, timelines, policies</p>
              </a>
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">Policy Brief Template</p>
                <p className="text-xs text-slate-500">DOCX · structure & guidance</p>
              </a>
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">Intro to Modelling Slides</p>
                <p className="text-xs text-slate-500">Slides · lecture deck</p>
              </a>
            </motion.div>
          </section>

          {/* Forum */}
          <section id="forum" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Forum
            </motion.h2>
            <motion.div className="mt-3 rounded-xl border p-4" {...fadeInUp(0.08, 12)}>
              <p className="text-sm text-slate-700">
                Join the discussion forum to ask questions, share insights, and connect with peers, mentors, and policymakers.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                <li>Weekly Q&A (office hours)</li>
                <li>Thematic threads for each module</li>
                <li>Peer feedback on assignments & briefs</li>
              </ul>
              <a href="#" className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                Open Community Space
              </a>
            </motion.div>
          </section>

          {/* Calendar */}
          <section id="calendar" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Calendar
            </motion.h2>
            <motion.div className="mt-3 rounded-xl border divide-y" {...fadeInUp(0.08, 10)}>
              {importantDates.map((d, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3">
                  <p className="text-sm">{d.label}</p>
                  <p className="text-xs text-slate-500">{d.date}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Contact (not part of tabs list, kept for completeness) */}
          <section id="contact" className="scroll-mt-40">
            <motion.h2 className="text-xl md:text-2xl font-bold tracking-tight" {...fadeInUp()}>
              Contact
            </motion.h2>
            <motion.div className="mt-3 rounded-xl border p-4" {...fadeInUp(0.08, 10)}>
              <p className="text-sm">
                Email:{" "}
                <a href="mailto:wealth4womeninafrica@gmail.com" className="text-emerald-700 underline underline-offset-4">
                  wealth4womeninafrica@gmail.com
                </a>
              </p>
              <p className="text-sm mt-1">Phone: +234 813 081 7815</p>
              <p className="text-xs text-slate-500 mt-2">
                This page is a public LMS hub—content will be updated as the programme progresses.
              </p>
            </motion.div>
          </section>
        </div>
      </section>
    </main>
  );
}
