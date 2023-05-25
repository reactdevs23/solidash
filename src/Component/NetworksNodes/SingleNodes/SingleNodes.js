import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./SingleNodes.module.css";
import { copy } from "../../../images/image";
import CopyToClipboard from "react-copy-to-clipboard";
const SingleNodes = ({
  icon,
  name,
  nodeHeight,
  status,
  endPoints,
  request,
  time,
}) => {
  const [currentEndPoint, setCurrentEndPoint] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className={styles.singleNode}>
      <div className={styles.header}>
        <div className={styles.infoContainer}>
          <div
            className={[
              styles.iconContainer,
              status.toLowerCase() === "active" && styles.green,
              status.toLowerCase() === "pending" && styles.red,
            ].join(" ")}
          >
            <img src={icon} alt="#" className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.nodeHeight}>node height: {nodeHeight}</p>
          </div>
        </div>
        <p className={styles.status}> {status}</p>
      </div>

      <div className={styles.urlContainer}>
        <div className={styles.endPointTypeContainer}>
          <div
            className={styles.endPointType}
            onClick={() => {
              setDropDown((prev) => !prev);
            }}
          >
            <span>{endPoints[currentEndPoint].type}</span>{" "}
            <MdOutlineKeyboardArrowDown className={styles.arrow} />
            {dropDown && (
              <div className={styles.dropDowns}>
                {endPoints.map((el, i) => (
                  <p
                    className={styles.dropDownItem}
                    key={i}
                    onClick={() => {
                      setCurrentEndPoint(i);
                      setDropDown((prev) => !prev);
                    }}
                  >
                    {el.type}
                  </p>
                ))}
              </div>
            )}
          </div>
          <p className={styles.url}>
            {endPoints[currentEndPoint].url.substring(0, 32)}...
          </p>
          <CopyToClipboard text={endPoints[currentEndPoint].url}>
            <img src={copy} alt="#" className={styles.copyIcon} />
          </CopyToClipboard>
        </div>
      </div>

      <div className={styles.reqAndTime}>
        <p className={styles.request}>{request} req</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};

export default SingleNodes;
