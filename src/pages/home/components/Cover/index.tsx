import { useRef, MutableRefObject, useEffect } from "react";
import Picture from "src/components/Picture";
import { ASPECT_RATIO_LOGO } from "src/helpers/picture";
import { FaTools, FaEdit } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Area from "./Area";
import { motion } from "framer-motion";
import { scrollTo, useIntersection } from "src/helpers/viewport";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setFixedNavbar,
  setSelectedTab,
} from "src/redux/slices/navigationSlice";

const styles = {
  container:
    "h-screen bg-dark-grey flex flex-col justify-evenly items-center p-[20px] text-white",
  brand: "w-[80%]",
  slogan: "text-center",

  grid: "grid grid-rows-3 tablet:grid-cols-3 tablet:grid-rows-none tablet:gap-8 w-full text-white",
  button:
    "flex justify-center items-center text-center space-x-3 bg-gradient-to-r from-light-blue to-light-pink p-[20px] rounded-[50px] text-h4",
};

export interface ICoverProps {}

const Cover = (props: ICoverProps) => {
  const navbarPos = useAppSelector((state) => state.navigation.navbarPos);
  const dispatch = useAppDispatch();
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const inView = useIntersection(ref);

  useEffect(() => {
    dispatch(setFixedNavbar(!inView));
  }, [inView, dispatch]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.brand}>
        <Picture
          src="/assets/sections/home/Logo.svg"
          alt="DRKDQL Logo"
          aspectRatio={ASPECT_RATIO_LOGO}
        />
      </div>
      <div className={styles.grid}>
        <Area
          title="BUILDING"
          icon={<FaTools />}
          description="Websites, Mobile Apps and Games"
        />
        <Area
          title="EDITING / DESIGNING"
          icon={<FaEdit />}
          description="Logos and Social Media Content"
          middle
        />
        <Area
          title="WRITING"
          icon={<GiNotebook />}
          description="Tech-related Blog Posts, Tutorials and Documentation"
        />
      </div>
      <motion.button
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          scrollTo(navbarPos);
          dispatch(setSelectedTab(0));
        }}
      >
        {<BsArrowDownCircleFill />}
        <div> See My Projects </div>
      </motion.button>
    </div>
  );
};

export default Cover;
