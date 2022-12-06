import { BsGlobe } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const styles = {
  container: "bg-white rounded-[20px] cursor-pointer",
  category:
    "flex-center p-[10px] rounded-t-[15px] text-white uppercase h-[50px]",
  titleContainer: "flex-col-center text-center pt-[10px] h-[90px]",
  title: "text-h5",
  icon: "flex-center text-center",
  link: "flex-center text-center space-x-3 text-label",
  contentContainer:
    "tablet:grid tablet:grid-rows-2 tablet:h-[calc(100%-140px)]",
  caption: "flex-center text-center p-[10px] cursor-pointer",
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
  caption: string;
  category: "Website" | "Design" | "Blog" | "Game" | "Editing";
  linkType: "Website" | "Instagram";
  tools: string[];
}

const ProjectCard = (props: IProjectCardProps) => {
  const { title, link, linkType, caption, tools, category } = props;
  const router = useRouter();

  const getCategoryBgColour = () => {
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
    }
  };

  const getCategoryTextColour = () => {
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
    }
  };

  const getLinkIcon = () => {
    switch (linkType) {
      case "Website":
        return <BsGlobe />;
      case "Instagram":
        return <AiFillInstagram />;
    }
  };

  return (
    <motion.a
      className={styles.container}
      whileHover={{ scale: 1.05 }}
      href={`https://${link}`}
    >
      <div className={`${styles.category} ${getCategoryBgColour()}`}>
        {category}
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}> {title} </div>
        <div className={`${styles.link} ${getCategoryTextColour()}`}>
          {getLinkIcon()}
          <div> {link} </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <label className={styles.caption}> {caption} </label>
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
    </motion.a>
  );
};

export default ProjectCard;
