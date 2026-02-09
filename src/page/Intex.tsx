import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import VariantsSection from "@/components/VariantsSection";
import GallerySection from "@/components/GallerySection";
import DetailsSection from "@/components/DetailsSection";
import PricingSection from "@/components/PricingSection";
import EnquirySection from "@/components/EnquirySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CraftsmanshipSection />
      <VariantsSection />
      <GallerySection />
      <DetailsSection />
      <PricingSection />
      <EnquirySection />
      <FooterSection />
    </main>
  );
};

export default Index;