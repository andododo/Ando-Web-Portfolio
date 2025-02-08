import Tilt from "react-parallax-tilt";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { whizzy } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div className="relative">
        <img src={image} alt="Full-sized" className="max-h-[80vh] max-w-[80vw] object-contain" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-red-500 p-2 text-white hover:bg-red-400"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};
const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div 
          className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] cursor-pointer"
          onClick={handleImageClick}
        >
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[22px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
      <AnimatePresence>
        {isModalOpen && <ImageModal image={image} onClose={handleCloseModal} />}
      </AnimatePresence>
    </motion.div>
  );
};

const Capstone = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.capstone} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 text-[17px] leading-[30px]"
        >
          {config.sections.capstone.content}
        </motion.p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
          {whizzy.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default SectionWrapper(Capstone, "");
