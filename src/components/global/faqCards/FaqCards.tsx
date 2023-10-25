import styles from "./faqCards.module.scss";

const FaqCards = ({faqData}:any) => {
  return (
    <div className={`${styles.faqCards} d-flex`}>
      <div className={`${styles.faqCards_left} col-lg-4 d-flex justify-content-center align-items-center`}>
        <div className={`${styles.faqCards_qus} d-flex justify-content-center align-items-center`}>
          <div className={`${styles.ques} `}>Q:</div>
          <div className={`${styles.ques_detail} `}>
            {faqData.qus}
          </div>
        </div>
      </div>
      <div className={`${styles.faqCards_right} col-lg-8 d-flex align-items-center`}>
        {faqData.desc}
      </div>
    </div>
  );
};

export default FaqCards;
