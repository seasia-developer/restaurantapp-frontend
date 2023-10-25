"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./view.module.scss";
import { useFlipBookQuery, useViewMutation } from "@/store/services/agreement";
import MapImg from "@/assets/map.png";
import Image from "next/image";
import Link from "next/link";
import streetOne from "@/assets/street-1.png";
import streetTwo from "@/assets/street-2.png";
import streetThree from "@/assets/street-3.png";
import Carousel from "react-multi-carousel";
import img from "@/assets/c_img.jpg";
import img2 from "@/assets/c_img2.jpg";
import mapRightImg from "@/assets/map-white.png";
import downloadImg from "@/assets/download-white.png";
import phoneImg from "@/assets/phone-white.png";
import "react-multi-carousel/lib/styles.css";
// import ProtectedRoute from "@/components/protected/ProtectedRoute";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import mail from "@/assets/m2.png";
import text from "@/assets/m1.png";
import fax from "@/assets/m3.png";
import Spinner from "react-bootstrap/Spinner";
import arrow from "@/assets/dublearrow.png";
import f2 from "@/assets/f2.png";
import f3 from "@/assets/f3.png";
import FALLBACK_IMG from "@/assets/icons8-no-image-80.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1135 },
    items: 2,
    slidesToSlide: 2,
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

const containerStyle = {
  width: "100%",
  height: "400px",
};

interface DefaultCenter {
  lat: any;
  lng: any;
}

const defaultCenter: DefaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

