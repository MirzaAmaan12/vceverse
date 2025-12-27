// src/pages/DataStargaze/content.js
export const STARGAZE_DATA = {
  title: "DATASTARGAZE",
  date: "27th - 28th Dec 2021",
  venue: "Vaagdevi Auditorium",
  
  // Updated from Report
  objective: "To enhance students’ coding (interviewing) skills, develop their coding skills, expose them to real world communication, identify the needs of IT professionals, and enable students to suggest activities to make the Engineering Machine Learning course more effective.",
  
  // NEW: Detail for About Event page
  aboutDetails: {
    branch: "CSE (AI & ML)",
    sponsoredBy: "Vaagdevi College of Engineering-Warangal",
    description: "A comprehensive two-day workshop designed to involve learners in code implementation and identify essential algorithms for Machine Learning mastery."
  },

  stats: [
    { label: "Pioneers", value: 190, suffix: "+" },
    { label: "Workshop Days", value: 2, suffix: "" },
    { label: "Events", value: 8, suffix: "" }
  ],

  // NEW: Categorization for the Technical/Non-Technical page
  eventCategories: {
    technical: [
      { title: "Data Visualization", speaker: "Mr. G. Praveen", desc: "Advanced techniques for visual data representation." },
      { title: "AI & ML Importance", speaker: "Mr. Tharun", desc: "Understanding the foundational impact of AI in industry." },
      { title: "Coding Quiz", speaker: "Dept Organizers", desc: "Testing syntax and logic implementation." },
      { title: "Algorithm ID", speaker: "Workshop Resource", desc: "Identification and listing of essential ML algorithms." }
    ],
    nonTechnical: [
      { title: "Treasure Hunt", desc: "Problem-solving and teamwork through logical puzzles." },
      { title: "Cultural Showcase", desc: "Student exhibitions in Singing and Dancing." },
      { title: "Pencil Art", desc: "Creative expression through sketching and art." },
      { title: "Speech Sessions", desc: "Inspirational talks by Chief Guest Prof. S.S.V.N. Sharma." }
    ]
  },

  leaders: [
    { name: "Prof. S.S.V.N. Sharma", role: "Chief Guest", desc: "Dean of Academy, Vaagdevi Group" },
    { name: "Dr. Thanveer Jahan", role: "Convener", desc: "HOD-CSE (AI & ML) Dept" }
  ],

  team: [
    { name: "Mr. G. Praveen", role: "Resource Person", topic: "Data Visualization" },
    { name: "Mr. Tharun", role: "Resource Person", topic: "AI & ML" },
    { name: "Mrs. A. Swetha", role: "Coordinator" },
    { name: "Mr. Salim Jiwani", role: "Coordinator" }
  ],

  agenda: [
    { time: "10:00 AM", event: "Inauguration & Chief Guest Speech", day: "Day 1" },
    { time: "11:15 AM", event: "Data Visualization Lecture", day: "Day 1" },
    { time: "02:00 PM", event: "Coding Quiz & Treasure Hunt", day: "Day 1" },
    { time: "11:15 AM", event: "Importance of AI & ML Lecture", day: "Day 2" },
    { time: "02:00 PM", event: "Cultural: Singing, Dancing, Art", day: "Day 2" }
  ],

  images: [
    { url: "/assets/stargaze/img1.jpg", title: "Workshop Session" },
    { url: "/assets/stargaze/img2.jpg", title: "Cultural Event" },
    { url: "/assets/stargaze/img3.jpg", title: "Prize Distribution" },
    { url: "/assets/stargaze/img4.jpg", title: "Team Group" }
  ]
};