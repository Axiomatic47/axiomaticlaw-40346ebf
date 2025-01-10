import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedArgument } from "@/components/FeaturedArgument";
import { PageNavigation } from "@/components/PageNavigation";

const Law = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-white mb-8">Legal Theory & Constitutional Law</h1>
        <div className="prose-law">
          <p className="text-white/90">
            Explore foundational legal texts and constitutional theory, examining the philosophical underpinnings of justice and law.
          </p>
        </div>
        <FeaturedArgument />
      </div>
      <PageNavigation />
    </div>
  );
};

export default Law;