import ScrollReveal from "./ScrollReveal";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-maroon-deep text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
            Ideal For
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
            Bridal Wear · Festive Celebrations · Couture Collections
          </h2>
          <p className="font-body text-primary-foreground/60 text-sm max-w-xl mx-auto mb-12">
            Each piece is a unique masterpiece crafted over weeks of meticulous hand embroidery, 
            designed for brides, boutique clients, and luxury ethnic wear connoisseurs.
          </p>
        </ScrollReveal>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10">
          <p className="font-display text-lg text-gold/80 italic">
            "Where tradition meets timeless elegance"
          </p>
          <p className="font-body text-xs text-primary-foreground/40 mt-4 tracking-wider">
            © 2026 Royal Heritage Aari Work · Handcrafted with Love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
