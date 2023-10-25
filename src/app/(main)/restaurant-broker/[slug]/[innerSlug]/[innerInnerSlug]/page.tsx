"use client";

import styles from "./restaurantBrokerInnerSlug.module.scss";
import Pagination from "@/components/global/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAgentListQuery,
  useGetDetailedListQuery,
  useGetFilterDetailsMutation,
  useListByNameQuery,
} from "@/store/services/searchFilterApi";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/ localStorageUtils";
import { useGetFilterOptionsQuery } from "@/store/services/searchOptions";
import { setSearchFilterData } from "@/store/slices/searchFilterSlice";
import { setSeletedPage } from "@/store/slices/paginationSlice";
import SortModal from "@/components/global/sortModal/SortModal";
import Image from "next/image";
import Spoon from "@/assets/call-spoon.png";
import AgentListCard from "@/components/global/agentListCard/AgentListCard";
import Link from "next/link";
import robinEric from "@/assets/eric_robin.jpg";
import WsrSpinner from "@/utils/Spinner/WsrSpinner";

export default function Page({ params }: { params: { slug: string } }) {

  const Base_URL = process.env.NEXT_PUBLIC_IMAGE_URL_AGENT;

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const detailedListSlug = useSelector(
    (state: any) => state?.agentDetailedList
  );
  console.log(detailedListSlug, "checking slug in detailed list");
  const { data: detailedList, isLoading: loaderOFdetailedList } =
    useGetDetailedListQuery(detailedListSlug);

    console.log(detailedList?.data?.data[0]?.users?.img,"detailedList")

  const img= detailedList?.data?.data[0]?.users?.img
  console.log(img,"sdjfljksdjfkljdso") 
  const showDetailedData =
    detailedList?.data?.data?.[0] ||
    getDataFromLocalStorage("DetailedListData");

  // const agentID = useSelector((state: any) => state?.agentListId);

  console.log(detailedListSlug,"check detailed list slug fdjsdhf");
  

  const {
    data: agentData,
    isLoading,
    error,
  } = useGetAgentListQuery(detailedListSlug);

  const selectedPage = useSelector((state: any) => state?.selectedPage);
  const { data: filterOptions } = useGetFilterOptionsQuery(null);
  const [getFilterDetails] = useGetFilterDetailsMutation();

  const agentListing =
    agentData?.data || getDataFromLocalStorage("agentListing");

  useEffect(() => {
    saveDataToLocalStorage("agentListing", agentListing);
    saveDataToLocalStorage("DetailedListData", showDetailedData);
  }, [agentListing, showDetailedData]);

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

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  if (loaderOFdetailedList) {
    return <WsrSpinner />;
  }

  if (isLoading) {
    return (
      <>
        <div
          style={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Spinner animation="border" role="status"></Spinner>
          <p className="sr-only">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <section id={styles.press}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.press} d-flex gap-4`}>
            <div className={`${styles.press_left}`}>
              <div className={`${styles.leaderS_left}`}>
                <h2>Meet the Restaurant Brokers</h2>
                <h5>
                  {showDetailedData?.firstname} {showDetailedData?.lastname}
                </h5>
                <div className={`${styles.ls_PicAndWrite} d-flex gap-3`}>
                  <div className={`${styles.ls_Pic}`}>
                    <div className={styles.ls_pic_img}>
                      <img src={`${Base_URL}/storage/images/users/${img}`} alt={img} />
                    </div>
                    <div className={styles.agentContent}>
                      <h4>We Sell Restaurants, Restaurant Broker</h4>
                      <ul>
                        <li><span>Phone</span><span className={styles.badge}>(212) 495-9980</span></li>
                        <li><span>Email Me Online</span></li>
                        <li><span>Fax</span><span className={styles.badge}>(964) 635-7796</span></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.ls_Write}`}>
                  {showDetailedData?.agentdes}
                  </div>
                </div>
              </div>
              <h2 className={styles.redColorH2}>
                Restaurant for Sale
              </h2>
              <div
                className={`${styles.wsFilterSec} d-flex align-items-center`}
              >
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
              </div>
            </div>
            <div className={`${styles.press_right}`}>
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
                      <a style={{ cursor: "pointer" }}>Buying a Restaurant</a>
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
                <div className={styles.wsSearchSidebar_bottom}>
                  <h2>Email Broker</h2>
                  <div className={styles.search_form}>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Phone"
                        name="phone"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <textarea
                        name="txtArea"
                        id="txtArea"
                        className="form-control"
                      >
                        Please send me additional information about this listing
                      </textarea>
                    </div>
                    <div className={styles.search_form_button}>
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Email Restaurant Broker
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
