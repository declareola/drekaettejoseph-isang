import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Organizations = () => {
  const solutions = [
    {
      title: "Leadership Development",
      description: "Transform your leaders with trauma-informed communication skills",
      benefits: [
        "Increased emotional intelligence",
        "Better conflict resolution",
        "Enhanced team dynamics",
        "Improved employee retention"
      ]
    },
    {
      title: "Team Training Programs",
      description: "Build psychological safety and trust across all levels",
      benefits: [
        "Reduced workplace conflict",
        "Higher engagement scores",
        "Better collaboration",
        "Increased innovation"
      ]
    },
    {
      title: "Cultural Transformation",
      description: "Create lasting organizational change through systematic approach",
      benefits: [
        "Improved company culture",
        "Better employee wellbeing",
        "Increased productivity",
        "Enhanced reputation"
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
            <h1 className="text-5xl font-bold mb-6">Transform Your Organization</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Comprehensive solutions for leaders ready to create cultures of trust, safety, and accountability
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule Organizational Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Solutions</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-6 w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <p className="text-muted-foreground">Improvement in team communication</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="text-4xl font-bold text-accent mb-2">70%</div>
                <p className="text-muted-foreground">Reduction in workplace conflict</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <div className="text-4xl font-bold text-accent mb-2">92%</div>
                <p className="text-muted-foreground">Of leaders report increased confidence</p>
              </div>
            </div>
            <Button variant="accent" size="lg">
              Get Your Custom Proposal
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Organizations;