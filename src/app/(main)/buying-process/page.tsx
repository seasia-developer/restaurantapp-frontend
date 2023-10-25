"use client";
import React from "react";
import style from "./buying.module.scss";
import book from "../../../assets/book-img.jpg";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

export default function Page() {
  const data = [
    {
      heading: "Most Up to Date Restaurants for Sale",
      paragraph:
        "We Sell Restaurants has the most sophisticated website in the nation for the purchase and sale of restaurants. You can instantly sign the electronic confidentiality agreement online and get: immediate access to the restaurant listing name and address, immediate view of additional photographs not available to the public, access to the latest restaurant listings on the market first and online tracking of your favorite restaurant for sale in your own account. ",
    },
    {
      heading: "Franchise for Sale Specialists ",
      paragraph:
        "We Sell Restaurants is the undisputed leader in franchise restaurant resales. We represent open and operating franchise restaurants for sale with cash flow and many years left on their franchise agreement. We are knowledgeable in the transfer, process and lending when buying a franchise restaurant. We get the job done because We Sell Restaurants. We Sell Restaurants specializes in franchise re-sales. We can serve as an independent consultant. We know which concepts are succeeding in the marketplace and which ones have sold (and their pricing). We provide unique value in negotiation either with the franchise or assisting in site locations and leasing.",
    },
    {
      heading: "Nationwide, Full Service, Knowledgeable Resource",
      paragraph:
        "We Sell Restaurants is a national firm focused only on the process of selling restaurants. We have sold hundreds of restaurant ranging from a single unit for an owner-operator to a ten-store chain of franchise restaurants for sale. We have lending resources and prequalify our listings so financing a restaurant is never a problem. Our brokers are the most knowledgeable in the industry and are the only Certified Restaurant Brokers in the nation. Our name says it all. We Sell Restaurants.",
    },
  ];

  return (
    <div>
      <div className={style.restaurantsMain}>
        <div className="container">
          <div className={style.sectionBg}>
            <h2 className={`mb-4 ${style.mainHeading}`}>How to Buy a Restaurant</h2>
            <div className="row">
              <div className={`col-md-6 ${style.leftSide}`}>
                <h3>I want to buy a restaurant, where do I start?</h3>
                <p>
                  The best place to start is with an expert restaurant broker. A
                  leader like We Sell Restaurants can advise you in how to buy a
                  restaurant, the steps in buying your business, financing your
                  business and even the valuation of a restaurant for sale. We
                  help buyers in leasing a restaurant and the entire restaurant
                  buying process. Contact one of our expert restaurant brokers.
                  They can assist you with the We Sell Restaurant Assessment
                  Tool© to help you answer key questions before you begin. This
                  important tool helps you shape your commitment of time and
                  money before you get started. Our qualified Business Brokers
                  can also work with you over the phone or in person to qualify
                  your needs.
                </p>
                <h3>Need more help on buying a restaurant?</h3>
                <div>
                  <Image src={book} alt="book-img" />
                  <em>
                    <br />
                    Want more information on how to buy a restaurant? Start by
                    reading the industry textbook on buying restaurants,
                    Appetite for Acquistion. This 352 page book is a guidebook
                    on how to buy a restaurant and the steps in buying a
                    restaurant. It has been described in the business as "the
                    definitive guide for anyone looking to enter the restaurant
                    industry." Appetite for Acquisition was Winner of the Best
                    of 2012 Small Business Book Award. Available for shipment
                    immediately from the publisher or as an instant download for
                    your Reader, Nook, Kindle 2, iPad, and iPhone 4.
                  </em>
                </div>
              </div>
              <div className={`col-md-6 ${style.rightSide}`}>
                <h3>Why you should choose us</h3>
                {data.map((item:any, ind:any) => {
                  return (
                    <Accordion defaultActiveKey="1" className={style.accordionBox} key={ind}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{item.heading}</Accordion.Header>
                        <Accordion.Body>{item.paragraph}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className={style.buyingOrder}>
        <div className="container">
          <h2>Appetite for Acquisition?</h2>
          <p>Get the book on buying restaurants</p>
          <div className={style.orderBtn}>
            <Link href="https://blog.wesellrestaurants.com/buy-the-restaurant-brokers-appetite-for-acquisition">
              Order Now
            </Link>
          </div>
          <div className={style.orderPrice}>$24.99</div>
        </div>
      </div>

      <div className={style.sectionFaq}>
        <div className="container">
          <div className={style.faqBg}>
            <h2>FAQ:</h2>
            {data.map((item:any, ind:any) => {
                  return (
                    <Accordion defaultActiveKey="1" key={ind}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{item.heading}</Accordion.Header>
                        <Accordion.Body>{item.paragraph}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
