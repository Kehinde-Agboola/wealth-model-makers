import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Users, Globe, Calendar } from "lucide-react";

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & <span className="bg-gradient-primary bg-clip-text text-transparent">Publications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access comprehensive resources, research publications, and tools developed 
            through the WEALTH programme to support mental health research and policy development.
          </p>
        </div>

        {/* Resource Categories */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive materials to support research, policy, and practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {category.status}
                        </span>
                      </div>
                      <CardDescription className="text-base mb-4">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Download className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Releases */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Releases
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay tuned for new resources and publications
            </p>
          </div>

          <div className="space-y-6">
            {upcomingReleases.map((release, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>{release.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{release.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {release.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Stay Updated on New Resources
              </CardTitle>
              <CardDescription className="text-white/90 text-lg mb-6">
                Be the first to know when new publications, toolkits, and resources become available.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="mailto:wealth4womeninafrica@gmail.com?subject=Resource Updates">
                    Subscribe to Updates
                  </a>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:wealth4womeninafrica@gmail.com?subject=Resource Request">
                    Request Specific Resources
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resources;