import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { CheckCircle, Circle, Video, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: string;
  title: string;
  completed: boolean;
  duration: string;
  type: string;
}

interface Course {
  title: string;
  instructor: string;
  description: string;
  progress: number;
  modules: Module[];
}

interface CourseSidebarProps {
  course: Course;
  activeModule: string;
  setActiveModule: (moduleId: string) => void;
}

export function CourseSidebar({ course, activeModule, setActiveModule }: CourseSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'interactive': return <BookOpen className="h-4 w-4" />;
      case 'assessment': return <FileText className="h-4 w-4" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-80"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        {!isCollapsed && (
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg truncate">{course.title}</h2>
            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
            <div className="mt-2">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{course.progress}% Complete</p>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Course Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {course.modules.map((module) => (
                <SidebarMenuItem key={module.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveModule(module.id)}
                    className={cn(
                      "w-full justify-start",
                      activeModule === module.id && "bg-primary/10 text-primary"
                    )}
                  >
                    <div className="flex items-center gap-2 w-full">
                      {module.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                      
                      {!isCollapsed && (
                        <>
                          {getModuleIcon(module.type)}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                              {module.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {module.duration}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}