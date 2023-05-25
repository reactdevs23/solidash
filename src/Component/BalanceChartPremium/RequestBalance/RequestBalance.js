import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./RequestBalance.module.css";
import { message, send } from "../../../images/image";

const RequestBalance = () => {
  return (
    <div className={styles.requestBalance}>
      {" "}
      <div className={styles.boxWrapper}>
        {" "}
        <div className={styles.invebar}>
          <div className={styles.inveTitle}>
            <div className={styles.iconContainer}>
              <img src={send} alt="#" />
            </div>
            <b>Inventory of Requests</b>
          </div>
          <div>
            <a href="#/" className={styles.seemore}>
              Buy Request
            </a>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <ProgressBar progress={18} />
          <div className={styles.progressText}>
            <span>400.000</span> <span>/1.000.000</span>
          </div>
        </div>{" "}
      </div>
      <div className={styles.boxWrapper}>
        <div className={styles.invebar}>
          <div className={styles.inveTitle}>
            <div
              className={[styles.iconContainer, styles.tickContainer].join(" ")}
            >
              <img src={message} alt="#" />
            </div>
            <b>New tickets</b>
          </div>
          <div>
            <a href="#/" className={styles.seemore}>
              Buy Request
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBalance;
