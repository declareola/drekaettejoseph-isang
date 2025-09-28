import { Button } from "@/components/ui/button";
import drClairbornePortrait from "@/assets/dr-clairborne-portrait.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold text-accent mb-2">R.E.M.A.P.™</h2>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transform How You Think, Communicate & Lead with Trauma-Informed Clarity
              </h1>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Trust-based communication rooted in neuroscience, emotional intelligence, 
              psychological safety, and relational integrity.
            </p>
            
            <p className="text-lg text-white/80">
              Helping leaders and organizations dismantle cycles of harm and create 
              cultures of trust and safety through trauma-informed frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Learn More About Our Training
              </Button>
              <Button variant="outline-white" size="lg" className="text-lg px-8">
                CME Version Available!
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-30 transform rotate-3"></div>
              <img
                src={drClairbornePortrait}
                alt="Dr. Maiysha Clairborne - Trauma-Informed Communication Expert"
                className="relative rounded-2xl shadow-large max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;