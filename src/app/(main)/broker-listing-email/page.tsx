"use client"
import React, { useEffect, useState } from "react";
import style from "./broker.module.scss";
import agentArrow from "@/assets/contact-agentarrow.png";
import Link from "next/link";
import Image from "next/image";
import { useViewMutation } from "@/store/services/agreement";

export default function Page() {

  const [view, { isLoading, data }] = useViewMutation();
  const [responseData, setResponseData] = useState<any>(null);
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

  

  return (
    <div className={style.brokerMain}>
      {isLoading?<div className="mx-5">Loading...</div>:
      <div className="container">
        <div className={style.brokerBg}>
          <h2 className={style.mainHeading}>Contact Us</h2>
          <div className={`row ${style.listingRow}`}>
            <ul className="col-lg-12">
              <li className="col-lg-12">
                <div className={style.agentHdr}>Listing {responseData?.data?.data[0]?.listing?.id}</div>
                <div className={style.restaurentTxt}>
                  Restaurant Name: {responseData?.data?.data[0]?.listing?.bheadlinead}
                  <br />
                  Street Address: {responseData?.data?.data[0]?.listing?.baddress}  
                  <br />
                  State: {responseData?.data?.data[0]?.listing?.agent?.state}
                  <br />
                  Zip: {responseData?.data?.data[0]?.listing?.agent?.zipcode}
                </div>
                <div className={style.restaurentTxt}>
                  <div className={style.agentImg}>
                    <img  src={`https://stgps.appsndevs.com/wsrrebuild/backend/storage/images/users/${responseData?.data?.data[0]?.agent_img?.img}`} alt={responseData?.data?.data[0]?.agent_img?.img} />
                  </div>
                  <div className={style.agentImg_txt}>
                    <p>Agent: {responseData?.data?.data[0]?.listing?.agent?.firstname} {responseData?.data?.data[0]?.listing?.agent?.lastname}</p>
                    <div>
                        <p>{responseData?.data?.data[0]?.listing?.agent?.homephone}</p>
                      <Link href="#">{responseData?.data?.data[0]?.listing?.agent?.email}</Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.contactForm}>
            <form>
              <div className={`row ${style.formGroup}`}>
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <h2>
                    <span>To:</span>
                    <span> Justin Scotto</span>
                  </h2>
                  <Image
                    src={agentArrow}
                    alt="agentArrow"
                    className={style.imgArrow}
                  />
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="YourName" className={style.title}>
                  Your Name:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input type="text" className="form-control" id="YourName" value={responseData?.data?.data[0]?.user_name} disabled/>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Email" className={style.title}>
                  Your Email:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input type="text" className="form-control" id="Email" value={responseData?.data?.data[0]?.user_email} disabled/>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Subject" className={style.title}>
                  Subject:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input type="text" className="form-control" id="Subject" />
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="help" className={style.title}>
                  How can we help you?
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input type="text" className="form-control" id="help" />
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="help" className={style.title}>             
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
