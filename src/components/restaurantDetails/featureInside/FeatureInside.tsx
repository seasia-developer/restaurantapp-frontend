"use client";
import React, { useEffect, useState } from "react";
import style from "./featureInside.module.scss";
import Link from "next/link";
import RobinImg from "@/assets/robin.png";
import Image from "next/image";
import { CardDown } from "@/assets/icons";
import Phone from "@/assets/ph-icon2.png";
import ItemsCards from "@/components/search/cards/ItemsCards";
import ITEMimg from "@/assets/timthumb.jpeg";
import spoon from "@/assets/spoon.png";
import EmailListing from "@/assets/email-listing.png";
import addressListing from "@/assets/address-listing.png";
import Data from "./Data.json";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/utils/ localStorageUtils";
import {
  useGetAlsoSearchMutation,
  useRecommendedListIdMutation,
  useSearchFilterIdMutation,
} from "@/store/services/searchFilterApi";
import searchFilterIdSlice, {
  setSearchFilterIdData,
} from "@/store/slices/searchFilterIdSlice";
import { useRouter } from "next/navigation";
import { setSendSearchName } from "@/store/slices/sendSearchNameSlice";
import novid from "@/assets/icons8-no-image-80.png";
import { getToken } from "@/components/protected/ProtectedRoute";
import sold from "@/assets/sold.png";
import bgGradeList from "@/assets/Logo_small.png";
import { getAgentListId } from "@/store/slices/agentListIdSlice";
import { useEmailBrokerMutation } from "@/store/services/agreement";
import { getAgentDetailedList } from "@/store/slices/agentDetailedListSlice";

