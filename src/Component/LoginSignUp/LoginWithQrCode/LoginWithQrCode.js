import React from "react";
import styles from "./LoginWithQrCode.module.css";
import { lock, qrcode } from "../../../images/image";

const LoginWithQrCode = () => {
  return (
    <div className={styles.loginWithQrCode}>
      <img src={qrcode} alt="#" className={styles.qrcode} />
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Login With QR code</h4>
        <p className={styles.text}>
          Scan QR code with <span className={styles.app}>app</span>{" "}
        </p>
      </div>
      <div className={styles.urlContainer}>
        <div className={styles.lockContainer}>
          <img src={lock} alt="#" className={styles.lock} />
        </div>
        <a
          href="https://solidhash.io"
          target="_blank"
          rel="noreferrer"
          className={styles.url}
        >
          https://<span className={styles.link}>solidhash.io</span>{" "}
        </a>
      </div>
      <p className={styles.bottomText}>
        Whale.io, Trade anything anywhere with Whale.io!
      </p>
    </div>
  );
};

export default LoginWithQrCode;
