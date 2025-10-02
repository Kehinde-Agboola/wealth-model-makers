import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Users, Globe, Calendar } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import resourcesHeroImage from "@/assets/resources-hero.jpg";
import trainingMaterialsImage from "@/assets/training-materials.jpg";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
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
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const iconFloat: Variants = {
  hidden: { scale: 0, rotate: -180 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const Resources = () => {
  const resourceCategories = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Research Publications",
      description: "Access peer-reviewed publications and research papers from the WEALTH programme",
      items: ["Methodology Papers", "Case Studies", "Research Findings", "Policy Briefs"],
      status: "Coming Soon"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Training Materials",
      description: "Comprehensive toolkits and educational resources for mathematical modelling",
      items: ["Statistical Methods Guide", "Modelling Frameworks", "Best Practices", "Tutorial Videos"],
      status: "In Development"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Policy Reports",
      description: "Evidence-based policy recommendations and implementation guides",
      items: ["Policy Briefs", "Implementation Guides", "Stakeholder Reports", "Impact Assessments"],
      status: "Coming Soon"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Toolkits & Software",
      description: "Software tools and computational resources for mathematical modelling",
      items: ["Statistical Software", "Modelling Tools", "Data Analysis Scripts", "Documentation"],
      status: "In Development"
    }
  ];

  const upcomingReleases = [
    {
      title: "Introduction to Mathematical Modelling in Mental Health",
      type: "Training Manual",
      date: "Q2 2024",
      description: "Comprehensive guide covering fundamental concepts and practical applications"
    },
    {
      title: "Policy Implementation Framework",
      type: "Policy Brief",
      date: "Q3 2024", 
      description: "Guidelines for translating research findings into actionable policy"
    },
    {
      title: "WEALTH Statistical Toolkit",
      type: "Software Package",
      date: "Q4 2024",
      description: "Collection of statistical tools and scripts for mental health modelling"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-24 relative overflow-hidden  min-h-[90vh] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${resourcesHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Resources &{" "}
              <motion.span
                className=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
              >
                Publications
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Access comprehensive resources, research publications, and tools
              developed through the WEALTH programme to support mental health
              research and policy development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resource Categories */}
        <section
          className="mb-16 py-16 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.92)), url(${trainingMaterialsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center">
            <motion.div
              className="text-center mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                variants={fadeInUp}
              >
                Resource Categories
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                variants={fadeInUp}
              >
                Comprehensive materials to support research, policy, and
                practice
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-elegant hover:shadow-hero transition-all duration-500 bg-white/90 backdrop-blur-sm group overflow-hidden h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0"
                          variants={iconFloat}
                          whileHover={{
                            scale: 1.1,
                            rotate: 10,
                            boxShadow: "0 8px 20px rgba(16, 185, 129, 0.4)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + 0.2,
                              }}
                              viewport={{ once: true }}
                            >
                              <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                                {category.title}
                              </CardTitle>
                            </motion.div>
                            <motion.span
                              className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + 0.3,
                              }}
                              viewport={{ once: true }}
                            >
                              {category.status}
                            </motion.span>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.4,
                            }}
                            viewport={{ once: true }}
                          >
                            <CardDescription className="text-base mb-4">
                              {category.description}
                            </CardDescription>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {category.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + 0.6 + idx * 0.05,
                            }}
                            viewport={{ once: true }}
                          >
                            <Download className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Upcoming Releases */}
        <motion.section
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="text-center mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              Upcoming Releases
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Stay tuned for new resources and publications
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {upcomingReleases.map((release, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.01,
                  y: -3,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-elegant hover:shadow-hero transition-all duration-500 group overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CardTitle className="text-xl mb-2 group-hover:text-emerald-600 transition-colors">
                            {release.title}
                          </CardTitle>
                        </motion.div>
                        <motion.div
                          className="flex items-center space-x-4 text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{release.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{release.date}</span>
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="text-base">
                        {release.description}
                      </CardDescription>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-primary text-white overflow-hidden relative">
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
                  <CardTitle className="text-2xl md:text-3xl mb-4">
                    Stay Updated on New Resources
                  </CardTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardDescription className="text-white/90 text-lg mb-6">
                    Be the first to know when new publications, toolkits, and
                    resources become available.
                  </CardDescription>
                </motion.div>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
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
                    <Button variant="cta" size="lg" asChild>
                      <a href="mailto:wealth4womeninafrica@gmail.com?subject=Resource Updates">
                        Subscribe to Updates
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="hero" size="lg" asChild>
                      <a href="mailto:wealth4womeninafrica@gmail.com?subject=Resource Request">
                        Request Specific Resources
                      </a>
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
};

export default Resources;