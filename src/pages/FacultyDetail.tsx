import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Award, BookOpen, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { faculty } from "@/components/constants/indext";

const FacultyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const facultyMember = faculty.find((member, index) => index.toString() === id);

  if (!facultyMember) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Faculty Member Not Found</h1>
          <Button onClick={() => navigate("/faculty")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Faculty
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button
            variant="outline"
            onClick={() => navigate("/faculty")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Faculty
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Faculty Photo and Basic Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <motion.div
                    className="relative inline-block mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={facultyMember.image}
                      alt={facultyMember.name}
                      className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary/10"
                    />
                  </motion.div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    {facultyMember.name}
                  </h1>
                  {/* <Badge variant="secondary" className="mb-3"> */}
                  <p className="mb-3">{facultyMember.credentials}</p>
                  {/* </Badge> */}
                  <div className="space-y-2">
                    {/* <Badge
                      variant="outline"
                      className="bg-gradient-primary text-white border-0 block"
                    > */}
                    <p className="mb-3">{facultyMember.title}</p>
                    {/* </Badge> */}
                    <p className="text-lg font-medium text-primary">
                      {facultyMember.position}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Specialization:
                      </span>{" "}
                      {facultyMember.specialization}
                    </p>
                  </div>
                </div>

                {/* External Profile Link */}
                <Button asChild className="w-full" variant="outline">
                  <a
                    href={facultyMember.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View External Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Information */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* About */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {facultyMember.description}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {facultyMember.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + 0.1 * index, duration: 0.4 }}
                    >
                      <Award className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyDetail;