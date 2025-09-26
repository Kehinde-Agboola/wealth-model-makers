import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Target, Award } from "lucide-react";

export default function ProgramDurationsRich({
  bgImage,
  lmsPath = "/lms",
}: {
  bgImage: string;
  lmsPath?: string;
}) {
  const phases = [
    {
      title: "Phase 1: Introductory Phase",
      duration: "4 weeks",
      expects: [
        "Orientation",
        "Foundations in modelling",
        "Programme overview",
      ],
    },
    {
      title: "Phase 2: Intensive Coursework",
      duration: "5 months",
      expects: [
        "Engaging lectures",
        "Interactive mentor sessions",
        "Structured assignments (8–10 hrs/week)",
      ],
    },
    {
      title: "Phase 3: Research, Mentorship & Networking",
      duration: "12–18 months",
      expects: [
        "Hands-on research",
        "Ongoing mentorship",
        "Networking & policy brief development",
      ],
    },
  ];

  const outcomes = [
    "Valuable research experience",
    "Expert guidance & mentorship",
    "Strong professional network",
    "Publishable outputs & policy briefs",
  ];

  return (
    <motion.section
      className="py-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.95), rgba(255,255,255,.95)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Programme Duration
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear, structured pathway across three phases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {phases.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white p-6 shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  <Clock className="h-4 w-4 mr-1" /> {p.duration}
                </span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {p.expects.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Outcomes */}
        <div className="rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r from-primary to-emerald-500 shadow-hero">
          <div className="text-center mb-6">
            <Target className="h-10 w-10 mx-auto mb-3 text-white/90" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Expected Outcomes
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              By the end of the programme, participants will be equipped to
              advance their careers in mental health research & modelling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {outcomes.map((o) => (
              <div key={o} className="flex items-center gap-2">
                <Award className="h-5 w-5 text-white/90" />
                <span className="text-white/95">{o}</span>
              </div>
            ))}
          </div>

          {/* LMS CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              to={lmsPath}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white/95 px-6 font-semibold text-primary hover:bg-white"
            >
              Begin Your Journey Here…
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
