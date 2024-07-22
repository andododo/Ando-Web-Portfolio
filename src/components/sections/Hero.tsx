import { motion } from "framer-motion";
import { useState } from 'react';
import { styles } from "../../constants/styles";
// import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

import { FaGithub, FaDiscord, FaFilePdf, FaMailBulk, FaLinkedin} from 'react-icons/fa';

const Hero = () => {
  const [discordText, setDiscordText] = useState('Discord');

  const copyDiscord = () => {
    navigator.clipboard.writeText('andododo');
    setDiscordText('Copied!');
  };

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        // here to change padding before hero text
        className={`absolute inset-0 top-[250px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>.
          </h1>
          <p className={`${styles.heroSchool}`}>
            A 4th year {config.hero.course} student at {config.hero.school}.
          </p>
          <p className={`${styles.heroSubText}`}>
            {config.hero.description[0]}, {config.hero.description[1]}, and {config.hero.description[2]}.
          </p>

          <p className={`${styles.heroButtons}`}>
            <a href="https://docs.google.com/document/d/1Hb3fM9olPqBlolEjnalYP7A4AcxsDY77j-h9x_ouucY/edit?usp=sharing" 
              target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`${styles.heroButtonsStyle} bg-[#915EFF]`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFilePdf size={25}/>View CV
              </motion.button>
            </a>
            <a href="https://www.linkedin.com/in/jamagbuhat" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`${styles.heroButtonsStyle} bg-tertiary`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={25}/>LinkedIn
              </motion.button>
            </a>
            <a href="https://github.com/andododo" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`${styles.heroButtonsStyle} bg-tertiary`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={25}/>GitHub
              </motion.button>
            </a>
            <motion.button className={`${styles.heroButtonsStyle} bg-tertiary`} 
              onClick={copyDiscord}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseLeave={() => setDiscordText('Discord')}
            >
              <FaDiscord size={25}/>{discordText}
            </motion.button>
            <a href="mailto:magbuhatjustinandrei@gmail.com" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`${styles.heroButtonsStyle} bg-tertiary`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaMailBulk size={25}/>Email
              </motion.button>
            </a>
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="xs:bottom-100 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[80px] w-[40px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 35, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-5 w-5 rounded-full"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
