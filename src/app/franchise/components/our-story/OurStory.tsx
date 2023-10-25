import React from "react";
import style from "./ourStory.module.scss";
import Image from "next/image";
import Link from "next/link";
import quotesRight from "@/assets/right-arrow.png";
import quoutsLeft from "@/assets/left-arrow.png";
import like from "@/assets/like.png";
import spoon from "@/assets/white-spoon.png";
import start from "@/assets/white-star.png";
import home from "@/assets/home.png";
import air from "@/assets/air.png";
import storyBook from "@/assets/story-book.png";
import storyUser from "@/assets/story-user.png";

export default function OurStory() {
  const Data = {
    ImgList: [
      {
        img: like,
      },
      {
        img: spoon,
      },
      {
        img: start,
      },
      {
        img: home,
      },
      {
        img: start,
      },
      {
        img: air,
      },
      {
        img: storyBook,
      },
      {
        img: storyUser,
      },
      {
        img: air,
      },
      {
        img: start,
      },
    ],
    titles: [
      { title: "2004" },
      { title: "2005" },
      { title: "2007" },
      { title: "2010" },
      { title: "2011" },
      { title: "2011" },
      { title: "2012" },
      { title: "2013" },
      { title: "2014" },
      { title: "2014" },
    ],
    paragraph: [
      {
        text: "We Sell Restaurants® begins offering restaurant brokerage services and the words and mark are first used in commerce.",
      },
      {
        text: "Company launches innovative certification of Restaurant Brokers leading to a trademark for the term “Certified Restaurant Broker”.",
      },
      {
        text: "We Sell Restaurants hits 100 listings for the first time establishing dominance in the brokerage industry.",
      },
      {
        text: "We Sell Restaurants purchases national headquarters for the growing brand in Atlanta, Georgia.",
      },
      {
        text: "We Sell Restaurants begins offering franchises for the first time and sells the entire state of Colorado. This opens the door for the launch of the brand nationwide.",
      },
      {
        text: "We Sell Restaurants launches the BOSS or Broker’s Operations and Sales System, a proprietary cloud based platform for restaurant brokerage sales and management.",
      },
      {
        text: "Founders Eric and Robin Gagnon publish their book, Appetite for Acquisition which is immediately named “Best of 2012” by Small Business Book Awards.",
      },
      {
        text: "Nationally syndicated Radio show launches where we “Satisfy Your Appetite for Acquisition, Feed the Need for Restaurant Reality and Serve Up a Recipe for Business Success”.",
      },
      {
        text: "The term “We Sell Restaurants” is issued a principal registration mark by the U.S. Patent and Trademark Office for exclusive use of the words in business brokerage.",
      },
      {
        text: "We Sell Restaurants develops multiple national relationships for franchise resales and expands into 44 states nationwide with brokerage services.",
      },
    ],
  };

  return (
    <div className={style.story}>
      <div className="bg-white pt-4 pb-4">
        <div className="container">
          <h2 className={`m-0 text-center ${style.storyHead}`}>Our Story</h2>
        </div>
      </div>
      <div className={style.wsrMission}>
        <div className="container">
          <div className="row align-items-center d-flex flex-xl-row-reverse py-4">
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
                <h4 className="m-0 font-weight-bold text-uppercase">MEET</h4>
                <div
                  className={`text-uppercase position-relative font-weight-bold mb-4 ${style.mainheading}`}
                >
                  <h2>
                    THE <br /> RESTAURANT <br /> BROKERS
                  </h2>
                </div>
                <div className={`position-relative ${style.exploadingquotes}`}>
                  <Image src={quoutsLeft} alt="img"></Image>
                  <p>
                    We want to keep a brand that will be out here for the next
                    50 to 100 years, resonating with restaurant owners as the
                    place to assist them when they’re ready to buy or sell.
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
                    GET STARTED NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`pt-5 pb-5 ${style.RestaurantMain}`}>
        <div className="container">
          <h4 className="mt-0 mb-5 text-center">
            Demand for Restaurant Industry Experts
          </h4>
          <div className={`bg-white ${style.RestaurantInner}`}>
            <div className="row">
              <div className={`col-md-6 ${style.leftContent}`}>
                <p>
                  Eric and Robin Gagnon were living in Atlanta Georgia when they
                  launched a niche business broker practice based on the premise
                  that the industry needed and required an expert in selling
                  restaurants.
                </p>
                <p>
                  A former Big 5 Accounting Executive, Eric brought financial
                  aptitude in the financial services sector. As VP of Strategic
                  Marketing for a Fortune 100 company, Robin contributed her
                  expertise in branding and marketing. Together, this husband
                  and wife team became the nation's foremost Restaurant Brokers,
                  carving an unparalleled niche in the industry and leading the
                  nation's only business broker franchise focused on
                  restaurants.
                </p>
                <p>
                  From those beginnings, a national brand was born, determined
                  to take the fragmented brokerage market and build a
                  specialized practice for selling only restaurants with a
                  systemic approach never before seen in the industry. The
                  demand for restaurant industry experts has exceeded their
                  original expectations.
                </p>
              </div>
              <div className={`col-md-6 ${style.rightContent}`}>
                <p>
                  When they could no longer keep up with the demand for their
                  services on a centralized basis, they realized that the only
                  way to keep growing was to transfer knowledge and support to
                  other brokers through franchising their successful restaurant
                  industry expertise.
                </p>
                <p>
                  Today We Sell Restaurants is a vibrant and innovative company
                  that operates in 45 states nationwide and delivers on the
                  founder's vision to Sell More Restaurants Than Anyone Else.
                  PERIOD.
                </p>
                <p>
                  We Sell Restaurants is not a startup or overnight success. The
                  pair spent over a decade as the nation’s most trusted
                  restaurant brokerage brand before making the decision to
                  franchise. Their success determined their critical next step,
                  to build a unique nationwide franchise model for selling
                  restaurants based on industry expertise.
                </p>
                <p>
                  We Sell Restaurants has a branded systemic franchise process
                  for buying and selling restaurants that capitalizes on the
                  demand for restaurant industry experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`border-0 pt-5 pb-5 ${style.storydetails}`}>
        <div className="container">
          <div className="row">
            {Data.ImgList.map((ele:any, ind:any) => {
              return (
                <div className="col-md-6" key={ind}>
                  <div className="d-md-flex mb-5">
                    <div
                      className={`d-flex flex-wrap align-items-center justify-content-center ${style.icon}`}
                    >
                      <Image src={ele.img} alt="like" />
                    </div>
                    <div className={`px-4 ${style.storyContent}`}>
                      <h2 className="text-white mb-3">
                        {Data.titles[ind].title}
                      </h2>
                      <p className="text-white mb-0">
                        {Data.paragraph[ind].text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`pt-5 pb-5 pb-0 ${style.today}`}>
        <div className="container">
          <div className={`bg-white ${style.todayInner}`}>
            <h4 className="mt-0 mb-4 text-center">Today</h4>
            <p className="mb-0">
              Customers turn to the restaurant industry experts to sell their
              businesses. Those familiar with the results of We Sell Restaurants
              share their stories and single listings turn into referrals which
              turn into entire franchise brands with ongoing relationships. We
              keep growing to stay true to our original vision - Sell More
              Restaurants than anyone else. PERIOD while training others to be
              restaurant industry experts. Will you join us in our mission?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
