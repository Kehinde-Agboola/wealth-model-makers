"use client";

import { useMemo, useState } from "react";

type Module = {
  id: string;
  title: string;
  weeks?: string;
  topics: string[];
  resources?: {
    title: string;
    kind: "PDF" | "Video" | "Link";
    href?: string;
  }[];
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
    topics: [
      "Sampling & inference",
      "Regression basics",
      "Uncertainty & sensitivity",
    ],
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
    topics: [
      "Spatial data 101",
      "Mapping disparities",
      "Intro to geostatistics",
    ],
  },
  {
    id: "m5",
    title: "Health Economics & Gender",
    weeks: "Weeks 12–13",
    topics: [
      "Cost-effectiveness basics",
      "Equity & access",
      "Gender-responsive policy",
    ],
  },
  {
    id: "m6",
    title: "From Research to Policy (Briefs)",
    weeks: "Weeks 14–16",
    topics: [
      "Evidence translation",
      "Writing policy briefs",
      "Stakeholder engagement",
    ],
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
    body: "Phase 1 runs ~4–5 months at 8–10 hrs/week. Join the orientation session to meet the faculty and mentors.",
    date: "Today",
  },
  {
    title: "📹 Orientation Recording",
    body: "The video will be uploaded under Orientation & Fundamentals > Resources.",
    date: "This week",
  },
];

export default function LMSPage() {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId)!,
    [activeModuleId]
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
           
            <img
              src="/logo.png"
              alt="WEALTH Logo"
              className="h-10 w-10 rounded-full border"
            />
            <div>
              <p className="text-sm tracking-wide text-emerald-700 font-semibold">
                WEALTH
              </p>
              <p className="text-xs text-slate-500">
                Women Derive Mathematical Models for Mental Health
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#announcements" className="hover:text-emerald-700">
              Announcements
            </a>
            <a href="#courses" className="hover:text-emerald-700">
              Courses
            </a>
            <a href="#resources" className="hover:text-emerald-700">
              Resources
            </a>
            <a href="#forum" className="hover:text-emerald-700">
              Forum
            </a>
            <a href="#calendar" className="hover:text-emerald-700">
              Calendar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-[1.1fr_0.9fr] gap-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Innovative Capacity-Building for Mental Health
            </h1>
            <p className="mt-3 text-slate-600 max-w-prose">
              WEALTH is an online training programme focused on mathematical
              modelling of depression and related mental health conditions among
              Adolescent Girls and Young Women (AGYW) in Sub-Saharan Africa.
              This LMS page is a public hub—no login required.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="inline-flex items-center rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Explore Courses
              </a>
              <a
                href="#announcements"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Latest Announcements
              </a>
            </div>
          </div>

          <div className="rounded-xl border p-4 md:p-6 bg-emerald-50/50">
            <p className="text-sm font-semibold text-emerald-800">
              Programme Duration
            </p>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>
                <span className="font-medium">Phase 1:</span> Intro + Intensive
                Coursework (≈5 months, 8–10 hrs/week)
              </li>
              <li>
                <span className="font-medium">Phase 2:</span> Research,
                Mentorship & Networking (12–18 months)
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-600">
              Outcome: practical modelling skills, research output, and a policy
              brief that strengthens evidence for gender-responsive action.
            </p>
          </div>
        </div>
      </section>

      {/* Main grid: Sidebar + Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 h-max">
          <div className="rounded-xl border">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold tracking-wide text-emerald-700">
                Course Navigation
              </p>
            </div>

            <nav className="p-2">
              <ul className="space-y-1">
                {modules.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => setActiveModuleId(m.id)}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm ${
                        activeModuleId === m.id
                          ? "bg-emerald-600 text-white"
                          : "hover:bg-emerald-50"
                      }`}
                      aria-current={
                        activeModuleId === m.id ? "page" : undefined
                      }
                    >
                      <span className="block font-medium">{m.title}</span>
                      {m.weeks && (
                        <span
                          className={`block text-xs ${
                            activeModuleId === m.id
                              ? "text-emerald-100"
                              : "text-slate-500"
                          }`}
                        >
                          {m.weeks}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="my-3 border-t" />

              <ul className="space-y-1">
                <li>
                  <a
                    href="#resources"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#forum"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="#calendar"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50"
                  >
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-emerald-50"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-10">
          {/* Announcements */}
          <section id="announcements" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Announcements
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {announcements.map((a, i) => (
                <article key={i} className="rounded-xl border p-4">
                  <p className="text-xs text-slate-500">{a.date}</p>
                  <h3 className="mt-1 font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{a.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Courses overview */}
          <section id="courses" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Courses
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-prose">
              Phase 1 introduces core skills in mathematics, statistics,
              modelling, spatial analysis, and health economics with a strong
              gender lens. Click a module on the left to preview topics.
            </p>

            <div className="mt-4 rounded-xl border p-4">
              <h3 className="font-semibold">{activeModule.title}</h3>
              {activeModule.weeks && (
                <p className="text-xs text-slate-500">{activeModule.weeks}</p>
              )}

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
                        <span className="inline-block rounded-full border px-2 py-0.5 text-xs">
                          {r.kind}
                        </span>
                        <span>{r.title}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Resources
            </h2>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">Programme Handbook</p>
                <p className="text-xs text-slate-500">
                  PDF · overview, timelines, policies
                </p>
              </a>
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">Policy Brief Template</p>
                <p className="text-xs text-slate-500">
                  DOCX · structure & guidance
                </p>
              </a>
              <a className="rounded-xl border p-4 hover:bg-emerald-50" href="#">
                <p className="text-sm font-semibold">
                  Intro to Modelling Slides
                </p>
                <p className="text-xs text-slate-500">Slides · lecture deck</p>
              </a>
            </div>
          </section>

          {/* Forum */}
          <section id="forum" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Forum
            </h2>
            <div className="mt-3 rounded-xl border p-4">
              <p className="text-sm text-slate-700">
                Join the discussion forum to ask questions, share insights, and
                connect with peers, mentors, and policymakers.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                <li>Weekly Q&A (office hours)</li>
                <li>Thematic threads for each module</li>
                <li>Peer feedback on assignments & briefs</li>
              </ul>
              <a
                href="#"
                className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Open Community Space
              </a>
            </div>
          </section>

          {/* Calendar */}
          <section id="calendar" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Calendar
            </h2>
            <div className="mt-3 rounded-xl border divide-y">
              {importantDates.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <p className="text-sm">{d.label}</p>
                  <p className="text-xs text-slate-500">{d.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Contact
            </h2>
            <div className="mt-3 rounded-xl border p-4">
              <p className="text-sm">
                Email:{" "}
                <a
                  href="mailto:wealth4womeninafrica@gmail.com"
                  className="text-emerald-700 underline underline-offset-4"
                >
                  wealth4womeninafrica@gmail.com
                </a>
              </p>
              <p className="text-sm mt-1">Phone: +234 813 081 7815</p>
              <p className="text-xs text-slate-500 mt-2">
                This page is a public LMS hub—content will be updated as the
                programme progresses.
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-xs text-slate-500">
          © {new Date().getFullYear()} WEALTH — Women Derive Mathematical Models
          for Mental Health. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
