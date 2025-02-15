import React, { useState } from "react";
import styles from "./TaskTile.module.css";
import checkMark from "../assets/images/check.png";

const TaskTile = ({ image, title }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage === image ? checkMark : image));
  };
  return (
    <button className={styles.taskTile} onClick={handleClick}>
      <img src={currentImage} alt="task tile" />
      <div className={styles.taskTitle}>
        <h3>{title}</h3>
      </div>
    </button>
  );
};

export default TaskTile;
