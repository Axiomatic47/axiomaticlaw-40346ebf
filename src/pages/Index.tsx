import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PageNavigation } from "@/components/PageNavigation";
import { disciplines } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 font-serif text-white">Disciplines</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-serif">
              Explore our collection of writings across different fields of study
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={discipline.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full glass-card hover-lift">
                  <CardHeader>
                    <CardTitle className="font-serif text-white">{discipline.title}</CardTitle>
                    <CardDescription className="text-white/70">{discipline.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${discipline.id}`}>
                      <Button variant="link" className="mt-4 text-white hover:text-white/80">
                        Explore →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PageNavigation />
    </div>
  );
};

export default Index;