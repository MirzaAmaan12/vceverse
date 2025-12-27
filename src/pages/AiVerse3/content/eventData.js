export const EVENT_DATA = {
  version: "3.0",
  editionName: "MOTION",
  tagline: "The Art of Taking Action",
  dates: {
    start: "Jan 04",
    end: "Jan 06",
    year: "2024"
  },
  venue: {
    name: "Vaagdevi College of Engineering",
    city: "Warangal",
    hall: "Grand Quay Hall"
  },
  organizers: {
    convener: "Dr. V. Janaki",
    coordinator: "Sandeep Akkapelli",
    department: "CSM Department"
  },
  
  // --- ADDED THIS SECTION TO FIX THE 'MAP' ERROR ---
  leadership: [
    { 
      name: "Dr. V. Janaki", 
      role: "HOD / Convener" 
    },
    { 
      name: "Sandeep Akkapelli", 
      role: "Assistant Professor / Coordinator" 
    }
  ],
  // ------------------------------------------------

  // This maps to the C2 "Learn-Experience-Connect" section
  pillars: [
    {
      id: "01",
      title: "Learn",
      focus: "Generative AI & LLMs",
      description: "Masterclasses on the latest neural architectures and prompt engineering."
    },
    {
      id: "02",
      title: "Experience",
      focus: "Technical Labs",
      description: "Hands-on hackathons where you build real-world AI solutions in 24 hours."
    },
    {
      id: "03",
      title: "Connect",
      focus: "The CS-ML Network",
      description: "Exclusive braindates with industry experts and faculty leads."
    }
  ],
  stats: [
    { label: "Innovators", value: "500+" },
    { label: "Speakers", value: "10+" },
    { label: "Countries", value: "01" } 
  ]
};