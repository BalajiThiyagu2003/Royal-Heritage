import ScrollReveal from "./ScrollReveal";

const CraftsmanshipSection = () => {
  const techniques = [
    {
      title: "Aari Embroidery",
      description:
        "Fine chain stitches created with a hooked needle, producing intricate floral vines and paisley patterns with unmatched precision.",
    },
    {
      title: "Zardozi Elements",
      description:
        "Heavy metallic embroidery using gold and silver bullion wire, adding regal dimension and luxurious weight to every motif.",
    },
    {
      title: "Stone & Pearl Setting",
      description:
        "Hand-placed kundan stones, pearls, sequins, and crystals secured with precision for durability and brilliant shimmer.",
    },
    {
      title: "Maggam Work",
      description:
        "South Indian influenced embroidery technique that adds depth through layered threadwork and beaded embellishments.",
    },
  ];

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              The Art Behind the Beauty
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Centuries of <span className="italic text-gold">Craftsmanship</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {techniques.map((technique, index) => (
            <ScrollReveal key={technique.title} delay={index * 0.1}>
              <div className="group p-8 border border-border hover:border-gold/40 transition-colors duration-500 h-full">
                <span className="text-gold/40 font-display text-5xl font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-4 mb-3 group-hover:text-gold transition-colors duration-500">
                  {technique.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {technique.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
