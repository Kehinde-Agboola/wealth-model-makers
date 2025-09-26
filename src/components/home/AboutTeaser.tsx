import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Users, Brain, Target, ArrowRight, Sparkles } from "lucide-react";

/* ---------------- CountUp ---------------- */
function CountUp({
  active,
  end,
  suffix = "",
  duration = 2.6,
  start = 0,
}: {
  active: boolean;
  end: number;
  suffix?: string;
  duration?: number;
  start?: number;
}) {
  const [val, setVal] = useState(start);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const total = Math.max(0.6, duration) * 1000;

    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / total);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(start + (end - start) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, duration, end, start]);

  return (
    <span className="tabular-nums">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- Variants (typed) ---------------- */
const statsContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // let children handle their own duration/ease
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

/* ---------------- Component ---------------- */
export default function AboutTeaser() {
  const features = useMemo(
    () => [
      {
        icon: Brain,
        text: "Advanced mathematical modeling for mental health research",
        gradient: "from-purple-500/15 to-pink-500/15",
      },
      {
        icon: Users,
        text: "Collaborative network of researchers, mentors & policymakers",
        gradient: "from-blue-500/15 to-cyan-500/15",
      },
      {
        icon: Target,
        text: "Evidence-based interventions for AGYW in sub-Saharan Africa",
        gradient: "from-emerald-500/15 to-teal-500/15",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { end: 100, suffix: "+", label: "Researchers" },
      { end: 15, suffix: "", label: "Countries" },
      { end: 50, suffix: "+", label: "Studies" },
    ],
    []
  );

  // Trigger stats once in view (not on load)
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Kicker */}
          <motion.div
            className="mx-auto w-fit flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-sm font-semibold text-primary border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Sparkles className="h-4 w-4" />
            Empowering changemakers in research and policy
          </motion.div>

          {/* Copy */}
          <motion.div
            className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <p>
              The{" "}
              <span className="font-semibold text-primary">
                Women Derive Mathematical Models for Mental Health (WEALTH)
              </span>{" "}
              programme is a groundbreaking online training initiative that
              builds capacity in mathematical modeling for depression and mental
              health conditions.
            </p>
            <p>
              We equip researchers and policymakers with cutting-edge tools to
              develop evidence-based interventions that reduce mental health
              challenges among{" "}
              <span className="font-semibold text-foreground">
                Adolescent Girls and Young Women (AGYW)
              </span>{" "}
              across sub-Saharan Africa.
            </p>
          </motion.div>

          {/* Features: responsive flex row (wrap) */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                className={`flex min-h-[88px] flex-1 basis-[280px] items-start gap-4 rounded-2xl border border-white/30 bg-gradient-to-r ${f.gradient} p-5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 shadow-sm">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats: bigger, spaced, count only when visible + staggered entrance */}
          <motion.div
            ref={statsRef}
            variants={statsContainer}
            initial="hidden"
            animate={statsInView ? "show" : "hidden"}
            className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={statItem}
                className="flex min-w-[200px] flex-col items-center justify-center  px-8 py-10"
              >
                <div className="text-5xl md:text-6xl font-bold  tracking-tight text-primary">
                  <CountUp
                    active={statsInView}
                    end={s.end}
                    suffix={s.suffix}
                    duration={2.4 + i * 0.4}
                  />
                </div>
                <div className="mt-3 text-base md:text-lg font-medium text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <button
              onClick={() => (window.location.href = "/about")}
              className="group mx-auto w-fit flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-transform active:scale-[0.99]"
            >
              <span>Learn more about WEALTH</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
