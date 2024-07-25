import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { certificate } from "../../constants";
import { Header } from "../atoms/Header";
import { TCertificate } from "../../types";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

const FeedbackCard: React.FC<{ index: number } & TCertificate> = ({
  index,
  description,
  name,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-6 "
  >
    <div className="mt-1 relative w-full">
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
          {/* <p className="text-secondary mt-1 text-[12px]">
            {designation} of {company}
          </p> */}
        </div>

        
      </div>
    </div>
  </motion.div>
);

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
          className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
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
