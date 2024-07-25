import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { certificate } from "../../constants";
import { Header } from "../atoms/Header";
import { TCertificate } from "../../types";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => {
  const handleModalClick = (e: React.MouseEvent) => {
    // Close the modal if clicking outside the image
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleModalClick}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Full-sized" className="max-h-[80vh] max-w-[80vw] object-contain" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 rounded-full bg-red-500 p-2 text-white hover:bg-red-400"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

const FeedbackCard: React.FC<{ index: number } & TCertificate> = ({
  index,
  description,
  name,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 xs:w-[320px] h-[420px] w-full rounded-3xl p-6 relative cursor-pointer"
      onClick={handleImageClick}
    >
      <div className="mt-2 relative w-full">
        <img
          src={image}
          className="h-full w-full rounded-2xl object-cover"
        />
        <p className="mt-7 font-bold text-[20px] tracking-wider text-white">{description}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && <ImageModal image={image} onClose={handleCloseModal} />}
      </AnimatePresence>
    </motion.div>
  );
};

const Certificate = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.certificate} />
      </div>

      <div className="flex justify-center">
        <div
          className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 items-center justify-center`}
        >
          {certificate.map((description, index) => (
            <FeedbackCard key={description.name} index={index} {...description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certificate, "cert");
