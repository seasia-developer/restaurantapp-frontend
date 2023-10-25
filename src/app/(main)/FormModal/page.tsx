"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useThankyousellerpageMutation } from "@/store/services/agreement";
import { useStateQuery } from "@/store/services/auth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./modal.module.scss";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";
import Toastify from "../toster/Toastify";

function Example({ show, handleClose }: any) {
  const [thankyousellerpage, { isLoading }] = useThankyousellerpageMutation();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateData, setStateData] = useState("Alabama");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const dispatch = useDispatch();
  const { data: state ,isLoading:loading,isSuccess:success} = useStateQuery(undefined);

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!phone) {
      setPhoneError("Phone Number is required");
    } else if (phone.length <= 10) {
      setPhoneError("Invalid Phone Number format");
    } else {
      setPhoneError("");
    }
  };

  const handleApi = async (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if(!emailError && !phoneError ){
      try {
        const user = await thankyousellerpage({ email, phone, state: stateData }).unwrap();
        await dispatch({ type: "AgreementApi", payload: user });
        Toastify("Success message", "success");
        setEmail("");
        setPhone("");
        handleClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {isLoading && <FullScreenLoader/>}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className={style.modalMain}
      >
        <Modal.Header closeButton className={style.modalHeader}>
        </Modal.Header>
        <form onSubmit={handleApi}>
          <Modal.Body>
            <div>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <div className="form-group w-100 mb-4">
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);validateEmail()}}
                  onBlur={validateEmail}
                />
                {emailError && <span className="text-danger">{emailError}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="number">
                Phone number<span>*</span>
              </label>
              <div className="form-group w-100 mb-4">
                <input
                  type="text"
                  id="number" 
                  className="form-control"
                  value={phone}
                  pattern="\d{3}\-\d{3}\-\d{4}"
                  onChange={(e) => { 
                    const inputValue = e.target.value.replace(/\D/g, "");
                    if (inputValue.length <= 10) {
                      const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                      setPhone(formattedValue);
                    }
                    validatePassword(); 
                  }}
                  onBlur={validatePassword}
                />
                {phoneError && <span   className="text-danger">{phoneError}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="State" className={style.title}>
                Where is your Restaurant?
              </label>
              <div className="form-group w-100">
                <select
                  id="State"
                  className="form-control"
                  defaultValue="Please Select"
                  name="state"
                  value={stateData}
                  onChange={(e) => setStateData(e.target.value)}
                >
                  {state?.data.map((option: any, index: any) => {
                    return <option key={index}>{option.name}</option>;
                  })}
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className={style.modalFooter}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Example;
