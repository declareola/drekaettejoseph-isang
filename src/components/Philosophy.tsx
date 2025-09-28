const Philosophy = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Quote */}
          <blockquote className="text-3xl lg:text-4xl font-semibold leading-relaxed">
            "We believe communication is more than words — it's about{" "}
            <span className="text-accent">presence</span>,{" "}
            <span className="text-accent">trust</span>,{" "}
            <span className="text-accent">safety</span>, and the{" "}
            <span className="text-accent">courage to repair</span>."
          </blockquote>
          <cite className="text-xl text-white/80">~Dr. Maiysha</cite>

          {/* Framework Overview */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">
              Through our R.E.M.A.P.™ Methodology and R.E.M.A.P.™ Framework, we guide leaders, teams, and organizations to:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">Communicate with honesty, emotional awareness, and courage</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">Build and sustain a culture of trust & psychological safety across all levels</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">Navigate conflict with equity and accountability</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">Reward accountability, adaptability, and acknowledgement</p>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg">Create a culture of ongoing personal and professional development as a norm, not an exception</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;