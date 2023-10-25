"use client";
import React from "react";
import style from "./forSelling.module.scss";
import book from "../../../assets/book-img.jpg";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { WhitePhone } from "@/assets/icons";

export default function Page() {
  const data = [
    {
      heading: "We know how to value a business",
      paragraph:
        "We work on a daily basis with restaurant and franchise resale profit and loss statements.  We understand add backs.  We know the common ratios for occupancy, food cost and labor. Listing your business too high means it will just sit on the market without activity.  Listing it too low means you're giving up potential value.  We can determine the correct price.",
    },
    {
      heading: "Database of Buyers and Proactive Selling",
      paragraph:
        "We have a relationship with thousands of buyers in our database that already registered and looking for restaurant to buy.  We know how much money they want to invest, what type of restaurant they want and where they want it to be. We are proactive in selling.  We approach buyers and use our proprietary We Sell Restaurants Restaurant Assessment Tool© to locate buyers in our database who have already told us they are looking for a restaurant like yours.",
    },
    {
      heading: "Qualified Buyers",
      paragraph:
        "We qualify buyers and make sure your confidential listing is treated that way.  We require and enforce nondisclosure agreements before providing any information.  We do not release or copy financial information.  We require financial net worth statements or verification of funds before discussing your financials.  We are not going to allow 'window shopping' on your confidential listing.",
    },
  ];

  return (
    <div>
      <div className={style.restaurantsMain}>
        <div className="container">
          <div className={style.sectionBg}>
            <h2 className={`mb-4 ${style.mainHeading}`}>What to Look for In Selling a Restaurant</h2>
            <div className="row">
              <div className={`col-lg-6 ${style.leftSide}`}>
                <p>
                Selling restaurants isn’t like any other industry. When you are looking to sell, you deserve a specialist; someone knowledgeable about the industry and ready to explain the details of your business to a buyer thirsty for knowledge. You deserve a proprietary and systemic approach to selling restaurants that results in a higher closing ratio, fewer days on the market and the highest selling prices.
                </p>
                <p>Our proprietary process and systemic approach to selling restaurants results in a higher closing ratio. We have a database of nearly 50,000 buyers.  We Sell More Restaurants than anyone else. PERIOD.  We advertise around the world with preferred placement on most websites and have the most heavily trafficked restaurant for sale website anywhere in the nation.</p>
                <p>
                Contact us today for a FREE no obligation valuation of your business. We are the industry leader in selling restaurants and food related businesses, franchise resales, and site location for the food service industry.  We Sell Restaurants has the experience and knowledge to assist you in selling your restaurant.  For a confidential valuation, contact us by phone at 404-800-6700, 
                <Link href='https://blog.wesellrestaurants.com/sell-your-restaurant-with-the-restaurant-brokers'>complete this form</Link>
                <Link href="#">info@wesellrestaurants.com</Link>
                </p>
              </div>
              <div className={`col-lg-6 ${style.rightSide}`}>
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
          <h2>Sell Your Restaurants</h2>
          <p>Claim your Free Confidential Evaluation</p>
          <div className={style.orderBtn}>
            <Link href="https://blog.wesellrestaurants.com/buy-the-restaurant-brokers-appetite-for-acquisition">
            Click Here
            </Link>
          </div>
          <Link href="#"><span className="px-2">{WhitePhone}</span>Schedule a Call</Link>
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
