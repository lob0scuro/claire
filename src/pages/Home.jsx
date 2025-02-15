import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <h1 className={styles.homeHeader}>Hello Claire Elise!</h1>
      <div className={styles.homeButtonBlock}>
        <Link to="/morning">
          <FaSun />
          Morning
        </Link>
        <Link to="/evening">
          <IoMoon />
          Evening
        </Link>
      </div>
    </>
  );
};

export default Home;
