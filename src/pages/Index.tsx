import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedArgument } from "@/components/FeaturedArgument";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedArgument />
      <Features />
    </div>
  );
};

export default Index;