"use client";
import items from "./sellingItems.json";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./buyOrSellRestaurent.module.scss";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1135 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 40,
  },
  laptop: {
    breakpoint: { max: 1135, min: 781 },
    items: 2,
    slidesToSlide: 2, 
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 781, min: 735 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 735, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
};

export default function Features() {
  const data = items.items;

  const carouselItems = data.map((item:any, index:any) => {
    return (
      <div key={index}>
        <div key={index} className={`card ${styles.CardMain}`} style={{ width: "22rem" }}>
          <img src={item.image}
            alt={item.name}
            className={styles.carouselImg} />
          <div className={`card-body ${styles.CardBody}`}>
            <div className={styles.label}>{item.label}</div>
            <h5 className={`card-title ${styles.cardTItle}`}>{item.name}</h5>
            <Link href="https://blog.wesellrestaurants.com/restaurant-assessment-tool-we-sell-restaurants" className={` ${styles.CardBtn}`}>
            <span>See More</span><span>→</span>
            </Link>
          </div>
        </div>
        <div className={`card ${styles.CardMain}`} style={{ width: "22rem" }}>
          <img src={item.image}
            alt={item.name}
            className={styles.carouselImg} />
          <div className={`card-body ${styles.CardBody}`}>
            <p className={`card-title ${styles.cardTItle}`}>{item.name}</p>
            <Link href="https://blog.wesellrestaurants.com/restaurant-assessment-tool-we-sell-restaurants" className={` ${styles.CardBtn}`}>
            <span>See More</span><span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.featureSection}>
      <div className={styles.featureHead}>
        <div className={` ${styles.container}`}>
          <div className="row">
            <div className={`col-md-12 ${styles.colFeatures}`}>
              <h2 className={styles.carouselHeading}>
              Resources For Buying or Selling a Restaurant 
              </h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .2"
                transitionDuration={700}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                className={styles.Carousel}
              >
                {carouselItems}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
