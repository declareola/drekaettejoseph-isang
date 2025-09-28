import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AssessmentBanner from "@/components/AssessmentBanner";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutDr from "@/components/AboutDr";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AssessmentBanner />
      <Philosophy />
      <Services />
      <Testimonials />
      <AboutDr />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
