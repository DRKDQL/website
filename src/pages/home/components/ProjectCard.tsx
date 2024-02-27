import { BsGlobe } from "react-icons/bs";
import { FaTools, FaLink, FaGooglePlay } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const styles = {
  container: "bg-white rounded-[20px]",
  category:
    "flex-center p-[10px] rounded-t-[15px] text-white uppercase h-[50px]",
  titleContainer: "flex-col-center text-center pt-[10px] h-[90px]",
  title: "text-h5",
  icon: "flex-center text-center",
  link: "flex-center text-center space-x-3 text-label",
  contentContainer:
    "tablet:grid tablet:grid-rows-2 tablet:h-[calc(100%-140px)]",
  caption: "flex-center text-center p-[10px]",
  toolsContainer: "p-[10px]",
  toolsHeading: "flex-center items-center text-label space-x-3 mb-[5px]",
  toolsGrid: "grid grid-cols-3 gap-6 px-[20px] pb-[10px]",
  toolsGridItem:
    "flex-center text-center rounded-[5px] text-white text-small py-[2px]",
  toolsTBAContainer: "flex-center",
  toolsTBA:
    "text-center text-small text-white bg-light-grey rounded-[5px] px-[5px]",
};

export interface IProjectCardProps {
  title: string;
  link: string;
  linkText: string;
  caption: string;
  category: "Website" | "Design" | "Blog" | "Game" | "Editing" | "Mobile App";
  linkType: "Website" | "Instagram" | "Mobile App" | "";
  tools: string[];
  disabled?: boolean;
  archived?: boolean;
}

const ProjectCard = (props: IProjectCardProps) => {
  const {
    title,
    link,
    linkText,
    linkType,
    caption,
    tools,
    category,
    disabled,
    archived,
  } = props;

  const getCategoryBgColour = () => {
    if (archived) return "bg-archived";
    switch (category) {
      case "Website":
        return `bg-category-website`;
      case "Design":
        return `bg-category-design`;
      case "Blog":
        return `bg-category-blog`;
      case "Game":
        return `bg-category-game`;
      case "Editing":
        return `bg-category-editing`;
      case "Mobile App":
        return `bg-category-mobile-app`;
    }
  };

  const getCategoryTextColour = () => {
    if (archived) return "text-archived";
    switch (category) {
      case "Website":
        return `text-category-website`;
      case "Design":
        return `text-category-design`;
      case "Blog":
        return `text-category-blog`;
      case "Game":
        return `text-category-game`;
      case "Editing":
        return `text-category-editing`;
      case "Mobile App":
        return `text-category-mobile-app`;
    }
  };

  const getLinkIcon = () => {
    switch (linkType) {
      case "Website":
        return <BsGlobe />;
      case "Instagram":
        return <AiFillInstagram />;
      case "Mobile App": 
        return <FaGooglePlay />;
      default:
        return <FaLink />;
    }
  };

  const getCursorStyle = () => {
    return disabled ? "cursor-default" : "cursor-pointer";
  };

  return (
    <>
      <motion.div
        className={`${styles.container} ${getCursorStyle()}`}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        onClick={() => {
          if (!disabled) window.open(`https://${link}`, "_blank", "noreferrer");
        }}
      >
        <div className={`${styles.category} ${getCategoryBgColour()}`}>
          {category}
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}> {title} </div>
          <div className={`${styles.link} ${getCategoryTextColour()}`}>
            {getLinkIcon()}
            <div> {linkText} </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <label className={`${styles.caption} ${getCursorStyle()}`}>
            {caption}
          </label>
          <div className={styles.toolsContainer}>
            <div className={styles.toolsHeading}>
              <FaTools />
              <div> Tools / Skills: </div>
            </div>
            {tools.length === 0 && (
              <div className={styles.toolsTBAContainer}>
                <div className={styles.toolsTBA}> T.B.A </div>
              </div>
            )}
            {tools.length > 0 && (
              <div className={styles.toolsGrid}>
                {tools.map((t) => {
                  return (
                    <div
                      className={`${
                        styles.toolsGridItem
                      } ${getCategoryBgColour()}`}
                      key={uuidv4()}
                    >
                      {t}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
