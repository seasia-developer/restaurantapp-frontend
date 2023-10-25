"use client";
import Link from "next/link";
import styles from "./footer.module.scss";
import { useGettingSearchRecoQuery } from "@/store/services/searchFilterApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSendSearchName } from "@/store/slices/sendSearchNameSlice";

export function SiteFooter() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data: footerList,
    error,
    isLoading,
  } = useGettingSearchRecoQuery(null);

  const originalArray = footerList?.data?.footer;

  const subarraySize = Math.ceil(originalArray?.length / 4);

  const subarrays = [];
  for (let i = 0; i < originalArray?.length; i += subarraySize) {
    subarrays.push(originalArray.slice(i, i + subarraySize));
  }

  const handleNextPage = (name: any) => {
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

  return (
    <footer>
      <div className={`${styles.wsrMiddleFooter}`}>
        <ul>
          <li>6 Meridian Home Ln. Ste 101</li>
          <li>Palm Coast</li>
          <li>FL 32137</li>
          <li>404-800-6700</li>
        </ul>
      </div>
      <div className={styles.wsrFooterBottom}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.wsrFlexContainer}>
            <div className={styles.footerBottomLeft}>
              <img
                src="https://www.wesellrestaurants.com/public/siteimages/new-wsrlogo.png"
                alt="esrLogo"
              />
            </div>
            <div className={styles.footerBottomRight}>
              <div className={styles.links}>
                <div className="row">
                  {subarrays?.map((item: any, index) => (
                    <div className="col-lg-3" key={index}>
                      <ul>
                        {item?.map((item: any, innerIndex: any) => (
                          <li key={innerIndex}>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => handleNextPage(item?.name)}
                            >
                              {item?.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wsrFooterCopyright}>
            <p>
              We Sell Restaurants
              <sup>®</sup>
              and the We Sell Restaurants logo are federally registered
              trademarks of WSR Holdings, LLC Copyright ©2023 We Sell
              Restaurants. All rights reserved.
              <a href="">Terms of Use</a>
              <span>|</span>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
