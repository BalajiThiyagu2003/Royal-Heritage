import ScrollReveal from "./ScrollReveal";

const pricingTiers = [
  {
    name: "Classic",
    price: "₹18,500",
    description: "Essential Aari embroidery with elegant motifs",
    features: [
      "Aari chain stitch embroidery",
      "Gold zari thread work",
      "Sequin embellishments",
      "Standard neckline design",
      "Raw silk base fabric",
      "4-6 weeks delivery",
    ],
  },
  {
    name: "Bridal",
    price: "₹35,000",
    description: "Premium bridal design with full embellishments",
    features: [
      "Dense Aari + Zardozi embroidery",
      "Gold & antique zari threads",
      "Kundan stones & pearl setting",
      "Custom neckline & back design",
      "Bridal silk or velvet fabric",
      "Full sleeve embroidery",
      "Reinforced bridal lining",
      "6-8 weeks delivery",
    ],
    featured: true,
  },
  {
    name: "Couture",
    price: "₹55,000+",
    description: "Bespoke luxury with custom design consultation",
    features: [
      "Fully custom design consultation",
      "Premium Maggam + Aari work",
      "Real kundan & crystal stones",
      "Hand-set pearl borders",
      "Choice of any premium fabric",
      "360° embroidery coverage",
      "Museum-grade finishing",
      "8-12 weeks delivery",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Investment in Heritage
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Pricing <span className="italic text-gold">Tiers</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
            <p className="font-body text-muted-foreground mt-6 max-w-lg mx-auto">
              Each piece is handcrafted to order. Pricing varies by design complexity, fabric choice, and embellishment density.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 0.15}>
              <div
                className={`relative p-8 border h-full flex flex-col ${
                  tier.featured
                    ? "border-gold bg-background shadow-lg"
                    : "border-border bg-background"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gold-gradient">
                    <span className="font-body text-xs tracking-widest uppercase text-gold-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-2xl text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <p className="font-display text-4xl text-gold mb-8">
                  {tier.price}
                </p>
                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-gold text-sm mt-0.5">✦</span>
                      <span className="font-body text-sm text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#enquiry")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block text-center py-3 font-body text-sm tracking-widest uppercase transition-all ${
                    tier.featured
                      ? "gold-gradient text-gold-foreground hover:opacity-90"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
