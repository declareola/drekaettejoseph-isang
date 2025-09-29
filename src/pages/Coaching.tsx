import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import drMaiyshaProfessional from "@/assets/dr-maiysha-office.jpg";

const Coaching = () => {
  const coachingOptions = [
    {
      title: "Executive Coaching",
      sessions: "6 sessions",
      duration: "3 months",
      price: "Contact for pricing",
      description: "1:1 coaching for C-level executives and senior leaders",
      includes: [
        "Personalized R.E.M.A.P.™ assessment",
        "Custom development plan",
        "Weekly 90-minute sessions",
        "Email support between sessions",
        "360-degree feedback analysis"
      ]
    },
    {
      title: "Leadership Team Coaching",
      sessions: "8 sessions",
      duration: "4 months",
      price: "Contact for pricing",
      description: "Transform your entire leadership team dynamics",
      includes: [
        "Team assessment and analysis",
        "Group coaching sessions",
        "Individual breakthrough sessions",
        "Communication framework training",
        "Implementation support"
      ]
    },
    {
      title: "Organizational Consulting",
      sessions: "Customized",
      duration: "6-12 months",
      price: "Contact for pricing",
      description: "Full-scale organizational transformation program",
      includes: [
        "Complete culture assessment",
        "Change management strategy",
        "Leadership development program",
        "Employee training rollout",
        "Ongoing measurement and support"
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
            <h1 className="text-5xl font-bold mb-6">Personal Coaching & Consulting</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Work directly with Dr. Clairborne to transform your leadership and organizational culture
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Coaching Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Coaching Programs</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coachingOptions.map((option, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{option.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{option.sessions} • {option.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-accent">{option.price}</div>
                  <p className="text-muted-foreground">{option.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Includes:</h4>
                    <ul className="space-y-1">
                      {option.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="accent" className="w-full mt-6">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Clairborne Coaching */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-primary">Why Choose Dr. Clairborne?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over two decades of experience in healthcare leadership and organizational development, 
                Dr. Clairborne brings a unique perspective that combines medical expertise with deep understanding 
                of trauma-informed practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Evidence-Based Approach</h4>
                    <p className="text-muted-foreground text-sm">Grounded in neuroscience and psychology research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Proven Track Record</h4>
                    <p className="text-muted-foreground text-sm">Thousands of leaders transformed worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Personalized Solutions</h4>
                    <p className="text-muted-foreground text-sm">Tailored to your unique challenges and goals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-trust rounded-2xl blur-xl opacity-20 transform -rotate-2 group-hover:rotate-2 transition-transform duration-500"></div>
                <img
                  src={drMaiyshaProfessional}
                  alt="Dr. Maiysha Clairborne - Personal Coaching"
                  className="relative rounded-2xl shadow-large w-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards creating the culture and communication you've always envisioned
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book Free Consultation
              </Button>
              <Button variant="outline-white" size="lg" className="text-lg px-8">
                Download Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Coaching;