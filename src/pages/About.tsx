import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import drMaiyshaProfessional from "@/assets/dr-maiysha-professional.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">About Mind Remapping Academy</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transforming organizations through trauma-informed communication and leadership development
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mind Remapping Academy is dedicated to revolutionizing how leaders and organizations 
                communicate by integrating trauma-informed practices with cutting-edge neuroscience research.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that true organizational transformation begins with understanding how trauma 
                affects communication patterns and building cultures of psychological safety and trust.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our innovative R.E.M.A.P.™ methodology, we help leaders create environments 
                where both human flourishing and organizational success can thrive simultaneously.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-trust rounded-2xl blur-xl opacity-20 transform -rotate-2 group-hover:rotate-2 transition-transform duration-500"></div>
                <img
                  src={drMaiyshaProfessional}
                  alt="Dr. Ekaette Joseph-Isang - Mind Remapping Academy Founder"
                  className="relative rounded-2xl shadow-large w-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">T</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Trust</h3>
              <p className="text-muted-foreground">Building authentic relationships through vulnerability and transparency</p>
            </div>
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Safety</h3>
              <p className="text-muted-foreground">Creating psychological safety where every voice matters</p>
            </div>
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">T</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Transformation</h3>
              <p className="text-muted-foreground">Facilitating lasting change through evidence-based practices</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;