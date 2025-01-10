import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/5 rounded-full animate-fade-in">
            Welcome to the Future
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
            Create Something
            <span className="text-primary/90"> Beautiful</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Discover a new way of building digital experiences with our innovative platform
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};