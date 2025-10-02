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
type NewsItem = {
  id: string;
  date: string;
  datetime: string;
  category: string;
  title: string;
  excerpt: string;
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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const pulseIcon: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

/* ---------------- Component ---------------- */
export default function News() {
  const [visible, setVisible] = useState(3);

  const items = ALL_NEWS.slice(0, visible);

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
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Latest <motion.span 
                className="text-emerald-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
              >
                News & Updates
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg md:text-xl text-white/90"
            >
              Stay informed about the latest developments, announcements, and
              milestones from the WEALTH programme.
            </motion.p>

            {/* Newsletter CTA */}
            <motion.div
              variants={slideInFromBottom}
              className="mt-8"
            >
              <motion.div 
                className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-4 py-2 backdrop-blur"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white"
                  variants={pulseIcon}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bell className="h-5 w-5" />
                </motion.div>
                <div className="text-left">
                  <motion.div 
                    className="text-white font-medium leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Get updates by email
                  </motion.div>
                  <motion.div 
                    className="text-white/70 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Research highlights & programme news
                  </motion.div>
                </div>
                <motion.a
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "ml-2"
                  )}
                  href="mailto:wealth4womeninafrica@gmail.com?subject=Newsletter Subscription"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Subscribe
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">


        {/* Recent Updates — responsive flexbox portrait cards */}
        <motion.section 
          className="mb-16" 
          aria-label="Recent updates"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="text-center mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-1.5"
              variants={fadeInUp}
            >
              Recent Updates
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Fresh news and announcements from WEALTH
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {items.map((item, index) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="w-[280px] md:w-[300px]"
                style={{ 
                  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                }}
              >
                <Card className="flex h-[320px] flex-col items-center text-center shadow-elegant hover:shadow-hero transition-all duration-500 overflow-hidden group">
                  <CardHeader className="w-full flex flex-col items-center gap-2 pb-2">
                    {/* Category pill + date */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        className="inline-flex items-center gap-1.5 group-hover:scale-105 transition-transform bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <span>{item.category}</span>
                      </Badge>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={item.datetime}>{item.date}</time>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="mt-1 text-lg leading-snug group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="px-6 pt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="text-sm leading-relaxed">
                        {item.excerpt}
                      </CardDescription>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          {/* Load more */}
          {visible < ALL_NEWS.length && (
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setVisible((v) => v + 3)}
                  className="hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
                >
                  Load more
                </Button>
              </motion.div>
            </motion.div>
          )}
        </motion.section>

        {/* Upcoming Events */}
        <motion.section 
          className="mb-16" 
          aria-label="Upcoming events"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="text-center mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-2"
              variants={fadeInUp}
            >
              Upcoming Events
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Mark your calendar for these milestones
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {UPCOMING.map((event, index) => (
              <motion.div
                key={event.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="perspective-1000"
              >
                <Card className="text-center shadow-elegant hover:shadow-hero transition-all duration-500 group overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 8px 20px rgba(16, 185, 129, 0.4)"
                      }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                    >
                      <Calendar className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="outline" 
                        className="mb-3 group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-all duration-300"
                      >
                        {event.date}
                      </Badge>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors duration-300">
                        {event.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="text-sm">
                        {event.description}
                      </CardDescription>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          className="text-center" 
          aria-label="More information"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl md:text-3xl mb-3">
                    Want to Know More?
                  </CardTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardDescription className="text-white/90 text-lg mb-6">
                    Have questions about the programme or want specific updates? Get
                    in touch with our team.
                  </CardDescription>
                </motion.div>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="lg" asChild>
                      <a href="mailto:wealth4womeninafrica@gmail.com?subject=Programme Inquiry">
                        Contact Us 
                        <motion.div
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="bg-transparent text-white border-white/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <a href="tel:+2348130817815">Call Us</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
