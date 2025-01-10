import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function FeaturedArgument() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                The Indivisibility of Personhood and Constitutional Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At the heart of the Constitution lies the indivisible and impartial nature of personhood. Constitutional rights are not granted by the Constitution; rather, they are recognized as inherent to the existence of natural persons and are respected and protected within the constitutional framework.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These rights are not selectively distributed but arise as a cohesive and universal framework tied intrinsically to the status of being a person. The Constitution does not offer a fragmented approach to rights, whereby some rights may be attributed while others are withheld.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To recognize an entity as a person under the Constitution is to affirm the entirety of the rights, responsibilities, and protections inherent to personhood. These rights are not divisible; they flow from the singular, holistic concept of what it means to be a person.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}