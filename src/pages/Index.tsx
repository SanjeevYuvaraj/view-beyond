import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AIShowcase } from "@/components/AIShowcase";
import { ContentGrid } from "@/components/ContentGrid";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AIShowcase />
      <ContentGrid />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
