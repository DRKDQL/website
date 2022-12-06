import { ReactNode } from "react";
import Navbar from "./Navbar";

const styles = {};

export interface ILayoutProps {
  children?: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
