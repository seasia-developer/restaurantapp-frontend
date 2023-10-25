import style from "./sortModal.module.scss";

const SortModal = ({ handleClose, show }: any) => {
  console.log(
    handleClose,
    show,
    "checking handleClose and show in Modal component"
  );

  const showHideClassName = show
    ? `${style.modal_overlay} ${style.show}`
    : `${style.modal_overlay}`;

  const handleSort = (a:any, b:any) => {};

  return (
    <div className={showHideClassName}>
      <section className={style.modal_main}>
        <ul>
          <li>
            Earnings
            <div className={style.arrows}>
              <span
                className={style.upArrow}
                onClick={() => handleSort("earnings", "asc")}
              >
                &#x25B2;
              </span>
              <span onClick={() => handleSort("earnings", "desc")}>
                &#x25BC;
              </span>
            </div>
          </li>
          <li>
            Price Point
            <div className={style.arrows}>
              <span
                className={style.upArrow}
                onClick={() => handleSort("earnings", "asc")}
              >
                &#x25B2;
              </span>
              <span onClick={() => handleSort("earnings", "desc")}>
                &#x25BC;
              </span>
            </div>
          </li>
          <li>
            Listing #
            <div className={style.arrows}>
              <span
                className={style.upArrow}
                onClick={() => handleSort("earnings", "asc")}
              >
                &#x25B2;
              </span>
              <span onClick={() => handleSort("earnings", "desc")}>
                &#x25BC;
              </span>
            </div>
          </li>
        </ul>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default SortModal;
