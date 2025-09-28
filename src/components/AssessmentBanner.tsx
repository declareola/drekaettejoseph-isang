import { Button } from "@/components/ui/button";

const AssessmentBanner = () => {
  return (
    <section className="bg-gradient-accent py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Is Your Communication Trauma Activating or Trauma Mitigating?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
          Take Our Trauma-Informed Communication Assessment Now & Get Your Score!
        </p>
        <Button variant="professional" size="lg" className="text-lg px-12 py-4">
          Click Here to Get Your Score
        </Button>
      </div>
    </section>
  );
};

export default AssessmentBanner;