export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Toulon.JPG"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in animation-delay-100"
              style={{ animationDuration: "1.2s" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Jr Software Developer
            </span>

            {/* Headline */}
            <div className="space-y-4 mt-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300" style={{ animationDuration: "1.2s" }}>
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p
                className="mt-4 text-lg text-muted-foreground max-w-lg text-secondary animate-fade-in animation-delay-500"
                style={{ animationDuration: "1.2s" }}
              >
                I specialize in creating user-friendly interfaces and seamless
                experiences that drive engagement and satisfaction.
              </p>
            </div>
          </div>
          {/* Right Content */}
        </div>
      </div>
    </section>
  );
};
