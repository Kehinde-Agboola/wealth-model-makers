import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Network, Clock, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import capacityImage from "@/assets/capacity-building.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";

const Home = () => {
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
      image: mentorshipImage,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-hero-bg text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 24, 27, 0.8), rgba(24, 24, 27, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">WEALTH</span>
            </h1>
            <div className="text-xl md:text-2xl mb-4 font-semibold">
              Women Derive Mathematical Models for Mental Health
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Transforming Mental Health through Data-Driven Models
            </p>
            <p className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Building capacity in mathematical modelling to address depression and related conditions 
              affecting adolescent girls and young women in Sub-Saharan Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" asChild>
                <Link to="/about">
                  Learn About the Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero" asChild>
                <a href="mailto:wealth4womeninafrica@gmail.com">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programme Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training designed to empower women researchers in mathematical modelling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programme Duration
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured learning pathway spanning multiple phases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {phases.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
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
            ))}
          </div>

          {/* Expected Outcomes */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <Target className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Expected Outcomes</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Participants gain comprehensive skills and opportunities to advance their careers in mental health research
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <span className="text-white/90">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Led by distinguished researchers and practitioners in mental health, statistics, and policy
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/faculty">
              View Full Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's New?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest from the WEALTH programme
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/news">View All News</Link>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <a href="mailto:wealth4womeninafrica@gmail.com?subject=Newsletter Signup">
                  Subscribe to Newsletter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;