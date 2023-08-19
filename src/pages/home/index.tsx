import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "src/components/Layout";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Business from "./components/Business";
import Cover from "./components/Cover";
import Personal from "./components/Personal";

const styles = {};

const Home: NextPage = () => {
  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  return (
    <>
      <Cover />
      <Layout>
        {selectedTab === 0 && <Personal />}
        {selectedTab === 1 && <Business />}
        {selectedTab === 2 && <Blogs />}
        {selectedTab === 3 && <About />}
      </Layout>
    </>
  );
};

export default Home;
