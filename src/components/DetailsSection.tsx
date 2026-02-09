import ScrollReveal from "./ScrollReveal";

const DetailsSection = () => {
  return (
    <section id="details" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Materials & Specifications
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Exquisite <span className="italic text-gold">Details</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              icon: (
                <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 12c4-4 8 4 12 0" />
                </svg>
              ),
              title: "Base Fabric",
              items: ["Raw Silk", "Bridal Silk", "Velvet", "Satin & Brocade"],
            },
            {
              icon: (
                <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                  <path d="m5.6 5.6 2.9 2.9m7 7 2.9 2.9M5.6 18.4l2.9-2.9m7-7 2.9-2.9" />
                </svg>
              ),
              title: "Embellishments",
              items: ["Gold & Antique Zari", "Kundan & Cut Stones", "Pearls & Glass Beads", "Sequins & Crystals"],
            },
          ].map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">{section.title}</h3>
                <ul className="font-body text-muted-foreground text-sm space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-foreground mb-4">Color Palette</h3>
              <div className="flex justify-center gap-3 mb-4">
                {["hsl(350,65%,28%)", "hsl(340,60%,35%)", "hsl(150,40%,28%)", "hsl(40,70%,45%)", "hsl(30,30%,90%)"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm">
                Maroon · Rani Pink · Emerald · Gold · Ivory
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-24 border-t border-border pt-16">
            <h3 className="font-display text-3xl text-foreground text-center mb-12">
              Blouse <span className="italic text-gold">Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Heavily embroidered front & back",
                "Detailed sleeve embroidery",
                "Multiple neckline options",
                "Scalloped embroidered borders",
                "Tailored bridal fit",
                "Reinforced lining support",
                "Hidden stitch finishing",
                "Customizable sizing",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4">
                  <span className="text-gold mt-0.5 text-lg">✦</span>
                  <span className="font-body text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DetailsSection;
