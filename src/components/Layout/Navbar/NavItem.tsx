import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { setSelectedTab } from "src/redux/slices/navigationSlice";
import { scrollTo } from "src/helpers/viewport";

const styles = {
  navItem: "flex-center text-center no-select",
  text: "",
  button: "flex-col-center",
  underline: "h-[2px] w-[66%] rounded-[10px] bg-white",
};

export interface INavItemProps {
  title: string;
  value: number;
}

const NavItem = (props: INavItemProps) => {
  const { title, value } = props;

  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  const navbarPos = useAppSelector((state) => state.navigation.navbarPos);
  const dispatch = useAppDispatch();

  const selected = selectedTab === value;

  return (
    <div className={styles.navItem}>
      <motion.button
        animate={{
          scale: selected ? 1.4 : 1,
          color: selected ? "white" : "",
        }}
        whileHover={{
          scale: 1.1,
          color: "white",
        }}
        onClick={() => {
          dispatch(setSelectedTab(value));
          scrollTo(navbarPos);
        }}
        className={styles.button}
      >
        <div className={styles.text}> {title} </div>
        {/* {selected && <div className={styles.underline} />} */}
      </motion.button>
    </div>
  );
};

export default NavItem;
