// src/pages/News.tsx
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowRight,
  Bell,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import newsHeroImage from "@/assets/news-hero.jpg";
import { cn } from "@/lib/utils";

/* ---------------- Types ---------------- */
type NewsType = "announcement" | "team" | "funding";
type NewsItem = {
  id: string;
  date: string;
  datetime: string;
  category: string;
  title: string;
  excerpt: string;
  type: NewsType;
  icon: JSX.Element;
};
type UpcomingEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
};

/* ---------------- Data ---------------- */
const ALL_NEWS: NewsItem[] = [
  {
    id: "2024-launch",
    date: "March 2024",
    datetime: "2024-03-01",
    category: "Programme Launch",
    title: "WEALTH Programme Officially Launches",
    excerpt:
      "The Gates Foundation-funded WEALTH programme launches to address mental health challenges among AGYW in Sub-Saharan Africa using mathematical modelling.",
    type: "announcement",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: "2024-team",
    date: "February 2024",
    datetime: "2024-02-01",
    category: "Team Formation",
    title: "Expert Faculty Team Assembled",
    excerpt:
      "Distinguished faculty from CoMUI join WEALTH, bringing expertise in psychiatry, biostatistics, and epidemiology to lead the initiative.",
    type: "team",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "2024-funding",
    date: "January 2024",
    datetime: "2024-01-01",
    category: "Funding",
    title: "Gates Foundation Grant Awarded",
    excerpt:
      "WEALTH receives significant funding from the Gates Foundation to build capacity in mathematical modelling for mental health research.",
    type: "funding",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const UPCOMING: UpcomingEvent[] = [
  {
    id: "q2-apps",
    date: "Q2 2024",
    title: "Phase 1 Applications Open",
    description:
      "Applications for the introductory phase open for qualified candidates.",
  },
  {
    id: "q3-orientation",
    date: "Q3 2024",
    title: "First Cohort Orientation",
    description:
      "Welcome orientation and onboarding for the first cohort of participants.",
  },
  {
    id: "q4-workshop",
    date: "Q4 2024",
    title: "Research Methodology Workshop",
    description:
      "An intensive workshop on mathematical modelling techniques for mental health research.",
  },
];

/* ---------------- Helpers ---------------- */
function typeClasses(t: NewsType) {
  switch (t) {
    case "announcement":
      return "bg-gradient-to-r from-emerald-500 to-teal-500 text-white";
    case "team":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "funding":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ---------------- Component ---------------- */
export default function News() {
  const [filter, setFilter] = useState<"all" | NewsType>("all");
  const [visible, setVisible] = useState(3);

  const categories = useMemo(
    () =>
      [
        { key: "all", label: "All" },
        { key: "announcement", label: "Announcements" },
        { key: "team", label: "Team" },
        { key: "funding", label: "Funding" },
      ] as const,
    []
  );

  const filtered = useMemo(
    () =>
      filter === "all" ? ALL_NEWS : ALL_NEWS.filter((n) => n.type === filter),
    [filter]
  );
  const items = filtered.slice(0, visible);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] md:min-h-[100vh] grid place-items-center overflow-hidden"
        aria-label="News hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(7,59,58,0.90), rgba(7,59,58,0.86)), url(${newsHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Latest <span className="text-emerald-300">News & Updates</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-4 text-lg md:text-xl text-white/90"
            >
              Stay informed about the latest developments, announcements, and
              milestones from the WEALTH programme.
            </motion.p>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-4 py-2 backdrop-blur">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Bell className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium leading-tight">
                    Get updates by email
                  </div>
                  <div className="text-white/70 text-sm">
                    Research highlights & programme news
                  </div>
                </div>
                <a
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "ml-2"
                  )}
                  href="mailto:wealth4womeninafrica@gmail.com?subject=Newsletter Subscription"
                >
                  Subscribe
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter */}
        <section aria-label="News filter" className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => {
                  setFilter(c.key as typeof filter);
                  setVisible(3);
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  filter === c.key
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                )}
                aria-pressed={filter === c.key}
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>

        {/* Recent Updates — responsive flexbox portrait cards */}
        <section className="mb-16" aria-label="Recent updates">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recent Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh news and announcements from WEALTH
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-[280px] md:w-[300px]"
              >
                <Card className="flex h-[420px] flex-col items-center text-center shadow-elegant hover:shadow-hero transition-all duration-300 hover:-translate-y-0.5">
                  <CardHeader className="w-full items-center">
                    {/* Category pill + date */}
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <Badge
                        className={cn(
                          "inline-flex items-center gap-1.5",
                          typeClasses(item.type)
                        )}
                      >
                        {item.icon}
                        <span>{item.category}</span>
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time dateTime={item.datetime}>{item.date}</time>
                      </div>
                    </div>

                    <CardTitle className="mt-1 text-lg leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto px-6">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Load more */}
          {visible < filtered.length && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisible((v) => v + 3)}
                className="hover:translate-y-[-1px] transition"
              >
                Load more
              </Button>
            </div>
          )}
        </section>

        {/* Upcoming Events (unchanged layout) */}
        <section className="mb-16" aria-label="Upcoming events">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for these milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UPCOMING.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {event.date}
                    </Badge>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center" aria-label="More information">
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-3">
                Want to Know More?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg mb-6">
                Have questions about the programme or want specific updates? Get
                in touch with our team.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:wealth4womeninafrica@gmail.com?subject=Programme Inquiry">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-transparent text-white border-white/50 hover:bg-white/10"
                >
                  <a href="tel:+2348130817815">Call Us</a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
}
