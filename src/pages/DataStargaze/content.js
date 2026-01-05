// src/pages/DataStargaze/content.js
import thanveerImg from './public/thanveerjahan.jpg';
import salimImg from './public/salim.jpg';
import swethaImg from './public/swetha.jpg';
import prakashImg from './public/prakash.jpg';
import img1 from './public/stargaze/img1.jpg';
import img2 from './public/stargaze/img2.jpg';
import img3 from './public/stargaze/img3.jpg';
import img4 from './public/stargaze/img4.png';

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
    { name: "Principal Dr K Prakash", role: "Principal", desc: "Vaagdevi College of Engineering", image: prakashImg },
    { name: "Dr. Thanveer Jahan", role: "Convener", desc: "HOD-CSE (AI & ML) Dept", image: thanveerImg },
  ],

  team: [
    { name: "Mrs. A. Swetha", role: "Coordinator", image: swethaImg },
    { name: "Mr. Salim Jiwani", role: "Coordinator", image: salimImg }
  ],

  agenda: [
    { time: "10:00 AM", event: "Inauguration & Chief Guest Speech", day: "Day 1" },
    { time: "11:15 AM", event: "Data Visualization Lecture", day: "Day 1" },
    { time: "02:00 PM", event: "Coding Quiz & Treasure Hunt", day: "Day 1" },
    { time: "11:15 AM", event: "Importance of AI & ML Lecture", day: "Day 2" },
    { time: "02:00 PM", event: "Cultural: Singing, Dancing, Art", day: "Day 2" }
  ],

  images: [
    { url: img4, title: "Workshop Session" },
    { url: img2, title: "Cultural Event" },
    { url: img3, title: "technical session " },
    { url: img4, title: "Team Group" }
  ]
};