// const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function FeatureInside() {
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL_AGENT;
  console.log(IMG_URL,"IMG_URL")
  
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [infoSlt, setInfoSlt] = useState("Firstcard");
  const [errorVid, setErrorVid] = useState(false);
  const [imgAGENTerror, setImgAGENTerror] = useState(false);
  const [featureImgError, setFeatureImgError] = useState(false);

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [nameError,setNameError] = useState("");
  const [emailError,setEmailError] = useState("");
  const [phoneError,setPhoneError] = useState("");
  const [isRecaptchaValid, setRecaptchaValid] = useState(false);
 
  const [recommendedList, setRecommendedList] =
    useState<any>(null) || getDataFromLocalStorage("recommendedList");

  const [alsoSearchList, setAlsoSearchList] =
    useState<any>(null) || getDataFromLocalStorage("alsoSearchList");

  const dataRedux =
    useSelector((state: any) => state?.searchFilterId?.data) ||
    getDataFromLocalStorage("dataReduxId");

  useEffect(() => {
    saveDataToLocalStorage("dataReduxId", dataRedux);
  }, [dataRedux]);

  console.log(dataRedux,"dataRedux")

  const agentImage = dataRedux?.data?.[0]?.agent_img?.img;
  console.log(agentImage,"agentImage");
  
  const state = dataRedux?.data?.[0]?.listing;
  const finance = dataRedux?.data;
  const alsoSearch = state?.id;

  const [getAlsoSearch] = useGetAlsoSearchMutation();
  const [searchFilterId] = useSearchFilterIdMutation();
  const [EmailBroker] = useEmailBrokerMutation();

  const [recommendedListId, { data, isLoading }] =
    useRecommendedListIdMutation();

  useEffect(() => {
    const fetchRecommendedList = async () => {
      try {
        const response: any = await recommendedListId(state?.bstate);
        setRecommendedList(response?.data); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendedList();
  }, [state?.bstate]);

  useEffect(() => {
    const fetchAlsoSearchList = async () => {
      try {
        const response: any = await getAlsoSearch(alsoSearch);
        setAlsoSearchList(response?.data); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlsoSearchList();
  }, [alsoSearch]);

  useEffect(() => {
    saveDataToLocalStorage("recommendedList", recommendedList);
  }, [recommendedList]);

  useEffect(() => {
    saveDataToLocalStorage("alsoSearchList", alsoSearchList);
  }, [alsoSearchList]);

  const htmlString = `${state?.bdetailedad}`;

  const handlePhoneOpen = () => {
    setIsPhoneOpen(!isPhoneOpen);
  };

  const handleNextoId = async (goToData: any) => {
    let name: any = goToData?.name;
    let id: any = goToData?.id;

    try {
      if (name) {
        let pushName = name;

        dispatch(setSendSearchName(pushName));
        router.push(
          `/restaurants-for-sale/${name
            .replace(/[\/()|]/g, "-")
            .replace(/\s+/g, "-")}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleErrorVid = () => {
    setErrorVid(!errorVid);
  };

  const handleAgentIMGError = () => {
    setImgAGENTerror(!imgAGENTerror);
  };

  const handleFeatureImgError = () => {
    setFeatureImgError(!featureImgError);
  };
  const token = getToken();

  const handleToken = (e: any) => {
    e.preventDefault();
    if (token.headers.Authorization === "Bearer null") {
      return router.push("/sign-in");
    } else {
      return router.push(`/confirm-agreement?url=${state?.id}`);
    }
  };

  const handleAgentList = (id: any) => {
    dispatch(getAgentListId(id));
    router.push("/agent-listings");
  };

  const validName=()=>{
    if(!name){
      setNameError("This field is required.")
    }else{
      setNameError("");
    }
  }

  const validEmail=()=>{
    if(!email){
      setEmailError("This field is required.")
    }else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.")
    }else{
      setEmailError("");
    }
  }

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone Number is required");
    } else if (phone.length <= 10) {
      setPhoneError("Invalid Phone Number format");
    } else {
      setPhoneError("");
    }
  };

  const handleRecaptchaVerify = (response: string | null) => {
    if (response) {
      setRecaptchaValid(true);
    } else {
      setRecaptchaValid(false);
    }
  };


  const handleSubmit=(e:any)=>{
    e.preventDefault();
    validName();
    validEmail();
    validatePhone()
    if(!emailError && !phoneError && !nameError){ 
      EmailBroker({name, phone, email})
      .unwrap()
      .then((user: any)=>{
        console.log(user,"user")
        dispatch({type:"AgreementApi",payload: user})
      })
      .catch((error: any)=>{
        console.error(error)
      })
    }
  }


  const handleDetailedList = (state: any, name: any, id: any) => {
    let iD = id;
    dispatch(getAgentDetailedList(iD));
    router.push(`/restaurant-broker/${state}/${name}/${id}`);
    console.log("is something is clicked???", state, name, id);
  };

  return (
    <div className={style.innerListing}>
      <div className="container ">
        <div className="row">
          <div className="col-lg-9">
            <div className={style.listingDetail}>
              <div className="d-flex align-items-center flex-wrap">
                <div className={style.itemLeft}>
                  <div className={style.spoonImg}>
                    <Image src={spoon} alt="spoon" />
                  </div>
                </div>
                <div className={style?.topList}>
                  <ul>
                    <li>
                      <Link href="#">NAME & ADDRESS</Link>
                      <Image src={addressListing} alt="addressListing" />
                    </li>
                    <li>
                      <Link href="#">TEXT/EMAIL</Link>
                      <Image src={EmailListing} alt="addressListing" />
                    </li>
                  </ul>
                </div>
              </div>

              {dataRedux?.data?.[0]?.listing === null && (
                <div className="container py-5">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="card  border-0">
                        <div className="card-body text-center">
                          <h3 className="mb-4">No Listing Found</h3>
                          <p className="lead">
                            We couldn't find any listings matching your search
                            criteria.
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
              {state && (
                <>
                  <div className={style.listingContent}>
                    <h2>{state?.bheadlinead}</h2>
                    {state?.bstatuslist === "Sold" && (
                      <div>
                        <Image src={sold} alt="not found" />
                      </div>
                    )}

                    <p>{state?.bheadlinead}</p>

                    {parse(htmlString)}
                  </div>
                  <div className={style.ListBtnGroup}>
                    <Link
                      href={`/confirm-agreement?url=${state?.id}`}
                      className="text-white"
                      onClick={handleToken}
                    >
                      Click for Name & Address
                    </Link>
                    <Link
                      href={`/confirm-agreement?url=${state?.id}`}
                      className="text-white"
                      onClick={handleToken}
                    >
                      Click for More Photos
                    </Link>
                  </div>

                  <div className="row p-4">
                    <div className="col-lg-6">
                      <h3>Listing</h3>
                      <div className={style.listingTop}>
                        <ul>
                          <li>
                            <strong>Listing#:</strong>
                            {state?.id}
                          </li>
                          <li>
                            <strong>Price:</strong> ${state?.bsaleprice}
                          </li>
                          <li>
                            <strong>Location:</strong>
                            {state?.listing_state?.name}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row p-4">
                    <div className="col-md-7">
                      <div className={style.tabs}>
                        <ul>
                          <li
                            className={
                              infoSlt == "Firstcard"
                                ? `${style.CardBtn}`
                                : `${style.CardBtnBlack}`
                            }
                          >
                            <span>{CardDown}</span>
                            <button onClick={() => setInfoSlt("Firstcard")}>
                              Property Info
                            </button>
                          </li>
                          <li
                            className={
                              infoSlt == "Secondcard"
                                ? `${style.CardBtn}`
                                : `${style.CardBtnBlack}`
                            }
                          >
                            <span>{CardDown}</span>
                            <button onClick={() => setInfoSlt("Secondcard")}>
                              Operations
                            </button>
                          </li>
                          <li
                            className={
                              infoSlt == "Thirdcard"
                                ? `${style.CardBtn}`
                                : `${style.CardBtnBlack}`
                            }
                          >
                            <span>{CardDown}</span>
                            <button onClick={() => setInfoSlt("Thirdcard")}>
                              Finance
                            </button>
                          </li>
                        </ul>

                        <div>
                          {infoSlt === "Firstcard" && (
                            <PropertyInfo state={state} />
                          )}
                          {infoSlt === "Secondcard" && (
                            <Operations state={state} />
                          )}
                          {infoSlt === "Thirdcard" && (
                            <Finance finance={finance} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className={style.newForm}>
                        <div className={style.fullSearchForm}>
                          <form onSubmit={handleSubmit}>
                            <button type="submit">Email Restaurant Broker</button>
                            <div className={style.businessLsd}>
                              <div className={style.imgRow}>
                                <div className={style.Img}>
                                  <a>
                                    {!imgAGENTerror ? (
                                      <img
                                        src={`${IMG_URL}/storage/images/users/${agentImage}`}
                                        alt={`${agentImage}`}
                                        onError={handleAgentIMGError}
                                        onClick={() =>
                                          handleDetailedList(
                                            finance?.[0]?.agents?.agent_state
                                              ?.name,
                                            finance?.[0]?.agents?.firstname,
                                            finance?.[0]?.agents?.id
                                          )
                                        }
                                      ></img>
                                    ) : (
                                      <Image
                                        src={novid}
                                        alt="not found"
                                        onClick={() =>
                                          handleDetailedList(
                                            finance?.[0]?.agents?.agent_state
                                              ?.name,
                                            finance?.[0]?.agents?.firstname,
                                            finance?.[0]?.agents?.id
                                          )
                                        }
                                      />
                                    )}
                                  </a>
                                </div>
                                <div className={style.imgTxt}>
                                  Business listed by:
                                  <div>
                                    <a>
                                      <strong
                                        onClick={() =>
                                          handleDetailedList(
                                            finance?.[0]?.agents?.agent_state
                                              ?.name,
                                            finance?.[0]?.agents?.firstname,
                                            finance?.[0]?.agents?.id
                                          )
                                        }
                                      >
                                        {finance?.[0]?.agents?.firstname}
                                      </strong>
                                    </a>
                                  </div>
                                  <div>
                                    <strong>
                                      {finance?.[0]?.agents?.title}
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div className={style.showNum}>
                                <Image src={Phone} alt="Phone-Icon" className="mx-2"/>
                                {isPhoneOpen ? (
                                  <span onClick={handlePhoneOpen}>
                                    HIDE PHONE NUMBER <br />{" "}
                                    {finance?.[0]?.agents?.cellphone}
                                  </span>
                                ) : (
                                  <span onClick={handlePhoneOpen}>
                                    SHOW PHONE NUMBER
                                  </span>
                                )}
                              </div> 
                              <div className={style.viewListing}>
                                <a
                                  className="cursorPointer"
                                  onClick={() =>
                                    handleAgentList(finance?.[0]?.agents?.id)
                                  }
                                >
                                  View My Listings
                                </a>
                              </div>
                              <div className="form-group mb-4">
                                <input
                                  type="text"
                                  className={style.form_group}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Your Name"
                                  value={name}
                                  onChange={(e)=>{setName(e.target.value);validName()}}
                                  onBlur={validName}
                                />
                                {nameError && <span className="text-danger">{nameError}</span>}
                              </div>
                              <div className="form-group mb-4">
                                <input
                                  type="text"
                                  className={style.form_group}
                                  id="exampleInputPassword1"
                                  placeholder="Your Phone"
                                  value={phone}                    
                                  onChange={(e) => { 
                                    const inputValue = e.target.value.replace(/\D/g, "");
                                    if (inputValue.length <= 10) {
                                      const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                                      setPhone(formattedValue);
                                    }
                                    validatePhone();
                                  }}
                                />
                                {phoneError && <span className="text-danger">{phoneError}</span>}
                              </div>
                              <div className="form-group mb-4">
                                <input
                                  type="email"
                                  className={style.form_group}
                                  id="exampleInputPassword1"
                                  placeholder="Your Email"
                                  value={email}
                                  onChange={(e)=>{setEmail(e.target.value);validEmail()}}
                                  onBlur={validEmail}
                                />
                                {emailError && <span className="text-danger">{emailError}</span>}
                              </div>
                              <div className="form-group mb-4">
                                <textarea
                                  name="information"                            
                                  placeholder="Please send me additional information about this listing"
                                  value={message}
                                  onChange={(e)=>{setMessage(e.target.value)}}
                                ></textarea>
                              </div>
                              <div><ReCAPTCHA sitekey="6LdHfd8nAAAAABp05e6MytNJf3caS9eDp6bBAMpD" onChange={handleRecaptchaVerify} required/></div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.recommendedListing}>
                    <h3>Recommended for you</h3>
                    <div className="row justify-content-between">
                      <div
                        className={`${style.recommendedListing_Left} col-lg-3`}
                      >
                        {recommendedList?.data?.map((item: any, index: any) => (
                          <li className={style.iCard} key={index}>
                            <ItemsCards
                              imgSrc={item?.listing_media?.img_file}
                              altText={item?.listing_media?.img_file}
                              description={item?.bheadlinead}
                              location={item?.listing_state?.name}
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
                      </div>

                      <div className="col-lg-3">
                        <div className={style.wseSearch}>
                          <Image src={spoon} alt="spoon"></Image>
                          <h2>Also Search</h2>
                        </div>
                        <div className={style.bottomright}>
                          <div className={style.links}>
                            {alsoSearchList?.data?.map(
                              (item: any, index: any) => {
                                let goToData = {
                                  id: item?.id,
                                  name: item?.name,
                                };

                                return (
                                  <div key={index}>
                                    <a
                                      style={{ cursor: "pointer" }}
                                      onClick={() => handleNextoId(goToData)}
                                    >
                                      {item?.name}
                                    </a>
                                    <br />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-3">
            <div className={style.detailsRight}>
              <div className={style.detailBG}>
                {!featureImgError ? (
                  <Link href="#">
                    <div className={style.wsCardItems_img}>
                      <img
                        src={`${IMG_URL}/${state?.listing_media?.img_file}`}
                        alt={state?.listing_media?.img_file}
                        onError={handleFeatureImgError}
                        onClick={handleToken}
                      ></img>
                      {state?.bgradelist === "Certified Pre-Owned" && (
                        <Image
                          className={style.bgGradeList}
                          src={bgGradeList}
                          alt=""
                          onClick={handleToken}
                        />
                      )}
                    </div>
                  </Link>
                ) : (
                  <Image
                    style={{ height: "100%" }}
                    src={novid}
                    alt="not found"
                    onClick={handleToken}
                  />
                )}
              </div>
            </div>
            <Link href="#" className={style.stepsLink}>
              <div className={style.linkBg} onClick={handleToken}>
                <h2>
                  <span>STEP ONE TO</span>
                </h2>
                <h3>OWNERSHIP</h3>
                <div className={style.acknowledge}>
                  ACKNOWLEDGE
                  <br />
                  CONFIDENTIALITY
                </div>
                <p>
                  For Additional photos, financial information and equipment
                  list
                </p>
              </div>
            </Link>
            {/* <div className={style.RightVideo}>
              <div style={{ paddingTop: "0" }} className={style.detailsRight}>
                <div
                  style={{ position: "relative" }}
                  className={style.detailBG}
                >
                  <Link href={`${state?.listing_media?.video}`}>
                    {!errorVid ? (
                      <>
                        <img
                          src={`${IMG_URL}/${state?.listing_media?.video}`}
                          alt={state?.listing_media?.video}
                          onError={handleErrorVid}
                        ></img>
                        <Image
                          style={{
                            width: "53px",
                            height: "45px",
                            position: "absolute",
                            top: "37%",
                            right: "39%",
                          }}
                          alt="not found"
                          src={youtube}
                        />
                      </>
                    ) : (
                      <Image
                        style={{ height: "100%" }}
                        src={novid}
                        alt="not found"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const PropertyInfo = (state: any) => {
  return (
    <div className={style.tabContent}>
      <div className={style.tabPane}>
        <p>
          <b>Lease Term:</b>
          {state?.state?.listing_occupancy_lease?.lterm}
        </p>
        <p>
          <b>Monthly Rent:</b>
          {state?.state?.listing_occupancy_lease?.ltotalmonthrent}
        </p>
        <p>
          <b>Indoor Seating:</b>
          {state?.state?.listing_ops?.noinsideseats}
        </p>
        <p>
          <b>Inside Sq. Ft:</b>
          {state?.state?.listing_occupancy_lease?.linsidesqt}
        </p>
        <p>
          <b>Hood System:</b>
          {state?.state?.listing_ops?.hoodsystem}
        </p>
        {/* <p>
          <b>Neighboring Businesses:</b>
          {}
        </p> */}
      </div>

      {state?.state?.listing_headlines && (
        <>
          <h3>Features</h3>
          <ul>
            {/* {state &&
              state?.state?.listing_headlines.map((elem: any, ind: any) => {
                return <li>{`${elem?.adline}+${ind + 1}`}</li>;
              })} */}

            <li>{state?.state?.listing_headlines?.adline1}</li>
            <li>{state?.state?.listing_headlines?.adline2}</li>
            <li>{state?.state?.listing_headlines?.adline3}</li>
            <li>{state?.state?.listing_headlines?.adline4}</li>
            <li>{state?.state?.listing_headlines?.adline5}</li>
            <li>{state?.state?.listing_headlines?.adline6}</li>
            <li>{state?.state?.listing_headlines?.adline7}</li>
            <li>{state?.state?.listing_headlines?.adline8}</li>
            <li>{state?.state?.listing_headlines?.adline9}</li>
            <li>{state?.state?.listing_headlines?.adline10}</li>
            <li>{state?.state?.listing_headlines?.adline11}</li>
            <li>{state?.state?.listing_headlines?.adline12}</li>
          </ul>
        </>
      )}
    </div>
  );
};

const Operations = (state: any) => {
  return (
    <div className={style.tabContent}>
      <div className={style.tabPane}>
        <p>
          <b>Hours Open:</b>
          {state?.state?.listing_ops?.operatinghours}
        </p>
        <p>
          <b># of Part-Time Employees:</b>
          {state?.state?.listing_ops?.noparttimeemp}
        </p>
        <p>
          <b># of Full-Time Employees:</b>
          {state?.state?.listing_ops?.nofulltimeemp}
        </p>
      </div>
      {state?.state?.listing_headlines && (
        <>
          <h3>Features</h3>
          <ul>
            <li>{state?.state?.listing_headlines?.adline1}</li>
            <li>{state?.state?.listing_headlines?.adline2}</li>
            <li>{state?.state?.listing_headlines?.adline3}</li>
            <li>{state?.state?.listing_headlines?.adline4}</li>
            <li>{state?.state?.listing_headlines?.adline5}</li>
            <li>{state?.state?.listing_headlines?.adline6}</li>
            <li>{state?.state?.listing_headlines?.adline7}</li>
            <li>{state?.state?.listing_headlines?.adline8}</li>
            <li>{state?.state?.listing_headlines?.adline9}</li>
            <li>{state?.state?.listing_headlines?.adline10}</li>
            <li>{state?.state?.listing_headlines?.adline11}</li>
            <li>{state?.state?.listing_headlines?.adline12}</li>
          </ul>
        </>
      )}
    </div>
  );
};

const Finance = (finance: any) => {
  const financeTwo = finance?.finance?.[0];

  return (
    <div className={style.tabContent}>
      <div className={style.tabPane}>
        <p>
          <b>Net Sales:</b>${financeTwo?.grossSales}
        </p>
        <p>
          <b>Owner Benefit:</b> ${financeTwo?.ownerBenefit}
        </p>
      </div>
      {financeTwo?.listing?.listing_headlines && (
        <>
          <h3>Features</h3>
          <ul>
            <li>{financeTwo?.listing?.listing_headlines?.adline1}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline2}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline3}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline4}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline5}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline6}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline7}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline8}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline9}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline10}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline11}</li>
            <li>{financeTwo?.listing?.listing_headlines?.adline12}</li>
          </ul>
        </>
      )}
    </div>
  );
};
