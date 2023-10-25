"use client";
import WsrLayout from "@/app/(main)/layout";
import styles from "../restaurant-for-sale-near-me/search.module.scss";
import Spoon from "@/assets/call-spoon.png";
import Image from "next/image";
import ITEMimg from "@/assets/timthumb.jpeg";
import ForkNew from "@/assets/fork-new.jpg";
import ItemsCards from "@/components/search/cards/ItemsCards";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetDataByHeadSlugQuery,
  useGetFilterDetailsMutation,
  useGettingSearchRecoQuery,
  useSearchFilterMutation,
} from "@/store/services/searchFilterApi";
import { searchFilterApi } from "@/store/services/searchFilterApi";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/ localStorageUtils";
import { setSendSearchName } from "@/store/slices/sendSearchNameSlice";
import { useGetFilterOptionsQuery } from "@/store/services/searchOptions";
import Pagination from "@/components/global/pagination/Pagination";
import { setSearchFilterData } from "@/store/slices/searchFilterSlice";
import { setSeletedPage } from "@/store/slices/paginationSlice";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
import { setHeaderSlugSlice } from "@/store/slices/headerSlugSlice";

export default function SeachResult() {
  const router = useRouter();
  const dispatch = useDispatch();

  const headerSlug = useSelector((state: any) => state?.headerSlugSlice);

  const { data: dataBySlug, isLoading: dataBySlugLoading } =
    useGetDataByHeadSlugQuery(headerSlug);

  const searchDataRedux =
    dataBySlug || getDataFromLocalStorage("searchDataRedux");

  useEffect(() => {
    saveDataToLocalStorage("searchDataRedux", searchDataRedux);
  }, [searchDataRedux]);

  const selectedPage = useSelector((state: any) => state?.selectedPage);

  const { data, error, isLoading } = useGettingSearchRecoQuery(null);

  const { data: filterOptions } = useGetFilterOptionsQuery(null);

  const [getFilterDetails] = useGetFilterDetailsMutation();

  const pagination = searchDataRedux?.data;

  const handleNextSearch = async (name: any) => {
    

    if (name) {
      try {
        let pushName = name;

        dispatch(setSendSearchName(pushName));
        router.push(
          `/restaurants-for-sale/${name
            .replace(/[\/()|]/g, "-")
            .replace(/\s+/g, "-")}`
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

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

  if (dataBySlugLoading) {
    return (
      <div
        style={{ minHeight: "40vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
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
            <div className={styles.wsFilterSec_P}>SORT</div>
          </div>
          <div
            className={`${styles.wsSearchCard} d-flex justify-content-between`}
          >
            <div className={styles.wsSearchCardShow}>
              <div className={styles.wsSearchCardShow_items}>
                <ul className="d-flex">
                  {searchDataRedux?.data === "No Listing Found" && (
                    <div className="container py-5">
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <div className="card  border-0">
                            <div className="card-body text-center">
                              <h3 className="mb-4">No Listing Found</h3>
                              <p className="lead">
                                We couldn't find any listings matching your
                                search criteria.
                              </p>
                              <p>
                                Please try again with different filters or
                                categories.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {searchDataRedux?.data.data?.map((item: any, index: any) => (
                    <li key={index}>
                      <ItemsCards
                        imgSrc={item?.listing_media?.img_file}
                        altText={item?.listing_media?.img_file}
                        description={item?.bheadlinead}
                        location={`${item?.bcity} , ${item?.listing_state?.name}`}
                        price={item?.bsaleprice}
                        listingId={item?.id}
                        leaseTerm={item?.listing_occupancy_lease?.lterm}
                        monthlyRent={
                          item?.listing_occupancy_lease?.ltotalmonthrent
                        }
                        sqft={item?.listing_occupancy_lease?.linsidesqt}
                        certified={item?.bgradelist}
                        showCity={item?.showcity}
                        restaurantName={item?.listing_category?.name}
                      />
                    </li>
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
                    <Link href={"/about"}>About Us</Link>
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
                      // onClick={handleNextbySlug}
                      style={{ cursor: "pointer" }}
                    >
                      Buying Franchises
                    </a>
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
                    
                    {data?.data?.footer.map((item: any, index: any) => (
                      <li key={index}>
                        <a
                          // href={`/restaurant-for-sale/${item?.name}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleNextSearch(item?.name)}
                        >
                          {item?.name}
                        </a>
                      </li>
                    ))}
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
