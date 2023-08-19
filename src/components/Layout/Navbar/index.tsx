import { useRef, useEffect, MutableRefObject, useState } from "react";
import Picture from "src/components/Picture";
import { ASPECT_RATIO_ICON } from "src/helpers/picture";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setMobileMenuOpen,
  setNavbarPos,
} from "src/redux/slices/navigationSlice";
import NavItem from "./NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { scrollTo } from "src/helpers/viewport";
import MobileNavItem from "./MobileNavItem";
import FadeInContainer from "src/components/FadeIn";
import { IoMdClose } from "react-icons/io";

const styles = {
  container:
    "grid grid-cols-3 laptop:grid laptop:grid-cols-5 w-full h-[90px] brand-gradient z-[3] shadow-md p-[5px]",
  logo: "flex-center",
  desktopNavItems: "hidden col-span-4 laptop:grid grid-cols-4",
  fixed: "fixed top-0 left-0 w-full",
  mobileMenuButton: "flex-center laptop:hidden text-white text-h1",
  selectedMobileNavItem:
    "flex-center text-center laptop:hidden text-h5 text-white uppercase font-bold",
  mobileMenu: "z-[3] laptop:hidden bg-white",
  fixedMobileMenu: "z-[3] fixed top-0 w-full mt-[90px]",
  mobileNavItems: "flex-col space-y-6 p-[20px]",
};

export interface INavbarProps {}

const Navbar = (props: INavbarProps) => {
  const fixedNavbar = useAppSelector((state) => state.navigation.fixedNavbar);
  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  const mobileMenuOpen = useAppSelector(
    (state) => state.navigation.mobileMenuOpen
  );
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavbarPos(ref.current.offsetTop));
  }, [dispatch]);

  const getMobileSelectedTabName = () => {
    switch (selectedTab) {
      case 0:
        return "Personal";
      case 1:
        return "Business";
      case 2:
        return "Blogs";
      case 3:
        return "About";
    }
  };

  return (
    <>
      <header
        className={`${styles.container} ${fixedNavbar ? styles.fixed : ""}`}
        ref={ref}
      >
        <div className={styles.logo}>
          <Picture
            src="/assets/NavbarLogo.svg"
            alt=""
            aspectRatio={ASPECT_RATIO_ICON}
            height={80}
            onClick={() => {
              scrollTo(0);
              dispatch(setMobileMenuOpen(false));
            }}
            imageClass="cursor-pointer"
          />
        </div>
        <div className={styles.desktopNavItems}>
          <NavItem title="Personal Projects" value={0} />
          <NavItem title="Business Projects" value={1} />
          <NavItem title="Blogs & Write-Ups" value={2} />
          <NavItem title="About" value={3} />
        </div>
        <div className={styles.selectedMobileNavItem}>
          {getMobileSelectedTabName()}
        </div>
        <div className={styles.mobileMenuButton}>
          {mobileMenuOpen && (
            <IoMdClose
              onClick={() => {
                dispatch(setMobileMenuOpen(false));
              }}
            />
          )}
          {!mobileMenuOpen && (
            <GiHamburgerMenu
              onClick={() => {
                dispatch(setMobileMenuOpen(true));
              }}
            />
          )}
        </div>
      </header>
      {mobileMenuOpen && (
        <div
          className={`${styles.mobileMenu} ${
            fixedNavbar ? styles.fixedMobileMenu : ""
          }`}
        >
          <FadeInContainer>
            <div className={styles.mobileNavItems}>
              <MobileNavItem title="Personal" value={0} />
              <MobileNavItem title="Business" value={1} />
              <MobileNavItem title="Blogs" value={2} />
              <MobileNavItem title="About" value={3} />
            </div>
          </FadeInContainer>
        </div>
      )}
    </>
  );
};

export default Navbar;
