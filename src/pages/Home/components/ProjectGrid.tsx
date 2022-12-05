import { ReactNode } from "react";

const styles = {
  grid: "grid grid-cols-1 tablet:grid-cols-3 gap-6",
};

export interface IProjectGridProps {
  children?: ReactNode;
}

const ProjectGrid = (props: IProjectGridProps) => {
  const { children } = props;
  return <div className={styles.grid}> {children} </div>;
};

export default ProjectGrid;