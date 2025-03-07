import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { organization } from "../../constants";
import { Header } from "../atoms/Header";
import { TOrganization } from "../../types";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

const FeedbackCard: React.FC<{ index: number } & TOrganization> = ({
  index,
  description,
  name,
  designation,
  company,
  // image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <div className="mt-1">
      <p className="font-medium text-[15px] tracking-wider text-white">{description}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-2 text-[13px]">
            {company}
          </p>
          <p className="text-secondary mt-1 text-[13px]">
            A.Y. {designation}
          </p>
        </div>

        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        /> */}
      </div>
    </div>
  </motion.div>
);

const Organization = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.organization} />
      </div>
      
      <div className="flex justify-center">
        <div
          className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
        >
          {organization.map((description, index) => (
            <FeedbackCard key={description.name} index={index} {...description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Organization, "org");
