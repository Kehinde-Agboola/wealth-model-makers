import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import FacultyDetail from "./pages/FacultyDetail";
import Resources from "./pages/Resources";
import News from "./pages/News";
import LmsDashboard from "./pages/LmsDashboard";
// import LmsCourse from "./pages/LmsCourse";
// import LmsCalendar from "./pages/LmsCalendar";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact"; // ✅ Fix casing

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              {/* ✅ Home route */}
              <Route path="/" element={<Home />} />
              {/* or: <Route index element={<Home />} /> if you nest under a parent "/" route */}

              <Route path="/about" element={<About />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/faculty/:id" element={<FacultyDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
              <Route path="/lms" element={<LmsDashboard />} />
              {/* <Route path="/lms/course/:courseId" element={<LmsCourse />} /> */}
              {/* <Route path="/lms/calendar" element={<LmsCalendar />} /> */}

              {/* ✅ Add specific routes BEFORE the catch-all */}
              <Route path="/contact" element={<Contact />} />

              {/* ✅ Catch-all LAST */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
