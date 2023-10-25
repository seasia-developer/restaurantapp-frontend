"use client";
import React, { useState } from "react";
// import VectorMap  from "react-jvectormap";
import style from "./contact.module.scss";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FaceBook, Instagram, LinkedIn, Mail, YouTube } from "@/assets/icons";
import { useRequestInfoMutation } from "@/store/services/agreement";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetAgentOfficeQuery } from "@/store/services/searchOptions";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
  Polyline,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";
import mapStyle from "./custom-map-style.json";
// import battery from "../../assets/images/batterystation.svg";
import { laneMarker, laneRoute } from "./index";



export default function Page() {
  const [firstname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const [lastname, setLastName] = useState("");
  const [infoWindowOpen, setInfoWindowOpen] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isRecaptchaValid, setRecaptchaValid] = useState(false);


  // const containerStyle = {
  //   width: "100%",
  //   height: "100vh",
  // };

  // const center = {
  //   lat: 34.5204,
  //   lng: -105.8567,
  // };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyBfdojs-7nzgqQyrhjFJDbEo_1q87ZPuzw",
  // });

  // const [coordinates] = useState([
  //   {
  //     latitude: 34.397,
  //     longitude: -82.9603,
  //   },
  //   {
  //     latitude: 36.397,
  //     longitude: -87.9603,
  //   },
  // ]);

  const mapData = {
    NY: 4,
    VA: 9,
    CA: 19,
    WA: 36,
    SC: 3,
    NC: 15,
    TX: 67,
    HI: 45,
  };

  const [requestInfo] = useRequestInfoMutation();

  const { data: agentData } = useGetAgentOfficeQuery(undefined);

  console.log(agentData?.data[0]?.id, "agentDataagentData");

  const dispatch = useDispatch();
  const route = useRouter();
  
  const validateName = () => {
    if (!firstname) {
      setNameError("This field is required.");
    }else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

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


  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateEmail();
    validatePhone();
    validateName();
    if(!emailError && !phoneError && !nameError){
      requestInfo({ firstname, email, phone, state: selectedAgentId, lastname })
      .unwrap()
      .then((user: any) => {
        if (user?.code == 200) {
          dispatch({ type: "AgreementApi", payload: user });
          route.push("/contact-restaurant-broker-near-me");
          setName("");
          setEmail("");
          setPhone("");
          setSelectedAgentId("");
          setLastName("");
        }
      })
      .catch((error: any) => {
        const showError = error;
        console.error("failed:", error);
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className={style.mapHead}>
          <h2>Contact We Sell Restaurants</h2>
          <div style={{ width: "100%" }} className={style.mapBackground}>
            
          </div>
        </div>
      </div>
      <div className={style.contact}>
        <div className="container">
          <div className={style.contactForm}>
            <div className="row">
              <div className={`col-lg-6 ${style.leftSide}`}>
                <h4>Quick Contact Form</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Name*"
                          value={firstname}
                          onChange={(e) => {
                            setName(e.target.value);
                            validateName();
                          }}
                          onBlur={validateName}
                        />
                        {nameError && <span className="text-danger fs-5">{nameError}</span>}

                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Email*"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail();
                          }}
                          onBlur={validateEmail}
                        />
                        {emailError && <span className="text-danger fs-5">{emailError}</span>}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Phone*"
                          value={phone}
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(/\D/g, "");
                            if (inputValue.length <= 10) {
                              const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                              setPhone(formattedValue);
                            }
                            validatePhone(); 
                          }}
                          onBlur={validatePhone}
                        />
                        {phoneError && <span className="text-danger fs-5">{phoneError}</span>}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={selectedAgentId} // Use the selectedAgentId state
                          onChange={(e) => setSelectedAgentId(e.target.value)}
                        >
                          <option>Please Select Office</option>
                          {agentData?.data?.map((ele: any) => {
                            return (
                              <option value={ele?.id} key={ele?.id}>
                                {ele?.Franchisename}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Message"
                          id=""
                          value={lastname}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div ><ReCAPTCHA sitekey="6LdHfd8nAAAAABp05e6MytNJf3caS9eDp6bBAMpD" onChange={handleRecaptchaVerify} required/></div>
                      <div className={style.submitBtn}>
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={`col-lg-6 ${style.rightSide}`}>
                <div className="row">
                  <div className="col-lg-7">
                    <h4>Office Location:</h4>
                    <p>6 Meridian Home Ln. Ste 101. Palm Coast, FL 32137</p>
                  </div>
                  <div className="col-lg-5">
                    <h4>Call:</h4>
                    <p>404-800-6700</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <h4>Email:</h4>
                    <p>info@wesellrestaurants.com</p>
                  </div>
                  <div className="col-lg-5">
                    <h4>Fax:</h4>
                    <p>1 888 668 8625</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className={style.socialIcon}>
                      <li>
                        <Link href="https://www.instagram.com/wesellrestaurants/">{Instagram}</Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/wesellrestaurants">{YouTube}</Link>
                      </li>
                      <li>
                        <Link href="https://www.facebook.com/WeSellRestaurants">{FaceBook}</Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/company/wesellrestaurants/">{LinkedIn}</Link>
                      </li>
                      <li>
                        <Link href="#">{Mail}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
