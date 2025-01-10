import { useParams, Link } from "react-router-dom";
import { disciplines } from "@/data/content";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PageNavigation } from "@/components/PageNavigation";
import { motion } from "framer-motion";

const CompositionPage = () => {
  const { disciplineId, compositionId } = useParams();
  const discipline = disciplines.find(d => d.id === disciplineId);
  const composition = discipline?.compositions.find(c => c.id === compositionId);

  if (!composition) return <div>Composition not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-white mb-8">{composition.title}</h1>
        <p className="text-white/90 mb-12">{composition.description}</p>
        
        <div className="space-y-6">
          {composition.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/${disciplineId}/${compositionId}/${section.id}`}>
                <Card className="glass-card hover-lift">
                  <CardHeader>
                    <CardTitle className="font-serif text-white">{section.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default CompositionPage;