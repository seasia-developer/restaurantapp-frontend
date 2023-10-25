import Link from "next/link";
import style from "./franchise.module.scss";
// import { Phone } from "@/assets/icons";
import transaction1 from "@/assets/transaction1.png";
import transaction2 from "@/assets/transaction2.png";
import transaction3 from "@/assets/transaction3.png";
import restuarantBit from "@/assets/restuarant-bit.png";
import quotesRight from "@/assets/right-arrow.png";
import quoutsLeft from "@/assets/left-arrow.png";
import constOne from "@/assets/cost-1.png";
import constTwo from "@/assets/cost-2.png";
import constThree from "@/assets/cost-3.png";
import candidateRight from "@/assets/candidate-right.jpg";
import fork from "@/assets/spoonTranparent.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={style.wsrFranchise}>
        <div className="container">
          <div className="row align-items-center  justify-content-between">
            <div className="col-lg-6">
              <img
                src="https://www.wesellrestaurants.com/franchise/images/specialized.png"
                alt="image"
                className={`img-fluid ${style.wsrSpecialImg}`}
              />
              <h2 className="text-white text-uppercase text-center mb-0">
                BUSINESS <br /> BROKER <br /> FRANCHISE
              </h2>
              <div className="d-flex flex-wrap justify-content-end">
                <img
                  src="https://www.wesellrestaurants.com/franchise/images/fr.png"
                  alt="image"
                  className={`img-fluid ${style.wsrSpecialImg}`}
                />
              </div>
            </div>
            <div className="col-lg-5 py-5">
              <div className={`p-3 ${style.wsrFranchiseForm}`}>
                <p className="text-white text-center text-bold">
                  Request Franchise Information
                </p>
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Phone number</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputPassword4"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">
                      Franchise Territory Requested
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">
                      Tell us a little about yourself...
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="d-flex align-items-center justify-content-end py-4">
                    <button
                      type="submit"
                      className={`btn px-4 px-2 ${style.submitBtn}`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={`py-2 ${style.wsrFranchiseBottom}`}>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <p className="font-weight-bold mt-0 mb-0 px-5">
                For more franchise info, call:
              </p>
              <Link
                href="#"
                className="text-red wsrf-bannerphone font-weight-bold d-inline-block px-5"
              >
                 404-800-6700
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-5 ${style.wsrTransactions}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center mb-3 mb-lg-5">
              <div
                className={`mx-auto d-flex align-items-center justify-content-center flex-wrap ${style.transactionLogo}`}
              >
                <Image src={transaction1} alt="img"></Image>
              </div>
              <h2 className="text-dblack mt-3 mb-3">Gross Commission Income</h2>
              <h4 className={style.middlePrize}>$350,912</h4>
            </div>
            <div className="col-lg-4 text-center mb-3 mb-lg-5">
              <div
                className={`mx-auto d-flex align-items-center justify-content-center flex-wrap ${style.transactionLogo}`}
              >
                <Image src={transaction2} alt="img"></Image>
              </div>
              <h2 className="text-dblack mt-3 mb-3">Transactions</h2>
              <h4 className={style.middlePrize}>14</h4>
            </div>
            <div className="col-lg-4 text-center mb-3 mb-lg-5">
              <div
                className={`mx-auto d-flex align-items-center justify-content-center flex-wrap ${style.transactionLogo}`}
              >
                <Image src={transaction3} alt="img"></Image>
              </div>
              <h2 className="text-dblack mt-3 mb-3">Average per Transaction</h2>
              <h4 className={style.middlePrize}>$24,539</h4>
            </div>
          </div>
          <p className={`text-center mb-0 ${style.transactionText}`}>
            This is a historical representation of what our franchisees have
            earned as described further in Item 19 of the FDD. This information
            is based upon franchises that were open during the entire 2022
            calendar year and provided complete information. Your results may
            differ. There is no assurance that you will sell or earn as much.
            See Item 19 of the FDD for more information.
          </p>
        </div>
      </div> 

      <div className={`${style.whyUs}`}>
        <div className="container">
          <div className={`position-relative ${style.mainheading}`}>
            <h2 className="text-white text-uppercase position-relative font-weight-bold text-center">
              WHY US?
            </h2>
          </div>
          <div className="row">
            <div
              className={`col-lg-4 text-center position-relative ${style.WhyUseDetail}`}
            >
              <Image
                src={restuarantBit}
                alt="img"
                className="img-fluid position-absolute"
                width="170"
                height="66"
              ></Image>
              <h2 className="text-uppercase text-center text-white font-weight-bold mb-4">
                BUSINESS BROKER <br /> FRANCHISE
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
            <div
              className={`col-lg-4 text-center position-relative ${style.WhyUseDetail}`}
            >
              <h2 className="text-uppercase text-center text-white font-weight-bold mb-4">
                WHAT IS <br /> WE SELL RESTAURANTS?
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
            <div
              className={`col-lg-4 text-center position-relative ${style.WhyUseDetail}`}
            >
              <h2 className="text-uppercase text-center text-white font-weight-bold mb-4">
                PATH TO OWNERSHIP
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.wsrMission}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={`p-4 mb-4 bg-white ${style.missionLeft}`}>
                <h4
                  className={`font-weight-bold text-uppercase m-0 ${style.wsrSubHead}`}
                >
                  Our
                </h4>
                <div
                  className={`text-uppercase position-relative font-weight-bold ${style.wsrMainHead}`}
                >
                  <h2 className="text-uppercase position-relative font-weight-bold">
                    MISSION
                  </h2>
                </div>
                <p>Sell More Restaurants than Anyone Else. PERIOD.</p>
                <video width="100%" controls>
                  <source />
                </video>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`mb-4 ${style.missionRight}`}>
                <h4 className="m-0 font-weight-bold text-uppercase">LEARN</h4>
                <div
                  className={`text-uppercase position-relative font-weight-bold mb-4 ${style.mainheading}`}
                >
                  <h2>
                    WHY RESTAURANT <br /> BROKERAGE IS <br /> EXPLODING
                  </h2>
                </div>
                <div className={`position-relative ${style.exploadingquotes}`}>
                  <Image src={quoutsLeft} alt="img"></Image>
                  <p>
                    Record numbers of Americans searching for a small business
                    combined with a hunger for all things “foodie” are creating
                    a perfect storm of demand.
                  </p>
                  <Image
                    src={quotesRight}
                    alt="img"
                    className={style.quoteRight}
                  ></Image>
                </div>
                <div className="text-center">
                  <Link
                    href="#"
                    className={`bg-black text-uppercase d-inline-block text-white ${style.wsrBtnEbook}`}
                  >
                    REQUEST OUR E-BOOK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.whyUs}`}>
        <div className="container">
          <div className={`row ${style.wsrConstRow}`}>
            <div className={`col-md-4 text-center position-relative`}>
              <Image
                src={constOne}
                alt="constOne"
                className={`img-fluid mx-auto ${style.wsrCostImg}`}
              ></Image>
              <h2 className="text-uppercase text-center text-white font-weight-bold my-5">
                WHAT CAN I MAKE?
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
            <div className={`col-md-4 text-center`}>
              <Image
                src={constTwo}
                alt="constOne"
                className={`img-fluid mx-auto ${style.wsrCostImg}`}
              ></Image>
              <h2 className="text-uppercase text-center text-white font-weight-bold my-5">
                WHAT ARE MY COSTS?
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
            <div className={`col-md-4 text-center`}>
              <Image
                src={constThree}
                alt="constOne"
                className={`img-fluid mx-auto ${style.wsrCostImg}`}
              ></Image>
              <h2 className="text-uppercase text-center text-white font-weight-bold my-5">
                IS IT FOR ME?
              </h2>
              <Link href="#" className={` ${style.wsrBtn}`}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.candidates}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-end mb-4">
                <div
                  className={`text-right text-uppercase ${style.wsrCandidateText}`}
                >
                  DESIRE TO SUCCEED
                </div>
                <div className={style.wsrCandidateSpoon}>
                  <Image src={fork} alt="fork"></Image>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end mb-4">
                <div
                  className={`text-right text-uppercase ${style.wsrCandidateText}`}
                >
                  ENTREPRENEURIAL SPIRIT
                </div>
                <div className={style.wsrCandidateSpoon}>
                  <Image src={fork} alt="fork"></Image>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end mb-4">
                <div
                  className={`text-right text-uppercase ${style.wsrCandidateText}`}
                >
                  CUSTOMER DRIVEN
                </div>
                <div className={style.wsrCandidateSpoon}>
                  <Image src={fork} alt="fork"></Image>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end mb-4">
                <div
                  className={`text-right text-uppercase ${style.wsrCandidateText}`}
                >
                  PASSIONATE ABOUT RESTAURANTS
                </div>
                <div className={style.wsrCandidateSpoon}>
                  <Image src={fork} alt="fork"></Image>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`bg-white p-4 ${style.CnadidateLeft}`}>
                <h4 className={`${style.wsrCandidateSubHead}`}>IDEAL</h4>
                <div className={`${style.wsrCandidateMainHead}`}>
                  <h2>CANDIDATES</h2>
                </div>
                  <Image src={candidateRight} alt="CandidateImage" className="img-fluid mt-4"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
