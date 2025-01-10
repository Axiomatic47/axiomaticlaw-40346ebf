import { Discipline } from "@/types/content";

const generateSections = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `section-${i + 1}`,
    title: `Section ${i + 1}`,
    content: `This is the content for Section ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }));
};

const generateCompositions = () => {
  return Array.from({ length: 6 }, (_, i) => ({
    id: `composition-${i + 1}`,
    title: `Composition ${i + 1}`,
    description: `Description for Composition ${i + 1}. This is a placeholder description that outlines the main themes and topics covered in this composition.`,
    sections: generateSections()
  }));
};

export const disciplines: Discipline[] = [
  {
    id: "law",
    title: "Law",
    description: "Explore legal theory and constitutional interpretations",
    compositions: [
      {
        id: "constitutional-rights",
        title: "Constitutional Rights and Personhood",
        description: "An analysis of the indivisibility of constitutional rights and their relation to personhood",
        sections: [
          {
            id: "introduction",
            title: "Introduction",
            content: "At the heart of the Constitution lies the indivisible and impartial nature of personhood..."
          },
          {
            id: "corporate-rights",
            title: "Corporate Rights Analysis",
            content: "In contrast, corporations, as artificial entities, are inherently incapable of possessing constitutional rights..."
          },
          {
            id: "constitutional-framework",
            title: "Constitutional Framework",
            content: "Understand the holistic nature of constitutional protections and their ethical foundations."
          }
        ]
      },
      {
        id: "corporate-personhood",
        title: "Dismantling the Doctrine of Corporate Personhood",
        description: "A comprehensive analysis of corporate personhood's impact on democratic principles and constitutional governance",
        sections: [
          {
            id: "memorandum-to-manifestation",
            title: "From Memorandum to Manifestation",
            content: `Far too often, both citizens and public servants focus their energy on the symptoms of
constitutional shortcomings rather than probing their fundamental causes. When these
shortcomings benefit particular individuals or groups—especially those with interests at odds
with the American general welfare—there is little incentive to seek genuine solutions. The
deeper issues remain unexamined, compromises remain out of reach, and the public finds itself
mired in disagreements over superficial outcomes instead of charting a path to genuine reform.
This tendency is particularly acute when constitutional deficiencies favor corporate objectives,
allowing organizations to pursue profit-driven agendas without facing the full force of
democratic checks or moral accountability.

In response, I aim to provide a method—a model of constitutional analysis—that will help
Americans (and anyone else engaged in democratic governance) identify and address these
structural failings. Instead of allowing political and public debate to circle endlessly around
outward manifestations—such as inflated healthcare costs or environmental damage—this model
trains attention on how legislation, judicial rulings, and executive policies may be at odds with
core constitutional and democratic principles. In doing so, it redirects energy to root causes,
exposing how certain legal or regulatory frameworks enable and sustain issues such as corporate
power beyond what a truly people-centered democracy should allow. This approach integrates:

1. Historical Analyses: By investigating how corporate personhood developed outside of
American democracy and then evolved within the United States, we reveal the traits
corporations inherited from pre-democratic or centralized regimes—traits often
incompatible with the freedoms championed by democratic constitutions.

2. Legal/Textual Analyses: This involves scrutinizing how the constitution in conjunction
with legislation, judicial rulings, and executive decisions have combined to entrench
corporate power. It means sifting through legal precedents—from Congress's statutory
enactments and executive orders to the judiciary's interpretation of constitutional
clauses—to understand precisely where and how the legal framework has been shaped to
accommodate corporate interests, sometimes at the expense of individual and communal
needs.

3. Corrective/Implementation Analyses: Armed with insights from history and law, this
final step focuses on formulating and applying remedies to real-world policy. It draws out
specific reforms—whether legislative rewrites, reinterpretation of legal doctrines, or
executive restructurings—that aim to rectify any constitutional deficiencies. By
pinpointing which powers have been misapplied and which avenues of government
action can be recalibrated, this stage ensures that identified problems translate into
practical solutions for the general welfare.

I will begin by examining the history of corporate personhood, tracing its roots from eras
predating American democracy and following its evolution within the United States. This
historical journey will illuminate how corporations inherited certain traits from centralized or
absolutist authorities—traits that contradict the core freedoms central to any democratic system.
By identifying these characteristics, we can better see what aspects of American jurisprudence,
legislation, and executive action have nurtured and entrenched them in modern governance.

