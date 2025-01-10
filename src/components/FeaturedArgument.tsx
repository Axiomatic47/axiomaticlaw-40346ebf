import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function FeaturedArgument() {
  return (
    <section className="py-8 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-8 font-serif text-white text-center">Featured Work</h2>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4 font-serif text-white">
                From Memorandum to Manifestation: A Constitutional Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="prose-law">
              <p className="text-white/90 leading-relaxed mb-4">
                Far too often, both citizens and public servants focus their energy on the symptoms of constitutional shortcomings rather than probing their fundamental causes. When these shortcomings benefit particular individuals or groups—especially those with interests at odds with the American general welfare—there is little incentive to seek genuine solutions. The deeper issues remain unexamined, compromises remain out of reach, and the public finds itself mired in disagreements over superficial outcomes instead of charting a path to genuine reform.
              </p>
              <p className="text-white/90 leading-relaxed">
                In response, this work provides a method—a model of constitutional analysis—that will help Americans identify and address these structural failings. Instead of allowing political and public debate to circle endlessly around outward manifestations, this model trains attention on how legislation, judicial rulings, and executive policies may be at odds with core constitutional and democratic principles.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}