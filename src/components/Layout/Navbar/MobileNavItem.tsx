import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setMobileMenuOpen,
  setSelectedTab,
} from "src/redux/slices/navigationSlice";
import { scrollTo } from "src/helpers/viewport";

const styles = {
  container: "flex-center text-center text-black",
  text: "",
  button: "flex-col-center",
  selectedButton: "flex-col-center text-dark-blue text-h4",
  underline: "h-[2px] w-[66%] rounded-[10px] bg-white",
};

export interface MobileNavItem {
  title: string;
  value: number;
}

const MobileNavItem = (props: MobileNavItem) => {
  const { title, value } = props;

  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  const navbarPos = useAppSelector((state) => state.navigation.navbarPos);
  const dispatch = useAppDispatch();

  const selected = selectedTab === value;

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          dispatch(setSelectedTab(value));
          dispatch(setMobileMenuOpen(false));
          scrollTo(navbarPos);
        }}
        className={selected ? styles.selectedButton : styles.button}
      >
        <div className={styles.text}> {title} </div>
      </button>
    </div>
  );
};

export default MobileNavItem;
