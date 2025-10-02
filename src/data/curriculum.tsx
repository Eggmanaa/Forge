// FORGE Curriculum Data Structure
export interface Lesson {
  id: string;
  title: string;
  description: string;
  caselFocus: string[];
  cstLens: string;
  powerpointFile: string;
  audioFile?: string;
  objectives: string[];
  keyActivities: string[];
}

export interface Grade {
  grade: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const forgeData = {
  mission: "FORGE integrates affective neuroscience, attachment theory, and Christian Theology to foster emotional resilience, relational intelligence, and Christ-centered leadership.",
  vision: "Help students feel deeply, think critically, relate compassionately, and lead courageously, empowering them to live out the Gospel through emotional maturity and personal virtue.",
  overview: "FORGE is a comprehensive Social Emotional Learning (SEL) and leadership formation curriculum delivered to all students in grades 9–12 at Bishop Diego High School. Developed and facilitated by the school's Personal Counselor/Dean of Students, FORGE integrates affective neuroscience, attachment theory, and Christian Theology to foster emotional resilience, relational intelligence, and Christ-centered leadership.",
  alignment: {
    casel: {
      title: "CASEL's Five Core Competencies",
      description: "Each module supports the development of Self-Awareness, Self-Management, Social Awareness, Relationship Skills, and Responsible Decision-Making."
    },
    nsbecs: {
      title: "National Standards & Benchmarks for Effective Catholic Schools (NSBECS)",
      description: "The program integrates Catholic Social Teaching and provides developmentally appropriate character formation."
    },
    accreditation: {
      title: "WCEA & WASC Accreditation Criteria",
      description: "FORGE contributes to accreditation by delivering a standards-aligned SEL curriculum integrated into core Theology classes, embedding Catholic identity, and cultivating a trauma-informed school environment."
    }
  },
  programImpact: "FORGE provides students with more than just emotional tools; it offers a theological and psychological framework for understanding themselves and their role in the world. By developing emotional literacy and self-regulation, the program enhances academic readiness and cultivates a more empathetic, trauma-informed school climate. Ultimately, FORGE prepares students to become servant-leaders and emotionally intelligent disciples who can live out the Gospel in a multicultural world.",
  catholicFoundation: "Grounded in the Catholic vision of integral formation, FORGE is designed to form the whole person—mind, heart, and spirit. The curriculum directly supports key educational standards by embedding theological principles and promoting measurable growth in students' affective and interpersonal skills."
};

export const curriculumData: Grade[] = [
  {
    grade: 9,
    title: "Freshman Year",
    description: "Foundational emotional awareness and understanding triggers",
    lessons: [
      {
        id: "grade9-lesson1",
        title: "Living Life in Color",
        description: "Introduces the foundational concept that emotions are non-judgmental signals that lead to adaptive actions. Students learn to identify core emotions (anger, sadness, fear, joy), their corresponding signals, and their functions using the Zones of Regulation framework.",
        caselFocus: ["Self-Awareness", "Self-Management"],
        cstLens: "Dignity of the Human Person",
        powerpointFile: "/materials/grade9/Living_Life_in_Color.pptx",
        audioFile: "/materials/grade9/Living_Life_in_Color.mp3",
        objectives: [
          "Understand emotions as non-judgmental signals",
          "Identify core emotions and their functions",
          "Apply Zones of Regulation framework",
          "Recognize emotional signals leading to adaptive actions"
        ],
        keyActivities: [
          "Emotions identification exercises",
          "Zones of Regulation mapping",
          "Signal-to-action connection activities",
          "Personal emotion inventory"
        ]
      },
      {
        id: "grade9-lesson2",
        title: "The Time-Traveling Emotional Brain",
        description: "Explains how the emotional brain connects present sensory experiences to the past, creating emotional 'triggers'. Students explore the concepts of being 'flooded' by past emotions and how unresolved 'core memories' can impact present behavior and well-being.",
        caselFocus: ["Self-Awareness", "Social Awareness"],
        cstLens: "Healing Community",
        powerpointFile: "/materials/grade9/The_Time_Traveling_Emotional_Brain.pptx",
        audioFile: "/materials/grade9/The_Time_Traveling_Emotional_Brain.mp3",
        objectives: [
          "Understand how past experiences affect present reactions",
          "Identify personal emotional triggers",
          "Recognize the concept of emotional flooding",
          "Explore the impact of core memories on behavior"
        ],
        keyActivities: [
          "Brain time travel activity with smells",
          "Trigger identification exercises",
          "Memory-emotion connection mapping",
          "Flooding response strategies"
        ]
      }
    ]
  },
  {
    grade: 10,
    title: "Sophomore Year",
    description: "Managing anxiety and building empathetic communication skills",
    lessons: [
      {
        id: "grade10-lesson1",
        title: "Understanding and Managing Anxiety",
        description: "Provides psychoeducation on anxiety, distinguishing it from fear and stress. Students identify the physical sensations of anxiety, learn about the anxiety cycle and safety behaviors, and practice 'Palm Tree Coping' skills to respond to triggers without avoidance.",
        caselFocus: ["Self-Management", "Responsible Decision-Making"],
        cstLens: "Option for the Vulnerable",
        powerpointFile: "/materials/grade10/Understanding_and_Managing_Anxiety.pptx",
        audioFile: "/materials/grade10/Understanding_and_Managing_Anxiety.mp3",
        objectives: [
          "Distinguish anxiety from fear and stress",
          "Identify physical sensations of anxiety",
          "Understand the anxiety cycle and safety behaviors",
          "Practice Palm Tree Coping skills"
        ],
        keyActivities: [
          "Anxiety vs. fear differentiation exercises",
          "Physical sensation mapping",
          "Anxiety cycle identification",
          "Palm Tree Coping practice sessions"
        ]
      },
      {
        id: "grade10-lesson2",
        title: "Verbal Villains & Empathy",
        description: "Equips students to recognize and replace communication patterns that block empathy ('Verbal Villains'). The module introduces and practices the '1, 2, 3's of Empathy'—Mirroring, Validation, and Empathy—to foster deeper connection and understanding.",
        caselFocus: ["Social Awareness", "Relationship Skills"],
        cstLens: "Call to Community",
        powerpointFile: "/materials/grade10/Verbal_Villains_and_Empathy.pptx",
        audioFile: "/materials/grade10/Verbal_Villains_and_Empathy.mp3",
        objectives: [
          "Identify communication patterns that block empathy",
          "Learn the 1, 2, 3's of Empathy framework",
          "Practice mirroring, validation, and empathy skills",
          "Replace verbal villains with empathetic responses"
        ],
        keyActivities: [
          "Communication experiential activities",
          "Verbal villains identification",
          "Empathy skills practice",
          "Role-playing empathetic conversations"
        ]
      }
    ]
  },
  {
    grade: 11,
    title: "Junior Year",
    description: "Understanding personality differences and communication styles",
    lessons: [
      {
        id: "grade11-lesson1",
        title: "Relating Through Differences",
        description: "Explores the 7 Motivational Gifts of the Father framework as a tool for understanding personal communication styles. Grounded in Romans 12:6-8, this session helps students identify their own personality-based gifts (Prophecy, Service, Teaching, Encouragement, Giving, Leadership, and Mercy) and learn to bridge communication gaps with others.",
        caselFocus: ["Social Awareness", "Responsible Decision-Making"],
        cstLens: "Solidarity",
        powerpointFile: "/materials/grade11/Relating_Through_Differences.txt",
        audioFile: "/materials/grade11/Relating_Through_Differences.mp3",
        objectives: [
          "Understand the 7 Motivational Gifts framework",
          "Identify personal communication style and gifts",
          "Learn to bridge communication gaps with others",
          "Apply biblical principles to relationship building"
        ],
        keyActivities: [
          "Motivational gifts assessment",
          "Communication style identification",
          "Group interaction exercises",
          "Biblical foundation exploration"
        ]
      },
      {
        id: "grade11-lesson2",
        title: "9 Temperaments",
        description: "Explains the nine dimensions of temperament as the 'how' of personality—our natural way of reacting to environmental stimuli. Students identify their unique temperament profile to better understand their internal reactions.",
        caselFocus: ["Self-Awareness", "Responsible Decision-Making"],
        cstLens: "Subsidiarity",
        powerpointFile: "/materials/grade11/9_Temperaments.pptx",
        audioFile: "/materials/grade11/9_Temperaments.mp3",
        objectives: [
          "Understand temperament as natural reaction patterns",
          "Identify personal temperament profile",
          "Learn about goodness-of-fit environments",
          "Apply temperament knowledge to relationships"
        ],
        keyActivities: [
          "Temperament assessment",
          "Environmental stimuli reactions",
          "Goodness-of-fit evaluation",
          "Personal profile development"
        ]
      }
    ]
  },
  {
    grade: 12,
    title: "Senior Year",
    description: "Developing healthy character through boundaries and facing reality",
    lessons: [
      {
        id: "grade12-lesson1",
        title: "Healthy Character I: Boundaries",
        description: "Defines character as the capacity to face reality and introduces the Character Structure of Separation—the ability to be distinct from others and say 'no'. Students learn to establish healthy boundaries by taking responsibility for their own emotions, choices, and limits.",
        caselFocus: ["Relationship Skills", "Responsible Decision-Making"],
        cstLens: "Rights & Responsibilities",
        powerpointFile: "/materials/grade12/Healthy_Character_Boundaries.pptx",
        audioFile: "/materials/grade12/Healthy_Character_Boundaries.mp3",
        objectives: [
          "Define character as capacity to face reality",
          "Understand the Character Structure of Separation",
          "Learn to establish healthy boundaries",
          "Take responsibility for personal emotions and choices"
        ],
        keyActivities: [
          "Boundary-setting exercises",
          "Character assessment activities",
          "Separation vs. connection balance",
          "Responsibility identification"
        ]
      },
      {
        id: "grade12-lesson2",
        title: "Healthy Character II: Facing Reality",
        description: "Focuses on the Character Structure of Integration—the ability to embrace both positive and negative realities about oneself and life. This module teaches students to move beyond an 'all-or-nothing' mindset by integrating painful and redemptive experiences with hope and self-compassion.",
        caselFocus: ["Self-Management", "Social Awareness"],
        cstLens: "Hope & Redemption",
        powerpointFile: "/materials/grade12/Healthy_Character_Facing_Reality.pptx",
        audioFile: "/materials/grade12/Healthy_Character_Facing_Reality.mp3",
        objectives: [
          "Understand the Character Structure of Integration",
          "Embrace both positive and negative realities",
          "Move beyond all-or-nothing thinking",
          "Integrate experiences with hope and self-compassion"
        ],
        keyActivities: [
          "Reality integration exercises",
          "Case study analysis",
          "Hope and redemption reflection",
          "Self-compassion practices"
        ]
      }
    ]
  }
];