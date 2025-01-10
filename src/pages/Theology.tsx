import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Theology = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-white mb-8">Theology</h1>
        <div className="prose-law">
          <article className="animate-fade-in">
            <h2 className="text-3xl font-serif text-white mb-6">
              The Divergence of Abrahamic Religions: An Exploration of Incompatibilities
            </h2>
            
            <section className="mb-8">
              <h3 className="text-2xl text-white mb-4">Introduction</h3>
              <p className="text-white/90">
                The Abrahamic religions—Judaism, Christianity, and Islam—share deep historical and theological roots. Often referred to as sibling faiths due to their shared monotheistic belief, their common patriarch Abraham, and interconnected scriptures, they nonetheless diverge in profound ways that make reconciliation of their core beliefs appear nearly impossible. While they overlap in ethical teachings and foundational moral principles, their differences in theological narratives, doctrines, and understandings of divine truth are significant.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl text-white mb-4">1. Divergence in the Nature of God</h3>
              <p className="text-white/90">
                The most fundamental divergence among the Abrahamic faiths lies in their understanding of the nature of God. Judaism emphasizes the absolute oneness and indivisibility of God. The Shema, one of the central tenets of Jewish faith, declares: "Hear, O Israel: The Lord our God, the Lord is one" (Deuteronomy 6:4). For Judaism, God is a singular, indivisible entity, and any division or association of partners with God is viewed as a violation of monotheism.
              </p>
              <p className="text-white/90 mt-4">
                In contrast, Christianity introduces the concept of the Trinity: God the Father, God the Son (Jesus Christ), and God the Holy Spirit. Christianity teaches that these three persons are distinct yet share the same divine essence, constituting one God. This triune nature of God is seen by both Judaism and Islam as compromising God's oneness, sometimes viewed as a departure from strict monotheism or, in some interpretations, bordering on polytheism.
              </p>
              <p className="text-white/90 mt-4">
                Islam, too, maintains a strict understanding of God's oneness, or Tawhid, which rejects any form of plurality in God's nature. The Quran explicitly states that God "neither begets nor is born" (Quran 112:3), directly rejecting the Christian belief in the divinity of Jesus as the Son of God.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl text-white mb-4">2. The Role and Identity of Jesus</h3>
              <p className="text-white/90">
                Another significant point of divergence among the Abrahamic religions is the role and identity of Jesus. Christianity is centered on the belief that Jesus Christ is the Son of God, the Messiah, and the Savior of humanity. His crucifixion and resurrection are viewed as essential events for the redemption of sin and the promise of eternal life.
              </p>
              <p className="text-white/90 mt-4">
                In Islam, however, Jesus (Isa) is regarded as one of the greatest prophets, but his divinity is firmly denied. While Islam acknowledges Jesus as the Messiah and affirms his virgin birth, it rejects the crucifixion, claiming instead that Jesus was neither killed nor crucified but was raised up by God (Quran 4:157-158).
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl text-white mb-4">3. Scripture and Revelation</h3>
              <p className="text-white/90">
                The scriptures and the understanding of divine revelation also differ significantly among the three faiths. Judaism holds the Tanakh (Hebrew Bible) as its sacred text, composed of the Torah (Law), Nevi'im (Prophets), and Ketuvim (Writings). The Torah, believed to be revealed by God to Moses, is the foundational scripture, and no subsequent revelation is considered authoritative or capable of superseding it.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl text-white mb-4">Conclusion</h3>
              <p className="text-white/90">
                Despite their shared heritage and ethical teachings, Judaism, Christianity, and Islam diverge in fundamental and often irreconcilable ways. Their differences regarding the nature of God, the role of Jesus, the status of scripture, the concept of salvation, and the authority of prophets create theological boundaries that are not easily bridged. Each religion upholds a unique narrative that it views as the ultimate truth, making reconciliation without the compromise of core beliefs appear improbable.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Theology;