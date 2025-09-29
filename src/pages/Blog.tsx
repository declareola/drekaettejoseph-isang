import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      title: "The Neuroscience of Trauma-Informed Leadership",
      excerpt: "Understanding how trauma affects the brain and what leaders can do to create safer communication environments.",
      category: "Neuroscience",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Building Psychological Safety in Remote Teams",
      excerpt: "Practical strategies for creating trust and openness when your team is distributed across locations.",
      category: "Remote Leadership",
      date: "March 12, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The R.E.M.A.P.™ Approach to Difficult Conversations",
      excerpt: "A step-by-step guide to navigating challenging discussions with empathy and clarity.",
      category: "Communication",
      date: "March 8, 2024",
      readTime: "10 min read",
      featured: true
    },
    {
      title: "Recognizing Secondary Trauma in Healthcare Settings",
      excerpt: "How healthcare leaders can identify and address the hidden impact of trauma on their teams.",
      category: "Healthcare",
      date: "March 5, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Creating Inclusive Communication Practices",
      excerpt: "Moving beyond diversity to create truly inclusive environments where every voice is heard and valued.",
      category: "Inclusion",
      date: "March 1, 2024",
      readTime: "9 min read",
      featured: false
    },
    {
      title: "The Cost of Poor Communication in Organizations",
      excerpt: "Research-backed insights into how communication failures impact your bottom line and culture.",
      category: "Business Impact",
      date: "February 28, 2024",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Neuroscience", "Communication", "Leadership", "Healthcare", "Business Impact"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">Insights & Research</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Explore the latest research, insights, and practical strategies for trauma-informed communication and leadership
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "accent" : "outline"}
                size="sm"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.filter(post => post.featured).map((post, index) => (
              <Card 
                key={index}
                className="p-6 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="p-6 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary hover:text-accent transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="p-2">
                      →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on trauma-informed communication delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-primary"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;