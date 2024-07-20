type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    course: string;
    school: string;
    description: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    organization: TSection;
    works: Required<TSection>;
    capstone: Required<TSection>;
    mp: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Web Portfolio",
    fullName: "Andrei Magbuhat",
    email: "magbuhatjustinandrei@gmail.com",
  },
  hero: {
    name: "Andrei Magbuhat",
    description: ["Programmer", "Graphic Designer", "Scripting Enjoyer"],
    course: "B.S. Information Technology",
    school: "Mapúa Malayan Colleges Laguna",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a versatile programmer and graphics designer with expertise in Python and C#. 
      My skills extend to Adobe Creative Suite and Figma for visual design. 
      I'm passionate about scripting, particularly in Python and shell scripting, to automate and optimize workflows. 
      With experience in Arduino, Wemos, and Raspberry Pi projects, I bridge software and hardware. 
      I'm a quick learner, always eager to tackle new challenges and bring innovative ideas to life through code and design. 
      Let's collaborate to create efficient, visually appealing solutions that make a real impact!`,
    },
    experience: {
      p: "What I have done so far in my OJT",
      h2: "Practicum Experience",
    },
    organization: {
      p: "Extracurricular",
      h2: "My Organizations",
    },
    works: {
      p: "My work",
      h2: "OJT Projects",
      content: `During my internship at Amkor Technology, I worked on several key projects that enhanced the company's IT systems and processes. 
      My primary focus was on developing automation tools using Python, such as the CAPA Validation Tracker for the IQAT system and a Python-Excel automation tool for the Engineering department. 
      These projects involved creating user-friendly interfaces, implementing data extraction and conversion functionalities, and producing comprehensive documentation. 
      I also conducted User Acceptance Testing for various systems, including ATC (China) and FADMS, creating detailed user manuals in the process. 
      Additionally, I contributed to improving existing tools, such as enhancing a PPT to PDF converter for better web integration. 
      Throughout these projects, I honed my skills in Python programming, database management, user interface design, and technical documentation, while gaining valuable experience in adapting to corporate IT environments and collaborating with senior developers.`,
    },
    capstone: {
      p: "My work",
      h2: "Capstone Project",
      content: `During my internship at Amkor Technology, I worked on several key projects that enhanced the company's IT systems and processes. 
      My primary focus was on developing automation tools using Python, such as the CAPA Validation Tracker for the IQAT system and a Python-Excel automation tool for the Engineering department. 
      These projects involved creating user-friendly interfaces, implementing data extraction and conversion functionalities, and producing comprehensive documentation. 
      I also conducted User Acceptance Testing for various systems, including ATC (China) and FADMS, creating detailed user manuals in the process. 
      Additionally, I contributed to improving existing tools, such as enhancing a PPT to PDF converter for better web integration. 
      Throughout these projects, I honed my skills in Python programming, database management, user interface design, and technical documentation, while gaining valuable experience in adapting to corporate IT environments and collaborating with senior developers.`,
    },
    mp: {
      p: "My work",
      h2: "Machine Problem",
      content: `During my internship at Amkor Technology, I worked on several key projects that enhanced the company's IT systems and processes. 
      My primary focus was on developing automation tools using Python, such as the CAPA Validation Tracker for the IQAT system and a Python-Excel automation tool for the Engineering department. 
      These projects involved creating user-friendly interfaces, implementing data extraction and conversion functionalities, and producing comprehensive documentation. 
      I also conducted User Acceptance Testing for various systems, including ATC (China) and FADMS, creating detailed user manuals in the process. 
      Additionally, I contributed to improving existing tools, such as enhancing a PPT to PDF converter for better web integration. 
      Throughout these projects, I honed my skills in Python programming, database management, user interface design, and technical documentation, while gaining valuable experience in adapting to corporate IT environments and collaborating with senior developers.`,
    },
  },
};
