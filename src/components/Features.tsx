import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "The Indivisibility of Personhood",
      description: "Explore how constitutional rights are inherently tied to natural personhood and cannot be selectively distributed.",
    },
    {
      title: "Corporate Rights Analysis",
      description: "Examine the philosophical implications of extending constitutional rights to artificial entities.",
    },
    {
      title: "Constitutional Framework",
      description: "Understand the holistic nature of constitutional protections and their ethical foundations.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 font-serif text-white">Featured Arguments</h2>
          <p className="text-white/80 max-w-2xl mx-auto font-serif">
            Discover compelling legal and philosophical perspectives on constitutional rights and personhood.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="font-serif text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-white/70">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="mt-4 text-white hover:text-white/80">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}