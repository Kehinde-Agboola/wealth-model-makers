import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, BookOpen, Network, Clock, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import capacityImage from "@/assets/capacity-building.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";
import networkingImage from "@/assets/networking.jpg";
import teamPreviewImage from "@/assets/team-preview.jpg";
import newsPreviewImage from "@/assets/news-preview.jpg";
import programPhasesImage from "@/assets/program-phases.jpg";

const Home = () => {
  const heroSlides = [
    {
      image: heroSlide1,
      title: "WEALTH",
      subtitle: "Women Derive Mathematical Models for Mental Health",
      description: "Transforming Mental Health through Data-Driven Models"
    },
    {
      image: heroSlide2,
      title: "WEALTH",
      subtitle: "Empowering Women Researchers",
      description: "Building capacity in mathematical modelling for mental health"
    },
    {
      image: heroSlide3,
      title: "WEALTH",
      subtitle: "Research Excellence",
      description: "Addressing depression affecting adolescent girls and young women"
    }
  ];

  const programHighlights = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Capacity Building",
      description: "Develop expertise in statistical and mathematical modelling of depression and related conditions among AGYW.",
      image: capacityImage,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship",
      description: "Receive guidance from experienced mentors in mental health research, modelling, and policy advocacy.",
      image: mentorshipImage,
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking",
      description: "Connect with a diverse community of researchers, policymakers, and experts.",
      image: networkingImage,
    },
  ];

  const phases = [
    {
      title: "Phase 1: Introductory Phase",
      duration: "4 weeks",
      description: "Foundation building and orientation"
    },
    {
      title: "Phase 2: Intensive Coursework", 
      duration: "5 months",
      description: "8–10 hours/week structured learning"
    },
    {
      title: "Phase 3: Research & Development",
      duration: "12–18 months", 
      description: "Mentorship and networking"
    }
  ];

  const outcomes = [
    "Valuable research experience",
    "Expert mentorship opportunities", 
    "Networking with professionals",
    "Ability to publish research papers",
    "Policy brief development skills"
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative bg-hero-bg text-white py-24 md:py-32 min-h-[80vh] flex items-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(24, 24, 27, 0.7), rgba(24, 24, 27, 0.5)), url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                      className="max-w-4xl mx-auto text-center"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      <motion.h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <span className="bg-gradient-accent bg-clip-text text-transparent">{slide.title}</span>
                      </motion.h1>
                      <motion.div 
                        className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {slide.subtitle}
                      </motion.div>
                      <motion.p 
                        className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>
                      <motion.p 
                        className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Building capacity in mathematical modelling to address depression and related conditions 
                        affecting adolescent girls and young women in Sub-Saharan Africa.
                      </motion.p>
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <Button size="lg" variant="cta" asChild className="transform hover:scale-105 transition-transform">
                          <Link to="/about">
                            Learn About the Program <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="hero" asChild className="transform hover:scale-105 transition-transform">
                          <a href="mailto:wealth4womeninafrica@gmail.com">
                            Contact Us
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <motion.div 
                      className="absolute top-20 left-10 w-20 h-20 border border-white/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-20 right-10 w-32 h-32 border border-white/20 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <motion.div 
                      className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </section>

      {/* Program Highlights */}
      <motion.section 
        className="py-16 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Programme Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training designed to empower women researchers in mathematical modelling
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="overflow-hidden text-center shadow-elegant hover:shadow-hero transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {highlight.icon}
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Duration & Phases */}
      <motion.section 
        className="py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${programPhasesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Programme Duration
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured learning pathway spanning multiple phases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="relative overflow-hidden h-full">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + 0.1 * index, duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <div className="flex items-center text-primary">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{phase.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Expected Outcomes */}
          <motion.div 
            className="bg-gradient-primary rounded-2xl p-6 md:p-8 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="h-12 w-12 mx-auto mb-4 text-white/90" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Expected Outcomes</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Participants gain comprehensive skills and opportunities to advance their careers in mental health research
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + 0.1 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Award className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <span className="text-white/90">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Preview */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${teamPreviewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Led by distinguished researchers and practitioners in mental health, statistics, and policy
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="cta" size="lg" asChild className="transform hover:scale-105 transition-transform">
              <Link to="/faculty">
                View Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* News Preview */}
      <motion.section 
        className="py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.95)), url(${newsPreviewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What's New?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest from the WEALTH programme
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="lg" asChild className="transform hover:scale-105 transition-transform">
                <Link to="/news">View All News</Link>
              </Button>
              <Button variant="cta" size="lg" asChild className="transform hover:scale-105 transition-transform">
                <a href="mailto:wealth4womeninafrica@gmail.com?subject=Newsletter Signup">
                  Subscribe to Newsletter
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;