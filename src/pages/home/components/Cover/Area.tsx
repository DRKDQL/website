import { ReactNode } from "react";

const styles = {
  gridItem: "grid grid-rows-3 text-center",
  heading: "row-span-2 flex flex-col items-center justify-center",
  icon: "text-h3 py-[5px]",
  title: "text-h3 font-bold",
  description: "flex flex-col items-center text-center",
  divider:
    "tablet:hidden h-[5px] bg-gradient-to-r from-light-blue to-light-pink w-full rounded-[10px] my-[5px]",
  border: "border-solid border-white tablet:border-x-[1px]",
};

export interface IAreaProps {
  title: string;
  icon: ReactNode;
  description: string;
  middle?: boolean;
}

const Area = (props: IAreaProps) => {
  const { title, description, icon, middle } = props;
  return (
    <div className={`${styles.gridItem} ${middle ? styles.border : ""}`}>
      <div className={styles.heading}>
        <div className={styles.icon}> {icon} </div>
        <div className={styles.title}> {title} </div>
      </div>
      <div className={styles.description}> {description} </div>
    </div>
  );
};

export default Area;
