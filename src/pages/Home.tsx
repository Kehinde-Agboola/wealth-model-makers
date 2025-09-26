// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Users, BookOpen, Network } from "lucide-react";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProgramTimeline from "@/components/home/programTimeline";
import ProgramDurations from "@/components/home/programDuration";
import MeetOurTeam from "@/components/home/MeetOurTeam";
import WhatsNew from "@/components/home/WhatsNew";
import IntroVideo from "@/components/home/introVideo";
import TeamsStrip from "@/components/home/TeamStrip"
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import capacityImage from "@/assets/capacity-building.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";
import networkingImage from "@/assets/networking.jpg";
import teamPreviewImage from "@/assets/team-preview.jpg";
import newsPreviewImage from "@/assets/news-preview.jpg";
import programPhasesImage from "@/assets/program-phases.jpg";

const cta =
  "inline-flex items-center justify-center rounded-xl bg-primary text-white h-12 px-6 font-semibold hover:bg-primary/90 transition-colors shadow";
const outline =
  "inline-flex items-center justify-center rounded-xl border border-white/30 text-white h-12 px-6 font-semibold hover:bg-white/10 transition-colors";

export default function Home() {
  const heroSlides = [
    {
      image: heroSlide1,
      title: "Women Derive Mathematical Models for Mental Health",
      description: "Transforming mental health through data-driven models.",
    },
    {
      image: heroSlide2,
      title: "Empowering Women Researchers",
      description:
        "Building capacity in mathematical modelling for mental health.",
    },
    {
      image: heroSlide3,
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

  // ---- Autoplay without external dep
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!api) return;
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
    start();
    return stop;
  }, [api]);

  const onMouseEnter = () => (pausedRef.current = true);
  const onMouseLeave = () => (pausedRef.current = false);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO (unchanged) */}
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
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.3)), url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                      className="max-w-4xl text-center mx-auto"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-lg md:text-2xl text-white/90">
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
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,.35)_100%)]" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-black/30 border-white/20 text-white hover:bg-black/40" />
          <CarouselNext className="right-4 bg-black/30 border-white/20 text-white hover:bg-black/40" />
        </Carousel>
      </section>

      {/* NEW: Section components */}
      <motion.div className="my-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AboutTeaser />
        <IntroVideo />
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
