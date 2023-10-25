import ArticlesCard from "../global/articlesCard/ArticlesCard";
import Image from "next/image";
import info from "../../assets/info.png";
import topFran from "../../assets/2023-Award-Graphics-RGB-WEB.jpg";
import lowCost from "../../assets/[WEB]2023-Award-Graphics-RGB_Top_Low-Cost_Franchise_Award.jpg";
import inc from "../../assets/Inc_ 5000 Black Stacked Medallion Logo(1).png";
import ContentCard from "../global/content/ContentCard";
import styles from "./forFranchisor.module.scss";
import Pagination from "../global/pagination/Pagination";
import QuickInfo from "../global/quickInfo/QuickInfo";
import topic from "../../assets/increase net restaurant growthheader image.png";
import BrokerArtCard from "../global/brokerArtCard/BrokerArtCard";
import wesold from "../../assets/Brands We Have Sold(1).png";
import Link from "next/link";

const ForFranchisor = () => {
  const dummyDataCard = [
    {
      imgSrc:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      altText: "Article 1 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "PALM COAST, Fla., March 28, 2023 /PRNewswire/ -- We Sell Restaurants, the nation's leading and only business broker franchise focused on restaurants, plans to add 10 franchisees in 2023 by targeting..",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      altText: "Article 2 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "PALM COAST, Fla., March 28, 2023 /PRNewswire/ -- We Sell Restaurants, the nation's leading and only business broker franchise focused on restaurants, plans to add 10 franchisees in 2023 by targeting..",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      altText: "Article 3 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "PALM COAST, Fla., March 28, 2023 /PRNewswire/ -- We Sell Restaurants, the nation's leading and only business broker franchise focused on restaurants, plans to add 10 franchisees in 2023 by targeting..",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      altText: "Article 4 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "PALM COAST, Fla., March 28, 2023 /PRNewswire/ -- We Sell Restaurants, the nation's leading and only business broker franchise focused on restaurants, plans to add 10 franchisees in 2023 by targeting..",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      altText: "Article 5 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "PALM COAST, Fla., March 28, 2023 /PRNewswire/ -- We Sell Restaurants, the nation's leading and only business broker franchise focused on restaurants, plans to add 10 franchisees in 2023 by targeting..",
    },
    {
      videoUrl:
        "https://www.wesellrestaurants.com/public/uploads/blogcat/8545f44372462c40f95b39831e8b07e6.mp4",
      altText: "Article 5 Image",
      description:
        "We Sell Restaurants moves to new office space in Palm Coast",
      para: "Provide An Exit Strategy t-risk franchise locations about ait strategy through resales. No need to stand idle while a unit fails when a structured resale process can save the unit and help franchisees exit smoothly. ",
    },
  ];

  const quickInfoData = {
    heading: "We Sell Restaurants Core Values:",
    lists: [
      "We Know That Every Day is Game Day, and We A.C.T. Accordinginly",
      "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
      "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
      // "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
    ],
  };

  const dummyData = [
    {
      title: "We Sell Restaurants Opens Franchise in Tallahassee, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Miami, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Orlando, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Tampa, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Jacksonville, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Gainesville, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Fort Lauderdale, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in West Palm Beach, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Naples, Florida",
      href: "#",
    },
    {
      title: "We Sell Restaurants Opens Franchise in Pensacola, Florida",
      href: "#",
    },
  ];

  const artData = [
    {
      imgUrl:
        "https://www.wesellrestaurants.com/ckfinder/userfiles/images/1(3).png",
      para: "Transfer Units Painlessly - Franchise resales present a strong opportunity to replace disengaged or underperforming franchisees with motivated buyers who want to grow their business. As franchise agreements expire and your franchsiees retire, your brand will need new candidates to take over units. It is important to remember that the franchise resale candidate is not the same as your initial new franchise candidate. These are two different leads altogether, and the marketing your brand used to attract new franchisees will not attract the resale candidate. Resale candidates are less willing to take on risk and are more interested in the financial performance. As resale specialists, We Sell Restaurants understands how to attract the resale candidate. We develop a package of information on the franchise resale detailing the items that resale candidates care most about: the restaurant's historical financial performance.",
    },
    {
      imgUrl:
        "https://www.wesellrestaurants.com/ckfinder/userfiles/images/new%20units.png",
      para: "Empower New Unit Growth - Your development team might be dynamite and selling new units every day. However, if you have existing units closing their doors, then your net restaurant growth will suffer. While We Sell Restaurants handles the transfer of resale units to new franchise candidates, your development team can focus on new unit growth. Similarly, your marketing team can focus on marketing to new franchise candidates while we attract the resale candidates. Franchise resale candidates also present an upsell opportunity for your brand development. These new franchisees may decide to buy more than one franchsie resale, or become interested acquiring a new unit. Ultimately, a resale program keeps your existing units open and allows your team to focus on opening new units. The result? Net restaurant growth.",
    },
    {
      imgUrl:
        "https://www.wesellrestaurants.com/ckfinder/userfiles/images/exit%20strategy(1).png",
      para: "Provide An Exit Strategy - Another important piece of net restaurant growth is preventing closures. A resale program offers an attractive selling point for franchisees in providing an exit strategy. Any number of life changes or events could affect a franchisee's ability to keep a store, including death, divorce, or life-altering events. For the franchisee who can no longer hold onto a store, there is piece of mind when the franchisor can refer an expert to assist the franchisee in exiting the business. A formalized program with an expert like We Sell Restaurants also prevents closures by educating at-risk franchise locations about an exit strategy through resales. No need to stand idle while a unit fails when a structured resale process can save the unit and help franchisees exit smoothly. ",
    },
  ];

  return (
    <section id={styles.press}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.press} d-flex gap-4`}>
          <div className={`${styles.press_left}`}>
            <h2>We Sell Restaurants Franchise Resale Program</h2>
            <div className={`${styles.press_left_para}`}>
              <div className={styles.press_left_para_img}>
                <Image src={topic} alt="image not found" />
              </div>
              <div className={styles.press_left_para_broker_art}>
                {artData?.map((item, index) => (
                  <BrokerArtCard key={index} data={item} />
                ))}
              </div>
              <br />
              <br />
              <br />
              <div className={styles.telling}>
                <h5>
                  Brands Turn to We Sell Restaurants to Take Away Resale Pain
                </h5>
                <br />
                <p>
                  With 20+ years of experience in restaurant brokerage, We Sell
                  Restaurants is the nation's leading and only business broker
                  franchise focused on restaurants. We operate in 45 states,
                  selling more restaurants than anyone else—period! Our
                  proprietary process works to sell restaurants for the most
                  money in the shortest time. From conducting valuations to
                  dealing with landlords, restaurant brands trust We Sell
                  Restaurants to handle the stress associated with transfers and
                  resales. Our process allows your develpoment team to focus on
                  new candidates and overall brand growth.
                </p>
              </div>

              <div className={styles.telling}>
                <h5>No Contracts, Just Relationships</h5>
                <p>
                  No need to sign long-term contracts for our restaurant
                  brokerage services. Instead, simply refer your resales and
                  transfers when the time is right and allow us to create a
                  smooth, positive transfer experience. Our restaurant brokerage
                  experience is at-the-ready for your units that need to sell.
                </p>
              </div>

              <div className={styles.telling}>
                <h5>Our Brand Relationships</h5>
                <p>
                  From pizza, to ice cream, and more—We Sell Restaurants has
                  partnered with franchisors across the country to provide them
                  a structured resale program that will bolster their brand's
                  net restaurant growth.
                </p>
              </div>

              <div className={styles.press_left_para_img}>
                <Image
                  style={{ width: "75%", height: "75%" }}
                  src={wesold}
                  alt="image not found"
                />
              </div>

              <div className={styles.telling}>
                <h5>The Franchise Resale Process</h5>
                <p>
                  We Sell Restaurants outlines a 10-Step process and will walk
                  your franchisees all the way from performing valuations to
                  closing the deal.
                  <br /> <br />
                  <ol>
                    <li>
                      Pull Data - Pull key items together including two years of
                      tax returns, most recent P&L, POS reports, and more.
                    </li>
                    <li>
                      Review Data - Read materials from Step 1 as if you are a
                      buyer seeing them for the first time. Do your numbers
                      match and make sense?
                    </li>
                    <li>
                      Brainstorm - Think of ways that a new buyer could improve
                      your business. Whether you sell or not, this step should
                      identify areas for improvement.
                    </li>
                    <li>
                      Valuate - Restaurant valuation is a math problem with a
                      right and wrong answer. Take time to understand the
                      valuation process.
                    </li>
                    <li>
                      Hire - interview restaurant brokers to find who can sell
                      your restaurant for the most money in shortest time.
                    </li>
                    <li>
                      Market - Attract buyers to your business with
                      confidentiality, and qualify buyers before revealing
                      details.
                    </li>
                    <li>
                      Offer - After you receive a written offer and escrow
                      check, review, counter, and make sure you know who is
                      responsible for closing tasks.
                    </li>
                    <li>
                      Due Diligence - This is where buyers will dig into
                      everything about your business. A strong restaurant broker
                      will control this process and act as the conduit for info.
                    </li>
                    <li>
                      Approvals - After accepting an offer and completing Due
                      Diligence, the buyer will need to be approved by the
                      franchise brand.
                    </li>
                    <li>
                      Closing - Participate in weekly calls with the restaurant
                      broker and buyer and close the deal!
                    </li>
                  </ol>
                </p>
              </div>

              <div className={styles.telling}>
                <h5>Get Started</h5>
                <p>
                  Establish a formalized franchise resale program through We
                  Sell Restaurants to support your brand's overall growth today.
                </p>
              </div>

              <div className={styles.telling}>
                <h5>Contact</h5>
                <p style={{ marginBottom: "0px" }}>Brent Greenwood, CFE,</p>
                <p style={{ marginBottom: "0px" }}>
                  Director of Franchise Development
                </p>
                <p style={{ marginBottom: "0px" }}>(904) 790-3179</p>
                <p style={{ marginBottom: "0px" }}>
                  Brent@wesellrestaurants.com
                </p>
                <p style={{ marginBottom: "0px" }}>
                  <Link href={"#"}>Schedule a Call with Brent</Link>
                </p>
              </div>
            </div>
            <div className={`${styles.press_left_down}`}>
              <h2>We Sell Restaurants Franchise Resale Program</h2>
              <div className={`${styles.press_filter}`}>
                <select name="sfilter" className="">
                  <option value="">Filters</option>
                  <option value="1">Franchise</option>
                  <option value="2">Price Reduced</option>
                  <option value="3">Limited Hours</option>
                  <option value="4">E2 Visa Qualified</option>
                  <option value="5">SBA Loans Available</option>
                  <option value="6">Real Estate Available</option>
                  <option value="7">Owner Financing</option>
                  <option value="8">Beer/Wine or Liquor License</option>
                  <option value="9">Certified Pre-Owned</option>
                </select>
                <button>SORT</button>
              </div>
              <div className={`${styles.press_cards}`}>
                <div className={`${styles.press_show_cards} d-flex`}>
                  {dummyDataCard?.map((item, i) => (
                    <li key={i}>
                      <ArticlesCard
                        imgSrc={item.imgSrc}
                        altText={item.altText}
                        description={item.description}
                        para={item.para}
                        videoUrl={item.videoUrl}
                      />
                    </li>
                  ))}
                </div>
                <div className={`${styles.press_pagination}`}>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.press_right}`}>
            <div className={styles.press_right_wrapper}>
              {/* <QuickInfo infoData={quickInfoData} /> */}
              <div className={`${styles.quick_info}`}>
                <div className={`${styles.quickInfo}`}>
                  <div
                    className={`${styles.quickInfo_top} d-flex align-items-center`}
                  >
                    <div className={`${styles.quickInfo_img}`}>
                      <Image src={info} alt="pic not found" />
                    </div>
                    <h2>Quick Info:</h2>
                  </div>
                  <div className={`${styles.quickInfo_bottom}`}>
                    <h5 className={styles.quickInfo_bottom_heading}>
                      Up to 10% of Brand Units Turn Over Each Year Due To:
                    </h5>
                    <div className={styles.quickInfo_bottom_lists}>
                      <ul>
                        <li>Retirement</li>
                        <li>Life Changes</li>
                        <li>Partnership Disputes</li>
                        <li>Divorce</li>
                        <li>Death</li>
                        <li>Franchise Renewals</li>
                        <li>And More</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.content}`}>
                <ContentCard data={dummyData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFranchisor;
