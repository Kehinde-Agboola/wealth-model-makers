import { motion } from "framer-motion";

export type Highlight = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function ProgramTimeline({
  highlights,
}: {
  highlights: Highlight[];
}) {
  return (
    <motion.section
      className="py-16 bg-muted/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Programme Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training designed to empower women researchers in
            mathematical modelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((h, i) => (
            <motion.article
              key={h.title + i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="overflow-hidden text-center shadow-elegant hover:shadow-hero transition-all duration-300 h-full rounded-2xl border bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow">
                  {h.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
