import styles from "./radioLibraryCards.module.scss";

const RadioLibraryCards = ({ imageUrl, name, title, description }:any) => {
  return (
    <div className={`${styles.radioLibraryCards} d-flex gap-4`}>
      <div className={styles.radioLibraryCards_lefts_father}>
        <div className={`${styles.radioLibraryCards_left}`}>
          <div className={`${styles.rld_img_wrapper}`}>
            <div className={`${styles.rld_img}`}>
              <img src={imageUrl} alt="image not found" />
            </div>
            <p>{name}</p>
          </div>
        </div>
      </div>

      <div className={`${styles.radioLibraryCards_right}`}>
        <h5>{title}</h5>
        <p>
          {description}
          <a href="#">[Show Page]</a>
        </p>
      </div>
    </div>
  );
};

export default RadioLibraryCards;
