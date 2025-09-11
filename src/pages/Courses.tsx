import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Statistical Modeling Fundamentals",
      description: "Introduction to statistical modeling techniques for mental health research. Learn the basics of data analysis, hypothesis testing, and model interpretation.",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      modules: 8,
      students: 45,
      level: "Beginner",
      progress: 75,
      status: "enrolled",
      category: "Statistics"
    },
    {
      id: 2,
      title: "Mathematical Models in Mental Health",
      description: "Advanced mathematical approaches to modeling depression and anxiety in AGYW populations using differential equations and computational methods.",
      instructor: "Prof. Michael Chen",
      duration: "12 weeks",
      modules: 10,
      students: 32,
      level: "Intermediate",
      progress: 45,
      status: "enrolled",
      category: "Mathematics"
    },
    {
      id: 3,
      title: "Research Methods for AGYW Studies",
      description: "Specialized research methodologies for adolescent girls and young women, including ethical considerations and cultural sensitivity.",
      instructor: "Dr. Amina Hassan",
      duration: "6 weeks",
      modules: 6,
      students: 38,
      level: "Intermediate",
      progress: 90,
      status: "enrolled",
      category: "Research Methods"
    },
    {
      id: 4,
      title: "Data Analysis with R",
      description: "Practical data analysis techniques using R programming language for statistical computing and graphics in mental health research.",
      instructor: "Dr. James Wilson",
      duration: "10 weeks",
      modules: 12,
      students: 28,
      level: "Beginner",
      progress: 100,
      status: "completed",
      category: "Programming"
    },
    {
      id: 5,
      title: "Advanced Epidemiological Methods",
      description: "Study design, data collection, and analysis methods for epidemiological research in mental health among African populations.",
      instructor: "Dr. Grace Mukamana",
      duration: "8 weeks",
      modules: 9,
      students: 25,
      level: "Advanced",
      progress: 0,
      status: "available",
      category: "Epidemiology"
    },
    {
      id: 6,
      title: "Policy and Implementation Science",
      description: "Understanding how to translate research findings into effective policies and programs for mental health in Sub-Saharan Africa.",
      instructor: "Prof. David Kwame",
      duration: "6 weeks",
      modules: 7,
      students: 22,
      level: "Advanced",
      progress: 0,
      status: "available",
      category: "Policy"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'enrolled': return 'secondary';
      case 'available': return 'outline';
      default: return 'secondary';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Course Catalog
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive curriculum designed to build expertise in mathematical modeling for mental health research
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Across 6 categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Active courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">With certificate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70%</div>
              <p className="text-xs text-muted-foreground">Across enrolled courses</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <Badge variant={getStatusColor(course.status)}>
                    {course.status}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>Instructor: {course.instructor}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.modules} modules
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </span>
                  </div>
                </div>

                {course.status === 'enrolled' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${getProgressColor(course.progress)}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  {course.status === 'enrolled' ? (
                    <Button className="w-full" asChild>
                      <Link to={`/course/${course.id}`}>Continue Course</Link>
                    </Button>
                  ) : course.status === 'completed' ? (
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link to={`/course/${course.id}`}>Review</Link>
                      </Button>
                      <Button variant="secondary" className="flex-1">
                        Certificate
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full">
                      Enroll Course
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;