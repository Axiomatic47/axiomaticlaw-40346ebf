import { useParams, Link } from "react-router-dom";
import { disciplines } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageNavigation } from "@/components/PageNavigation";
import { motion } from "framer-motion";

const DisciplinePage = () => {
  const { disciplineId } = useParams();
  const discipline = disciplines.find(d => d.id === disciplineId);

  if (!discipline) return <div>Discipline not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-white mb-8">{discipline.title}</h1>
        <p className="text-white/90 mb-12">{discipline.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {discipline.compositions.map((composition, index) => (
            <motion.div
              key={composition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card hover-lift h-full">
                <CardHeader>
                  <CardTitle className="font-serif text-white">{composition.title}</CardTitle>
                  <CardDescription className="text-white/70">{composition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/${disciplineId}/${composition.id}`}>
                    <Button variant="outline" className="mt-4">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default DisciplinePage;