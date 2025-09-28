import { Button } from "@/components/ui/button";
import drClairbornePortrait from "@/assets/dr-clairborne-portrait.jpg";

const AboutDr = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-trust rounded-2xl blur-xl opacity-20 transform -rotate-2 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-10 transform rotate-1 group-hover:-rotate-1 transition-transform duration-700"></div>
              <img
                src={drClairbornePortrait}
                alt="Dr. Maiysha Clairborne MD - Founder of Mind Remapping Academy"
                className="relative rounded-2xl shadow-large w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-slide-in-right">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up">Meet Dr. Maiysha Clairborne</h2>
              <p className="text-xl text-accent font-semibold mb-6 animate-fade-in">
                MD, Trauma-Informed Communication Expert & Founder
              </p>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dr. Maiysha Clairborne is a pioneering physician and communication expert who has dedicated 
                her career to transforming how leaders and organizations communicate through trauma-informed practices.
              </p>
              
              <p>
                With extensive experience in healthcare leadership and organizational development, 
                Dr. Clairborne developed the revolutionary R.E.M.A.P.™ methodology that bridges 
                neuroscience, emotional intelligence, and practical communication skills.
              </p>
              
              <p>
                Her work has helped thousands of leaders create cultures of psychological safety, 
                trust, and accountability that drive both human flourishing and organizational success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="accent" size="lg">
                Learn More About Dr. Clairborne
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDr;