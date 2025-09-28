import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-primary-dark/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              R.E.M.A.P.™
            </div>
            <div className="text-sm text-white/80 hidden sm:block">
              Mind Remapping Academy
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#organizations" className="text-white/90 hover:text-white transition-colors">
              For Organizations
            </a>
            <a href="#training" className="text-white/90 hover:text-white transition-colors">
              Online Trainings
            </a>
            <a href="#coaching" className="text-white/90 hover:text-white transition-colors">
              Coaching
            </a>
            <a href="#framework" className="text-white/90 hover:text-white transition-colors">
              Framework
            </a>
            <a href="#blog" className="text-white/90 hover:text-white transition-colors">
              Blog
            </a>
          </div>

          {/* Call to Action */}
          <div className="flex items-center space-x-4">
            <Button variant="outline-white" size="sm" className="hidden md:inline-flex">
              Listen to Podcast
            </Button>
            <div className="text-white/90 text-sm hidden xl:block">
              Call Us Today! (404) 793-0011
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;