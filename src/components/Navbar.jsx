import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const Navbar = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("default", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      // const seconds = now.getSeconds().toString().padStart(2, "0");

      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;

      // Format time as HH:MM:SS
      const formattedTime = `${hours}:${minutes} ${period}`;
      setTime(formattedTime);
    };

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Initial time update
    updateTime();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={styles.header}>
      <h1>
        Claires <Link to="/">ToDo's</Link>
      </h1>
      <div>
        <p>
          <span>
            <FaCalendarAlt />
          </span>
          &nbsp;&nbsp;{formattedDate}
        </p>
        <p>
          <span>
            <MdAccessTimeFilled />
          </span>
          &nbsp;&nbsp;
          {time}
        </p>
      </div>
    </header>
  );
};

export default Navbar;
