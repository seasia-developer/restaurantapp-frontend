import ContentTitleCard from "./ContentTitleCard";
import styles from "./contentCard.module.scss";

const ContentCard = ({ data, heading, blogGuide, blogChecklist }:any) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_top}>
        <h3>CONTENTS</h3>
        <h5>{heading}</h5>
      </div>
      <div className={styles.content_bottom}>
        {data?.map((item:any, i:any) => (
          <li key={i}>
            <ContentTitleCard {...item} />
          </li>
        ))}
        <div className={styles.content_bottom_button}>
          <a href="#">Contact Us</a>
          <a href={blogGuide}>Download the Guide</a>
          <a href={blogChecklist}>Download the Checklist</a>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
