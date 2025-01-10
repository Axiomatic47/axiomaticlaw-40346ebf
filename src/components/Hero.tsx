import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="py-24 px-6 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in font-serif text-white">
            Constitutional Philosophy Forum
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-fade-in-up font-serif">
            Explore profound legal and philosophical arguments about constitutional rights, personhood, and democracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link to="/law">
              <Button size="lg" className="animate-fade-in">
                Law
              </Button>
            </Link>
            <Link to="/philosophy">
              <Button size="lg" variant="outline" className="animate-fade-in">
                Philosophy
              </Button>
            </Link>
            <Link to="/theology">
              <Button size="lg" variant="outline" className="animate-fade-in">
                Theology
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}