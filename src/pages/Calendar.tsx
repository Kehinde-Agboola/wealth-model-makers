import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, AlertCircle, BookOpen, Users, FileText } from "lucide-react";

const Calendar = () => {
  const upcomingEvents = [
    {
      date: "2024-01-20",
      time: "14:00",
      title: "Live Q&A Session - Statistical Modeling",
      type: "webinar",
      course: "Statistical Modeling Fundamentals",
      description: "Interactive session with Dr. Sarah Johnson covering regression analysis questions"
    },
    {
      date: "2024-01-22",
      time: "23:59",
      title: "Assignment Submission Deadline",
      type: "deadline",
      course: "Statistical Modeling Fundamentals",
      description: "Submit your regression analysis assignment"
    },
    {
      date: "2024-01-25",
      time: "10:00",
      title: "Group Discussion Forum",
      type: "discussion",
      course: "Mathematical Models in Mental Health",
      description: "Discuss mathematical approaches to modeling anxiety disorders"
    },
    {
      date: "2024-01-28",
      time: "15:00",
      title: "Guest Lecture: Real-world Applications",
      type: "lecture",
      course: "Research Methods for AGYW Studies",
      description: "Dr. Amina Hassan presents case studies from Sub-Saharan Africa"
    },
    {
      date: "2024-02-01",
      time: "23:59",
      title: "Final Project Proposal Due",
      type: "deadline",
      course: "Research Methods for AGYW Studies",
      description: "Submit your research proposal for the capstone project"
    },
    {
      date: "2024-02-05",
      time: "11:00",
      title: "Mid-term Assessment",
      type: "exam",
      course: "Mathematical Models in Mental Health",
      description: "Comprehensive assessment covering modules 1-5"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Users className="h-4 w-4" />;
      case 'deadline': return <AlertCircle className="h-4 w-4" />;
      case 'discussion': return <Users className="h-4 w-4" />;
      case 'lecture': return <BookOpen className="h-4 w-4" />;
      case 'exam': return <FileText className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'deadline': return 'destructive';
      case 'exam': return 'destructive';
      case 'webinar': return 'default';
      case 'lecture': return 'secondary';
      case 'discussion': return 'outline';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-primary" />
            Academic Calendar
          </h1>
          <p className="text-lg text-muted-foreground">
            Important dates, deadlines, and upcoming events for all your courses
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2</div>
              <p className="text-sm text-muted-foreground">Next: Jan 22</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Live Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1</div>
              <p className="text-sm text-muted-foreground">This week: Jan 20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-500" />
                Assessments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">1</div>
              <p className="text-sm text-muted-foreground">Next: Feb 5</p>
            </CardContent>
          </Card>
        </div>

        {/* Events Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              All scheduled activities, deadlines, and important dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className={`border-l-4 pl-6 pb-6 ${
                  isUpcoming(event.date) ? 'border-primary' : 'border-muted'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        isUpcoming(event.date) ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.course}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={getEventColor(event.type)} className="mb-2">
                        {event.type}
                      </Badge>
                      {isUpcoming(event.date) && (
                        <Badge variant="outline" className="block">
                          This Week
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="ml-11">
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                    </div>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;