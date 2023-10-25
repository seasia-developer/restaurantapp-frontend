"use client";
import { useSearchFilterIdMutation } from "@/store/services/searchFilterApi";
import { setSearchFilterIdData } from "@/store/slices/searchFilterIdSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import style from "./agentListCard.module.scss";
import { MapMark, StarIcon } from "@/assets/icons";

const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

const AgentListCard = ({
  imgUrl,
  headlinead,
  saleprice,
  id,
  leaseTerm,
  monthlyRent,
  insidesqt,
  index,
  state,
  bcity,
  showCity,
}: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchFilterId] = useSearchFilterIdMutation();

  const handleNextoId = async (iD: any, headLine: any) => {
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
    <div className={style.viewBox} key={index}>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.ListImg}>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => handleNextoId(id, headlinead)}
            >
              <img
                src={`${IMG_URL}/${imgUrl}`}
                alt={imgUrl}
                className="w-100"
              />
            </a>
          </div>
          <button
            onClick={() => handleNextoId(id, headlinead)}
            className={style.itsButton}
          >
            View Complete Listing
          </button>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-7">
              <h3 className={style.headlisting}>{headlinead}</h3>
            </div>
            <div className="col-lg-5">
              <div className={style.price}>
                <Link href="#" className={style.rate}>
                  <strong>$</strong>
                  <strong>{saleprice}</strong>
                </Link>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNextoId(id, headlinead)}
                  className={style.viewListing}
                >
                  View Complete Listing
                </a>
              </div>
            </div>
            <div className={style.cityLink}>
              <Link href="#">
                {showCity === 1 ? (
                  <>
                    {MapMark}private city {state}
                  </>
                ) : (
                  <>
                    <span>
                      {MapMark}
                      {bcity}
                      {state}
                    </span>
                  </>
                )}
              </Link>
              <Link href="#" className="mx-3">
                {StarIcon} Add to your favorites
              </Link>
            </div>
            <div className={style.property}>
              <span>
                Listing Id:
                <strong>{id}</strong>
              </span>
              <span>
                LEASE TERM:
                <strong>{leaseTerm}</strong>
              </span>
              <span>
                MONTHLY RENT:
                <strong>{monthlyRent}</strong>
              </span>
              <span>
                SQ.FT.
                <strong>{insidesqt}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentListCard;
