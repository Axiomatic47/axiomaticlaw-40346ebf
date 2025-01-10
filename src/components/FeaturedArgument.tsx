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
                The Indivisibility of Personhood and Constitutional Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose-law">
              <p className="text-white/90 leading-relaxed mb-4">
                At the heart of the Constitution lies the indivisible and impartial nature of personhood. Constitutional rights are not granted by the Constitution; rather, they are recognized as inherent to the existence of natural persons and are respected and protected within the constitutional framework. These rights are not selectively distributed but arise as a cohesive and universal framework tied intrinsically to the status of being a person. The Constitution does not offer a fragmented approach to rights, whereby some rights may be attributed while others are withheld. To recognize an entity as a person under the Constitution is to affirm the entirety of the rights, responsibilities, and protections inherent to personhood. These rights are not divisible; they flow from the singular, holistic concept of what it means to be a person.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                In contrast, corporations, as artificial entities, are inherently incapable of possessing constitutional rights unless such rights are explicitly and deliberately granted to them. Unlike natural persons, whose rights exist by virtue of their existence as moral agents, corporations require a superseding legal framework to artificially confer upon them the benefits of constitutional protection. This grants corporations rights not as a reflection of their nature, but as exceptions to the very conditions that define constitutional personhood. Such artificial attribution contradicts the indivisible nature of constitutional rights, which are inherent to natural persons and cannot be parsed or selectively granted without undermining their fundamental integrity.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                To attempt selective attribution of rights is to create a contradictory and incoherent legal framework. For example, courts have granted corporations rights such as free speech under the First Amendment and due process under the Fourteenth Amendment while denying rights such as voting under the Fifteenth Amendment or holding public office under Article I. This fragmented application highlights the fundamental inconsistency of extending constitutional personhood to artificial entities. If an entity is a "person" for some constitutional purposes, it must logically be a person for all constitutional purposes, as the Constitution does not provide mechanisms for partial personhood.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                The denial of any single right to corporations—such as the right to vote—demonstrates their inability to embody the full spectrum of personhood. This denial exposes the fallacy of attributing any constitutional rights at all. Personhood cannot be parsed to suit convenience or practicality. Corporations, lacking the intrinsic qualities of natural persons—such as moral agency, consciousness, and the capacity for life and liberty—cannot claim the rights that flow from these qualities. To grant corporations even a single constitutional right, such as the right to political speech, is to artificially construct an equivalence with natural persons, which undermines the Constitution's protections for living beings with inherent dignity and agency.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                The ethical implications of this inconsistency are profound. The Constitution's purpose is to protect and respect the rights inherent to natural persons, whose intrinsic value forms the foundation of its principles. Extending constitutional rights to corporations betrays this ethical framework, prioritizing the interests of artificial entities over those of real human beings. Courts must uphold the indivisible nature of personhood, ensuring that its attribution remains consistent with constitutional principles. Any selective granting of rights not only undermines the Constitution's coherence but also sets a dangerous precedent for arbitrary governance, enabling corporations to wield disproportionate influence over the democratic process.
              </p>
              <p className="text-white/90 leading-relaxed">
                Ultimately, personhood under the Constitution is an all-or-nothing status. The denial of one constitutional right to corporations serves as the shared basis for denying all rights, as it highlights their fundamental incompatibility with the concept of personhood. Natural persons are protected by the Constitution because their rights are inherent, not granted. Corporations, by contrast, must rely on exceptional legal constructs to receive constitutional protections, constructs that contradict the indivisible and inherent nature of constitutional rights. Recognizing the holistic nature of personhood, we must reject the attribution of constitutional rights to corporations entirely, preserving the Constitution's integrity and its ethical commitment to humanity.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}