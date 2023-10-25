"use client";
import React from "react";
import style from "./testimonial.module.scss";
import data from "./bussiness.json";
import { useGetCustomerStoriesQuery } from "@/store/services/searchOptions";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";

export default function Page() {
  const soldData = data.items;

  const {data:customerStories,isLoading:loading} = useGetCustomerStoriesQuery(undefined)
  

  return (
    <div className={style.restaurantSold}>
      <div className="container">
        <ul className={style.line} style={{ overflow: "hidden" }}>
          {customerStories?.data?.data?.map((item: any, ind: any) => {
            return (
              <li
                style={{
                  float: ind % 2 === 0 ? "left" : "right",
                  clear: "both",
                  width: "46%",
                }}
                key={ind}
              >
                <div className={style.redBadge}>&nbsp;</div>
                <div className={style.linePanel}>
                  <div className={style.linePanelBody}>
                    
                    <div className={style.soldImg}>
                      {/* <iframe src= ></iframe> */}
                      <embed src={item?.media}/>
                      {/* <img src={item.media} alt={item.media} /> */}
                    </div>
                    <div className={style.soldParagraph}>
                      <p>{item?.title}</p>
                      <p>{item?.des}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={style.actionButton}>
          <button className={style.backBtn}>« Back</button>
          <button className={style.nextBtn}>SEE MORE »</button>
        </div>
      </div>
      {loading && <FullScreenLoader />}
    </div>
  );
}
