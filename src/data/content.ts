import { Discipline } from "@/types/content";

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
      }
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
      }
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
      }
    ]
  }
];
