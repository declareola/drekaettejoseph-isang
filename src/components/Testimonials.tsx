import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Joseph-Isang's process doesn't just inspire leaders — it transforms how they lead every day.",
      author: "VP, Healthcare System",
      role: "Healthcare Leadership"
    },
    {
      quote: "The R.E.M.A.P.™ methodology has revolutionized how our teams communicate and collaborate. We've seen measurable improvements in both engagement and performance.",
      author: "Chief Human Resources Officer",
      role: "Fortune 500 Company"
    },
    {
      quote: "Finally, a framework that addresses the root causes of communication breakdowns. Dr. Joseph-Isang's approach is both scientifically grounded and practically transformative.",
      author: "Executive Director",
      role: "Non-Profit Organization"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">What Leaders Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organizations worldwide are transforming their communication culture with our trauma-informed approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-8 border-0 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-500 group animate-scale-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                <div className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300">"</div>
                <blockquote className="text-lg text-foreground leading-relaxed -mt-4 group-hover:text-primary transition-colors duration-300">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t pt-4 border-accent/20">
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;