"use client"
import { Spinner } from "react-bootstrap";
import styles from "./wsrSpinner.module.scss"

const WsrSpinner = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.loadingSpinner}>
        <Spinner
          style={{
            width: "64px",
            height: "64px",
            color: "var(--red-color)",
          }}
        />
      </div>
    </div>
  );
};

export default WsrSpinner;
