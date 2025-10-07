import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Award, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import facultyHeroImage from "@/assets/faculty-hero.jpg";
import teamImage from "@/assets/team.jpg";
import { faculty } from "@/components/constants/indext";

const Faculty = () => {
  const navigate = useNavigate();

  const handleFacultyClick = (index: number) => {
    navigate(`/faculty/${index}`);
  };

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
        className="pt-24 relative overflow-hidden min-h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${teamImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center min-h-[90vh]">
          <motion.div
            className="text-center "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Meet Our
              {/* <span className="bg-gradient-accent bg-clip-text text-transparent"> */}
                Expert Team
              {/* </span> */}
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our distinguished faculty brings together expertise in psychiatry,
              biostatistics, epidemiology, and policy to lead the WEALTH
              programme.
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
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Faculty Members
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any faculty member to learn more about their expertise and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
                className="cursor-pointer"
                onClick={() => handleFacultyClick(index)}
              >
                <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group border-0 hover:border hover:border-primary/20">
                  {/* Faculty Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover overlay with view details */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-primary font-medium">
                        <span>View Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Faculty Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <CardHeader className="text-center space-y-3 pb-6">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="text-base font-medium text-primary">
                          {member.position}
                        </p>
                      </div>
                    </CardHeader>
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
              Comprehensive coverage of essential skills for mathematical
              modelling in mental health research
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