export default function Page() {
  const [view, { isLoading, data }] = useViewMutation();
  const [currentLocation, setCurrentLocation] = useState<any>(null);

  const [responseData, setResponseData] = useState<any>(null);

  const pdfId = responseData?.data?.data[0]?.listing?.id;

  const { data: pdfData } = useFlipBookQuery(`5/bat`);

  const route = useRouter();

  useEffect(() => {
    const ListingId = localStorage.getItem("id");
    const handleViewData = async () => {
      try {
        const response = await view(ListingId);
        setResponseData(response);
      } catch (error) {
        console.error(error);
      }
    };
    handleViewData();
  }, []);

  const ref: any = useRef();

  const handleMap = (e: any) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleFetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not available in this browser.");
      }
    };

    handleFetchLocation();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB1cOcctmz0lZIRE9TqDnZn_1oeLA-kwMI",
  });

  const dataa = [
    { img, img2 },
    { img2, img },
  ];

  let carouselItems;
  if (responseData?.data?.data[0]?.listing_Submedia?.length > 0) {
    carouselItems = responseData?.data?.data[0]?.listing_Submedia.map(
      (item: any, index: any) => {
        return (
          <div key={index}>
            <div className={` ${style.CardMain}`}>
              <img
                src={`https://stgps.appsndevs.com/wsrrebuild/backend/storage/images/list/sub_images/${item.sub_img_file}`}
                alt={item.sub_img_file}
                className="img-fluid p-2"
              />
            </div>
            <div className={` ${style.CardMain}`}>
              <img
                src={`https://stgps.appsndevs.com/wsrrebuild/backend/storage/images/list/sub_images/${item.sub_img_file}`}
                alt={item.sub_img_file}
                className="img-fluid p-2"
              />
            </div>
          </div>
        );
      }
    );
  } else {
    carouselItems = dataa.map((item, index) => {
      return (
        <div key={index}>
          <div className={` ${style.CardMain}`}>
            <Image src={item.img} className="img-fluid p-2" alt="not found" />
          </div>
          <div className={` ${style.CardMain}`}>
            <Image src={item.img2} className="img-fluid p-2" alt="not found" />
          </div>
        </div>
      );
    });
  }

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  if (
    typeof localStorage !== "undefined" &&
    !Boolean(localStorage.getItem("wsr_token"))
  ) {
    return route.push("/");
  }

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="danger" className="spinner" />
      ) : (
        ""
      )}
      {responseData?.data?.code == 302 || responseData?.data?.code == null ? (
        <div className={style.view}>
          <div className="container">
            <div className={style.viewBg}>
              <h2 className="text-center">{responseData?.data?.data}</h2>
            </div>
          </div>
        </div>
      ) : responseData?.data?.data[0]?.listing?.isBat == "Yes" &&
        responseData?.data?.data[0]?.listing?.bprequalification == "Yes" &&
        responseData?.data?.data[0]?.listing?.bprivatelist == "Yes" ? (
        <div className={style.view}>
          <div className="container">
            <div className={style.viewBg}>
              <div className="row">
                <div className="col-md-10">
                  <div className={style.changeModel}>
                    <div className={style.modelDiaglog}>
                      <div className={style.modelHeader}>
                        <div className={style.headContent}>
                          <h5 className="text-white mb-2 fw-bold">
                            Thank You For Your Interest!
                          </h5>
                          <h5 className=" text-white">
                            We Have Received Your Request for More Information
                          </h5>
                        </div>
                      </div>
                      <div className={style.modelBody}>
                        <div className="row">
                          <div className="col-lg-6">
                            <p className={style.thanksHead}>
                              Our client or franchise requires interested buyers
                              show proof of funds of at least $
                              {responseData?.data?.data[0]?.listing?.bamount}{" "}
                              liquidity prior to releasing these details about
                              their business.
                            </p>
                            <h5>We need proof of funds in the form of a:</h5>
                            <ul>
                              <li>
                                <p>Bank statement</p>
                              </li>
                              <li>
                                <p>Brokerage account statement</p>
                              </li>
                              <li>
                                <p>Franchise approval letter</p>
                              </li>
                              <li>
                                <p>Letter from bank stating liquidity</p>
                              </li>
                            </ul>
                            <p>
                              If we already have this information, we will send
                              a full document on the listing shortly.
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <p>Cross out account number(s) and submit via:</p>
                            <div className={style.thanksEmail}>
                              <div className={style.emailIcon}>
                                <Image src={mail} alt="mail-Image"></Image>
                              </div>
                              <div className={style.emailContent}>
                                <p>Email</p>
                                <Link href="#">
                                  Tess@wesellrestaurants.com,
                                </Link>
                                <br />
                                <p>or direct to listing agent</p>
                              </div>
                            </div>
                            <div className={style.thanksEmail}>
                              <div className={style.emailIcon}>
                                <Image src={text} alt="text-Image"></Image>
                              </div>
                              <div className={style.emailContent}>
                                <p>Text</p>
                                <p>
                                  <span>a screenshot to </span>
                                  <Link href="#">404-800-6700</Link>
                                </p>
                              </div>
                            </div>
                            <div className={style.thanksEmail}>
                              <div className={style.emailIcon}>
                                <Image src={fax} alt="fax-Image"></Image>
                              </div>
                              <div className={style.emailContent}>
                                <p>Fax</p>
                                <p>
                                  <span>to </span>
                                </p>
                                <Link href="#">1.888.668.8626</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.thanksFooter}></div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-2 ${style.rightMiddle}`}>
                  <Link href="/broker-listing-email">
                    <div className={style.rightIcon}>
                      <Image src={phoneImg} alt="rightImg" />
                      <h4>
                        Contact <br />
                        Agent
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.view}>
          <div className="container">
            <div className={style.viewBg}>
              <h2 className="px-2">
                {responseData?.data?.data[0]?.listing?.bheadlinead}&nbsp;&nbsp;
                <span>{responseData?.data?.data[0]?.listing?.baddress}</span>
                <Image src={MapImg} alt="MapImg" className={style.MapImg} />
              </h2>
              <div className={`row ${style.middleRow}`}>
                {responseData?.data?.data[0]?.listing?.isBat == "Yes" ||
                responseData?.data?.data[0]?.listing?.bprequalification ==
                  "No" ||
                responseData?.data?.data[0]?.listing?.bprivatelist == "No" ? (
                  <div className={`col-sm-8 col-md-10`} id="test">
                    {responseData?.data?.data[0]?.listing?.isBat == "Yes" ? (
                      <iframe
                        src={`https://stgps.appsndevs.com/wsrrebuild/backend/api/flip-book/${pdfId}/bat`}
                        width="100%"
                        height="600"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <iframe
                        src={`https://stgps.appsndevs.com/wsrrebuild/backend/api/flip-book/${pdfId}/art`}
                        width="100%"
                        height="600"
                        allowFullScreen
                      ></iframe>
                    )}

                    <div>{/* {pdfData?.data} */}</div>
                    <div className={style.GuideIcon}>
                      <p>
                        <Image src={f2} alt="image" /> Please use the
                        <Image
                          src={arrow}
                          alt="image"
                          width="25"
                          height="25"
                        />{" "}
                        icon to view full screen
                        <Image src={f3} alt="image" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`col-sm-8 col-md-10 d-flex align-items-center justify-content-center text-center`}
                  >
                    Missing PDF
                    "https://staging.wesellrestaurants.com/public/uploads/docs/art_listing_6593_pdf.pdf".
                  </div>
                )}
                <div className={`col-sm-4 col-md-2 ${style.rightMiddle}`}>
                  <Link href="#" onClick={handleMap}>
                    <div className={style.rightIcon}>
                      <Image src={mapRightImg} alt="rightImg" />
                      <h4>See Map</h4>
                    </div>
                  </Link>
                  <Link href="/broker-listing-email">
                    <div className={style.rightIcon}>
                      <Image src={phoneImg} alt="rightImg" />
                      <h4>
                        Contact <br />
                        Agent
                      </h4>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={style.rightIcon}>
                      <Image src={downloadImg} alt="rightImg" />
                      <h4>
                        Download <br /> Info
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className={`col-lg-5 p-5 ${style.videoLeft}`}>
                  <iframe
                    src="//www.youtube.com/embed/VYE9kLS-vio"
                    height="315"
                    width="560"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-lg-7 p-5">
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
                    className={style.Carousel}
                  >
                    {carouselItems}
                  </Carousel>
                </div>
              </div>
              <div className={`row ${style.streetSteps}`}>
                <div className="col-lg-6">
                  <h2>Next Steps</h2>
                  <div className={style.stepLeft}>
                    <div className={style.stepIcon}>
                      <Image src={streetOne} alt="streetOne"></Image>
                    </div>
                    <div>
                      <p>
                        1. Review the package provided to determine if this is
                        an opportunity you wish to pursue.
                      </p>
                    </div>
                  </div>
                  <div className={style.stepLeft}>
                    <div className={style.stepIcon}>
                      <Image src={streetTwo} alt="streetTwo"></Image>
                    </div>
                    <div>
                      <p>
                        2. Visit the location (if open) as a{" "}
                        <Link href="#">Secret Shopper</Link> to observe
                        operations and see the restaurant in person.
                      </p>
                    </div>
                  </div>
                  <div className={style.stepLeft}>
                    <div className={style.stepIcon}>
                      <Image src={streetThree} alt="streetThree"></Image>
                    </div>
                    <div>
                      <p>
                        3. Contact the agent to schedule a meeting with the
                        seller.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 mb-4 ${style.streetRight}`}>
                  <h2>Listing Agent</h2>
                  <div className={style.listingAgent}>
                    <div className={style.listingImg}>
                      {responseData?.data?.data[0]?.agent_img?.img == null ||
                      responseData?.data?.data[0]?.agent_img?.img ==
                        undefined ? (
                        <Image src={FALLBACK_IMG} alt="" />
                      ) : (
                        <img
                          src={`https://stgps.appsndevs.com/wsrrebuild/backend/storage/images/users/${responseData?.data?.data[0]?.agent_img?.img}`}
                          alt={responseData?.data?.data[0]?.agent_img?.img}
                          className="img-fluid"
                        />
                      )}
                    </div>
                    <div className={style.agentTxt}>
                      <p className="text-danger">
                        {responseData?.data?.data[0]?.listing?.agent?.firstname}
                        {responseData?.data?.data[0]?.listing?.agent?.lastname}
                      </p>
                      <p>
                        {responseData?.data?.data[0]?.listing?.agent?.title}
                      </p>
                      <p>
                        {responseData?.data?.data[0]?.listing?.agent?.homephone}
                      </p>
                      <p>
                        {responseData?.data?.data[0]?.listing?.agent?.email}
                      </p>
                    </div>
                  </div>
                  <div className={style.agentBtn}>
                    <Link href="/broker-listing-email">Contact Agent</Link>
                  </div>
                </div>
              </div>
              <div ref={ref}>
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation || defaultCenter}
                    zoom={15}
                  >
                    {currentLocation && <Marker position={currentLocation} />}
                    <></>
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {show ? (
            <div className="modal" style={{ display: "block", top: "220px" }}>
              <Modal.Dialog onClick={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <video controls autoPlay className="w-100">
                    <source
                      src="https://www.wesellrestaurants.com/public/ckeditor/ca.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Modal.Body>
              </Modal.Dialog>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
