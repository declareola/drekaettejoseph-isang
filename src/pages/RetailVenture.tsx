import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const RetailVenture = () => {
  const products = [
    {
      category: "Health & Fitness",
      items: [
        {
          name: "Resistance Bands Set",
          description: "Durable, multi-level resistance for home workouts",
          link: "https://www.academy.com/search?searchTerm=resistance%20bands"
        },
        {
          name: "Adjustable Dumbbells",
          description: "Space-saving, ideal for strength training at home",
          link: "https://www.academy.com/search?searchTerm=adjustable%20dumbbells"
        }
      ]
    },
    {
      category: "Outdoor & Wellness",
      items: [
        {
          name: "Hydration Backpack",
          description: "Lightweight pack for long hikes",
          link: "https://www.academy.com/search?searchTerm=hydration%20backpack"
        },
        {
          name: "Portable First Aid Kit",
          description: "Essential medical supplies for travel or outdoor activities",
          link: "https://www.academy.com/search?searchTerm=first%20aid%20kit"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Retail Venture – Academy.com</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              One of the largest online retailers of sporting goods and outdoor gear, connecting customers with high-quality products across fitness, outdoor recreation, and lifestyle categories.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://www.academy.com', '_blank')}
            >
              Visit Academy.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Featured Products</h2>
          
          {products.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="text-3xl font-bold text-primary mb-8">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {category.items.map((product, itemIndex) => (
                  <Card 
                    key={itemIndex}
                    className="p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                    style={{ animationDelay: `${itemIndex * 200}ms` }}
                  >
                    <h4 className="text-2xl font-bold text-primary mb-3">{product.name}</h4>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <Button 
                      variant="accent" 
                      className="w-full"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      Shop on Academy.com
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Product Categories</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-fade-in-up">
                <div className="text-6xl mb-4">🏋️</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Fitness Equipment</h3>
                <p className="text-muted-foreground">Quality gear for your workout routine</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="text-6xl mb-4">🏕️</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Outdoor Gear</h3>
                <p className="text-muted-foreground">Everything for your adventures</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <div className="text-6xl mb-4">💪</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Health & Wellness</h3>
                <p className="text-muted-foreground">Products for a healthier lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RetailVenture;
