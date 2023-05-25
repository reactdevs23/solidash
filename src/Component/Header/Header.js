import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { AiOutlineAlignRight } from "react-icons/ai";

import { MdOutlineKeyboardArrowDown, MdOutlineClose } from "react-icons/md";
import { loading, menu, notification, user } from "../../images/image";
import styles from "./Header.module.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={styles.header}>
        <div className={styles.balanceContainer}>
          <p className={styles.text}>
            <span>My Request Balance</span>{" "}
            <img src={loading} alt="#" className={styles.loading} />
          </p>
          <p className={styles.balance}>4,000,000,000</p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.iconContainer}>
            <img src={notification} alt="#" className={styles.notification} />
          </div>
          <div className={styles.userContainer}>
            <img src={user} alt="#" className={styles.userImage} />
            <p className={styles.userName}>Mr. civa</p>
            <MdOutlineKeyboardArrowDown
              className={styles.arrow}
              onClick={() => setDropDown((prev) => !prev)}
            />
            {dropDown && (
              <div className={styles.dropDown}>
                <button
                  className={styles.logoutButton}
                  onClick={() => setDropDown((prev) => !prev)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className={styles.iconContainer}>
            <img src={menu} alt="#" className={styles.menu} />
          </div>
          {sidebar ? (
            <MdOutlineClose
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
