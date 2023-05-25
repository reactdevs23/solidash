import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

const ProgressBar = ({ progress }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
   
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={progressStyle} />
      </div>
    </>
  );
};

export default ProgressBar;
