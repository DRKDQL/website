import { ReactNode } from "react";
import FadeInContainer from "src/components/FadeIn";
import { useAppSelector } from "src/redux/hooks";

const styles = {
  container: "h-[200vh] p-[20px]",
  newContainer: "mt-[90px]",
};

export interface ISectionProps {
  children?: ReactNode;
}

const Section = (props: ISectionProps) => {
  const fixedNavbar = useAppSelector((state) => state.navigation.fixedNavbar);

  const { children } = props;
  return (
    <div
      className={`${styles.container} ${
        fixedNavbar ? styles.newContainer : ""
      }`}
    >
      <FadeInContainer>{children}</FadeInContainer>
    </div>
  );
};

export default Section;
