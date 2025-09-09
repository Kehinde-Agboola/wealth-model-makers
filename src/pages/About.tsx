import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, BookOpen, Globe, Award, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 59, 58, 0.9), rgba(7, 59, 58, 0.85)), url(${aboutHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">Gates Foundation Funded</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">WEALTH</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              An innovative training initiative building capacity in mathematical modelling 
              to address depression and related mental health conditions among adolescent 
              girls and young women in Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Full Programme Name */}
        <Card className="mb-12 bg-gradient-primary text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl mb-4">
              Utilizing Mathematical Modelling to Tackle Depression and Related Mental Health Conditions
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Among Adolescent Girls and Young Women (AGYW) in Sub-Saharan Africa Project
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Programme Objectives */}
        <section 
          className="mb-16 py-16 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.92)), url(${objectivesBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Programme Objectives
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                WEALTH aims to equip early and mid-career researchers and policymakers with advanced skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card key={index} className="text-center shadow-elegant hover:shadow-hero transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                      {objective.icon}
                    </div>
                    <CardTitle className="text-lg">{objective.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {objective.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programme Activities */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programme Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive activities designed to build expertise and foster collaboration
            </p>
          </div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {activity.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activity.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Funding Information */}
        <section className="text-center">
          <Card className="bg-muted/50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Funded by the Gates Foundation</CardTitle>
              <CardDescription className="text-base max-w-3xl mx-auto leading-relaxed">
                The WEALTH project is proudly supported by the Gates Foundation, enabling us to build 
                critical capacity in mathematical modelling for mental health research across Sub-Saharan Africa. 
                This partnership reflects our shared commitment to evidence-based solutions that can transform 
                the lives of adolescent girls and young women.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;