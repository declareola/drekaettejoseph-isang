import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const RiteBridge = () => {
  const features = [
    {
      title: "Accelerated Online Programs",
      description: "Tailored courses for clinical professionals pivoting into healthcare management"
    },
    {
      title: "Outcome Focused",
      description: "Develop practical skills to compete in administrative, managerial, or information roles"
    },
    {
      title: "Enrollment & Order Tracking",
      description: "Integration with AfterShip for tracking enrollment/orders and fulfillment status"
    },
    {
      title: "Licensing & Terms",
      description: "The site's Terms of Use govern usage and copyright/licensing of content"
    }
  ];

  const outcomes = [
    "Skills Development: Master HIM fundamentals and healthcare administration",
    "Enhanced Employability: Stand out in competitive healthcare management roles",
    "Career Transition: Smooth pivot from clinical to administrative positions",
    "Professional Certifications: Earn recognized credentials in Health Information Management"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">RiteBridge – Healthcare Transition Programs</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Enabling clinicians and healthcare professionals to swiftly transition into Health Information Management (HIM) roles via accelerated online programs.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://ritebridgeacademy.com', '_blank')}
            >
              Visit RiteBridge Academy
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-8">Target Audience</h2>
            <Card className="p-8 border-0 shadow-soft mb-12 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                RiteBridge is designed for clinical professionals who want to pivot into healthcare management roles. 
                Whether you're a nurse, physician, or other healthcare provider looking to transition from direct patient 
                care to administrative, information management, or leadership positions, our programs provide the bridge 
                you need to make that career shift successfully.
              </p>
            </Card>

            <h2 className="text-4xl font-bold text-center text-primary mb-8">Benefits & Outcomes</h2>
            <Card className="p-8 border-0 shadow-soft animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-accent rounded-full mr-4 mt-1 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="text-center mt-12">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.open('https://ritebridgeacademy.com/terms-of-use-7994', '_blank')}
              >
                View Terms & Policies
                <ExternalLink className="ml-2 h-5 w-5" />
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

export default RiteBridge;
