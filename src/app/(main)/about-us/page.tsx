"use client";
import Accordion from "react-bootstrap/Accordion";
import styles from "./aboutUs.module.scss";
import "./aboutus.scss";

export default function Page() {
  return (
    <section id={`${styles.aboutWSR}`}>
      <div className="container">
        <div className={`${styles.aboutWSR} aboutWSR`}>
          <div className={`${styles.aboutWSR_top}`}>
            <h2>About We Sell Restaurants</h2>
          </div>
          <div className={`${styles.aboutWSR_bottom} d-flex`}>
            <div className={`${styles.missionVission}`}>
              <h3>Mission & Vision</h3>
              <div className={`${styles.mvPara}`}>
                <p>
                  We Sell Restaurants® is the industry leader in restaurants for
                  sale. Our mission is to sell more restaurants than anyone else
                  – PERIOD and our name says it all. We Sell Restaurants! We are
                  specialists in selling restaurants, restaurant space for lease
                  and we lead the nation in franchise restaurants for sale that
                  are open and operating - franchise resales.
                  <br />
                  <br />
                   The We Sell
                  Restaurants® brand is known nationwide for professionalism,
                  industry knowledge and unmatched service. Whether you are in
                  the market to buy a restaurant, find a restaurant for lease,
                  resell a restaurant franchise or sell an independent
                  restaurant or bar, the We Sell Restaurants® brand is unmatched
                  in experience and knowledge. Our website is an invaluable
                  resource where we focus on sharing knowledge, information and
                  of course, restaurant for sale listings. We train and certify
                  the best in the industry with the only Certified Restaurant
                  Broker® program in the nation. We are franchisors as well as a
                  resource to the restaurant and franchise industry. Our
                  restaurant brokers are knowledgeable, educated and
                  professional.
                  <br />
                  <br />
                   We Sell Restaurants® was created by the dynamic
                  team of Eric and Robin Gagnon, the most productive restaurant
                  brokers in the nation. This well-known team not only sells
                  more restaurants than anyone else in the U.S. but they also
                  write, present and serve in national organizations that
                  support the industry. These industry experts are frequent
                  radio hosts and guests on the topics of buying and selling
                  restaurants.
                </p>
              </div>
            </div>
            <div className={`${styles.whyChooseUs}`}>
              <h3>Why you should choose us</h3>
              <div className={`${styles.whyChooseUs_accord}`}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Leadership in the Restaurant Industry
                    </Accordion.Header>
                    <Accordion.Body>
                      We Sell Restaurants founders and Restaurant Brokers, Eric
                      and Robin Gagnon are nationally known for their expertise
                      and knowledge. They are the authors of Appetite for
                      Acquisition, a book on buying and selling restaurants
                      described as the “definitive guide for anyone looking to
                      enter the restaurant industry and named Best of 2012 by
                      Small Business Book Awards with a five star rating on
                      Amazon. They have been designated Industry Experts by
                      Business Brokerage Press and are multi-year presenters to
                      the International Business Brokers Association (IBBA).
                      They have also served as guest panelists at the
                      International Franchise Association (IFA), the Southeast
                      Franchise Forum (SEFF) and the Women’s Franchise Network
                      (WFN). These experts are popular radio eshow hosts,
                      frequent writers and guests for industry related events.<br /> <br />
                      The nation’s most productive restaurant brokers, they are
                      now franchising the We Sell Restaurants® brand nationwide.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Knowledge about Restaurant for Sale
                    </Accordion.Header>
                    <Accordion.Body>
                      Download our dozens of tools and ebooks. Read our hundreds
                      of articles on buying and selling restaurants and spend
                      time on WeSellRestaurants.com. You will instantly see the
                      benefit of our knowledge on the nation's most
                      sophisticated website for restaurant buyers and restaurant
                      sellers. We deliver an online confidentiality agreement,
                      24 hour access to restaurant listing information,
                      photographs, the address, financial reports and even
                      videos via our state of the art platform. Register as a
                      buyer today for access to the latest restaurant listings
                      first.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Expertise in Buying and Selling Restaurants
                    </Accordion.Header>
                    <Accordion.Body>
                      Buying and selling a restaurant is a specialized
                      transaction. We have the only Certified Restaurant Brokers
                      in the industry. They have undergone intensive training,
                      testing and a program of study designed to ensure their
                      expertise is unsurpassed. Questions about the financial
                      performance of a restaurant? We can answer. Information on
                      buying a franchise restaurant needed? We have that
                      information. Seeking answers for why one restaurant is
                      priced one way and another a different? That’s not a
                      problem. We believe you can only be the best at something
                      if you study it intently, do it more than one time and
                      understand it uniquely. Unlike general brokers, we won’t
                      sell a restaurant today and a daycare center tomorrow. We
                      have the restaurant lenders, the restaurant insurers, the
                      hospitality resources to deliver what you need. Our
                      expertise is unmatched in the brokerage industry
                      worldwide.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
