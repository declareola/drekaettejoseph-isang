import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";

const ChampionsCoaching = () => {
  const programs = [
    {
      name: "Virtual Assistant Training",
      description: "Comprehensive program to prepare you for virtual assistant roles in the global marketplace"
    },
    {
      name: "Teach Naija",
      description: "Professional development for teachers to enhance their skills and career prospects"
    },
    {
      name: "Tech Medics",
      description: "Technology training specifically designed for clinicians and healthcare professionals"
    }
  ];

  const learningFormat = [
    {
      title: "Live Classes",
      description: "Interactive sessions via Google Meet for real-time learning and engagement"
    },
    {
      title: "Tutorials & Support",
      description: "WhatsApp-based tutorials and ongoing support from instructors"
    },
    {
      title: "Recorded Sessions",
      description: "Access to recorded classes for flexible pacing and review"
    },
    {
      title: "Community & Mentorship",
      description: "Peer groups, instructor access, mentoring, and alumni network"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Champions Coaching Academy</h1>
            <p className="text-2xl text-white/90 font-semibold leading-relaxed mb-4">
              "We do not just prepare you for the job market; we prepare you to lead in it."
            </p>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Professional & Career Development for Africans - Empowering learners with immersive programs, mentorship, and portfolio-building projects to succeed globally.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://championscoachingacademy.com', '_blank')}
            >
              Visit Champions Coaching Academy
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Programs</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{program.name}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Learning Format</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {learningFormat.map((format, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">{format.title}</h3>
                <p className="text-muted-foreground">{format.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Policies & Information</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Button 
                variant="outline" 
                className="h-auto py-6"
                onClick={() => window.open('https://championscoachingacademy.com/cancellation/', '_blank')}
              >
                <div className="text-center">
                  <div className="font-semibold mb-2">Cancellation Policy</div>
                  <ExternalLink className="h-4 w-4 mx-auto" />
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-6"
                onClick={() => window.open('https://championscoachingacademy.com/refund/', '_blank')}
              >
                <div className="text-center">
                  <div className="font-semibold mb-2">Refund Policy</div>
                  <ExternalLink className="h-4 w-4 mx-auto" />
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-6"
                onClick={() => window.open('https://championscoachingacademy.com/tos/', '_blank')}
              >
                <div className="text-center">
                  <div className="font-semibold mb-2">Terms of Service</div>
                  <ExternalLink className="h-4 w-4 mx-auto" />
                </div>
              </Button>
            </div>

            <Card className="p-8 border-0 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@championscoachingacademy.com" className="text-muted-foreground hover:text-accent transition-colors">
                    info@championscoachingacademy.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div className="text-muted-foreground">
                    +234-802-357-4364 | +234-812-987-4003
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button 
                    variant="accent"
                    onClick={() => window.open('https://championscoachingacademy.com/contact/', '_blank')}
                  >
                    Visit Contact Page
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ChampionsCoaching;
