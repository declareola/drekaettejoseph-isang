import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Training = () => {
  const courses = [
    {
      title: "R.E.M.A.P.™ Foundations",
      duration: "6 weeks",
      price: "$497",
      cme: true,
      description: "Master the fundamentals of trauma-informed communication",
      features: [
        "Interactive video modules",
        "Live Q&A sessions",
        "Downloadable resources",
        "Certificate of completion",
        "6 CME credits available"
      ]
    },
    {
      title: "Advanced Leadership Mastery",
      duration: "12 weeks",
      price: "$997",
      cme: true,
      description: "Deep-dive into organizational transformation strategies",
      features: [
        "Advanced case studies",
        "1:1 coaching sessions",
        "Peer learning groups",
        "Implementation toolkit",
        "12 CME credits available"
      ]
    },
    {
      title: "Train-the-Trainer Certification",
      duration: "16 weeks",
      price: "$1,997",
      cme: false,
      description: "Become a certified R.E.M.A.P.™ facilitator",
      features: [
        "Comprehensive curriculum",
        "Practice teaching sessions",
        "Marketing materials",
        "Ongoing support",
        "Official certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Online Training Programs</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Learn trauma-informed communication at your own pace with our comprehensive online courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Browse All Courses
              </Button>
              <Button variant="outline-white" size="lg" className="text-lg px-8">
                CME Accredited Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Choose Your Learning Path</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {course.cme && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    CME Available
                  </Badge>
                )}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.duration}</span>
                    <span className="text-2xl font-bold text-accent">{course.price}</span>
                  </div>
                  <p className="text-muted-foreground">{course.description}</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="accent" className="w-full mt-6">
                    Enroll Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">What You'll Experience</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left space-y-4 animate-slide-in-left">
                <h3 className="text-xl font-semibold text-primary">Interactive Learning</h3>
                <p className="text-muted-foreground">Engage with multimedia content, case studies, and practical exercises</p>
              </div>
              <div className="text-left space-y-4 animate-slide-in-right">
                <h3 className="text-xl font-semibold text-primary">Expert Support</h3>
                <p className="text-muted-foreground">Access to Dr. Joseph-Isang and certified facilitators throughout your journey</p>
              </div>
              <div className="text-left space-y-4 animate-slide-in-left" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold text-primary">Flexible Schedule</h3>
                <p className="text-muted-foreground">Learn at your own pace with lifetime access to course materials</p>
              </div>
              <div className="text-left space-y-4 animate-slide-in-right" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold text-primary">Community Connection</h3>
                <p className="text-muted-foreground">Join a network of like-minded professionals and leaders</p>
              </div>
            </div>
            <Button variant="professional" size="lg">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Training;