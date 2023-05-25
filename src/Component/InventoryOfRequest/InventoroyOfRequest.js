import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./InventoryOfRequest.module.css";
import { inventory, copy } from "../../images/image";

const InventoroyOfRequest = () => {
  const data = [
    {
      apiKey: "29109310991-93123",
      totalRequest: 6841,
      date: "Mar 22, 2022  09:10",
      status: "Status",
      viewKey: "/",
    },
    {
      apiKey: "29109310991-93123",
      totalRequest: 6841,
      date: "Mar 22, 2022  09:10",
      status: "Status",
      viewKey: "/",
    },
    {
      apiKey: "29109310991-93123",
      totalRequest: 6841,
      date: "Mar 22, 2022  09:10",
      status: "Status",
      viewKey: "/",
    },
  ];
  return (
    <div className={[styles.wrapper, "wrapper"].join(" ")}>
      {" "}
      <div className={styles.inveTitle}>
        <div className={styles.iconContainer}>
          <img src={inventory} alt="#" />
        </div>
        <b>Inventory of Requests</b>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.headingContainer}>
              <th className={styles.heading}>Order</th>
              <th className={styles.heading}>api key</th>
              <th className={styles.heading}>Total Requests</th>
              <th className={styles.heading}>Generated on</th>
              <th className={styles.heading}>Status</th>
              <th className={styles.heading}>View KEY</th>
            </tr>
            {data.map((el, index) => (
              <tr className={styles.row} key={index}>
                <td className={styles.item}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </td>
                <td className={styles.item}>
                  <CopyToClipboard text={el.apiKey}>
                    <div className={styles.apiKey}>
                      {el.apiKey}{" "}
                      <img src={copy} alt="#" className={styles.copyIcon} />
                    </div>
                  </CopyToClipboard>
                </td>
                <td className={styles.item}>{el.totalRequest}</td>
                <td className={styles.item}>{el.date}</td>
                <td className={styles.item}>
                  <span className={styles.status}> {el.status}</span>
                </td>
                <td className={styles.item}>
                  <button className={styles.viewButton}>View Key</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoroyOfRequest;
