import React from "react";
import styles from "./Premium.module.css";

const Premium = () => {
  const features = [
    "Access To 17 chains",
    "100,000 Free Request",
    "Backup",
    "Websockets Tools",
    "Good Support",
    "Web Hooks Tools",
  ];
  return (
    <div className={styles.premium}>
      <div className={styles.header}>
        <h3 className={styles.title}>Premuim</h3>
        <div className={styles.amount}>
          <span>$288/mo</span>
        </div>
      </div>
      <div className={styles.features}>
        {features.map((feature, i) => (
          <div key={i} className={styles.feature}>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button className={styles.buyButton}>Buy new Plan</button>
    </div>
  );
};

export default Premium;
