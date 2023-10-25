import ArticlesCard from "../../global/articlesCard/ArticlesCard";
import Image from "next/image";
import info from "../../../assets/info.png";
import topFran from "../../../assets/2023-Award-Graphics-RGB-WEB.jpg";
import lowCost from "../../../assets/[WEB]2023-Award-Graphics-RGB_Top_Low-Cost_Franchise_Award.jpg";
import inc from "../../../assets/Inc_ 5000 Black Stacked Medallion Logo(1).png";
import ContentCard from "../../global/content/ContentCard";
import styles from "./company.module.scss";
import Pagination from "../../global/pagination/Pagination";

const Company = () => {
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
  ];

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

  return (
    <section id={styles.press}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.press} d-flex gap-4`}>
          <div className={`${styles.press_left}`}>
            <h2>Meet the We Sell Restaurants Team</h2>
            <div className={`${styles.press_left_para}`}>
              <p>
                We Sell Restaurants is the nation’s largest business broker
                franchise focused exclusively on the sale of restaurants. With
                20 years of experience, we have helped buy, sell and lease more
                hospitality locations nationwide than any other brand. We Sell
                Restaurants has carved an unparalleled niche in the industry as
                the nation's leading and only business broker franchise focused
                on restaurants. Formed over two decades ago, We Sell Restaurants
                is a vibrant and innovative company that operates in 45 states
                nationwide and delivers on the founder's vision to Sell More
                Restaurants Than Anyone Else. PERIOD. Our team achieves that
                mission by sharing a common set of core values that include:
              </p>
              <ul className={styles.press_left_para_ul}>
                <li>
                  We know that Every Day is Game Day and We Act
                  Accordingly&nbsp;
                </li>
                <li>
                  We Treat Each Other, Our Clients and Internal Clients by the
                  Golden Rule
                </li>
                <li>
                  We Act with Integrity and Only Make Agreements We Are Willing
                  and Able to Keep&nbsp;
                </li>
                <li>
                  We Are the Brand and are Passionate about Sales Results&nbsp;
                </li>
                <li>
                  We Create a Customer Service Experience Worth Sharing&nbsp;
                </li>
              </ul>

              <p>
                With top-flight experience crafted over decades of selling
                restaurants, along with previous expertise working in small
                businesses and in senior leadership roles for a Big 5 Accounting
                firm and a major Fortune 100 company, We Sell Restaurants
                leadership has deep financial, branding and marketing experience
                in restaurants, and small and big business. This collective
                experience allowed them to take the fragmented brokerage market
                and build a specialized practice for selling only restaurants
                with a systemic approach never before seen in the industry.<br /> <br /> We
                Sell Restaurants has recruited an experienced leadership team
                with experience spanning decades in business brokerage,
                franchise sales and customer service and operations.
              </p>
            </div>
            <div className={`${styles.press_left_down}`}>
              <h2>Meet the We Sell Restaurants Team</h2>
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
                        videoUrl={null}
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
                    <Image src={topFran} alt="image not found" />
                    <br />
                    <Image src={lowCost} alt="image not found" />
                    <br />
                    <Image src={inc} alt="image not found" />
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

export default Company;
