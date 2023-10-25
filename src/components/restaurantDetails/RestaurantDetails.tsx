import React from "react";
import data from "./restaurentData.json";
import styles from "./restaurantDetails.module.scss";
import Link from "next/link";
import ItemsCards from "../search/cards/ItemsCards";
import ITEMimg from "@/assets/timthumb.jpeg";

export default function RestaurantDetails() {
  const dummyData = [
    {
      imgSrc: ITEMimg,
      altText: "Pizza Franchise Image",
      description: "Pizza Franchise For Sale In Colorado Springs",
      location: "Colorado Springs, Colorado",
      price: "$99,000",
      listingId: "10108",
      leaseTerm: "2 years",
      monthlyRent: "$4200",
      sqft: "1424",
    },
    {
      imgSrc: ITEMimg,
      altText: "Bakery Franchise Image",
      description: "Bakery Franchise For Sale In Denver",
      location: "Denver, Colorado",
      price: "$120,000",
      listingId: "10109",
      leaseTerm: "3 years",
      monthlyRent: "$3500",
      sqft: "1300",
    },
    {
      imgSrc: ITEMimg,
      altText: "Cafe Franchise Image",
      description: "Cafe Franchise For Sale In Boulder",
      location: "Boulder, Colorado",
      price: "$80,000",
      listingId: "10110",
      leaseTerm: "4 years",
      monthlyRent: "$3000",
      sqft: "1100",
    },
    {
      imgSrc: ITEMimg,
      altText: "Ice Cream Franchise Image",
      description: "Ice Cream Franchise For Sale In Fort Collins",
      location: "Fort Collins, Colorado",
      price: "$70,000",
      listingId: "10111",
      leaseTerm: "5 years",
      monthlyRent: "$2500",
      sqft: "900",
    },
    {
      imgSrc: ITEMimg,
      altText: "Sandwich Franchise Image",
      description: "Sandwich Franchise For Sale In Aurora",
      location: "Aurora, Colorado",
      price: "$60,000",
      listingId: "10112",
      leaseTerm: "6 years",
      monthlyRent: "$2000",
      sqft: "800",
    },
    {
      imgSrc: ITEMimg,
      altText: "Burger Franchise Image",
      description: "Burger Franchise For Sale In Lakewood",
      location: "Lakewood, Colorado",
      price: "$50,000",
      listingId: "10113",
      leaseTerm: "7 years",
      monthlyRent: "$1500",
      sqft: "700",
    },
    {
      imgSrc: ITEMimg,
      altText: "Sushi Franchise Image",
      description: "Sushi Franchise For Sale In Thornton",
      location: "Thornton, Colorado",
      price: "$40,000",
      listingId: "10114",
      leaseTerm: "8 years",
      monthlyRent: "$1000",
      sqft: "600",
    },
    {
      imgSrc: ITEMimg,
      altText: "Chinese Restaurant Franchise Image",
      description: "Chinese Restaurant Franchise For Sale In Arvada",
      location: "Arvada, Colorado",
      price: "$30,000",
      listingId: "10115",
      leaseTerm: "9 years",
      monthlyRent: "$900",
      sqft: "500",
    },
    {
      imgSrc: ITEMimg,
      altText: "Italian Restaurant Franchise Image",
      description: "Italian Restaurant Franchise For Sale In Westminster",
      location: "Westminster, Colorado",
      price: "$20,000",
      listingId: "10116",
      leaseTerm: "10 years",
      monthlyRent: "$800",
      sqft: "400",
    },
    {
      imgSrc: ITEMimg,
      altText: "Mexican Restaurant Franchise Image",
      description: "Mexican Restaurant Franchise For Sale In Pueblo",
      location: "Pueblo, Colorado",
      price: "$10,000",
      listingId: "10117",
      leaseTerm: "11 years",
      monthlyRent: "$700",
      sqft: "300",
    },
  ];

  const options = ["One", "Two", "Three", "Four", "Five"];

  const wsrData: any = data.data;
  return (
    <div className={styles.rDetailsSection}>
      <div className={`container ${styles.detailContainer}`}>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className={styles.wsrLeftBar}>
              <h2>{wsrData.heading}</h2>
              <div className={styles.wsrContent}>
                <p>{wsrData.paragraph}</p>
                <p>{wsrData.paragraph2}</p>
                <ul>
                  {wsrData.listing.map((list: any, index: any) => {
                    return (
                      <li key={index} className={styles.wsrListDisc}>
                        {list.title}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {wsrData.listing.map((list: any, index: any) => {
                    <li key={index}>{list.title}</li>;
                  })}
                </ul>
                <h3>Resources for Buying Alabama Restaurants for Sale</h3>
                {wsrData.links.map((item: any, index: any) => {
                  return (
                    <ul key={index} className={styles.linksList}>
                      <li>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    </ul>
                  );
                })}
                <div className={styles.wsrListing}>
                  <h2>{wsrData.anotherHeading}</h2>
                  <div className={styles.listingItem}>
                    <span>
                      <select className={styles.wsrselectBox}>
                        <option>Filters</option>
                        {options.map((option, index) => {
                          return <option key={index}>{option}</option>;
                        })}
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.itemBox}>
                <div className="row">
                  {dummyData.map((item: any, index: any) => {
                    return (
                      <div
                        className="col-lg-4 col-md-12 d-flex flex-wrap"
                        key={item}
                      >
                        <div className={`${styles.cardbox}`}>
                          <ItemsCards
                            imgSrc={item.imgSrc}
                            altText={item.altText}
                            description={item.description}
                            location={item.location}
                            price={item.price}
                            listingId={item.listingId}
                            leaseTerm={item.leaseTerm}
                            monthlyRent={item.monthlyRent}
                            sqft={item.sqft}
                            certified={null}
                            showCity={item?.showcity}
                            restaurantName={item?.listing_category?.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.wsrPagination}>
                  <div className={styles.ShowPage}>
                    Showing 1 - 10 Records Of 10
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span className={styles.pageNo}>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 col-md-12  ${styles.wsrRightBar}`}>
            <div className={styles.wsrRightBarLink}>
              <h2>
                <img
                  src="https://www.wesellrestaurants.com/public/images/info.png"
                  alt="info"
                />
                Quick info:
              </h2>
              <ul className={styles.infoList}>
                <li>{wsrData.paragraph}</li>
              </ul>
            </div>
            <div className={styles.wsrMoreLinks}>
              <div className={styles.contentSec}>
                <h4 className={styles.contentHeading}>Contents</h4>
                <h6 className={styles.subheadign}>
                  Alabama Restaurants for Sale
                </h6>
                <p>
                  Restaurant Owners - Understand Quid Pro Quo when Buying a
                  Restaurant
                  <Link href="/">See More</Link>
                </p>
                <p>
                  The Top 5 Myths about Buying a Restaurant Debunked
                  <Link href="/">See More</Link>
                </p>
                <div className={styles.footBtn}>
                  <Link href="/">Contact Us</Link>
                  <Link href="/">Download the Guide </Link>
                  <Link href="/">Download the Checklist</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
