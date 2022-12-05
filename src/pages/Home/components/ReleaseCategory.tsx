import { FaHourglassStart } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";

const styles = {
  container: "flex justify-center text-center items-center space-x-2 my-[20px]",
  text: "text-h2 text-white text-center",
  icon: "text-h2 text-white",
};

export interface IReleaseCategoryProps {
  type: "Upcoming" | "Live";
}

const ReleaseCategory = (props: IReleaseCategoryProps) => {
  const { type } = props;
  const getIcon = () => {
    switch (type) {
      case "Upcoming":
        return <FaHourglassStart />;
      case "Live":
        return <BsBroadcastPin />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.text}>{type}</div>
    </div>
  );
};

export default ReleaseCategory;
