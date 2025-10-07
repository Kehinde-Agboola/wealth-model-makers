// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Users, BookOpen, Network } from "lucide-react";

import AboutTeaser from "@/components/home/AboutTeaser";
import ProgramTimeline from "@/components/home/programTimeline";
import ProgramDurations from "@/components/home/programDuration";
import MeetOurTeam from "@/components/home/MeetOurTeam";
import WhatsNew from "@/components/home/WhatsNew";
import IntroVideo from "@/components/home/introVideo";
// import TeamsStrip from "@/components/home/TeamStrip"

import capacityImage from "@/assets/capacity-building.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";
import networkingImage from "@/assets/networking.jpg";
import teamPreviewImage from "@/assets/team-preview.jpg";
import newsPreviewImage from "@/assets/news-preview.jpg";
import programPhasesImage from "@/assets/program-phases.jpg";

import wealthTeamPhoto from "@/assets/team.jpg";
import wealthPresentation from "@/assets/present.jpg";
import wealthWorkshop from "@/assets/workshop.jpg";
import wealthCollaboration from "@/assets/collaboration.jpg";

const cta =
  "inline-flex items-center justify-center rounded-xl bg-primary text-white h-12 px-6 font-semibold hover:bg-primary/90 transition-colors shadow";
const outline =
  "inline-flex items-center justify-center rounded-xl border border-white/30 text-white h-12 px-6 font-semibold hover:bg-white/10 transition-colors";

export default function Home() {
  const heroSlides = [
    {
      image: wealthWorkshop,
      title: "Women Derive Mathematical Models for Mental Health",
      description: "Transforming mental health through data-driven models.",
    },
    {
      image: wealthCollaboration,
      title: "Empowering Women Researchers",
      description:
        "Building capacity in mathematical modelling for mental health.",
    },
    {
      image: wealthPresentation,
      title: "Research Excellence",
      description:
        "Addressing depression affecting adolescent girls and young women.",
    },
  ];

  const programHighlights = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Capacity Building",
      description:
        "Develop expertise in statistical and mathematical modelling of depression and related conditions among AGYW.",
      image: capacityImage,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship",
      description:
        "Receive guidance from experienced mentors in mental health research, modelling, and policy advocacy.",
      image: mentorshipImage,
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking",
      description:
        "Connect with a diverse community of researchers, policymakers, and experts.",
      image: networkingImage,
    },
  ];

  const phases = [
    {
      title: "Phase 1: Introductory Phase",
      duration: "4 weeks",
      description: "Foundation building and orientation",
    },
    {
      title: "Phase 2: Intensive Coursework",
      duration: "5 months",
      description: "8–10 hours/week structured learning",
    },
    {
      title: "Phase 3: Research & Development",
      duration: "12–18 months",
      description: "Mentorship and networking",
    },
  ];

  const outcomes = [
    "Valuable research experience",
    "Expert mentorship opportunities",
    "Networking with professionals",
    "Ability to publish research papers",
    "Policy brief development skills",
  ];

  /** ---------- HERO: lightweight autoplay + dots ---------- */
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // subscribe to carousel selection
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    setCount(api.scrollSnapList().length);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // autoplay (paused on hover/visibility/reduced motion)
  useEffect(() => {
    if (!api || prefersReducedMotion) return;

    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = window.setInterval(() => {
        if (!pausedRef.current) api.scrollNext();
      }, 5000);
    };
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const visHandler = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", visHandler);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", visHandler);
    };
  }, [api, prefersReducedMotion]);

  const onMouseEnter = () => (pausedRef.current = true);
  const onMouseLeave = () => (pausedRef.current = false);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ---------- HERO (optimized) ---------- */}
      <section className="relative overflow-hidden">
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative text-white h-[100svh] min-h-[640px] flex items-center select-none"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onTouchStart={onMouseEnter}
                  onTouchEnd={onMouseLeave}
                >
                  {/* Use <img> to unlock native perf: decoding/lazy/srcSet/sizes */}
                  <picture>
                    {/* (Optional) add webp/avif sources if you have them generated */}
                    {/* <source srcSet={`${slide.imageWebp} 1x, ${slide.imageWebp2x} 2x`} type="image/webp" /> */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      decoding="async"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="100vw"
                      // If you have different widths exported, provide srcSet here:
                      // srcSet={`${slide.image_1280} 1280w, ${slide.image_1920} 1920w, ${slide.image_2560} 2560w`}
                    />
                  </picture>

                  {/* Gradient & subtle vignette overlay (pure CSS, zero JS) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/10" />
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,.25)_100%)]" />

                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                      className="max-w-4xl text-center mx-auto"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-[80%] mx-auto">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-2xl text-white/90">
                        {slide.description}
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/about" className={cta}>
                          Learn About the Program{" "}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link to="/contact" className={outline}>
                          Contact Us
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Removed arrow buttons for minimal UI */}

          {/* Dots/Pagination (lightweight, accessible) */}
          <nav
            aria-label="Hero slides"
            className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2"
          >
            <ul className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => {
                const isActive = i === selected;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={isActive ? "true" : "false"}
                      onClick={() => api?.scrollTo(i)}
                      className={[
                        "h-2.5 w-2.5 rounded-full transition-[transform,opacity] duration-300",
                        "bg-white/70 hover:bg-white",
                        isActive ? "scale-125 opacity-100" : "opacity-60",
                      ].join(" ")}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </Carousel>
      </section>

      {/* ---------- Main Sections ---------- */}
      <motion.div
        className="my-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AboutTeaser />
        <IntroVideo />

        {/* WEALTH Programme Activities Gallery */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                WEALTH Programme in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our collaborative efforts in building capacity, sharing
                knowledge, and advancing mental health research across
                Sub-Saharan Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <CardImage
                  src={wealthTeamPhoto}
                  alt="WEALTH Programme Team Meeting"
                  h="h-64"
                  title="Team Collaboration"
                  subtitle="Bringing together experts from across Africa"
                />
                <CardImage
                  src={wealthCollaboration}
                  alt="WEALTH Programme Collaborative Work"
                  h="h-48"
                  title="Research Development"
                  subtitle="Developing innovative mathematical models"
                />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CardImage
                  src={wealthPresentation}
                  alt="WEALTH Programme Presentation"
                  h="h-48"
                  title="Knowledge Sharing"
                  subtitle="Presenting research findings and insights"
                />
                <CardImage
                  src={wealthWorkshop}
                  alt="WEALTH Programme Workshop"
                  h="h-64"
                  title="Capacity Building"
                  subtitle="Training sessions and skill development"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* <TeamsStrip bgImage={teamsStripImage} lmsPath="/lms" /> */}
      </motion.div>

      <ProgramTimeline highlights={programHighlights} />
      <ProgramDurations
        bgImage={programPhasesImage}
        phases={phases}
        outcomes={outcomes}
      />
      <MeetOurTeam bgImage={teamPreviewImage} />
      <WhatsNew bgImage={newsPreviewImage} />
    </motion.div>
  );
}

/** ---------- Small helper for gallery cards (DRY + consistent) ---------- */
function CardImage({
  src,
  alt,
  h,
  title,
  subtitle,
}: {
  src: string;
  alt: string;
  h: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={src}
        alt={alt}
        className={`w-full ${h} object-cover transition-transform duration-300 group-hover:scale-110`}
        decoding="async"
        loading="lazy"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-white/90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
