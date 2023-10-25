'use client'
import WsrLayout from "@/app/(main)/layout";
import styles from "./restaurantForRent.module.scss";
import Spoon from "@/assets/call-spoon.png";
import Image from "next/image";
import ITEMimg from "@/assets/timthumb.jpeg";
import ForkNew from "@/assets/fork-new.jpg";
import ItemsCards from "@/components/search/cards/ItemsCards";
import Link from "next/link";

export default function SeachResult() {
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

  return (
        <section id={styles.searchResult}>
          <div className="container">
            <div className={styles.searchResult}>
              <div
                className={`${styles.wsFilterSec} d-flex align-items-center`}
              >
                <div className={`${styles.wsFilterSec_img}`}>
                  <Image src={Spoon} alt="img not found" />
                </div>
                <div className={styles.wsFilterSec_selector}>
                  <select name="sfilter" className="selectpicker">
                    <option value="">FILTERS</option>
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
                </div>
                <div className={styles.wsFilterSec_P}>SORT</div>
              </div>
              <div
                className={`${styles.wsSearchCard} d-flex justify-content-between`}
              >
                <div className={styles.wsSearchCardShow}>
                  <div className={styles.wsSearchCardShow_items}>
                    <ul className="d-flex">
                      {dummyData?.map((item) => (
                        <li key={item.description}>
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
                            showCity={0}
                            restaurantName=""
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.wsSearchCardShow_pagination}>
                    <div className={styles.wsSearchCardShow_pagination_left}>
                      Showing 201 - 250 Records Of 577
                    </div>
                    <div className={styles.wsSearchCardShow_pagination_right}>
                      <ul className="d-flex p-0 mb-0">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.wsSearchSidebar}>
                  <div className={styles.wsSearchSidebar_top}>
                    <h2>LEARN MORE</h2>
                    <ul>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/testimonial">Customer Reviews</Link>
                      </li>
                      <li>
                        <Link href="#">Certified Pre-Owned</Link>
                      </li>
                      <li>
                        <Link href="/buying-process">Buying a Restaurant</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.wsSearchSidebar_bottom}>
                    <div className={styles.wsSearchSidebar_bottom_search}>
                      <div className={styles.wsSearchSidebar_bottom_search_img}>
                        <Image src={ForkNew} alt="not found" />
                      </div>
                      <h2>SEARCH</h2>
                    </div>
                    <div className={styles.wsSearchSidebar_bottom_list}>
                      <ul>
                        <li>
                          <a href="#">Alabama Restaurants for Sale</a>
                        </li>
                        <li>
                          <a href="#">American Restaurants for Sale</a>
                        </li>
                        <li>
                          <a href="#">Asian Restaurants for Sale</a>
                        </li>
                        <li>
                          <a href="#">Mexican Restaurants for Sale</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
