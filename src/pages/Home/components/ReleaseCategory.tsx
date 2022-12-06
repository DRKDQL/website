import { FaHourglassStart } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";
import Decoration from "src/components/Decoration";

const styles = {
  container: "flex-center",
  content:
    "flex-col-center text-center my-[20px] text-h4 tablet:text-h3 text-white",
  text: "text-center",
  upcomingIcon: "p-[10px] rounded-[50%] bg-light-blue",
  liveIcon: "p-[10px] rounded-[50%] bg-light-green",
  // decoration: "w-full bg-white h-[1px] mx-[20px]",
};

export interface IReleaseCategoryProps {
  type: "Upcoming" | "Live";
}

const ReleaseCategory = (props: IReleaseCategoryProps) => {
  const { type } = props;
  const getIcon = () => {
    switch (type) {
      case "Upcoming":
        return (
          <div className={styles.upcomingIcon}>
            <FaHourglassStart />
          </div>
        );
      case "Live":
        return (
          <div className={styles.liveIcon}>
            <BsBroadcastPin />
          </div>
        );
    }
  };
  return (
    <Decoration>
      <div className={styles.content}>
        {getIcon()}
        <div className={styles.text}>{type}</div>
      </div>
    </Decoration>
  );
};

export default ReleaseCategory;
