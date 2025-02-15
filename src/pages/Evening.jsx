import React, { useEffect, useRef, useState } from "react";
import styles from "./Evening.module.css";
import TaskTile from "../components/TaskTile";
import BathImage from "../assets/images/evening/bath.png";
import DinnerImage from "../assets/images/evening/dinner.png";
import HomeworkImage from "../assets/images/evening/homework.png";
import PlaytimeImage from "../assets/images/evening/playtime.png";
import PrayImage from "../assets/images/evening/pray.png";
import ReadingImage from "../assets/images/evening/reading.png";
import TeethImage from "../assets/images/evening/teeth.png";
import check from "../assets/images/check.png";
import { useNavigate } from "react-router-dom";

const images = {
  "Bath Time": BathImage,
  "Eat Dinner": DinnerImage,
  "Do Homework": HomeworkImage,
  "Play Around": PlaytimeImage,
  "Prayer Time": PrayImage,
  "Read A Book": ReadingImage,
  "Brush Teeth": TeethImage,
};

const Evening = () => {
  const div = useRef(null);
  const [checkImage, setCheckImage] = useState(0);
  const navigate = useNavigate();

  const countChecks = () => {
    if (div.current) {
      let count = 0;
      const imgEl = div.current.querySelectorAll("img");

      imgEl.forEach((img) => {
        if (img.src.endsWith(check.split("/").pop())) {
          count++;
        }
      });
      setCheckImage(count);
    }
  };

  useEffect(() => {
    countChecks();

    const observer = new MutationObserver(countChecks);
    if (div.current) {
      observer.observe(div.current, {
        subtree: true,
        childList: true,
        attributes: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (checkImage === Object.keys(images).length) {
      setTimeout(() => {
        alert("Done!");
        navigate("/");
      }, 10);
    }
  }, [checkImage]);
  return (
    <>
      <h1 className={styles.homeHeader}>Good Evening!</h1>
      <div className={styles.taskList} ref={div}>
        {Object.entries(images).map(([key, value]) => (
          <TaskTile key={key} title={key} image={value} />
        ))}
      </div>
    </>
  );
};

export default Evening;
