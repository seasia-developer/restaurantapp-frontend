import ArticlesCard from "../global/articlesCard/ArticlesCard";
import Image from "next/image";
import info from "../../assets/info.png";
import topFran from "../../assets/2023-Award-Graphics-RGB-WEB.jpg";
import lowCost from "../../assets/[WEB]2023-Award-Graphics-RGB_Top_Low-Cost_Franchise_Award.jpg";
import inc from "../../assets/Inc_ 5000 Black Stacked Medallion Logo(1).png";
import ContentCard from "../global/content/ContentCard";
import styles from "./weSellRestaurantsPress.module.scss";
import Pagination from "../global/pagination/Pagination";

const WeSellRestaurantsPress = () => { 
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
            <h2>We Sell Restaurants Press and News Articles</h2>
            <div className={`${styles.press_left_para}`}>
              <p>
                We Sell Restaurants is the Only All-Restaurant Franchise
                Brokerage nationwide. We have carved an unparalleled niche in
                the industry as the nation's leading and only business broker
                franchise focused on restaurants. Today, We Sell Restaurants is
                a vibrant and innovative company that operates in 45 states
                nationwide and delivers on the founder's vision to Sell More
                Restaurants Than Anyone Else. PERIOD.
                <br /> <br /> We Sell Restaurants was named to the INC Magazine
                INC 5000 list in 2022 as one of the fastest growing privately
                held companies in America. Franchise Business Review found their
                franchisees ranked them 25th among thousands of brands surveyed
                for franchisee satisfaction and in the top five among business
                services brands. They were named by Nation's Restaurant News as
                one of the most influential suppliers to the restaurant
                industry.
                <br /> <br /> The founders are Eric and Robin Gagnon. This
                dynamic duo and husband and wife team are the country's leading
                restaurant brokers. Popular hosts of the syndicated radio show,
                “We Sell Restaurants” for a number of years, they guest host,
                write, blog, speak, train and present on topics of interest to
                the industry. Their book, Appetite for Acquisition was named
                "Best of" by Small Business Book Awards and has a five-star
                rating on Amazon.
                <br /> <br /> Eric Gagnon is a CFE or Certified Franchise
                Executive. He serves on the VetFran Committee of the
                International Franchise Association or IFA. He has his Certified
                Business Intermediary designation from the International
                Business Brokers Association and has been named a Fellow of the
                IBBA, an honor bestowed upon those who have made an outstanding
                contribution to the industry.
                <br /> <br /> Robin Gagnon is a CFE or Certified Franchise
                Executive. She chairs the Women's Franchise Committee of the
                International Franchise Association and serves on the Board of
                Directors of the IFA. She has been designated a Certified
                Business Intermediary from the International Business Brokers
                Association and also holds an MBA. She was named by Entrepreneur
                as one of the "Top Influential Women in Franchising." These
                veteran industry experts have defined the term “Restaurant
                Brokers” with their unmatched experience, knowledge and count of
                restaurants sold. They have been designated as Industry Experts
                by Business Brokerage Press in the areas of Franchise Resales
                and Restaurant Sales. They created and developed the only
                national training for brokers to obtain the credential of
                Certified Restaurant Broker.
                <br /> <br />
                The two have trademarked their brand, “We Sell Restaurants” and
                are franchising nationwide. They share their knowledge through
                one of the most extensive training programs available to the
                industry. Their multi-platform training program leads to the
                nation’s only Certified Restaurant Broker designation.
              </p>
              <div className={`${styles.press_contactAddr} d-flex `}>
                <p>
                  MEDIA CONTACT:
                  <br /> <br /> Fishman PR
                  <br /> <br /> Greg Avdoian, Vice President
                  <br /> <br /> Phone: (847) 945-1300 ext. 249 <br /> <br />
                  Email: gavdoian@fishmanpr.com
                </p>
                <p>
                  ADDRESS
                  <br /> <br /> 6 Meridian Home Ln. Ste 101
                  <br /> <br /> Palm Coast, FL 32137
                  <br /> <br />
                  Phone: (404) 800-6700
                  <br /> <br /> www.wesellrestaurants.com
                </p>
              </div>
              <p>
                Our leaders and team members are frequently cited as resources
                to the restaurant industry and included in major publications
                like Nation's Restaurant News, QSR, Modern Restaurant, Forbes
                and more. See below the many articles that have appeared online
                and in print featuring We Sell Restaurants, its franchisees and
                founders..
              </p>
            </div>
            <div className={`${styles.press_left_down}`}>
              <h2>We Sell Restaurants Press and News Articles</h2>
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

export default WeSellRestaurantsPress;
