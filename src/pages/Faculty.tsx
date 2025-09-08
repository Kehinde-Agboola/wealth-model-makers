import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Award, GraduationCap } from "lucide-react";

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty brings together expertise in psychiatry, biostatistics, 
            epidemiology, and policy to lead the WEALTH programme.
          </p>
        </div>

        {/* Faculty Profiles */}
        <section className="mb-16">
          <div className="space-y-12">
            {faculty.map((member, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                        <CardTitle className="text-2xl text-foreground">
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
                        <p className="text-lg font-medium text-primary">{member.position}</p>
                        <p className="text-muted-foreground font-medium">
                          <span className="text-foreground">Specialization:</span> {member.specialization}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" asChild>
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
                        <div key={idx} className="flex items-center space-x-3">
                          <Award className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Areas of Teaching & Expertise */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Teaching & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of essential skills for mathematical modelling in mental health research
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-3">
                    {area.icon}
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty;