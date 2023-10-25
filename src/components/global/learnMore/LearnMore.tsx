import styles from "./learnMore.module.scss";

const LearnMore = () => {
  return (
    <div className={styles.learnMore}>
      <h2>LEARN MORE</h2>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Customer Reviews</a>
        </li>
        <li>
          <a href="#">Certified Pre-Owned</a>
        </li>
        <li>
          <a href="#">Buying a Restaurant</a>
        </li>
      </ul>
    </div>
  );
};

export default LearnMore;
