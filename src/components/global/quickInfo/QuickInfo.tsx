import Image from "next/image";
import info from "../../../assets/info.png";
import styles from "./quickInfo.module.scss";

const QuickInfo = ({ infoData, heading }:any) => {

  return (
    <div className={`${styles.quick_info}`}>
      <div className={`${styles.quickInfo}`}>
        <div className={`${styles.quickInfo_top} d-flex align-items-center`}>
          <div className={`${styles.quickInfo_img}`}>
            <Image src={info} alt="pic not found" />
          </div>
          <h2>Quick Info:</h2>
        </div>
        <div className={`${styles.quickInfo_bottom}`}>
          <h5 className={styles.quickInfo_bottom_heading}>
            {heading}
          </h5>
          <div className={styles.quickInfo_bottom_lists}>
            
            {infoData?.lists?.map((item:any, index:any) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
