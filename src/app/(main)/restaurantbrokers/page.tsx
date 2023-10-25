"use client"
import Image from "next/image";
import robinEric from "@/assets/eric_robin.jpg";
import styles from "./restaurantBrokers.module.scss";
import { useStateQuery } from "@/store/services/auth";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("")
  const [nameError,setNameError] = useState("");
  const [emailError,setEmailError] = useState("");
  const [isRecaptchaValid, setRecaptchaValid] = useState(false);
  const {data: stateData } = useStateQuery(undefined)

  const handleRecaptchaVerify = (response: string | null) => {
    if (response) {
      setRecaptchaValid(true);
    } else {
      setRecaptchaValid(false);
    }
  };

  const route = useRouter();

  const validName=()=>{
    if(!name){
      setNameError("Enter your name!")
    }
    else{
      setNameError("")
    }
  }

  const validEmail=()=>{
    if(!email){
      setEmailError("Enter your email!")
    }else if((!/\S+@\S+\.\S+/.test(email))){
      setEmailError("Enter valid email address")
    }else{
      setEmailError("")
    }
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    validName();
    validEmail();
    if(!nameError && ! emailError){
      route.push("/restaurantbrokers")
    }
  }
  
  return (
    <section id={styles.leaderShip}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.leaderShip} d-flex `}>
          <div className={`${styles.leaderS_left}`}>
            <h2>Meet the Restaurant Brokers</h2>
            <h4>Eric & Robin Gagnon</h4>
            <div className={`${styles.ls_PicAndWrite} d-flex gap-3`}>
              <div className={`${styles.ls_Pic}`}>
                <div className={styles.ls_pic_img}>
                  <Image src={robinEric} alt="img not found" />
                </div>
              </div>
              <div className={`${styles.ls_Write}`}>
                <h5>
                  We Satisfy Your Appetite for Acquisition, Feed the Need for
                  Restaurant Reality and Serve Up a Recipe for Business Success
                </h5>
                <p>
                  This dynamic duo and husband and wife team are the country's
                  leading restaurant brokers. Eric and Robin are the founders of
                  We Sell Restaurants, the nation's largest restaurant firm
                  focused on selling restaurants. Popular hosts of the
                  syndicated radio show, “We Sell Restaurants” for a number of
                  years, they guest host, write, blog, speak, train and present
                  on topics of interest to the industry. Their book, Appetite
                  for Acquisition was named Best of 2012 by Small Business Book
                  Awards and has a five-star rating on Amazon.
                  <br /> <br /> These veteran industry experts have defined the
                  term “Restaurant Brokers” with their unmatched experience,
                  knowledge and count of restaurants sold. Members of the
                  International Franchise Association (IFA), the Southeast
                  Franchise Forum (SEFF), the Women’s Franchise Network (WFN)
                  and the International Business Brokers Association (IBBA);
                  they have presented workshops and served on multiple panels
                  for these organizations nationwide where they share their
                  expertise. They have been designated as Industry Experts by
                  Business Brokerage Press in the areas of Franchise Resales and
                  Restaurant Sales. They created and developed training for
                  brokers to obtain the credential of Certified Restaurant
                  Broker.
                  <br /> <br /> The two have trademarked their brand, “We Sell
                  Restaurants” and are franchising nationwide. They share their
                  knowledge through one of the most extensive training programs
                  available to the industry. Their multi-platform training
                  program leads to the nation’s only Certified Restaurant Broker
                  designation.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.leaderS_Right}`}>
            <div className={`${styles.lS_contactUs}`}>
              <h2>Contact Us:</h2>
              <form name="siteContactUsFrm" onSubmit={handleSubmit} id={styles.lsContactUsForm}>
                <div className={styles.broke_form_inputs}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value);validName()}}
                    onBlur={validName}
                  />
                  {nameError && <span className="text-danger">{nameError}</span>}
                </div>
                <div className={styles.broke_form_inputs}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value);validEmail()}}
                    onBlur={validEmail}
                  />
                  {emailError && <span className="text-danger">{emailError}</span>}
                </div>
                <div className={styles.broke_form_inputs}>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    pattern="\d{3}\-\d{3}\-\d{4}"
                    value={phone}
                    onChange={(e) => { 
                      const inputValue = e.target.value.replace(/\D/g, "");
                      if (inputValue.length <= 10) {
                        const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                        setPhone(formattedValue);
                      }
                    }}
                  />
                </div>
                <div className={styles.broke_form_inputs}>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    id="city"
                  />
                </div>
                <div className={styles.broke_form_inputs}>
                  <select
                    name="state"
                    id="state_ddl"
                    className="w-100 selectpicker"
                  >
                    <option value="" selected>
                      State
                    </option>
                    {stateData?.data?.map((ele:any,index:any)=>{
                      return(
                        <option key={index}>{ele?.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className={styles.broke_form_inputs}>
                  <label>How can We Sell Restaurants help?</label>
                  <ul className={styles.checkbox_lists}>
                    <li>
                      <label className="">
                        <input
                          type="checkbox"
                          value="Selling"
                          name="selling"
                          id="selling"
                        />
                        Selling
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-inline">
                        <input
                          name="purchasing"
                          type="checkbox"
                          value="Purchasing"
                          id="purchasing"
                        />
                        Buying
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-inline">
                        <input
                          name="advertising"
                          type="checkbox"
                          value="Advertising"
                          id="advertising"
                        />
                        Leasing
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-inline">
                        <input
                          name="general"
                          type="checkbox"
                          value="General Support"
                          id="general"
                        />
                        We Sell Restaurants Franchise Information
                      </label>
                    </li>
                  </ul>
                </div>
                <div><ReCAPTCHA sitekey="6LdHfd8nAAAAABp05e6MytNJf3caS9eDp6bBAMpD" onChange={handleRecaptchaVerify} required/></div>
                <div className={styles.broke_form_inputs}>
                </div>
                <div className={styles.broke_form_inputs}>
                  <button
                    className={`${styles.broke_form_btn} btn btn-primary btn-block`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
