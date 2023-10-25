import React from "react";
import styles from "./articlesCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ArticlesCardProps {
  imgSrc: any;
  altText: string;
  description: string;
  para: string;
  videoUrl: any;
}

const ArticlesCard: React.FC<ArticlesCardProps> = ({
  imgSrc,
  altText,
  description,
  para,
  videoUrl,
}) => {
  return (
    <div className={`${styles.articleCard}`}>
      <div
        className={`${styles.articleCardItems} ${styles.articleCardItems_img} `}
      >
        {imgSrc === undefined ? (
          <>
            <video
              style={{ width: "100%", height: "100%" }}
              src={videoUrl}
              controls
            />
          </>
        ) : (
          <>
            <img src={imgSrc} alt={altText} />
            <div className={`${styles.articleFilterSec_img_overlay}`}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </>
        )}
      </div>
      <div
        className={`${styles.articleCardItems} ${styles.articleCardItems_desc}`}
      >
        {description}
      </div>
      <div
        className={`${styles.articleCardItems} ${styles.articleCardItems_loca}`}
      >
        {para}
      </div>
      <div
        className={`${styles.articleCardItems} ${styles.articleCardItems_price}`}
      >
        <button>
          <a href="#">See More</a>
        </button>
      </div>
    </div>
  );
};

export default ArticlesCard;
