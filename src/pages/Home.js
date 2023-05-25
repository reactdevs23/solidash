import React from "react";
import BalanceChartPremium from "../Component/BalanceChartPremium/BalanceChartPremium";
import InventoroyOfRequest from "../Component/InventoryOfRequest/InventoroyOfRequest";
import NetworksNodes from "../Component/NetworksNodes/NetworksNodes";

const Home = () => {
  return (
    <>
      <BalanceChartPremium />
      <InventoroyOfRequest />
      <NetworksNodes />
    </>
  );
};

export default Home;
