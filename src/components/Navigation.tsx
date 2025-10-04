import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-primary-dark/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="text-2xl font-bold text-white">
              R.E.M.A.P.™
            </div>
            <div className="text-sm text-white/80 hidden sm:block">
              Mind Remapping Academy
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/about" className="text-white/90 hover:text-white transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-white transition-all duration-300">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary-dark border-primary/20">
                <DropdownMenuItem asChild>
                  <a href="/organizations" className="text-white/90 hover:text-white cursor-pointer">
                    For Organizations
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/training" className="text-white/90 hover:text-white cursor-pointer">
                    Online Training
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/coaching" className="text-white/90 hover:text-white cursor-pointer">
                    Coaching
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Ventures Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-white transition-all duration-300">
                Ventures <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary-dark border-primary/20">
                <DropdownMenuItem asChild>
                  <a href="/retail-venture" className="text-white/90 hover:text-white cursor-pointer">
                    Retail Venture
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/ritebridge" className="text-white/90 hover:text-white cursor-pointer">
                    RiteBridge
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/champions-coaching" className="text-white/90 hover:text-white cursor-pointer">
                    Champions Coaching
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/framework" className="text-white/90 hover:text-white transition-all duration-300 relative group">
              Framework
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/blog" className="text-white/90 hover:text-white transition-all duration-300 relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Call to Action */}
          <div className="flex items-center space-x-4">
            <Button variant="outline-white" size="sm" className="hidden md:inline-flex">
              Podcast
            </Button>
            <div className="text-white/90 text-sm hidden xl:block">
              (404) 793-0011
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;