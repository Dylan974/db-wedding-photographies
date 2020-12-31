import Head from "next/head";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

import navButtons from "../../config/button";

import styles from "./Layout.module.css";

const Layout = (props) => {
  const appTitle = `Dylan Boyer Photographe de mariage`;

  return (
    <div className={styles.Layout}>
      <Head>
        <title>Dylan Boyer | Photographe de mariage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* <Header appTitle={appTitle} /> */}
      <div className={styles.Content}>{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;
