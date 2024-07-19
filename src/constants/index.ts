import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  csharp,
  photoshop,
  illustrator,
  arduino,
  raspi,
  shell,
  canva,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Graphics Designer",
    icon: mobile,
  },
  {
    title: "Automation Scripter",
    icon: backend,
  },
  {
    title: "IoT Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "Raspi",
    icon: raspi,
  },
  {
    name: "Shell",
    icon: shell,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JS",
    icon: javascript,
  },
];

const experiences: TExperience[] = [
  {
    title: "Orientation",
    companyName: "Training",
    icon: git,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "Completed General Orientation, covering company expectations, rules, and history; passed required exams and was assigned to IT department.",
      "Attended final DOLE training session and began learning about GitLab for company repository management.",
    ],
  },
  {
    title: "A bit of all",
    companyName: "Documents, Tour, Automation",
    icon: shell,
    iconBg: "#E6DEDD",
    date: "May 2024",
    points: [
      "Conducted User Acceptance Testing (UAT) for ATC (China) and FADMS systems, creating user manuals and documenting processes for smooth implementation.",
      "Participated in a line tour of Amkor Technology Philippines P1's production facility and data center, gaining insights into company infrastructure and operations.",
      "Began developing a Python automation system for the Engineering department's daily Excel tasks, including research, planning, and initial implementation with positive feedback from senior management.",
    ],
  },
  {
    title: "Development",
    companyName: "Python, DB, Shell, and Excel",
    icon: python,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Developed CAPA validation tracker for IQAT system, creating a CLI executable file to extract data from company database and convert it to Excel format.",
      "Created comprehensive documentation for the CAPA validation tracker, including a detailed user manual covering usage instructions, troubleshooting, and code modification guidelines.",
      "Refined the executable file based on senior developer feedback, implementing flexibility to accept variables from JavaScript, enhancing its integration with the IQAT system.",
      "Presented the completed project to the IT department head, demonstrating the tool's functionality and discussing its practical application within the company's systems.",
    ],
  },
  {
    title: "Figma and Canva",
    companyName: "Meta",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Assisted senior developer with graphic design for a new project, creating visuals for an event tracker landing page that accurately represented company activities.",
      "Finalized internship, having completed over 486 hours and meeting curriculum requirements, while compiling work for web portfolio and ringbound report.",
      "Met with IT department head management to express gratitude and receive feedback on internship contributions.",
      "Prepared for final day (July 19) by organizing clearance procedures, including returning company property and completing necessary documentation.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
