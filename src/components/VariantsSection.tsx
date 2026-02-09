import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import heroBlouse from "@/assets/hero-blouse.jpg";
import variantEmerald from "@/assets/variant-emerald.jpg";
import variantNavy from "@/assets/variant-navy.jpg";
import variantIvory from "@/assets/variant-ivory.jpg";
import variantPink from "@/assets/variant-pink.jpg";

const variants = [
  {
    id: "royal-red",
    name: "Royal Maroon",
    subtitle: "Regal Peacock Aari Work",
    image: heroBlouse,
    color: "hsl(350,65%,28%)",
    fabric: "Bridal Silk",
    description: "The signature piece — deep maroon bridal silk with dense gold zari embroidery, kundan stones, and pearl accents.",
  },
  {
    id: "emerald",
    name: "Emerald Garden",
    subtitle: "Floral Vine Aari Work",
    image: variantEmerald,
    color: "hsl(150,40%,28%)",
    fabric: "Raw Silk",
    description: "Rich emerald green with delicate floral vine patterns, gold zari thread, and pearl flower motifs.",
  },
  {
    id: "navy",
    name: "Royal Sapphire",
    subtitle: "Mughal Heritage Aari Work",
    image: variantNavy,
    color: "hsl(220,60%,35%)",
    fabric: "Brocade Silk",
    description: "Regal navy blue with Mughal-inspired symmetrical patterns, gold and silver zari, kundan centerpiece.",
  },
  {
    id: "ivory",
    name: "Ivory Elegance",
    subtitle: "Classic Zardozi Aari Work",
    image: variantIvory,
    color: "hsl(40,40%,88%)",
    fabric: "Satin Silk",
    description: "Subtle ivory champagne base with tonal gold zardozi embroidery, perfect for reception and sangeet.",
  },
  {
    id: "pink",
    name: "Rani Pink",
    subtitle: "Temple Aari Work",
    image: variantPink,
    color: "hsl(340,80%,50%)",
    fabric: "Velvet",
    description: "Vibrant rani pink with temple-style gold embroidery, perfect for muhurtham and festive celebrations.",
  },
];

const VariantsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = variants[activeIndex];

  return (
    <section id="variants" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Choose Your Statement
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Design <span className="italic text-gold">Variants</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={`${active.name} Aari embroidered blouse`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Info + selector */}
          <ScrollReveal delay={0.2}>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2">
                    {active.subtitle}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                    {active.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    Fabric: {active.fabric}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mt-4 mb-8">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Color selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">
                  Select Color:
                </span>
                <div className="flex gap-3">
                  {variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveIndex(i)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        i === activeIndex
                          ? "border-gold scale-110 shadow-lg"
                          : "border-border hover:border-gold/40"
                      }`}
                      style={{ backgroundColor: v.color }}
                      aria-label={`Select ${v.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveIndex(i)}
                    className={`flex-shrink-0 w-20 h-24 overflow-hidden border-2 transition-all duration-300 ${
                      i === activeIndex ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VariantsSection;
