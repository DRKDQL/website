import { BsGlobe } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import Picture from "src/components/Picture";
import { ASPECT_RATIO_PROJECT_COVER } from "src/helpers/picture";
import { v4 as uuidv4 } from "uuid";

const styles = {
  container: "grid grid-rows-2 bg-white rounded-[20px]",
  image: "bg-grey p-[10px]",
  textContainer: "grid grid-rows-3",
  title: "text-h5",
  heading: "flex flex-col justify-center items-center text-center",
  link: "flex space-x-3 items-center text-label text-dark-blue",
  caption: "flex items-center text-center justify-center px-[20px] pb-[15px]",
  toolsContainer: "",
  toolsHeading:
    "text-label flex justify-center text-center items-center space-x-3 mb-[5px]",
  toolsGrid: "grid grid-cols-3 gap-6 px-[20px] pb-[10px]",
  toolsGridItem:
    "bg-dark-pink rounded-[5px] text-white text-label flex justify-center items-center text-center",
  toolsTBAContainer: "flex items-center justify-center",
  toolsTBA:
    "text-label text-center text-white bg-light-grey rounded-[5px] px-[5px]",
};

export interface IProjectCardProps {
  title: string;
  link: string;
  caption: string;
  category: "Websites" | "Designs" | "Blogs" | "Games" | "Edits";
  linkType: "Website" | "Instagram";
  imgSrc: string;
  tools: string[];
}

const ProjectCard = (props: IProjectCardProps) => {
  const { title, link, caption, tools, imgSrc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {/* <Picture src={imgSrc} alt="" aspectRatio={ASPECT_RATIO_PROJECT_COVER} /> */}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heading}>
          <div className={styles.title}> {title} </div>
          <div className={styles.link}>
            <BsGlobe /> <div> {link} </div>
          </div>
        </div>
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
                  <div className={styles.toolsGridItem} key={uuidv4()}>
                    {t}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
