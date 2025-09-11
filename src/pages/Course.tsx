import { useState } from "react";
import { useParams } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CourseSidebar } from "@/components/CourseSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Download, 
  Video, 
  Clock,
  CheckCircle,
  PlayCircle
} from "lucide-react";

const Course = () => {
  const { courseId } = useParams();
  const [activeModule, setActiveModule] = useState("introduction");

  // Mock course data
  const courseData = {
    "1": {
      title: "Statistical Modeling Fundamentals",
      instructor: "Dr. Sarah Johnson",
      description: "Introduction to statistical modeling techniques for mental health research",
      progress: 75,
      modules: [
        { 
          id: "introduction", 
          title: "Introduction to Statistical Modeling", 
          completed: true,
          duration: "45 min",
          type: "video"
        },
        { 
          id: "data-collection", 
          title: "Data Collection Methods", 
          completed: true,
          duration: "60 min",
          type: "video"
        },
        { 
          id: "descriptive-stats", 
          title: "Descriptive Statistics", 
          completed: true,
          duration: "90 min",
          type: "interactive"
        },
        { 
          id: "regression-analysis", 
          title: "Regression Analysis", 
          completed: false,
          duration: "75 min",
          type: "video"
        },
        { 
          id: "hypothesis-testing", 
          title: "Hypothesis Testing", 
          completed: false,
          duration: "80 min",
          type: "assessment"
        }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return <div>Course not found</div>;
  }

  const currentModule = course.modules.find(m => m.id === activeModule) || course.modules[0];

  const resources = [
    { title: "Statistical Methods Handbook", type: "PDF", size: "2.5 MB" },
    { title: "R Programming Guide", type: "PDF", size: "1.8 MB" },
    { title: "Dataset Examples", type: "CSV", size: "856 KB" },
    { title: "Video Transcripts", type: "DOC", size: "445 KB" }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Question about regression assumptions",
      author: "Maria Santos",
      replies: 3,
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      title: "Help with R syntax for linear models",
      author: "John Doe",
      replies: 5,
      lastActivity: "4 hours ago"
    },
    {
      id: 3,
      title: "Interpretation of p-values",
      author: "Sarah Kim",
      replies: 2,
      lastActivity: "1 day ago"
    }
  ];

  const upcomingEvents = [
    {
      date: "Jan 20",
      time: "14:00",
      event: "Live Q&A Session",
      type: "webinar"
    },
    {
      date: "Jan 22",
      time: "23:59",
      event: "Assignment Deadline",
      type: "deadline"
    },
    {
      date: "Jan 25",
      time: "10:00",
      event: "Group Discussion",
      type: "discussion"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CourseSidebar 
          course={course} 
          activeModule={activeModule} 
          setActiveModule={setActiveModule} 
        />
        
        <main className="flex-1 p-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            {/* Course Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
                  <p className="text-muted-foreground mt-1">Instructor: {course.instructor}</p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {course.progress}% Complete
                </Badge>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="content">Course Content</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="forum">Forum</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {currentModule.type === 'video' && <Video className="h-5 w-5 text-primary" />}
                      {currentModule.type === 'interactive' && <BookOpen className="h-5 w-5 text-primary" />}
                      {currentModule.type === 'assessment' && <FileText className="h-5 w-5 text-primary" />}
                      <CardTitle>{currentModule.title}</CardTitle>
                      {currentModule.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {currentModule.duration}
                      </span>
                      <Badge variant="outline">{currentModule.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-8 text-center mb-6">
                      <PlayCircle className="h-16 w-16 mx-auto text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Video Content</h3>
                      <p className="text-muted-foreground mb-4">
                        {currentModule.title} - Learn the fundamentals of statistical modeling
                      </p>
                      <Button>Start Learning</Button>
                    </div>
                    
                    <div className="prose max-w-none">
                      <h3>Module Overview</h3>
                      <p>
                        This module covers the essential concepts of statistical modeling as applied to mental health research. 
                        You'll learn about different types of models, when to use them, and how to interpret results.
                      </p>
                      
                      <h4>Learning Objectives</h4>
                      <ul>
                        <li>Understand the fundamentals of statistical modeling</li>
                        <li>Learn to choose appropriate models for different data types</li>
                        <li>Practice interpreting model outputs</li>
                        <li>Apply concepts to mental health research scenarios</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Course Resources
                    </CardTitle>
                    <CardDescription>
                      Downloadable materials and additional reading
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <h4 className="font-medium">{resource.title}</h4>
                              <p className="text-sm text-muted-foreground">{resource.type} • {resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Course Discussion Forum
                    </CardTitle>
                    <CardDescription>
                      Connect with peers and ask questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full">Start New Discussion</Button>
                      
                      {forumPosts.map((post) => (
                        <div key={post.id} className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">{post.title}</h4>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>By {post.author}</span>
                            <div className="flex items-center gap-4">
                              <span>{post.replies} replies</span>
                              <span>{post.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="calendar" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Course Calendar
                    </CardTitle>
                    <CardDescription>
                      Important dates and upcoming events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="text-center min-w-[60px]">
                            <div className="text-lg font-bold">{event.date}</div>
                            <div className="text-sm text-muted-foreground">{event.time}</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{event.event}</h4>
                            <Badge variant="outline" className="mt-1">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Course;