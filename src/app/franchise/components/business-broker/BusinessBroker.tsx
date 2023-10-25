import React from "react";
import style from "./business.module.scss";
import Image from "next/image";
import restaurantImg from "@/assets/business-brokerbanner.png";
import businessImg from "@/assets/business-image.png";
import businessMobile from "@/assets/business-mobile.png";

export default function BusinessBroker() {
  return (
    <div className={style.business}>
      <div className={`bg-white pt-4 pb-4 ${style.head}`}>
        <div className="container">
          <h2 className="m-0 text-center">
            The Booming Business Broker Industry
          </h2>
        </div>
      </div>

      <div className={style.restuarantsSaleImage}>
        <Image
          src={restaurantImg}
          alt="restuarantsSaleImage"
          className="img-fluid w-100"
        />
      </div>

      <div className={`pt-5 pb-5 ${style.RestaurantMain}`}>
        <div className="container">
          <h4 className="mt-0 mb-5 text-center">
            The business broker industry is forecasted to increase to $1.4
            billion in 2022
          </h4>
          <div className={`bg-white ${style.RestaurantInner}`}>
            <div className="row">
              <div className={`col-md-6 ${style.leftContent}`}>
                <p>
                  According to IBIS World there are 3,593 business brokerage
                  firms in the U.S. and 11,411 Business Broker individuals.
                  Business Brokers may work as an agent for an existing multi-
                  broker office or may choose to start their own business
                  brokerage practice, whether on their own or as part of a
                  franchise system.
                </p>
                <p>
                  According to IBIS World, business brokerage industry revenue
                  is forecasted to increase to $1.4 billion in 2022. The demand
                  for business brokerage services is primarily derived from the
                  number of people looking to sell businesses. Specifically, as
                  a greater number of aging business owners approach retirement,
                  there is an anticipated demand influx on the horizon.
                </p>
              </div>
              <div className={`col-md-6 ${style.rightContent}`}>
                <p>
                  According to the U.S. Census Bureau, Baby Boomers own 2.34
                  million small businesses in the United States.
                </p>
                <p>
                  Retirement as the number one reason business owners are
                  considering an exit across all sectors. Other Reasons include:
                  current tax regulations , Small Business Administration (SBA)
                  financing programs, stock market performance, workforce
                  availability (of employees), job availability (i.e.,
                  alternatives for buyers), overall economic performance.
                </p>
                <p>
                  A real estate license is a requirement of the We Sell
                  Restaurants brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`py-3 ${style.bTitle}`}>
        <div className="container">
            <h2 className="text-white text-center m-0">A DAY IN THE LIFE OF A BUSINESS BROKER</h2>
        </div>
      </div>

      <div className={`pt-5 ${style.transparentbg}`}>
        <div className="container">
            <div className="text-center">
                <Image src={businessImg} alt="business" className={`img-fluid ${style.display}`}></Image>
                <Image src={businessMobile} alt="business" className={`img-fluid ${style.mobileDisplay}`}></Image>
            </div>
        </div>
      </div>
    </div>
  );
}
