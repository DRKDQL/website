import { useRef, useEffect, MutableRefObject } from "react";
import { useIntersection } from "src/helpers/viewport";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { setNavbarPos } from "src/redux/slices/navigationSlice";
import NavItem from "./NavItem";

const styles = {
  container: "h-[90px] bg-white grid grid-cols-3 w-full z-[3] shadow-md",
  fixed: "fixed top-0 left-0 w-full",
};

export interface INavbarProps {}

const Navbar = (props: INavbarProps) => {
  const fixedNavbar = useAppSelector((state) => state.navigation.fixedNavbar);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavbarPos(ref.current.offsetTop));
  }, []);

  return (
    <header
      className={`${styles.container} ${fixedNavbar ? styles.fixed : ""}`}
      ref={ref}
    >
      <NavItem title="Personal Projects" shortTitle="Personal" value={0} />
      <NavItem
        title="Websites for Clients & Businesses"
        shortTitle="Business"
        value={1}
      />
      <NavItem title="Blogs & Write-Ups" shortTitle="Blogs" value={2} />
    </header>
  );
};

export default Navbar;
