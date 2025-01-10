import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedArgument } from "@/components/FeaturedArgument";
import { PageNavigation } from "@/components/PageNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <FeaturedArgument />
      <PageNavigation />
    </div>
  );
};

export default Index;