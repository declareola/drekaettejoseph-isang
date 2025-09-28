import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const organizationalSolutions = [
    {
      title: "Listening Sessions & Facilitated Dialogues",
      description: "Create safe spaces for honest conversations and understanding across all levels of your organization."
    },
    {
      title: "Leadership Development Programs",
      description: "Develop trauma-informed leaders who can create psychological safety and drive meaningful change."
    },
    {
      title: "Team Communication Workshops",
      description: "Transform how teams communicate, collaborate, and resolve conflicts through our R.E.M.A.P.™ methodology."
    },
    {
      title: "Organizational Assessment",
      description: "Comprehensive evaluation of communication patterns and trauma-informed practices across your organization."
    },
    {
      title: "Culture Transformation Consulting",
      description: "Strategic guidance to build cultures of trust, safety, and accountability that drive results."
    },
    {
      title: "Executive Coaching",
      description: "One-on-one coaching for senior leaders to develop trauma-informed communication and leadership skills."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Organizational Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive trauma-informed communication solutions designed to transform your organizational culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizationalSolutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <h3 className="text-xl font-semibold text-primary mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            Learn More About Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;