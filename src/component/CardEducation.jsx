import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CardEducation = ({
  logoEducation,
  nameEducation,
  degreeEducation,
  majorEducation,
  dateEduction,
  gradeEducation,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col w-full text-lg text-[#1A1A1A] jura-regular gap-4 border-2 border-[#1A1A1A] rounded-2xl p-6 bg-white"
      key={"universitas_yarsi"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex p-3 px-4 bg-[#1A1A1A] w-fit rounded-lg gap-3 items-center">
        <img src={logoEducation} className="h-10 " />
        <p
          className="font-bold text-xl text-white
        max-[320px]:text-sm
        max-[430px]:text-lg
        md:text-3xl"
        >
          {nameEducation}
        </p>
      </div>
      <div
        className="flex flex-col font-bold gap-2
        max-[320px]:text-xs
        max-[430px]:text-sm
        sm:gap-3 
        md:text-lg"
      >
        <div
          className="flex flex-col w-full gap-2
        sm:flex-row
        sm:gap-3"
        >
          <li className="list-disc">{degreeEducation}</li>
          <p
            className="hidden
          sm:block"
          >
            -
          </p>
          <li
            className=" list-disc
          sm:list-none"
          >
            {majorEducation}
          </li>
        </div>
        <li className="list-disc">{dateEduction}</li>
        <li className="list-disc">{gradeEducation}</li>
      </div>
    </motion.div>
  );
};
