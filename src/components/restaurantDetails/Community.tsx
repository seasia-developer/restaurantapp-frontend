"use client";
import ArticlesCard from "../global/articlesCard/ArticlesCard";
import ContentCard from "../global/content/ContentCard";
import styles from "./community.module.scss";
import Pagination from "../global/pagination/Pagination";
import QuickInfo from "../global/quickInfo/QuickInfo";
import { useSelector } from "react-redux";

const Community = () => {
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

  const nextData = useSelector((state:any) => state?.sendSearchName);

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

  return (
    <section id={styles.press}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.press} d-flex gap-4`}>
          <div className={`${styles.press_left}`}>
            <h2>We Sell Restaurants Community Outreach</h2>
            <div className={`${styles.press_left_para}`}>
              <p>
                As a brand, We Sell Restaurants strives to live by our core
                values each day. We demonstrate our commitment to Treat Each
                Other, Our Clients, and Internal Clients by the Golden Rule
                through our community outreach and charitable giving
                initiatives. In 2018, our founders established a charitable
                trust - matching donations from franchise partners and agents -
                with a mission of ending hunger, aiding veterans & children's
                programs, as well as helping families. Through this trust we
                have reached an incredible milestone; more than $105,000 has
                been matched in donation funds on top of contributions from our
                franchisees. Our Franchisees are inspired to support their local
                organizations through volunteering efforts paired with generous
                giving that truly makes a difference at both the state & local
                level.
                <br />
                <br /> Through our efforts we have been able to support
                organizations that provide lifesaving equipment like the
                Firehouse Subs Public Safety Foundation. We have aided veteran's
                organizations including: VetFran, Folds of Honor, Warrior Heart
                and the Honor Foundation for multiple years. We have helped
                those who are hungry by funding Meals of Hope, the Harry Chapin
                Food Bank of Southwest Florida, the Atlanta Food Bank and Boca
                Helping Hands, No Kid Hungry and the PB&J Foundation. We have
                provided aid to those in the restaurant industry by funding
                initiatives like Marco's Slice of Support, The Giving Kitchen
                and the National Restaurant Association Educational Foundation.
                We have addressed issues including domestic violence and
                homelessness in our local communities with aid to Sheltering
                Tree, the Betty Griffin Center and Grace Community Food Pantry.
                <br />
                <br />
                In 2023, We Sell Restaurants is kicking off a more aggressive
                charitable effort which will engage all our franchisees
                nationwide to pack meals and feed the hungry. Our Franchise
                Charitable Giving Committee is leading this important effort.
                Stay tuned for more information as we work to insure no one goes
                hungry in America as We Sell Restaurants.
                <br />
                <br /> Our community outreach and charitable giving program is a
                great way to contribute positively towards the local area.
                Working together, we can use our collective energy to make
                lasting changes that benefit everyone! Discover how the We Sell
                Restaurants organization is giving back to the local community
                through generous charitable donations! We are committed to
                making a difference and improving lives.
              </p>
              <div className={`${styles.press_contactAddr} d-flex `}>
                <p></p>
                <p></p>
              </div>
              <p></p>
            </div>
            <div className={`${styles.press_left_down}`}>
              <h2>We Sell Restaurants Community Outreach</h2>
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
              <QuickInfo infoData={quickInfoData} />
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

export default Community;
