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
    feedbacks: TSection;
    works: Required<TSection>;
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
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
