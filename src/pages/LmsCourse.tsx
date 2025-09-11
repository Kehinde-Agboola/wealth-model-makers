import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Download,
  Play,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const LmsCourse = () => {
  const { courseId } = useParams();
  const [activeModule, setActiveModule] = useState("module-1");

  // Mock course data
  const courseData = {
    "math-101": {
      title: "Fundamentals of Mathematical Modeling",
      instructor: "Dr. Sarah Johnson",
      description: "Learn the core principles of mathematical modeling and their applications in real-world scenarios.",
      progress: 75,
      modules: [
        {
          id: "module-1",
          title: "Introduction to Mathematical Modeling",
          status: "completed",
          lessons: [
            { id: "1.1", title: "What is Mathematical Modeling?", type: "video", duration: "15 min", completed: true },
            { id: "1.2", title: "Types of Mathematical Models", type: "reading", duration: "20 min", completed: true },
            { id: "1.3", title: "Model Building Process", type: "video", duration: "25 min", completed: true },
          ]
        },
        {
          id: "module-2",
          title: "Linear Models and Systems",
          status: "in-progress",
          lessons: [
            { id: "2.1", title: "Linear Equations in Modeling", type: "video", duration: "18 min", completed: true },
            { id: "2.2", title: "System of Linear Equations", type: "reading", duration: "30 min", completed: true },
            { id: "2.3", title: "Matrix Methods", type: "video", duration: "22 min", completed: false },
            { id: "2.4", title: "Case Study: Population Models", type: "assignment", duration: "45 min", completed: false },
          ]
        },
        {
          id: "module-3",
          title: "Differential Equations",
          status: "locked",
          lessons: [
            { id: "3.1", title: "First-Order Differential Equations", type: "video", duration: "20 min", completed: false },
            { id: "3.2", title: "Second-Order Differential Equations", type: "reading", duration: "25 min", completed: false },
            { id: "3.3", title: "Applications in Biology and Physics", type: "video", duration: "30 min", completed: false },
          ]
        }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/lms">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  const activeModuleData = course.modules.find(m => m.id === activeModule);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress": return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />;
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="w-4 h-4" />;
      case "reading": return <FileText className="w-4 h-4" />;
      case "assignment": return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/lms">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{course.title}</h1>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{course.instructor}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="text-sm text-muted-foreground">Course Progress</div>
              <div className="flex items-center gap-2 min-w-[200px]">
                <Progress value={course.progress} className="flex-1" />
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar - Modules */}
        <div className="w-80 bg-muted/20 border-r border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Course Modules</h2>
          
          <div className="space-y-3">
            {course.modules.map((module) => (
              <Card 
                key={module.id} 
                className={`cursor-pointer transition-colors ${
                  activeModule === module.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(module.status)}
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{module.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {module.lessons.length} lessons
                        </Badge>
                        <span className="text-xs text-muted-foreground capitalize">
                          {module.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeModuleData && (
            <div className="max-w-4xl">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {activeModuleData.title}
                </h2>
                <div className="flex items-center gap-2">
                  {getStatusIcon(activeModuleData.status)}
                  <span className="text-sm text-muted-foreground capitalize">
                    {activeModuleData.status.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="forum">Forum</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="mt-6">
                  <div className="space-y-4">
                    {activeModuleData.lessons.map((lesson, index) => (
                      <Card key={lesson.id} className="border border-border">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                              )}
                              {getLessonIcon(lesson.type)}
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {lesson.type} • {lesson.duration}
                                </p>
                              </div>
                            </div>
                            <Button variant={lesson.completed ? "outline" : "default"} size="sm">
                              {lesson.completed ? "Review" : "Start"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Module Resources</CardTitle>
                      <CardDescription>
                        Download additional materials and references for this module
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium">Module 1 Slides</p>
                            <p className="text-sm text-muted-foreground">PDF • 2.3 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium">Practice Exercises</p>
                            <p className="text-sm text-muted-foreground">PDF • 1.8 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="forum" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Discussion Forum
                      </CardTitle>
                      <CardDescription>
                        Engage with your peers and instructors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button className="w-full">Start New Discussion</Button>
                        
                        <Separator />
                        
                        <div className="space-y-3">
                          <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-medium mb-2">Question about Linear Models</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Posted by Alice Johnson • 2 hours ago
                            </p>
                            <p className="text-sm">
                              Can someone help explain the difference between deterministic and stochastic models?
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Badge variant="outline">3 replies</Badge>
                              <Badge variant="outline">Mathematics</Badge>
                            </div>
                          </div>
                          
                          <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-medium mb-2">Great resource for extra reading</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Posted by Dr. Sarah Johnson • 1 day ago
                            </p>
                            <p className="text-sm">
                              I found this excellent paper on modeling techniques that complements our course material.
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Badge variant="outline">5 replies</Badge>
                              <Badge variant="outline">Resources</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="assignments" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Module Assignments</CardTitle>
                      <CardDescription>
                        Complete assignments to demonstrate your understanding
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Assignment 1: Basic Modeling Exercise</h4>
                          <Badge variant="outline">Due Jan 19</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Create a simple mathematical model for population growth and analyze its behavior.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm">View Details</Button>
                          <Button size="sm" variant="outline">Submit Assignment</Button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg bg-muted/20">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Assignment 2: Linear Systems Project</h4>
                          <Badge>Submitted</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Solve a real-world problem using system of linear equations.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Feedback</Button>
                          <span className="text-sm text-green-600 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Grade: 92/100
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LmsCourse;