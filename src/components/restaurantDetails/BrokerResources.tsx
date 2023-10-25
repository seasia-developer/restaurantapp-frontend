import ArticlesCard from "../global/articlesCard/ArticlesCard";
import Image from "next/image";
import info from "../../assets/info.png";
import topFran from "../../assets/2023-Award-Graphics-RGB-WEB.jpg";
import lowCost from "../../assets/[WEB]2023-Award-Graphics-RGB_Top_Low-Cost_Franchise_Award.jpg";
import inc from "../../assets/Inc_ 5000 Black Stacked Medallion Logo(1).png";
import ContentCard from "../global/content/ContentCard";
import styles from "./brokerResources.module.scss";
import Pagination from "../global/pagination/Pagination";
import QuickInfo from "../global/quickInfo/QuickInfo";
import topic from "../../assets/broker resources header image.png";
import BrokerArtCard from "../global/brokerArtCard/BrokerArtCard";

const BrokerResources = () => {
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
        "https://www.wesellrestaurants.com/ckfinder/userfiles/images/advertise.png",
      para: "Advertise your client's restaurant for sale with the nation's best. We Sell Restaurants has the highest closing ratio in the industry, marketing to over 100,000 buyers nationwide. Our advertising option offers a risk-free way to reach more buyers who are actively looking for restaurants to buy. Simply read and agree to our co-brokerage form and pay the refundable marketing fee to list your restaurant on our powerhouse website. Advertise up to 3 listings at a time and let us handle the marketing. We send over 9 million emails each year to highly engaged buyers nationwide. Upon closing, your advertising fee is refunded and you keep half the commission! Whether you are struggling to find a qualified buyer or you are trying to sell your listing faster, We Sell Restaurants is passionate about sales results and is ready to help you close the deal. ",
    },
    {
      imgUrl: "https://www.wesellrestaurants.com/ckfinder/userfiles/images/co-broker.png",
      para: "For brokers or agents who have clients interested in restaurants for sale listed by We Sell Restaurants, we are happy to co-broker. Before we can co-broker, the following conditions must be met:1) The client has not already signed a confidentiality agreement with We Sell Restaurants and been provided access to the listing details2) The agent or broker has NOT signed a confidentiality agreement with We Sell Restaurants in violation of the terms and been provided access to the listing details3) The client is financially qualified on the listing and the agent or broker can make that information available to We Sell Restaurants. On certain listings, we may request additional information. We will let you know as soon as we receive your initial request.",
    },
    {
      imgUrl: "https://www.wesellrestaurants.com/ckfinder/userfiles/images/refer.png",
      para: "For brokers or agents who have clients interested in restaurants for sale listed by We Sell Restaurants, we are happy to co-broker. Before we can co-broker, the following conditions must be met:1) The client has not already signed a confidentiality agreement with We Sell Restaurants and been provided access to the listing details2) The agent or broker has NOT signed a confidentiality agreement with We Sell Restaurants in violation of the terms and been provided access to the listing details3) The client is financially qualified on the listing and the agent or broker can make that information available to We Sell Restaurants. On certain listings, we may request additional information. We will let you know as soon as we receive your initial request.",
    },
  ];

  return (
    <section id={styles.press}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.press} d-flex gap-4`}>
          <div className={`${styles.press_left}`}>
            <h2>We Sell Restaurants Brokers Resources</h2>
            <div className={`${styles.press_left_para}`}>
              <div className={styles.press_left_para_img}>
                <Image src={topic} alt="image not found" />
              </div>
              <div className={styles.press_left_para_broker_art}>
                
                {artData?.map((item:any,index:any)=>(
                    <BrokerArtCard key={index} data={item}/>
                ))}
              </div>
            </div>
            <div className={`${styles.press_left_down}`}>
              <h2>We Sell Restaurants Brokers Resources</h2>
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
                  {dummyDataCard?.map((item:any, i:any) => (
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

export default BrokerResources;
