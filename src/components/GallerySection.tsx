import ScrollReveal from "./ScrollReveal";
import backView from "@/assets/back-view.jpg";
import sleeveDetail from "@/assets/sleeve-detail.jpg";
import detailStitching from "@/assets/detail-stitching.jpg";
import styledLook from "@/assets/styled-look.jpg";

const galleryItems = [
  {
    src: backView,
    alt: "Back view of Aari embroidered blouse showing peacock motif with gold zari on maroon silk",
    title: "Back View",
    subtitle: "Peacock Motif & Dori Detail",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: sleeveDetail,
    alt: "Close-up of sleeve embroidery showing gold chain stitches with pearls on red silk",
    title: "Sleeve Detail",
    subtitle: "Gold Zari & Pearl Work",
    span: "md:col-span-1",
  },
  {
    src: detailStitching,
    alt: "Macro detail of Aari embroidery thread work and pearl embellishments",
    title: "Stitch Detail",
    subtitle: "Chain Stitch Precision",
    span: "md:col-span-1",
  },
  {
    src: styledLook,
    alt: "Styled bridal look with Aari embroidered blouse paired with red silk saree and gold jewelry",
    title: "Styled Look",
    subtitle: "Bridal Ensemble",
    span: "md:col-span-2",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Every Angle, Every Detail
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              The <span className="italic text-gold">Collection</span>
            </h2>
            <div className="w-20 h-px gold-gradient mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className={`group relative overflow-hidden ${item.span}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-2xl text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-gold-light mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
