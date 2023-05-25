import React from "react";
import RequestBalance from "./RequestBalance/RequestBalance";
import BarChart from "./BarChart/BarChart";
import Premium from "./Premium/Premium";
import styles from "./BalanceChartPremium.module.css";

const BalanceChartPremium = () => {
  return (
    <div className={styles.wrapper}>
      <RequestBalance />
      <BarChart />
      <Premium />
    </div>
  );
};

export default BalanceChartPremium;
