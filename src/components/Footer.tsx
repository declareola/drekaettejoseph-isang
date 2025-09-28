const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">R.E.M.A.P.™</h3>
            <p className="text-white/80">
              Mind Remapping Academy - Transforming communication through trauma-informed leadership.
            </p>
            <div className="text-white/80">
              <p>Call Us Today!</p>
              <p className="font-semibold text-accent">(404) 793-0011</p>
              <p>drclairborne@mindremappingacademy.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Leadership Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Team Workshops</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Executive Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Organizational Assessment</a></li>
            </ul>
          </div>

          {/* Training */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Training</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Online Courses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CME Programs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Certification</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Workshops</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>&copy; 2024 Mind Remapping Academy. All rights reserved. R.E.M.A.P.™ is a trademark of Mind Remapping Academy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;