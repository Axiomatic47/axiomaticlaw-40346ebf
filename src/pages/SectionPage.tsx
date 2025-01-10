import { useParams } from "react-router-dom";
import { disciplines } from "@/data/content";
import { PageNavigation } from "@/components/PageNavigation";
import { motion } from "framer-motion";

const SectionPage = () => {
  const { disciplineId, compositionId, sectionId } = useParams();
  const discipline = disciplines.find(d => d.id === disciplineId);
  const composition = discipline?.compositions.find(c => c.id === compositionId);
  const section = composition?.sections.find(s => s.id === sectionId);

  if (!section) return <div>Section not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif text-white mb-8">{section.title}</h1>
          <div className="prose-law">
            <p className="text-white/90 leading-relaxed">{section.content}</p>
          </div>
        </motion.div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default SectionPage;