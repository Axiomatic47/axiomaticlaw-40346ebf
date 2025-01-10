import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description: "Crafted with attention to every detail",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for the best performance",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built with security in mind",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/5 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to build amazing products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl hover-lift"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};