import React from "react";
import styles from "./Sidebar.module.css";
import {
  apiWizard,
  development,
  document,
  endPoinsts,
  settings,
  webHooks,
  logoutIcon,
} from "../../../images/image";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  const navItems = [
    { icon: endPoinsts, navItem: "Endpoints", to: "/" },
    { icon: development, navItem: "Development", to: "/development" },
    { icon: webHooks, navItem: "Webhooks", to: "/webhooks" },
    { icon: apiWizard, navItem: "Api wizard", to: "/apiwizard" },
  ];
  return (
    <section
      className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}
    >
      <div className={styles.logoContainer}>
        <span className={styles.circle}></span>
        <h1 className={styles.logoText}>SolidHash</h1>
      </div>

      <div className={styles.navItems}>
        {navItems.map((el, i) => (
          <NavLink
            to={el.to}
            key={i}
            className={({ isActive }) =>
              isActive
                ? [styles.navItem, styles.navActive].join(" ")
                : styles.navItem
            }
            onClick={() => setSidebar((prev) => !prev)}
          >
            <img src={el.icon} alt="#" className={styles.navIcon} />
            <span>{el.navItem}</span>
          </NavLink>
        ))}
      </div>
      <div className={styles.navItems}>
        <p className={styles.title}>General</p>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive
              ? [styles.navItem, styles.navActive].join(" ")
              : styles.navItem
          }
          onClick={() => setSidebar((prev) => !prev)}
        >
          <img src={document} alt="#" className={styles.navIcon} />
          <span>Documents</span>
        </NavLink>{" "}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? [styles.navItem, styles.navActive].join(" ")
              : styles.navItem
          }
          onClick={() => setSidebar((prev) => !prev)}
        >
          <img src={settings} alt="#" className={styles.navIcon} />
          <span>Settings</span>
        </NavLink>
      </div>
      <button className={styles.logoutButton}>
        <img src={logoutIcon} alt="#" className={styles.logoutIcon} /> Logout
      </button>
    </section>
  );
};

export default Sidebar;
