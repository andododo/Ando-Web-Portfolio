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
    certificate: TSection;
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
    email: "jamagbuhat@gmail.com",
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
    certificate: {
      p: "Extracurricular",
      h2: "Certificates",
    },
    organization: {
      p: "Extracurricular",
      h2: "Organizations",
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
      content: `This study aims to develop an interactive voice-assistive kiosk, "Hey Whizzy," capable of providing easy access to school information, enhancing user interaction, and supporting campus navigation. 
      Additionally, a web application was created to support specific functionalities such as managing a knowledge base and disseminating real-time updates. 
      The kiosk leverages Google Assistant to facilitate dynamic communication between users and the system. 
      The aim of this study is to improve information accessibility at Mapúa Malayan Colleges Laguna, aligning with the institution's commitment to innovative educational technologies. 
      The developed kiosk serves as an additional tool that fosters interaction among students, faculty, and visitors, provides easy access to information, and improves campus navigation through its voice command features and user-friendly interface. 
      The outcome of this project aims to enhance the information dissemination experience by leveraging advanced technologies to create a more interactive and streamlined campus environment. 
      The developers recommended upgrading to a Raspberry Pi 5 for better performance, exploring third-party hosting solutions to enhance the system further. 
      Positive reception and support from users emphasize the feasibility of integrating this system into the existing infrastructure of Mapúa Malayan Colleges Laguna.`,
    },
    mp: {
      p: "My work",
      h2: "Machine Problem",
      content: `During my 3rd Year, the courses focused on IoT and embedded systems using Arduino and Wemos platforms. 
      I developed skills in microcontroller programming with the Arduino IDE, working extensively with various sensors and components. 
      My projects involved circuit design, wireless communication, and implementing RTOS principles for efficient device operation. 
      I gained experience in M2M communication, API development, and integration, enhancing my understanding of IoT architecture. 
      This hands-on work improved my problem-solving skills, particularly in hardware-software integration and optimizing for resource-constrained environments. 
      Through these projects, I acquired a comprehensive grasp of IoT system development, from sensor integration to cloud connectivity.`,
    },
  },
};
