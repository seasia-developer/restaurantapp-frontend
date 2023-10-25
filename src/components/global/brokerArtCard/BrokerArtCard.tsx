import styles from "./brokerArtCard.module.scss";

const BrokerArtCard = ({data}:any) => {
    const { imgUrl, para } = data;

  return (
    <div className={styles.brokerArtCard}>
      <div className={styles.brokerArtCard_img}>
        <img
          src={imgUrl}
          alt="image not found"
        />
      </div>
      <p>
        {para}
      </p>
    </div>
  );
};

export default BrokerArtCard;
