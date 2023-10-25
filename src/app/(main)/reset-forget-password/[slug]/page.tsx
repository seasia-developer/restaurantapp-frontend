"use client";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import style from "../reset.module.scss";
import { useRegisterMutation, useResetPasswordMutation } from "@/store/services/auth";
import { useDispatch } from "react-redux";
import FullScreenLoader from "../../fullScreenLoader/FullScreenLoader";

Page.getInitialProps = async (context: any) => {
  const params = context.query;
  return {
    params,
  };
};


export default function Page({params}: any) {

  const [password,setPassword] = useState("");
  const [Cpassword,setCpassword] = useState("");
  const [passError,setPassError] = useState("");
  const [repeatPassword,setRepeatPasswordError] = useState("");

  const [resetPassword,{isLoading:loading}] = useResetPasswordMutation();
  console.log(params?.slug,"Base_URL");
  const route = useRouter();

  const dispatch = useDispatch();
  
  const token = params?.slug;

  const validatePassword = () => {
    if (!password) {
      setPassError("Password is required");
    } else if (password.length < 8) {
      setPassError("Password must be at least 8 characters");
    } else {
      setPassError("");
    }
  };

  const validateRepeatPassword = () => {
    if (password !== Cpassword) {
      setRepeatPasswordError("Passwords do not match");
    } else {
      setRepeatPasswordError("");
    }
  };

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    validatePassword();
    validateRepeatPassword();
    if(!passError && !repeatPassword){
      if(password == Cpassword ){
        resetPassword({token,password,Cpassword})
        .unwrap()
        .then((user:any)=>{
          if(user?.code == 200){
            dispatch({ type: "authApi", payload: user });
            route.push("/sign-in")
          }
        }).catch((error: any) => {
          console.error(error);
        });
      }
    }
  }

  return (
    <div className={style.forgetMain}>
      <div className={style.fullContent}>
        <div className="container">
          <div className={style.forgetBg}>
            <div className="row">
              <div className={`col-lg-12 ${style.forgetMain}`}>
                <h2>Reset Forgot Your Password?</h2>
                <form onSubmit={handleSubmit}>
                  <div className={style.innerContainer}>
                    <p>
                    Please enter your email address and we will send your account information. Your We Sell Restaurants account and password allow you to view confidential restaurants for sale listing online.
                    </p>
                  </div>
                  <div className={style.inputContainer}>
                    <label htmlFor="password1" className={style.title}>
                    Enter your password:
                    </label>
                    <div className={style.field}>
                      <div className="form-group w-100">
                        <input
                          type="password"
                          className="form-control"
                          id="password1" 
                          name="password"
                          value={password}
                          onChange={(e)=>{setPassword(e.target.value);validatePassword()}}
                          onBlur={validatePassword}
                        />
                        {passError && <div className="text-danger fs-5 text-start">{passError}</div>}
                      </div>
                    </div>
                  </div>

                  <div className={style.inputContainer}>
                    <label htmlFor="password2" className={style.title}>
                    Confirm your password:
                    </label>
                    <div className={style.field}>
                      <div className="form-group w-100">
                        <input
                          type="password"
                          className="form-control"
                          id="password2" 
                          name="Cpassword"
                          value={Cpassword}
                          onChange={(e)=>{setCpassword(e.target.value);validateRepeatPassword()}}
                          onBlur={validateRepeatPassword}
                        />
                        {repeatPassword && <div className="text-danger fs-5 text-start">{repeatPassword}</div>}
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
      {loading && <FullScreenLoader />}
    </div>
  )
}
