import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Framework = () => {
  const remapSteps = [
    {
      letter: "R",
      word: "Reflect",
      description: "Pause and assess your current communication patterns and triggers",
      details: [
        "Identify your communication style",
        "Recognize trauma responses",
        "Understand your triggers",
        "Practice self-awareness"
      ]
    },
    {
      letter: "E",
      word: "Evaluate",
      description: "Examine the impact of your communication on relationships and outcomes",
      details: [
        "Assess relationship quality",
        "Measure communication effectiveness",
        "Identify areas for improvement",
        "Understand others' perspectives"
      ]
    },
    {
      letter: "M",
      word: "Map",
      description: "Create a strategic plan for implementing trauma-informed communication",
      details: [
        "Design communication strategies",
        "Set clear intentions",
        "Plan for difficult conversations",
        "Establish safety protocols"
      ]
    },
    {
      letter: "A",
      word: "Apply",
      description: "Put your new communication strategies into practice consistently",
      details: [
        "Use active listening techniques",
        "Practice empathetic responses",
        "Implement boundary setting",
        "Apply conflict resolution skills"
      ]
    },
    {
      letter: "P",
      word: "Progress",
      description: "Monitor, adjust, and celebrate your growth in communication mastery",
      details: [
        "Track communication improvements",
        "Celebrate small wins",
        "Adjust strategies as needed",
        "Continue learning and growing"
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
            <h1 className="text-6xl font-bold text-accent mb-6">R.E.M.A.P.™</h1>
            <h2 className="text-3xl font-bold mb-6">The Framework</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              A revolutionary approach to trauma-informed communication that transforms how leaders connect, communicate, and create change
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Download Framework Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Framework Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">The Five Pillars of R.E.M.A.P.™</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {remapSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large transition-all duration-500 animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <span className="text-3xl font-bold text-white">{step.letter}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{step.word}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Science Behind Framework */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">The Science Behind R.E.M.A.P.™</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our framework is grounded in cutting-edge research from neuroscience, psychology, and organizational behavior. 
              It integrates trauma-informed practices with evidence-based communication strategies.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Neuroscience</h3>
                <p className="text-muted-foreground">Understanding how trauma affects the brain and communication patterns</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Psychology</h3>
                <p className="text-muted-foreground">Leveraging emotional intelligence and behavioral change principles</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Organizational Behavior</h3>
                <p className="text-muted-foreground">Creating systems and cultures that support healthy communication</p>
              </div>
            </div>
            
            <Button variant="accent" size="lg">
              Access Research Library
            </Button>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Ready to Implement R.E.M.A.P.™?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Choose the path that best fits your needs and start transforming your communication today
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-soft hover:shadow-large transition-all duration-500">
                <h3 className="text-2xl font-bold text-primary mb-4">Individual Learning</h3>
                <p className="text-muted-foreground mb-6">Perfect for personal development and self-paced learning</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Online training programs
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Self-assessment tools
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Implementation guides
                  </li>
                </ul>
                <Button variant="accent" className="w-full">
                  Start Learning
                </Button>
              </Card>
              
              <Card className="p-8 border-0 shadow-soft hover:shadow-large transition-all duration-500">
                <h3 className="text-2xl font-bold text-primary mb-4">Organizational Implementation</h3>
                <p className="text-muted-foreground mb-6">Transform your entire organization with guided support</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Team training programs
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Leadership coaching
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Cultural transformation
                  </li>
                </ul>
                <Button variant="professional" className="w-full">
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Framework;