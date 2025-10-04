import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const VenturesHighlight = () => {
  const ventures = [
    {
      title: "Retail Venture – Academy.com",
      description: "One of the largest online retailers of sporting goods and outdoor gear",
      link: "/retail-venture",
      icon: "🏋️"
    },
    {
      title: "RiteBridge Academy",
      description: "Healthcare transition programs for clinical professionals moving into HIM roles",
      link: "/ritebridge",
      icon: "🏥"
    },
    {
      title: "Champions Coaching Academy",
      description: "Professional & career development training empowering Africans to lead globally",
      link: "/champions-coaching",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Ventures</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of businesses spanning retail, healthcare education, and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <Card 
              key={index}
              className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-4">{venture.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{venture.title}</h3>
              <p className="text-muted-foreground mb-6">{venture.description}</p>
              <Button 
                variant="accent" 
                className="w-full"
                onClick={() => window.location.href = venture.link}
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesHighlight;
