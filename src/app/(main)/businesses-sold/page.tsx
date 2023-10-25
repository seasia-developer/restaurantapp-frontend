"use client";
import React from "react";
import style from "./businessesSold.module.scss";
import sold from "@/assets/sold-icon.png";
import sold_img from "@/assets/timthumb.jpeg";
import Link from "next/link";
import Image from "next/image";
import { useGetListingSoldQuery } from "@/store/services/searchOptions";
import Spinner from "react-bootstrap/Spinner";
import { useSearchFilterIdMutation } from "@/store/services/searchFilterApi";
import { useDispatch } from "react-redux";
import { setSearchFilterIdData } from "@/store/slices/searchFilterIdSlice";
import { useRouter } from "next/navigation";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";

export default function Page() {
  const { data: listingSold, isLoading } = useGetListingSoldQuery(undefined);
  

  const [searchFilterId] = useSearchFilterIdMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const handleNextToId = async (iD: any, headLine: any) => {
    

    let id = iD;
    let name = headLine;

    try {
      if (name && id) {
        const response: any = await searchFilterId({ name, id });

        

        if (response?.data) {
          dispatch(setSearchFilterIdData(response?.data));
        }

        router.push(
          `/restaurants-for-sale/${name
            .replace(/[\/()|]/g, "-")
            .replace(/\s+/g, "-")}/${id}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.restaurantSold}>
      {isLoading && <FullScreenLoader />}
      <div className={style.head}>
        <div className="container">
          <h2>Restaurants Sold</h2>
        </div>
      </div>
      <div className="container">
        <ul className={style.line} style={{ overflow: "hidden" }}>
          {listingSold?.data?.map((item: any, ind: any) => {
          
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
                    <div className={style.soldOverlay}>
                      <div>
                        <Image
                          onClick={() =>
                            handleNextToId(item?.id, item?.bheadlinead)
                          }
                          src={sold}
                          alt="sold-Img"
                        ></Image>
                      </div>
                    </div>
                    <div className={style.soldRest}>
                      <h4>{item?.bheadlinead}</h4>
                      <div className={style.soldImg}>
                        {item?.listing_media?.img_file == undefined ||
                        item?.listing_media?.img_file == null ? (
                          <Image src={sold_img} alt="sold_img"></Image>
                        ) : (
                          <img
                            src={`https://stgps.appsndevs.com/wsrrebuild/backend/storage/images/list/main_images/${item?.listing_media?.img_file}`}
                            alt={item?.listing_media?.img_file}
                          />
                        )}
                      </div>
                      <div className={style.soldParagraph}>
                        <div
                          className={style.bdetailedad}
                          dangerouslySetInnerHTML={{
                            __html: item?.bdetailedad,
                          }}
                        />
                        <div>
                          <a
                            onClick={() =>
                              handleNextToId(item?.id, item?.bheadlinead)
                            }
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
