import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { setSelectedTab } from "src/redux/slices/navigationSlice";

const styles = {
  navItem: "flex flex-col items-center justify-center text-center",
  text: "hidden tablet:block",
  mobileText: "tablet:hidden",
  button: "",
  underline:
    "h-[0.5px] w-full bg-gradient-to-r from-dark-blue to-dark-pink rounded-[10px]",
};

export interface INavItemProps {
  title: string;
  shortTitle: string;
  value: 0 | 1 | 2;
}

const NavItem = (props: INavItemProps) => {
  const { title, shortTitle, value } = props;

  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  const dispatch = useAppDispatch();

  const selected = selectedTab === value;

  return (
    <div className={styles.navItem}>
      <motion.button
        animate={{
          scale: selected ? 1.4 : 1,
          color: selected ? "#0079AA" : "",
        }}
        whileHover={{
          scale: 1.1,
          color: "#DB3EB1",
        }}
        onClick={() => {
          dispatch(setSelectedTab(value));
        }}
        className={styles.button}
      >
        <div className={styles.text}> {title} </div>
        <div className={styles.mobileText}> {shortTitle} </div>
        {selected && <div className={styles.underline} />}
      </motion.button>
    </div>
  );
};

export default NavItem;
