import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Bell, Users, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import newsHeroImage from "@/assets/news-hero.jpg";

const News = () => {
  const newsItems = [
    {
      date: "March 2024",
      category: "Programme Launch",
      title: "WEALTH Programme Officially Launches",
      excerpt: "The Gates Foundation-funded WEALTH programme officially launches to address mental health challenges among adolescent girls and young women in Sub-Saharan Africa through mathematical modelling.",
      type: "announcement",
      icon: <Award className="h-5 w-5" />
    },
    {
      date: "February 2024",
      category: "Team Formation",
      title: "Expert Faculty Team Assembled",
      excerpt: "Distinguished faculty from CoMUI join the WEALTH programme, bringing expertise in psychiatry, biostatistics, and epidemiology to lead the initiative.",
      type: "team",
      icon: <Users className="h-5 w-5" />
    },
    {
      date: "January 2024",
      category: "Funding",
      title: "Gates Foundation Grant Awarded",
      excerpt: "The WEALTH project receives significant funding from the Gates Foundation to build capacity in mathematical modelling for mental health research.",
      type: "funding",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const upcomingEvents = [
    {
      date: "Q2 2024",
      title: "Phase 1 Applications Open",
      description: "Applications for the introductory phase of the WEALTH programme will open for qualified candidates"
    },
    {
      date: "Q3 2024", 
      title: "First Cohort Orientation",
      description: "Welcome orientation and onboarding for the first cohort of WEALTH programme participants"
    },
    {
      date: "Q4 2024",
      title: "Research Methodology Workshop",
      description: "Intensive workshop on mathematical modelling techniques for mental health research"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-gradient-primary text-white';
      case 'team':
        return 'bg-gradient-accent text-hero-bg';
      case 'funding':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-24 relative overflow-hidden  min-h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${newsHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest developments, announcements, and
              milestones from the WEALTH programme.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Signup */}
        <section className="mb-16">
          <Card className="bg-muted/30 border-0">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                <Bell className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl mb-4">Stay Connected</CardTitle>
              <CardDescription className="text-base mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates,
                research findings, and programme announcements directly in your
                inbox.
              </CardDescription>
              <Button variant="cta" size="lg" asChild>
                <a href="mailto:wealth4womeninafrica@gmail.com?subject=Newsletter Subscription">
                  Subscribe to Newsletter
                </a>
              </Button>
            </CardHeader>
          </Card>
        </section>

        {/* Recent News */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Latest news and announcements from the WEALTH programme
            </p>
          </div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="shadow-elegant hover:shadow-hero transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getTypeColor(item.type)}>
                          {item.icon}
                          <span className="ml-1">{item.category}</span>
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-3">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for these important programme milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {event.date}
                  </Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact for More Information */}
        <section className="text-center">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Want to Know More?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg mb-6">
                Have questions about the programme or want to receive specific
                updates? Get in touch with our team.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="mailto:wealth4womeninafrica@gmail.com?subject=Programme Inquiry">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+2348130817815">Call Us</a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default News;