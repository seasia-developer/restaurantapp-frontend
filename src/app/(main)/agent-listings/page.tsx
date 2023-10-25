"use client";
import React from "react";
import WsrLayout from "@/app/(main)/layout";
import styles from "./agentListing.module.scss";
import Spoon from "@/assets/call-spoon.png";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetAgentListQuery,
  useGetFilterDetailsMutation,
} from "@/store/services/searchFilterApi";

import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/ localStorageUtils";
import Link from "next/link";
import { useGetFilterOptionsQuery } from "@/store/services/searchOptions";
import Pagination from "@/components/global/pagination/Pagination";
import { setSearchFilterData } from "@/store/slices/searchFilterSlice";
import { setSeletedPage } from "@/store/slices/paginationSlice";
import { setHeaderSlugSlice } from "@/store/slices/headerSlugSlice";
import SortModal from "@/components/global/sortModal/SortModal";
import AgentListCard from "@/components/global/agentListCard/AgentListCard";
import { Spinner } from "react-bootstrap";

const AgentListing = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const agentID = useSelector((state: any) => state?.agentListId);
  console.log(agentID, "checking agent id in agent listing");

  const { data: agentData, error, isLoading } = useGetAgentListQuery(agentID);

  const agentListing =
    agentData?.data || getDataFromLocalStorage("agentListing");

  useEffect(() => {
    saveDataToLocalStorage("agentListing", agentListing);
  }, [agentListing]);

  const selectedPage = useSelector((state: any) => state?.selectedPage);

  const { data: filterOptions } = useGetFilterOptionsQuery(null);

  const [getFilterDetails] = useGetFilterDetailsMutation();

  const pagination = agentListing;

  const handleFilterSelection = async (e: any) => {
    const filter = e.target.value;

    try {
      const response: any = await getFilterDetails({
        sfilter: filter,
        page: selectedPage,
        limit: "",
      });

      dispatch(setSearchFilterData(response?.data));
      dispatch(setSeletedPage(""));
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextbySlug = () => {
    dispatch(setHeaderSlugSlice("Franchises-for-Sale"));
    router.push(`/${"Franchises-for-Sale"}`);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section id={styles.searchResult}>
      <div className="container">
        <div className={styles.searchResult}>
          <div className={`${styles.wsFilterSec} d-flex align-items-center`}>
            <div className={`${styles.wsFilterSec_img}`}>
              <Image src={Spoon} alt="img not found" />
            </div>
            <div className={styles.wsFilterSec_selector}>
              <select
                name="sfilter"
                className="selectpicker"
                onChange={handleFilterSelection}
              >
                <option value="">FILTERS</option>
                {filterOptions?.data.map((item: any, index: any) => (
                  <option key={index} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{ position: "relative" }}
              onClick={() => setShowModal(!showModal)}
              className={styles.wsFilterSec_P}
            >
              SORT
              <SortModal show={showModal} handleClose={handleCloseModal} />
            </div>
          </div>
          <div
            className={`${styles.wsSearchCard} d-flex justify-content-between`}
          >
            <div className={styles.wsSearchCardShow}>
              <div className={styles.wsSearchCardShow_items}>
                <ul className="d-flex">
                  {console.log(agentData, "checking agent listing")}
                  {agentListing?.data?.map((item: any, ind: any) => (
                    <AgentListCard
                      imgUrl={item?.listing_media?.img_file}
                      headlinead={item?.bheadlinead}
                      saleprice={item?.bsaleprice}
                      id={item?.id}
                      leaseTerm={item?.listing_occupancy_lease?.lterm}
                      monthlyRent={
                        item?.listing_occupancy_lease?.ltotalmonthrent
                      }
                      insidesqt={item?.listing_occupancy_lease?.linsidesqt}
                      index={ind}
                      state={item?.bstate}
                      bcity={item?.bcity}
                      showCity={item?.showcity}
                      key={ind}
                    />
                  ))}
                </ul>
              </div>
              <Pagination pagination={pagination} />
            </div>
            <div className={styles.wsSearchSidebar}>
              <div className={styles.wsSearchSidebar_top}>
                <h2>LEARN MORE</h2>
                <ul>
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href="/testimonial">Customer Reviews</Link>
                  </li>
                  <li>
                    <a href="#">Certified Pre-Owned</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }} onClick={handleNextbySlug}>
                      Buying a Restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#">Selling a Restaurant</a>
                  </li>
                  <li>
                    <Link href="/restaurantbrokers">Restaurant Brokers</Link>
                  </li>
                  <li>
                    <a href="https://blog.wesellrestaurants.com/financing-a-restaurant-free-report-new">
                      Restaurant Financing
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      // onClick={handleNextbySlug}
                    >
                      Buying Franchises
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentListing;
