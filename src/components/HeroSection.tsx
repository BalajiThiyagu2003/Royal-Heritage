import heroImage from "@/assets/hero-blouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Royal Heritage Aari Work Embroidered Blouse - Front view showing intricate gold zari embroidery with kundan stones on bridal red silk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold font-body text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          Handcrafted Luxury · Aari Embroidery
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up-delay-1">
          Royal Heritage
          <span className="block italic text-gold">Aari Work Blouse</span>
        </h1>
        <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2">
          A masterpiece of traditional Indian craftsmanship — hand-embroidered with gold zari, 
          kundan stones, pearls, and sequins on the finest bridal silk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <a
            href="#gallery"
            className="px-8 py-3.5 bg-gold text-gold-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            View Collection
          </a>
          <a
            href="#craftsmanship"
            className="px-8 py-3.5 border border-gold/50 text-gold font-body text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
          >
            The Craft
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-delay-3">
        <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
