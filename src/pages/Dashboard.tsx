import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, BookOpen, Calendar, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const announcements = [
    {
      id: 1,
      title: "Welcome to WEALTH LMS",
      content: "Welcome to our comprehensive learning management system. Here you'll find all your courses, resources, and important updates.",
      date: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      title: "New Research Methodology Module Available",
      content: "A new module on advanced research methodologies has been added to the Statistical Modeling course.",
      date: "2024-01-12",
      priority: "medium"
    },
    {
      id: 3,
      title: "Upcoming Assessment Reminder",
      content: "Don't forget about the upcoming assessment in Mathematical Modeling fundamentals due next week.",
      date: "2024-01-10",
      priority: "high"
    }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Statistical Modeling Fundamentals",
      description: "Introduction to statistical modeling techniques for mental health research",
      progress: 75,
      modules: 8,
      completedModules: 6,
      instructor: "Dr. Sarah Johnson",
      nextDeadline: "Assessment due Jan 22",
      status: "active"
    },
    {
      id: 2,
      title: "Mathematical Models in Mental Health",
      description: "Advanced mathematical approaches to modeling depression and anxiety",
      progress: 45,
      modules: 10,
      completedModules: 4,
      instructor: "Prof. Michael Chen",
      nextDeadline: "Discussion post due Jan 20",
      status: "active"
    },
    {
      id: 3,
      title: "Research Methods for AGYW Studies",
      description: "Specialized research methodologies for adolescent girls and young women",
      progress: 90,
      modules: 6,
      completedModules: 5,
      instructor: "Dr. Amina Hassan",
      nextDeadline: "Final project due Jan 25",
      status: "active"
    },
    {
      id: 4,
      title: "Data Analysis with R",
      description: "Practical data analysis techniques using R programming",
      progress: 100,
      modules: 12,
      completedModules: 12,
      instructor: "Dr. James Wilson",
      nextDeadline: "Completed",
      status: "completed"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome to WEALTH LMS
          </h1>
          <p className="text-lg text-muted-foreground">
            Your learning dashboard - track progress, access courses, and stay updated
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 completed this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70%</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next: Jan 20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Data Analysis with R</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-l-4 border-primary pl-4 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{announcement.title}</h4>
                      <Badge variant={getPriorityColor(announcement.priority)} className="text-xs">
                        {announcement.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Your Courses
                </CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{course.description}</p>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress: {course.completedModules}/{course.modules} modules</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${getProgressColor(course.progress)}`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{course.nextDeadline}</span>
                        <Button size="sm" asChild>
                          <Link to={`/course/${course.id}`}>
                            {course.status === 'completed' ? 'Review' : 'Continue'}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;