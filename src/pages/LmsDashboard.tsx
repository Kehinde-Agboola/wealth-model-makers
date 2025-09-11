import { Bell, BookOpen, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LmsDashboard = () => {
  const announcements = [
    {
      id: 1,
      title: "Welcome to WEALTH Mathematical Modeling Program",
      content: "We're excited to have you join our program. Please review the course materials and upcoming schedule.",
      date: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      title: "Module 1 Assessment Due",
      content: "Don't forget to submit your Module 1 assessment by Friday, January 19th.",
      date: "2024-01-17",
      priority: "urgent"
    },
    {
      id: 3,
      title: "Guest Lecture: Advanced Modeling Techniques",
      content: "Join us for a special guest lecture on Wednesday at 2:00 PM GMT.",
      date: "2024-01-16",
      priority: "normal"
    }
  ];

  const enrolledCourses = [
    {
      id: "math-101",
      title: "Fundamentals of Mathematical Modeling",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      nextDeadline: "Jan 19, 2024",
      status: "active"
    },
    {
      id: "stats-201",
      title: "Statistical Analysis for Women in STEM",
      instructor: "Prof. Amina Hassan",
      progress: 45,
      nextDeadline: "Jan 25, 2024",
      status: "active"
    },
    {
      id: "research-301",
      title: "Research Methodology and Data Collection",
      instructor: "Dr. Jennifer Williams",
      progress: 20,
      nextDeadline: "Feb 1, 2024",
      status: "upcoming"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive";
      case "high": return "default";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Learning Management System</h1>
              <p className="text-muted-foreground mt-2">Welcome back to your WEALTH program dashboard</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/lms/calendar">
                  <Clock className="w-4 h-4 mr-2" />
                  Calendar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Announcements */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Announcements</h2>
              </div>
              
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="border border-border">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {announcement.content}
                          </CardDescription>
                        </div>
                        <Badge variant={getPriorityColor(announcement.priority) as any}>
                          {announcement.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(announcement.date).toLocaleDateString()}
                      </p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Enrolled Courses */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">My Courses</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="border border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="w-4 h-4" />
                          {course.instructor}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Next Deadline */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Next deadline:</span>
                          <span className="text-sm font-medium">{course.nextDeadline}</span>
                        </div>

                        {/* Action Button */}
                        <Button 
                          className="w-full" 
                          variant={course.status === "upcoming" ? "outline" : "default"}
                          asChild
                        >
                          <Link to={`/lms/course/${course.id}`}>
                            {course.status === "upcoming" ? "View Course" : "Continue Learning"}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Courses Enrolled</span>
                  <span className="font-semibold">{enrolledCourses.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed Modules</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Upcoming Deadlines</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Forum Posts</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-4 border-primary pl-3">
                  <p className="font-medium text-sm">Guest Lecture</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                </div>
                <div className="border-l-4 border-muted pl-3">
                  <p className="font-medium text-sm">Module 1 Assessment</p>
                  <p className="text-xs text-muted-foreground">Jan 19, 11:59 PM</p>
                </div>
                <div className="border-l-4 border-muted pl-3">
                  <p className="font-medium text-sm">Group Discussion</p>
                  <p className="text-xs text-muted-foreground">Jan 22, 10:00 AM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsDashboard;