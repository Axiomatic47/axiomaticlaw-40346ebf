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
        id: "composition-1",
        title: "Memorandum: Parallels Between Historical Monarchical Power and Modern Corporate Personhood",
        description: "An analysis of how corporate personhood in modern democratic societies parallels the historical abuse of power by monarchies.",
        sections: [
          {
            id: "section-1",
            title: "Introduction and Historical Context",
            content: `Memorandum: Parallels Between Historical Monarchical Power and Modern Corporate Personhood

This memorandum explores how corporate personhood in modern democratic societies parallels the historical abuse of power by monarchies. Though the contexts differ—feudal or absolutist governance versus contemporary capitalism—the structural patterns of concentrated authority, minimal accountability, and diminished public power echo one another. By examining these parallels, we can better understand why granting constitutional rights to profit-seeking artificial entities raises serious concerns, not unlike those once directed toward absolute monarchs. In doing so, we revisit fundamental questions about how unchecked power subverts democratic principles that should serve the broader public.

In many European and global monarchies from the late Middle Ages through the nineteenth century, a king or queen claimed near-total control over lawmaking, taxation, the military, and the administration of justice. This dominance was often undergirded by the doctrine of divine right or a hereditary mandate that placed the monarch above typical legal constraints, effectively exempting them from the laws binding commoners. Subjects had few legal channels to check royal authority and could be imprisoned, exiled, or worse for expressing dissent. Even where rudimentary parliaments existed, monarchs typically retained veto power over legislation, thus negating any effective representative voice. Over time, revolutions and constitutional reforms slowly curtailed these powers, transforming monarchies into systems in which the sovereign had to share or relinquish authority to elected bodies and the rule of law. Although these reforms varied in scope and pace, the ultimate aim was to ensure that the people, rather than a solitary ruler, determined the principles of governance.

Modern corporations are legal fictions—entities separate from their owners and recognized by law as having the capacity to hold property, enter contracts, and persist indefinitely beyond changes in leadership or shareholdings. Over time, courts and legislatures in places like the United States extended rights once reserved for human beings to corporations, culminating in decisions such as Santa Clara County v. Southern Pacific Railroad (1886) and Citizens United v. FEC (2010). These rulings effectively treat corporations as "persons" under the Constitution, granting them freedoms like political speech and the ability to challenge regulations as though they were individual citizens. Advocates of corporate personhood contend that these legal rights enable robust entrepreneurship and growth, but critics emphasize how easily such privileges are leveraged to overshadow the interests of actual people. In a society predicated on "We the People," the idea that artificial business entities can claim constitutional protections can appear to subvert the Founders' original intentions.

Monarchies historically vested supreme authority in a single figure—often assisted by a small circle of aristocrats—and this individual could impose policies or wage wars with little oversight. The modern parallel is evident in how large corporations, through their resources and organizational reach, can influence legislation, shape economic outcomes, and guide public opinion on issues ranging from environmental regulation to healthcare. Just as a monarch's decrees could stifle the input of nobles or citizens, multinational corporations can suppress or co-opt the voice of smaller businesses, labor groups, and local communities. Through lobbying and campaign spending, corporate boards and CEOs operate as a powerful minority capable of overshadowing the broader electorate, thereby undermining the democratic premise of rule by the many.

For centuries, monarchs enjoyed near-total immunity from legal repercussions. Even heinous acts often went unpunished due to the notion that kings stood above human law. Corporate structures offer a contemporary counterpart in the form of limited liability, which shields shareholders and executives from personal responsibility for the company's debts or wrongdoing. Furthermore, once corporations gain the right to free speech and other constitutional safeguards, they gain considerable latitude to defend themselves against lawsuits and regulations intended to serve public welfare. Much like monarchs benefiting from divine right, corporations benefit from a judicially constructed doctrine that can place them beyond the direct reach of popular accountability.

Under absolutist rule, ordinary subjects lacked meaningful recourse if a monarch's edict harmed their livelihoods or confiscated their property. Today, citizens can still feel similarly powerless when corporate lobbying shapes laws in ways that disadvantage workers, consumers, or entire communities. Just as royal courts favored aristocrats, modern governments sometimes appear to favor corporate interests. Complex corporate structures, think tanks, and high-stakes legal battles impose barriers that ordinary individuals cannot easily overcome. The risk is a sense of fatalism and frustration, as people recognize the disproportionate power these entities wield in areas such as environmental policy or labor standards—an imbalance reminiscent of the disparities common in monarchical regimes.

Historically, criticizing or resisting the monarch was fraught with danger, leading to charges of treason or subversion. While corporate influence generally eschews violence, it can suppress dissent through more sophisticated means: strategic lawsuits against activists, restricting employee speech via non-disclosure agreements, funding campaigns that demonize grassroots opposition, or monopolizing media channels to steer public debate. The outcome is a softened version of the same chilling effect: instead of prison cells for dissidents, corporations rely on lawsuits and economic pressures to deter critics. This effectively narrows the space for open discourse, critical awareness, and meaningful resistance to entrenched power.

Kings once claimed legitimacy by birthright or divine grace, a rationale often viewed with skepticism by oppressed populations. Corporations, in turn, claim legitimacy through judicially granted rights—an equally constructed notion that, according to critics, has little moral or social justification. If the Constitution was designed to protect individual freedoms and democratic participation, critics argue that allowing corporate entities to invoke these rights undermines popular sovereignty. Through enormous financial resources and legal privileges, corporations can sway legislation to serve their interests, effectively sidestepping the checks that democratic systems place on power. This phenomenon, reminiscent of an unaccountable king, invites debate over whether corporations should retain such constitutional prerogatives in realms like electioneering or moral decision-making.

Societies that once accepted the absolute power of monarchs changed only through waves of revolution, legal reform, and the rise of legislative bodies that insisted on representing the populace. These historical trajectories reveal that curtailing entrenched authority is never a swift or uncomplicated endeavor; it demands concerted civic engagement, compelling legal arguments, and new frameworks for distributing power. By examining that same logic, modern reformers advocating the curtailment of corporate personhood point toward tools such as constitutional amendments, campaign finance regulations, and enhanced oversight. The ambition is to ensure that "We the People" remain the ultimate arbiters of public policy rather than allowing corporations, like old dynasties, to dominate through accrued privilege.

In both monarchy and corporate-dominated governance, the heart of the problem lies in the displacement of ordinary citizens' voices. Democracies depend on the active participation and equality of the governed, while absolute monarchies suppressed citizen input almost by definition. Corporate personhood can replicate this model when corporations play an outsized role in shaping regulations that should reflect the broader community's needs. In effect, democracy is compromised whenever policy is heavily influenced by those with unmatched financial resources and minimal human accountability. A social contract that privileges a select few—even if that few is a corporate executive suite—leads to unrest, cynicism, and ultimately degrades the health of public institutions.

Both historical monarchical power and corporate personhood share structural attributes that centralize authority, minimize accountability, and undercut the will of ordinary people. Whereas monarchs once employed the divine right to justify their stature, today corporations invoke legal doctrines of personhood to assert rights and freedoms not originally intended for profit-driven entities. As we study these parallels, it becomes clear that unchecked corporate influence can deform democratic principles in much the same way monarchies once sidelined representative governance. Recognizing this similarity can inspire a reevaluation of corporate rights, guiding efforts toward ensuring genuine sovereignty rests with living citizens. Like the revolutions and constitutional transformations that limited or ended monarchies, modern reforms limiting corporate personhood may prove essential to safeguard democracy and restore public trust.`
          }
        ]
      },
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