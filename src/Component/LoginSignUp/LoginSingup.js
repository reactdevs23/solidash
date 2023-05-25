import React, { useState } from "react";
import styles from "./LoginSingup.module.css";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import { apple, facebook, google } from "../../images/image";
import LoginWithQrCode from "./LoginWithQrCode/LoginWithQrCode";

const LoginSingup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleButtonClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            {" "}
            {isLogin ? "Login to Your Account" : "Create Your Account"}
          </h2>
          <p className={styles.tagline}>
            {isLogin
              ? "Login In to Your Account"
              : " Setting up an account takes less than 1 minute."}
          </p>
        </div>
        <div className={styles.toggleContainer}>
          <p
            className={[styles.toggleText, isLogin && styles.toogleActive].join(
              " "
            )}
            onClick={handleButtonClick}
          >
            Login
          </p>{" "}
          <p
            className={[
              styles.toggleText,
              !isLogin && styles.toogleActive,
            ].join(" ")}
            onClick={handleButtonClick}
          >
            SignUp
          </p>
        </div>

        {isLogin ? <Login /> : <SignUp />}
        <div className={styles.orContinueWith}>
          <p className={styles.continueWith}>Or Continue with</p>
          <div className={styles.socialContainer}>
            <a href="#/">
              <div className={styles.socialIconContainer}>
                <img src={facebook} alt="#" className={styles.socialIcon} />
              </div>
            </a>{" "}
            <a href="#/">
              <div className={styles.socialIconContainer}>
                <img src={apple} alt="#" className={styles.socialIcon} />
              </div>
            </a>{" "}
            <a href="#/">
              <div className={styles.socialIconContainer}>
                <img src={google} alt="#" className={styles.socialIcon} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <LoginWithQrCode />
    </div>
  );
};

export default LoginSingup;
