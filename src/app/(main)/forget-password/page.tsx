"use client"
import React, { useEffect, useState } from "react";
import style from "./forget.module.scss";
import { useForgotPasswordMutation } from "@/store/services/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";

export default function Page() {

  const [email,setEmail] = useState("");
  const [emailError,setEmailError] = useState("");
  const [forgotPassword,{isLoading:forgetLoading}] = useForgotPasswordMutation();
  const dispatch = useDispatch();

  const router = useRouter();

  const validateEmail = () =>{
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  }

  const handleForgot=(e: any)=>{
    e.preventDefault();
    validateEmail();
    forgotPassword({email}).unwrap().then((user:any)=>{
      console.log(user,'skldfjl')
      if(user.code == 200){
        dispatch({type: "authApi", payload: user})
        const dataToSend = { page: "forget" };
        const queryParams = new URLSearchParams(dataToSend).toString();
        if(user?.data){
          if (typeof window !== 'undefined') {
            localStorage.setItem('userMessage',user?.data);
            router.push(`/sign-in?${queryParams}`);
          }
        }
      }
    }).catch((error: any) => {
      console.error(error);
    });
  }

  return (
    <div className={style.forgetMain}>
      <div className={style.fullContent}>
        <div className="container">
          <div className={style.forgetBg}>
            <div className="row">
              <div className={`col-lg-12 ${style.forgetMain}`}>
                <h2>Forgot Your Password?</h2>
                <form onSubmit={handleForgot}>
                  <div className={style.innerContainer}>
                    <p>
                      Please enter your email address and we will send your
                      account information. Your We Sell Restaurants account and
                      password allow you to view confidential restaurants for
                      sale listing online.
                    </p>
                  </div>
                  <div className={style.inputContainer}>
                    <label htmlFor="email" className={style.title}>
                      Enter your e-mail address:
                    </label>
                    <div className={style.field}>
                      <div className="form-group w-100">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value);validateEmail()}}
                          onBlur={validateEmail}
                        />
                        {emailError && <div className="text-start fs-5 text-danger">{emailError}</div>}
                      </div>
                    </div>
                  </div>
                  <div className={style.inputContainer}>
                    <div className={style.title}></div>
                    <div className={style.field}>
                      <button type="submit" className={style.continueBtn}>
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {forgetLoading && <FullScreenLoader/>}
    </div>
  );
}
