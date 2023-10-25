"use client";
import ProviderWrapper from "@/app/provider";
import BrokerResources from "@/components/restaurantDetails/BrokerResources";
import BuyingTools from "@/components/restaurantDetails/BuyingTools";
import Community from "@/components/restaurantDetails/Community";
import ForFranchisor from "@/components/restaurantDetails/ForFranchisor";
import RestaurantDetails from "@/components/restaurantDetails/RestaurantDetails";
import WeSellRestaurantsPress from "@/components/restaurantDetails/WeSellRestaurantsPress";
import FeatureInside from "@/components/restaurantDetails/featureInside/FeatureInside";
import ArticlesCard from "@/components/global/articlesCard/ArticlesCard";
import ContentCard from "@/components/global/content/ContentCard";
import styles from "@/components/restaurantDetails/community.module.scss";
import Pagination from "@/components/global/pagination/Pagination";
import QuickInfo from "@/components/global/quickInfo/QuickInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetFilterDetailsMutation,
  useListByNameQuery,
} from "@/store/services/searchFilterApi";
import { Spinner } from "react-bootstrap";
import ItemsCards from "@/components/search/cards/ItemsCards";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/ localStorageUtils";
import { useGetFilterOptionsQuery } from "@/store/services/searchOptions";
import { setSearchFilterData } from "@/store/slices/searchFilterSlice";
import { setSeletedPage } from "@/store/slices/paginationSlice";
import Company from "@/components/restaurantDetails/company/Company";
import SortModal from "@/components/global/sortModal/SortModal";

function renderComponentBasedOnSlug(slug: any) {
  switch (slug) {
    case "We-Sell-Restaurants-Community-Outreach":
      return <Community />;
    case "We-Sell-Restaurants-Press":
      return <WeSellRestaurantsPress />;
    case "We-Sell-Restaurants-Restaurant-Buying-Tools":
      return <BuyingTools />;
    case "We-Sell-Restaurants-Broker-Resources":
      return <BrokerResources />;
    case "We-Sell-Restaurants-Restaurant-Selling-Tools":
      return <BuyingTools />;
    default:
      return null;
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const nextData = useSelector((state: any) => state?.sendSearchName);
  console.log(nextData, "fkdsfksfklsjfkljfkfklsfkffk");

  const { data, isLoading, error } = useListByNameQuery(nextData);

  const selectedPage = useSelector((state: any) => state?.selectedPage);
  const { data: filterOptions } = useGetFilterOptionsQuery(null);
  const [getFilterDetails] = useGetFilterDetailsMutation();

  const usableData = data?.data || getDataFromLocalStorage("searchListData");

  useEffect(() => {
    saveDataToLocalStorage("searchListData", usableData);
  }, [usableData]);

  const combinedData = usableData?.blog?.concat(usableData?.listing);

  const blogArray = usableData?.blog;

  const extractedArray = blogArray?.map((blog: any) => {
    return {
      blog_title: blog.blog_title,
      blog_url: blog.blog_url,
    };
  });

  const quickInfoData = {
    heading: "We Sell Restaurants Core Values:",
    lists: [
      "We Know That Every Day is Game Day, and We A.C.T. Accordinginly",
      "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
      "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
      // "We Treat Each Other, Our Clients, and Internal Clients by the Golden Rule",
    ],
  };

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

  const renderedComponent = renderComponentBasedOnSlug(params?.slug);

  if (renderedComponent) {
    return renderedComponent;
  }

  return (
    <>
      <section id={styles.press}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.press} d-flex gap-4`}>
            <div className={`${styles.press_left}`}>
              <h2>{usableData?.details?.page_seo_title}</h2>
              <div className={`${styles.press_left_para}`}>
                <p>{parse(`${usableData?.details?.page_seo_content}`)}</p>
              </div>
              <div className={`${styles.press_left_down}`}>
                <h2>{usableData?.details?.page_seo_title}</h2>
                <div className={`${styles.press_filter}`}>
                  <select
                    name="sfilter"
                    className=""
                    onChange={handleFilterSelection}
                  >
                    <option value="">Filters</option>
                    {filterOptions?.data.map((item: any, index: any) => (
                      <option key={index} value={item?.id}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                  <div
                    style={{ position: "relative" }}
                    onClick={() => setShowModal(!showModal)}
                    className={styles.wsFilterSec_P}
                  >
                    SORT
                    <SortModal
                      show={showModal}
                      handleClose={handleCloseModal}
                    />
                  </div>
                </div>
                <div className={`${styles.press_cards}`}>
                  <div className={`${styles.press_show_cards} d-flex`}>
                    {combinedData?.map((item: any, i: any) => (
                      <li key={i}>
                        {item.blog_title ? (
                          <ArticlesCard
                            imgSrc={item?.blog_photo}
                            altText={item?.blog_photo}
                            description={item?.blog_title}
                            para={item?.preview_text}
                            videoUrl={null}
                          />
                        ) : (
                          <ItemsCards
                            imgSrc={item?.listing_media?.img_file}
                            altText={item?.listing_media?.img_file}
                            description={item?.bheadlinead}
                            location={`${item?.bcity} , ${item?.bstate}`}
                            price={item?.bamount}
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
                        )}
                      </li>
                    ))}
                  </div>
                  <div className={`${styles.press_pagination}`}>
                    {/* <Pagination /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.press_right}`}>
              <div className={styles.press_right_wrapper}>
                <QuickInfo
                  infoData={quickInfoData}
                  heading={usableData?.details?.name}
                />
                <div className={`${styles.content}`}>
                  <ContentCard
                    data={extractedArray}
                    heading={usableData?.details?.page_seo_title}
                    blogGuide={usableData?.details?.blog_guide}
                    blogChecklist={usableData?.details?.blog_checklist}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
