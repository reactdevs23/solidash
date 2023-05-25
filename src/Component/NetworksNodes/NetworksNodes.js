import React from "react";
import styles from "./NetworksNodes.module.css";
import SingleNodes from "./SingleNodes/SingleNodes";
import { binance, networkNode } from "../../images/image";
const NetworksNodes = () => {
  const data = [
    {
      icon: binance,
      name: "Binance Smart Chain",
      nodeHeight: "42,324,323",
      status: "Active",
      endPoints: [
        { type: "rpc", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "wss", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "archive", url: "https://rpc.solidhash.io/3igJuxZeKG " },
      ],
      request: "12B",
      time: "30d",
    },
    {
      icon: binance,
      name: "Binance Smart Chain",
      nodeHeight: "42,324,323",
      status: "pending",
      endPoints: [
        { type: "rpc", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "wss", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "archive", url: "https://rpc.solidhash.io/3igJuxZeKG " },
      ],
      request: "12B",
      time: "30d",
    },
    {
      icon: binance,
      name: "Binance Smart Chain",
      nodeHeight: "42,324,323",
      status: "pending",
      endPoints: [
        { type: "rpc", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "wss", url: "https://rpc.solidhash.io/3igJuxZeKG " },
        { type: "archive", url: "https://rpc.solidhash.io/3igJuxZeKG " },
      ],
      request: "12B",
      time: "30d",
    },
  ];
  return (
    <div className={styles.mainWrapper}>
      <div className={[styles.wrapper, "wrapper"].join(" ")}>
        <div className={styles.inveTitle}>
          <div className={styles.iconContainer}>
            <img src={networkNode} alt="#" />
          </div>
          <b>Inventory of Requests</b>
        </div>
        <div className={styles.nodesContainer}>
          {data.map((el, i) => (
            <SingleNodes {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworksNodes;
