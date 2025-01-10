import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PageNavigation } from "@/components/PageNavigation";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-white mb-8">Philosophy</h1>
        <div className="prose-law">
          <p className="text-white/90">
            Delve into metaphysics, ethics, epistemology, and other fundamental branches of philosophical inquiry.
          </p>
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default Philosophy;