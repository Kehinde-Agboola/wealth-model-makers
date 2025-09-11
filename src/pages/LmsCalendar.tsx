import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

const LmsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock calendar events
  const events = [
    {
      id: 1,
      title: "Module 1 Assessment Due",
      type: "assignment",
      date: "2024-01-19",
      time: "11:59 PM",
      course: "Fundamentals of Mathematical Modeling",
      description: "Submit your Module 1 assessment covering basic modeling principles."
    },
    {
      id: 2,
      title: "Guest Lecture: Advanced Modeling Techniques",
      type: "lecture",
      date: "2024-01-17",
      time: "2:00 PM GMT",
      course: "All Courses",
      description: "Special guest lecture by Dr. Maria Rodriguez on advanced mathematical modeling techniques.",
      location: "Virtual Classroom A"
    },
    {
      id: 3,
      title: "Group Discussion: Linear Systems",
      type: "discussion",
      date: "2024-01-22",
      time: "10:00 AM GMT",
      course: "Fundamentals of Mathematical Modeling",
      description: "Collaborative discussion on linear systems applications in real-world scenarios."
    },
    {
      id: 4,
      title: "Statistics Module Quiz",
      type: "quiz",
      date: "2024-01-25",
      time: "3:00 PM GMT",
      course: "Statistical Analysis for Women in STEM",
      description: "Timed quiz covering statistical concepts and data analysis methods."
    },
    {
      id: 5,
      title: "Research Proposal Presentation",
      type: "presentation",
      date: "2024-02-01",
      time: "1:00 PM GMT",
      course: "Research Methodology and Data Collection",
      description: "Present your research proposal to peers and instructors for feedback."
    },
    {
      id: 6,
      title: "Office Hours with Dr. Johnson",
      type: "office-hours",
      date: "2024-01-18",
      time: "4:00 PM - 5:00 PM GMT",
      course: "Fundamentals of Mathematical Modeling",
      description: "Open office hours for questions and additional support."
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "assignment": return "destructive";
      case "quiz": return "destructive";
      case "lecture": return "default";
      case "discussion": return "secondary";
      case "presentation": return "outline";
      case "office-hours": return "outline";
      default: return "secondary";
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "assignment": return "📝";
      case "quiz": return "❓";
      case "lecture": return "🎓";
      case "discussion": return "💬";
      case "presentation": return "📊";
      case "office-hours": return "🏢";
      default: return "📅";
    }
  };

  // Filter events for selected date
  const selectedDateString = selectedDate?.toISOString().split('T')[0];
  const eventsForSelectedDate = events.filter(event => event.date === selectedDateString);

  // Get upcoming events (next 7 days)
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Mark dates with events
  const eventDates = events.map(event => new Date(event.date));

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
          
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Academic Calendar</h1>
              <p className="text-muted-foreground">
                Important dates, deadlines, and events for your courses
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar and Selected Date Events */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calendar Widget */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>
                  Select a date to view events and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border border-border"
                  modifiers={{
                    eventDay: eventDates
                  }}
                  modifiersStyles={{
                    eventDay: {
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      borderRadius: '50%'
                    }
                  }}
                />
                <p className="text-xs text-muted-foreground mt-4">
                  Dates with events are highlighted in blue
                </p>
              </CardContent>
            </Card>

            {/* Events for Selected Date */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    Events for {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {eventsForSelectedDate.length > 0 ? (
                    <div className="space-y-4">
                      {eventsForSelectedDate.map((event) => (
                        <div key={event.id} className="border border-border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                              <h3 className="font-semibold">{event.title}</h3>
                            </div>
                            <Badge variant={getEventTypeColor(event.type) as any}>
                              {event.type.replace('-', ' ')}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-4 h-4" />
                              {event.course}
                            </div>
                            
                            {event.location && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                            )}
                            
                            <p className="text-foreground mt-2">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CalendarIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No events scheduled for this date</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <div key={event.id} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{getEventTypeIcon(event.type)}</span>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })} at {event.time}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.course}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No upcoming events in the next week
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Event Types Legend */}
            <Card>
              <CardHeader>
                <CardTitle>Event Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    📝 <span>Assignments</span>
                  </span>
                  <Badge variant="destructive" className="text-xs">Due</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    🎓 <span>Lectures</span>
                  </span>
                  <Badge variant="default" className="text-xs">Live</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    💬 <span>Discussions</span>
                  </span>
                  <Badge variant="secondary" className="text-xs">Interactive</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    📊 <span>Presentations</span>
                  </span>
                  <Badge variant="outline" className="text-xs">Required</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    🏢 <span>Office Hours</span>
                  </span>
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Export Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Set Reminders
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsCalendar;