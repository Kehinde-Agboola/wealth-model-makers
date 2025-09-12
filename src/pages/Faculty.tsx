import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import facultyHeroImage from "@/assets/faculty-hero.jpg";
import facultyPlaceholder1 from "@/assets/faculty-placeholder-1.jpg";
import facultyPlaceholder2 from "@/assets/faculty-placeholder-2.jpg";
import facultyPlaceholder3 from "@/assets/faculty-placeholder-3.jpg";

const Faculty = () => {
  const faculty = [
    {
      name: "Prof. Olayinka Omigbodun",
      credentials: "FAS, FNAMed, FAMedS",
      title: "Principal Investigator",
      position: "Professor of Psychiatry & Founding Director, CCAMH, CoMUI",
      specialization: "Child & Youth Psychiatry, Women's Mental Health",
      description: "Leading expert in child and adolescent psychiatry with extensive experience in mental health research and policy development across Sub-Saharan Africa.",
      profileUrl: "https://www.com.ui.edu.ng/index.php/prof-olayinka-o-omigbodun",
      image: facultyPlaceholder1,
      achievements: [
        "Founding Director, Centre for Child and Adolescent Mental Health",
        "Fellow of the Academy of Science (FAS)",
        "Fellow of the Nigerian Academy of Medicine (FNAMed)",
        "Fellow of the Academy of Medical Sciences (FAMedS)"
      ]
    },
    {
      name: "Prof. Oyindamola B. Yusuf",
      credentials: "PhD",
      title: "Co-Principal Investigator",
      position: "Professor of Biostatistics, CoMUI",
      specialization: "Statistical Analysis & Mathematical Modelling",
      description: "Renowned biostatistician with expertise in advanced statistical methods and mathematical modelling for health research and policy applications.",
      profileUrl: "https://com.ui.edu.ng/index.php/prof-oyindamola-b-yusuf",
      image: facultyPlaceholder2,
      achievements: [
        "Professor of Biostatistics",
        "Expert in Statistical Analysis",
        "Mathematical Modelling Specialist",
        "Health Research Methodology Leader"
      ]
    },
    {
      name: "Dr. Eniola A. Bamgboye",
      credentials: "PhD",
      title: "Co-Principal Investigator", 
      position: "Senior Lecturer, CoMUI",
      specialization: "Clinical Epidemiology, Spatial Modelling, Health Economics",
      description: "Specialist in clinical epidemiology with particular expertise in spatial modelling and health economics applications in Sub-Saharan Africa.",
      profileUrl: "https://cartafrica.org/fellows-and-graduate/eniola-bamgboye/",
      image: facultyPlaceholder3,
      achievements: [
        "Clinical Epidemiology Expert",
        "Spatial Modelling Specialist", 
        "Health Economics Researcher",
        "CARTA Fellow"
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Basic Mathematics & Modelling",
      description: "Foundational mathematical concepts and modelling techniques"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Mental Health",
      description: "Clinical expertise in adolescent and women's mental health"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Statistical Modelling",
      description: "Advanced statistical methods and analytical techniques"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Spatial Modelling",
      description: "Geographic and spatial analysis for health applications"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Policy Applications",
      description: "Translating research findings into actionable policy"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Epidemiological Principles",
      description: "Disease patterns and public health methodology"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Health Economics",
      description: "Economic evaluation and health system analysis"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Gender Studies",
      description: "Gender-responsive research and analysis methods"
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
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${facultyHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Expert Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our distinguished faculty brings together expertise in psychiatry, biostatistics, 
              epidemiology, and policy to lead the WEALTH programme.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Faculty Profiles */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-elegant hover:shadow-hero transition-all duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                              <CardTitle className="text-xl lg:text-2xl text-foreground">
                                {member.name}
                              </CardTitle>
                              <Badge variant="secondary" className="w-fit">
                                {member.credentials}
                              </Badge>
                            </div>
                            <div className="space-y-2 mb-4">
                              <Badge variant="outline" className="bg-gradient-primary text-white border-0">
                                {member.title}
                              </Badge>
                              <p className="text-base lg:text-lg font-medium text-primary">{member.position}</p>
                              <p className="text-sm lg:text-base text-muted-foreground font-medium">
                                <span className="text-foreground">Specialization:</span> {member.specialization}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" asChild className="w-full sm:w-auto">
                            <a href={member.profileUrl} target="_blank" rel="noopener noreferrer">
                              View Profile <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed mb-6">
                          {member.description}
                        </CardDescription>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {member.achievements.map((achievement, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + 0.1 * idx, duration: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Areas of Teaching & Expertise */}
        <motion.section
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
              Areas of Teaching & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of essential skills for mathematical modelling in mental health research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-3"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {area.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Faculty;