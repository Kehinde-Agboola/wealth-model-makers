import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, BookOpen, Globe, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import aboutHeroImage from "@/assets/about-hero.jpg";
import objectivesBgImage from "@/assets/objectives-bg.jpg";

const About = () => {
  const objectives = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Generate Context-Specific Interventions",
      description: "Develop data-driven interventions tailored for mental health challenges in Sub-Saharan Africa."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Strengthen Evidence-Based Policy",
      description: "Inform gender-responsive policy and action through robust evidence and research."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Cultivate Women Modellers",
      description: "Build a critical mass of women modellers to drive change in health systems and research."
    }
  ];

  const activities = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Capacity Building",
      description: "Structured training in modelling, mental health, and gender studies",
      details: [
        "Statistical and mathematical modelling techniques",
        "Mental health research methodologies", 
        "Gender-responsive research approaches",
        "Policy application frameworks"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentoring",
      description: "Pairing researchers and policymakers with experienced professionals",
      details: [
        "One-on-one mentorship with experts",
        "Career development guidance",
        "Research methodology support",
        "Publication and dissemination strategies"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Networking",
      description: "Building connections through various collaborative platforms",
      details: [
        "Interactive webinars and workshops",
        "Regional and international conferences",
        "Online communities and forums",
        "Collaborative research opportunities"
      ]
    }
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="py-24 relative overflow-hidden  min-h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${aboutHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 bg-white/10 text-white border-white/20"
              >
                Gates Foundation Funded
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              About{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                WEALTH
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              An innovative training initiative building capacity in
              mathematical modelling to address depression and related mental
              health conditions among adolescent girls and young women in
              Sub-Saharan Africa.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Full Programme Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="mb-12 bg-gradient-primary text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xlmd:text-3xl lg:text-4xl mb-4">
                Utilizing Mathematical Modelling to Tackle Depression and
                Related Mental Health Conditions
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Among Adolescent Girls and Young Women (AGYW) in Sub-Saharan
                Africa Project
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Programme Objectives */}
        <motion.section
          className="mb-16 py-16 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.92)), url(${objectivesBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Programme Objectives
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                WEALTH aims to equip early and mid-career researchers and
                policymakers with advanced skills
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                    <CardHeader>
                      <motion.div
                        className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {objective.icon}
                      </motion.div>
                      <CardTitle className="text-lg">
                        {objective.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {objective.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Programme Activities */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Programme Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive activities designed to build expertise and foster
              collaboration
            </p>
          </motion.div>

          <div className="space-y-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0 mx-auto lg:mx-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {activity.icon}
                      </motion.div>
                      <div className="flex-1 text-center lg:text-left">
                        <CardTitle className="text-xl mb-2">
                          {activity.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-4">
                          {activity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* FLEXBOX instead of grid */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                      {activity.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center flex-[1_1_45%] gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + 0.1 * idx, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Award className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Funding Information */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Funded by the Gates Foundation
              </CardTitle>
              <CardDescription className="text-base max-w-3xl mx-auto leading-relaxed">
                The WEALTH project is proudly supported by the Gates Foundation,
                enabling us to build critical capacity in mathematical modelling
                for mental health research across Sub-Saharan Africa. This
                partnership reflects our shared commitment to evidence-based
                solutions that can transform the lives of adolescent girls and
                young women.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;