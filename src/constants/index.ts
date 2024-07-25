import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TCertificate,
  TOrganization,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  figma,
  python,
  csharp,
  photoshop,
  illustrator,
  arduino,
  raspi,
  shell,
  canva,
  selenium,
  pptpdf,
  ppttemplate,
  extraction,
  whizzyraspi,
  whizzyweb,
  earthquake,
  pitch,
  nse1,
  pythonbeginner,
  pythonintermediate,
  codechum,
  techteam,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "proj",
    title: "Projects",
  },
  {
    id: "cert",
    title: "Certification",
  },
  {
    id: "org",
    title: "Organization",
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
    title: "Finalization",
    companyName: "Figma and Canva",
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

const certificate: TCertificate[] = [
  {
    description:
      "NSE 1 Network Security Associate",
    name: "IT128",
    designation: "CFO",
    company: "",
    image: nse1,
  },
  {
    description:
      "Python Beginner Programming",
    name: "DICT",
    designation: "COO",
    company: "",
    image: pythonbeginner,
  },
  {
    description:
      "Python Intermediate Programming",
    name: "DICT",
    designation: "CTO",
    company: "",
    image: pythonintermediate,
  },
  {
    description:
      "Codechum Python Course",
    name: "Codechum",
    designation: "CTO",
    company: "",
    image: codechum,
  },
  {
    description:
      "Technical Committee Volunteer",
    name: "CGC",
    designation: "CTO",
    company: "",
    image: techteam,
  },
];

const organization: TOrganization[] = [
  {
    description:
      "Helped create publication materials for the SSC Facebook page, assisted with event preparations as a volunteer, and was frequently assigned to the technical team for events.",
    name: "Supreme Student Council Creative Associate (SSC)",
    designation: "2022-2023",
    company: "Mapúa Malayan Colleges Laguna",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    description:
      "Produced engaging publication materials for the CCIS Facebook page, designed logos and T-shirt graphics for CCIS events, and organized a successful type racing event as part of the CCIS Week.",
    name: "CCIS Student Council (SSC Rep and Creative Head)",
    designation: "2022-2023",
    company: "Mapúa Malayan Colleges Laguna",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "DB to Excel Template",
    description:
      "CLI tool that extracts data from a MySQL DB into a formatted Excel template.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CLI",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: ppttemplate,
    sourceCodeLink: "https://github.com/andododo/DB-to-Excel-Template",
  },
  {
    name: "DB Extraction Tool",
    description:
      "Tool that extracts all data from a DB table and place it inside an Excel sheet.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CLI",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: extraction,
    sourceCodeLink: "https://github.com/andododo/DB-Extraction-Tool",
  },
  {
    name: "PPT to PDF Tool",
    description:
      "A simple Excel .pptx to .pdf document tool that is launched in the web.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pptpdf,
    sourceCodeLink: "https://github.com/andododo/PPT-to-PDF-Tool",
  },
  {
    name: "Selenium Test",
    description:
      "Part of my orientation and training, a simple test using Selenium automation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: selenium,
    sourceCodeLink: "https://github.com/andododo/Selenium-Test",
  },
];
const whizzy: TProject[] = [
  {
    name: "Hey Whizzy",
    description:
      "Raspi development module for an Interactive Voice-Assistive Kiosk for School Information Access",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: whizzyraspi,
    sourceCodeLink: "https://github.com/Hir0su/Hey-Whizzy",
  },
  {
    name: "Hey Whizzy Admin",
    description:
      "Web Admin development module for an Interactive Voice-Assistive Kiosk for School Information Access",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: whizzyweb,
    sourceCodeLink: "https://github.com/Hir0su/Hey-Whizzy-Admin-Website",
  },
];
const machine: TProject[] = [
  {
    name: "Arduino Earthquake Detection",
    description:
      "Codes for an Arduino main controller and MPU6050 sensor that detects vibrations.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: earthquake,
    sourceCodeLink: "https://github.com/Hir0su/Earthquake-Detection",
  },
  {
    name: "Arduino Guess the Pitch Game",
    description:
      "Web Admin development module for an Interactive Voice-Assistive Kiosk for School Information Access",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      // {
      //   name: "HTML",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "CSS",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pitch,
    sourceCodeLink: "https://github.com/Hir0su/Guess-the-Pitch",
  },
];

export { services, technologies, experiences, certificate, organization, projects, whizzy, machine };
