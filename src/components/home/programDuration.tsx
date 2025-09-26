import { motion } from "framer-motion";
import { Clock, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
export type Phase = { title: string; duration: string; description: string };

export default function ProgramDurations({
  bgImage,
  phases,
  outcomes,
}: {
  bgImage: string;
  phases: Phase[];
  outcomes: string[];
}) {
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
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Programme Duration
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured learning pathway spanning multiple phases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title + i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl border bg-white p-5 shadow-elegant"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-emerald-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h3 className="text-lg font-semibold">{phase.title}</h3>
                <div className="flex items-center text-primary">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{phase.duration}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary to-emerald-500 rounded-2xl p-6 md:p-8 text-white shadow-hero"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <Target className="h-12 w-12 mx-auto mb-4 text-white/90" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Expected Outcomes
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Participants gain comprehensive skills and opportunities to
              advance their careers in mental health research
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o, i) => (
              <div key={o + i} className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-white/90 flex-shrink-0" />
                <span className="text-white/95">{o}</span>
              </div>
            ))}
          </div>
            <div className="mt-8 flex justify-center">
              <Link
                to={'/lms'}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white/95 px-6 font-semibold text-primary hover:bg-white"
              >
                Begin Your Journey Here…
              </Link>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
    