Next, I will put this investigative approach into practice using a specific case study subordinate
to corporate personhood: the Health Maintenance Organization (HMO) Act of 1973. This
legislation restructured American healthcare, not in service to patient welfare or universal
accessibility, but largely to spur corporate profit-making. If the method of historical review,
constitutional value analysis, and systemic refinement proves valid, then by applying it to the
HMO Act, we should be able to isolate the flawed constitutional mechanism and propose a
corrective pathway. Ideally, such a reexamination would pave the way for healthcare reforms
that uphold the general welfare, prioritizing patient needs over corporate profit margins.

From there, I plan to broaden the scope by exploring corporate personhood in various
contemporary global contexts. Even governments quite different from the United States have
encountered challenges when extending powerful legal rights to corporate entities. By
contrasting these examples, we see how corporate personhood can supersede the intended checks
of democratic or parliamentary governance—much like absolute monarchies that overshadowed
local autonomy in centuries past. Corporations thus assume a new form of centralized authority
in an era otherwise defined by the language of freedom and democracy. This enlarged scope of
legal analysis will best ensure its' domestic counterpart is as comprehensive as possible and the
respective implementations are effective.

Finally, once this constitutional analysis method has been developed and tested, I will draft
alternate versions of the findings, tailoring them to different literacy levels. The point is to ensure
these insights do not remain in the realm of legal experts or policy analysts alone. True change
does not materialize simply because a robust theoretical framework exists; it manifests when
everyday citizens and thoughtful public servants adopt it as a guiding principle. By making this
corrective doctrine accessible to a broad audience, we place consistent pressure on corporate
entities and recruit citizens who can champion the reforms necessary to realign constitutional
governance with genuine public welfare. I acknowledge that no single person can effect such a
sweeping transformation, but by disseminating these ideas widely, we spark the collective action
needed to restore balance where corporate prerogatives have encroached upon the core of
democratic ideals.`
          }
        ]
      },
      ...generateCompositions()
    ]
  },
  {
    id: "philosophy",
    title: "Philosophy",
    description: "Delve into metaphysics, ethics, and epistemology",
    compositions: [
      {
        id: "metaphysics",
        title: "Foundations of Metaphysics",
        description: "An exploration of fundamental metaphysical principles",
        sections: [
          {
            id: "reality",
            title: "Nature of Reality",
            content: "The study of metaphysics begins with questioning the nature of reality itself..."
          }
        ]
      },
      ...generateCompositions()
    ]
  },
  {
    id: "theology",
    title: "Theology",
    description: "Examine religious thought and divine nature",
    compositions: [
      {
        id: "abrahamic-religions",
        title: "The Divergence of Abrahamic Religions",
        description: "An exploration of incompatibilities between Judaism, Christianity, and Islam",
        sections: [
          {
            id: "introduction",
            title: "Introduction",
            content: "The Abrahamic religions—Judaism, Christianity, and Islam—share deep historical and theological roots..."
          },
          {
            id: "divergence-in-nature-of-god",
            title: "Divergence in the Nature of God",
            content: "The most fundamental divergence among the Abrahamic faiths lies in their understanding of the nature of God..."
          },
          {
            id: "role-and-identity-of-jesus",
            title: "The Role and Identity of Jesus",
            content: "Another significant point of divergence among the Abrahamic religions is the role and identity of Jesus..."
          },
          {
            id: "scripture-and-revelation",
            title: "Scripture and Revelation",
            content: "The scriptures and the understanding of divine revelation also differ significantly among the three faiths..."
          },
          {
            id: "concept-of-salvation",
            title: "The Concept of Salvation and Afterlife",
            content: "The concept of salvation and the afterlife represents another area where these faiths diverge..."
          },
          {
            id: "prophethood-and-authority",
            title: "Prophethood and Authority",
            content: "The understanding of prophethood and religious authority varies significantly..."
          },
          {
            id: "ethical-contradictions",
            title: "Apparent Shortcomings and Ethical Contradictions",
            content: "Each of the Abrahamic religions has faced criticism for actions that seem to contradict their divine values..."
          },
          {
            id: "conclusion",
            title: "Conclusion",
            content: "Despite their shared heritage and ethical teachings, Judaism, Christianity, and Islam diverge in fundamental and often irreconcilable ways..."
          }
        ]
      },
      ...generateCompositions()
    ]
  }
];