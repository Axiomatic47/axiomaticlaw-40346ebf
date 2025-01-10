import { useParams, Link } from "react-router-dom";
import { disciplines } from "@/data/content";
import { PageNavigation } from "@/components/PageNavigation";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const SectionPage = () => {
  const { disciplineId, compositionId, sectionId } = useParams();
  const discipline = disciplines.find(d => d.id === disciplineId);
  const composition = discipline?.compositions.find(c => c.id === compositionId);
  const section = composition?.sections.find(s => s.id === sectionId);

  if (!section) return <div>Section not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 flex gap-8">
        {/* Sidebar */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold mb-4 text-white">{composition?.title}</h3>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-1">
                {composition?.sections.map((s) => (
                  <Link
                    key={s.id}
                    to={`/${disciplineId}/${compositionId}/${s.id}`}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm",
                      s.id === sectionId
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Main content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif text-white mb-8">{section.title}</h1>
          <div className="prose-law max-w-none">
            <p className="text-white/90 leading-relaxed whitespace-pre-wrap">{section.content}</p>
          </div>
        </motion.div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default SectionPage;