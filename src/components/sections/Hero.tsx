import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
// import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const copyDiscord = () => {
    navigator.clipboard.writeText('andododo');
    alert('Discord handle copied!');
  };

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        // here to change padding before hero text
        className={`absolute inset-0 top-[220px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
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
              <button className={`${styles.heroButtonsStyle} bg-[#915EFF]`}>View CV</button>
            </a>
            <a href="https://github.com/andododo" target="_blank" rel="noopener noreferrer">
              <button className={`${styles.heroButtonsStyle} bg-tertiary`}>GitHub</button>
            </a>
            <button className={`${styles.heroButtonsStyle} bg-tertiary`} onClick={copyDiscord}>Discord</button>
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
