import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    variant: "",
    tier: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="enquiry" className="py-24 md:py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="p-12 border border-gold/30">
              <span className="text-gold text-4xl mb-4 block">✦</span>
              <h3 className="font-display text-3xl text-foreground mb-4">
                Thank You
              </h3>
              <p className="font-body text-muted-foreground">
                Your enquiry has been received. Our artisans will review your request 
                and get back to you within 24-48 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors";

  return (
    <section id="enquiry" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Place an <span className="italic text-gold">Enquiry</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Preferred Variant
              </label>
              <select
                name="variant"
                value={formData.variant}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select a variant</option>
                <option value="royal-maroon">Royal Maroon</option>
                <option value="emerald">Emerald Garden</option>
                <option value="navy">Royal Sapphire</option>
                <option value="ivory">Ivory Elegance</option>
                <option value="rani-pink">Rani Pink</option>
                <option value="custom">Custom Design</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Pricing Tier
              </label>
              <select
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select a tier</option>
                <option value="classic">Classic — ₹18,500</option>
                <option value="bridal">Bridal — ₹35,000</option>
                <option value="couture">Couture — ₹55,000+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements — occasion, preferred design elements, timeline..."
                className={inputClasses + " resize-none"}
              />
            </div>
            <div className="md:col-span-2 text-center pt-4">
              <button
                type="submit"
                className="px-12 py-4 gold-gradient text-gold-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shimmer"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EnquirySection;
