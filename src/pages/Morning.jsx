import React, { useEffect, useRef, useState } from "react";
import styles from "./Morning.module.css";
import TaskTile from "../components/TaskTile";
import TeethImage from "../assets/images/morning/teeth.png";
import PrayImage from "../assets/images/morning/pray.png";
import OutfitImage from "../assets/images/morning/outfit.png";
import HairImage from "../assets/images/morning/hair.png";
import BreakfastImage from "../assets/images/morning/breakfast.png";
import BackpackImage from "../assets/images/morning/backpack.png";
import check from "../assets/images/check.png";
import { useNavigate } from "react-router-dom";

const images = {
  "Say Prayer": PrayImage,
  "Brush Teeth": TeethImage,
  "Get Dressed": OutfitImage,
  "Do Hair": HairImage,
  "Eat Breakfast": BreakfastImage,
  "Get Backpack": BackpackImage,
};

const Morning = () => {
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
      <h1 className={styles.homeHeader}>Good Morning!</h1>
      <div className={styles.taskList} ref={div}>
        {Object.entries(images).map(([key, value]) => (
          <TaskTile key={key} title={key} image={value} />
        ))}
      </div>
    </>
  );
};

export default Morning;
