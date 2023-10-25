"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./register.module.scss";
import Select from "react-select";
import {
  useCountriesQuery,
  useListingCategoryQuery,
  useRegisterMutation,
  useStateQuery,
} from "@/store/services/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";
// import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    staddress: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    postalcode: Yup.string()
      .required("This field is required")
      .min(1, "Please enter at least 1 character")
      .max(5, "Please enter at most 5 characters")
      .matches(
        /^([0-9]{5}|[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9])$/,
        "Invalid Zip Code"
      ),
    phoneno: Yup.string()
      .required("This field Number is required")
      .matches(phoneRegex, "Invalid phone number"),
    cellno: Yup.string()
      .required("This field is required")
      .matches(phoneRegex, "Invalid phone number"),
    // recaptcha: Yup.string().required(
    //   "Please complete the reCAPTCHA validation."
    // ),
    experince: Yup.string().required("This field is required"),
    cashinhand: Yup.object().required("Please select an option in this field"),
    sourcehear: Yup.object().required("Please select an option in this field"),
    desiredrestaurant: Yup.array()
    .nullable()
    .test("desiredrestaurant", "", function (value, context) {
      let { from }: any = context;
      
      console.log(from?.[0]?.value?.desiredrestaurant?.[0]?.value!=0,"formform");
    
      if (!from?.[0]?.value?.desiredrestaurant?.[0]?.value) {
        return this.createError({
          message: `Please select an option in this field`,
          path: "desiredrestaurant",
        });
      } else {
        return true;
      }
    }),
    lookingstates: Yup.array()
    .nullable()
    .test("lookingstates", "", function (value, context) {
      let { from }: any = context;
      if (!from?.[0]?.value?.lookingstates?.[0]?.value) {
        return this.createError({
          message: `Please select an option in this field`,
          path: "lookingstates",
        });
      } else {
        return true;
      }
    }),
    helptxt: Yup.string().required("Please select an option in this field"),
  });

  const { emailData, passData } = useSelector((state: any) => state.data);
  const [register, { isLoading:loading }] = useRegisterMutation();
  const { data: state } = useStateQuery(undefined);
  const { data: countries } = useCountriesQuery(undefined);
  const {data: Listing } = useListingCategoryQuery(undefined)
  const [casState,setCashState] =useState(null)
  const [findState,setFindState] =useState(null)

  const dispatch = useDispatch();
  const router = useRouter();

  const FormData = {
    firstname: "",
    lastname: "",
    staddress: "",
    city: "",
    state: "Alabama",
    country: "Albania",
    postalcode: "",
    phoneno: "",
    cellno: "",
    islicestate: "No",
    experince: "",
    isown: "No",
    cashinhand: "",
    desiredrestaurant: [],
    lookingstates: [],
    sourcehear: "",
    helptxt: "",
    recaptcha: "",
  };

  const options: any = [
    { value: "$25,000-$49,999", label: "$25,000-$49,999" },
    { value: "$50,000-$74,999", label: "$50,000-$74,999" },
    { value: "$75,000-$99,999", label: "$75,000-$99,999" },
    { value: "$100,000-$124,999", label: "$100,000-$124,999" },
    { value: "$125,000-$200,000", label: "$125,000-$200,000" },
    { value: "$200,000-$299,999", label: "$200,000-$299,999" },
    { value: "$300,000-$399,999", label: "$300,000-$399,999" },
    { value: "$400,000+", label: "$400,000+" },
  ];

  const findUs: any = [
    { value: "Biz Buy Sell", label: "Biz Buy Sell" },
    { value: "Bizilla.com", label: "Bizilla.com" },
    { value: "BizQuest", label: "BizQuest" },
    { value: "Business Broker.net", label: "Business Broker.net" },
    { value: "Craig's List", label: "Craig's List" },
    { value: "E-mail", label: "E-mail" },
    { value: "Facebook", label: "Facebook" },
    { value: "Facebook Marketing", label: "Facebook Marketing" },
    { value: "Google", label: "Google" },
    { value: "Referral", label: "Referral" },
    { value: "Sell Biz Today.com", label: "Sell Biz Today.com" },
    { value: "TRN", label: "TRN" },
    { value: "Twitter", label: "Twitter" },
    { value: "We Sell Restaurants.com", label: "We Sell Restaurants.com" },
    { value: "Yahoo", label: "Yahoo" },
    { value: "Buybusinesss.com", label: "Buybusinesss.com" },
    { value: "BusinessesforSale", label: "BusinessesforSale" },
    { value: "Other", label: "Other" },
  ];

  const handleSelect = (selectedOptions: any) => {
    formik.setFieldValue("desiredrestaurant", selectedOptions);
  };

  const handleSelectCash = (selectedOptions: any) => {
    let value = selectedOptions?.value;
    setCashState(value);
    formik.setFieldValue("cashinhand", selectedOptions);
  };

  const handleSelectOther = (selectedOptions: any) => {
    formik.setFieldValue("lookingstates", selectedOptions);
  };

  const handleSelectSource = (selectedOptions: any) => {
    let value = selectedOptions?.value;
    setFindState(value);
    formik.setFieldValue("sourcehear", selectedOptions);
  };

  const handleSubmit = async () => {
    try {
      const buyer: any = await register({
        email: emailData,
        password: passData,
        firstname: formik.values.firstname,
        lastname: formik.values.lastname,
        staddress: formik.values.staddress,
        city: formik.values.city,
        state: formik.values.state,
        country: formik.values.country,
        postalcode: formik.values.postalcode,
        phoneno: formik.values.phoneno,
        cellno: formik.values.cellno,
        islicestate: formik.values.islicestate,
        experince: formik.values.experince,
        isown: formik.values.isown,
        cashinhand: casState,
        desiredrestaurant: formik.values.desiredrestaurant.map((ele: any) => {
          return ele.value;
        }).toString(),
        lookingstates: formik.values.lookingstates?.map((ele :any)=>{
          return ele.value;
        }).toString(),
        sourcehear: findState,
        helptxt: formik.values.helptxt,
      });



      if (buyer?.data?.code == 200) {
        await dispatch({ type: "authApi", payload: buyer });
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Register Failed:", error);
    }
  };

  const formik = useFormik({
    initialValues: FormData,
    validationSchema: RegisterSchema,
    validateOnChange: true,
    onSubmit: handleSubmit,
  });


  const ListData = Listing?.data?.map((ele :any)=>{
    return {value:ele.id,label:ele?.name}
  })

  const stateData=state?.data?.map((ele :any)=>{
    return {value:ele.short_code ,label:ele?.name}

  })


  return (
    <div className={style.registerContainer}>
      {loading && <FullScreenLoader />}
      <div className={style.innerContainer}>
        <div className="row">
          <div className={style.registerContent}>
            <h2>Register as Buyer</h2>
            {/* <p> * Please complete all fields. </p> */}
            <form onSubmit={formik.handleSubmit}>
              <div className={style.inputContainer}>
                <label htmlFor="FirstName" className={style.title}>
                  First Name<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      placeholder="First Name"
                      name="firstname"
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                    />
                    <span className="text-danger">
                      {formik.errors.firstname}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="LastName" className={style.title}>
                  Last Name<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="LastName"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                    />
                    <span className="text-danger">
                      {formik.errors.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="StreetAddress" className={style.title}>
                  Street Address<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="StreetAddress"
                      placeholder="Street Address"
                      onChange={formik.handleChange}
                      name="staddress"
                      value={formik.values.staddress}
                    />
                    <span className="text-danger">
                      {formik.errors.staddress}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="City" className={style.title}>
                  City<span className="text-danger fs-6">*</span>  :
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      placeholder="City"
                      onChange={formik.handleChange}
                      name="city"
                      value={formik.values.city}
                    />
                    <span className="text-danger">{formik.errors.city}</span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="State" className={style.title}>
                  State:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <select
                      id="State"
                      className="form-control"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                    >
                      {formik.errors.state}
                      {state?.data.map((option: any, index: any) => {
                        return <option key={index}>{option.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Country" className={style.title}>
                  Country:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <select
                      id="Country"
                      className="form-control"
                      // defaultValue="Please Select"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    >
                      {countries?.data.map((option: any, index: any) => {
                        return <option key={index}>{option.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="ZipCode" className={style.title}>
                  Zip Code<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="ZipCode"
                      placeholder="Zip Code"
                      onChange={formik.handleChange}
                      name="postalcode"
                      value={formik.values.postalcode}
                    />
                    <span className="text-danger">
                      {formik.errors.postalcode}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="ContactPhoneNumber" className={style.title}>
                  Contact Phone Number<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      pattern="\d{3}\-\d{3}\-\d{4}"
                      className="form-control"
                      id="ContactPhoneNumber"
                      placeholder="Contact Phone Number"
                      onChange={(e) => {
                        const formattedValue = e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                        formik.handleChange(e.target.name)(formattedValue);
                      }}
                      name="phoneno"
                      value={formik.values.phoneno}
                    />
                    <span className="text-danger">{formik.errors.phoneno}</span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="CellPhone" className={style.title}>
                  Cell Phone<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="CellPhone"
                      placeholder="Cell Phone"
                      onChange={(e) => {
                        const formattedValue = e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
                        formik.handleChange(e.target.name)(formattedValue);
                      }}
                      name="cellno"
                      value={formik.values.cellno}
                    />
                    <span className="text-danger">{formik.errors.cellno}</span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <div className={style.title}>
                  Licensed real estate professional?:
                </div>
                <div className={style.field}>
                  <div className={`form-check ${style.radioBtn}`}>
                    <input
                      type="radio"
                      name="islicestate"
                      id="gridRadios1"
                      value="No"
                      onChange={formik.handleChange}
                      checked={formik.values.islicestate === "No"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      NO
                    </label>
                  </div>
                  <div className={`form-check ${style.radioBtn}`}>
                    <input
                      type="radio"
                      name="islicestate"
                      id="gridRadios2"
                      value="Yes"
                      onChange={formik.handleChange}
                      checked={formik.values.islicestate === "Yes"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      YES
                    </label>
                  </div>
                  <span className="text-danger">
                    {formik.errors.islicestate}
                  </span>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Restaurant" className={style.title}>
                  Restaurant Experience(Years)?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="Restaurant"
                      placeholder="Restaurant Experience"
                      onChange={formik.handleChange}
                      name="experince"
                      value={formik.values.experince}
                    />
                    <span className="text-danger">
                      {formik.errors.experince}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <div className={style.title}>
                  Do You Currently Own A Restaurant?:
                </div>
                <div className={style.field}>
                  <div className={`form-check ${style.radioBtn}`}>
                    <input
                      type="radio"
                      name="isown"
                      id="Currently1"
                      value="No"
                      onChange={formik.handleChange}
                      checked
                    />
                    <label className="form-check-label" htmlFor="Currently1">
                      NO
                    </label>
                  </div>
                  <div className={`form-check ${style.radioBtn}`}>
                    <input
                      type="radio"
                      name="isown"
                      id="Currently2"
                      value="Yes"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="Currently2">
                      YES
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="inputState" className={style.title}>
                  Cash Currently On Hand?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <Select
                      className={`form-control ${style.selectInput}`}
                      id="inputState"
                      placeholder="Please Select"
                      onChange={handleSelectCash}
                      name="cashinhand"
                      value={formik.values.cashinhand}
                      options={options}
                    />
                    <span className="text-danger">
                      {formik.errors?.cashinhand}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Desired" className={style.title}>
                  Kind Of Restaurant Desired?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <Select
                      className={`form-control ${style.selectInput}`}
                      id="Desired"
                      placeholder="Please Select"
                      onChange={handleSelect}
                      name="desiredrestaurant"
                      value={formik.values.desiredrestaurant}
                      options={ListData}
                      isMulti
                    />
                    <span className="text-danger">
                      {formik.errors.desiredrestaurant}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="Purchase" className={style.title}>
                  Where Are You Looking To Purchase A Restaurant?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <Select
                      className={`form-control ${style.selectInput}`}
                      id="Purchase"
                      placeholder="Please Select"
                      onChange={handleSelectOther}
                      name="lookingstates"
                      value={formik.values.lookingstates}
                      options={stateData}
                      isMulti
                    />
                    <span className="text-danger">
                      {formik.errors.lookingstates}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="inputState" className={style.title}>
                  How did you find us?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <Select
                      className={`form-control ${style.selectInput}`}
                      id="inputState"
                      placeholder="Please Select"
                      onChange={handleSelectSource}
                      name="sourcehear"
                      value={formik.values.sourcehear}
                      options={findUs}
                    />
                    <span className="text-danger">
                      {formik.errors.sourcehear}
                    </span>

                    {/* <select
                      id="inputState"
                      className="form-control"
                      defaultValue="Please Select"
                      name="sourcehear"
                      value={formik.values.sourcehear}
                      onChange={formik.handleChange}
                    >
                     
                        {formik.errors.sourcehear}
                      
                      <option>Please Select</option>
                      {findUs.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select> */}
                  </div>
                </div>
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="help" className={style.title}>
                  How can we help you?<span className="text-danger fs-6">*</span>:
                </label>
                <div className={style.field}>
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      id="help"
                      placeholder="How can we help you"
                      onChange={formik.handleChange}
                      name="helptxt"
                      value={formik.values.helptxt}
                    />
                    <span className="text-danger">{formik.errors.helptxt}</span>
                  </div>
                </div>
              </div>

              {/* <div className={style.inputContainer}>
                <div className={style.title}></div>
                <div className={`${style.field}`}>
                  <ReCAPTCHA
                    sitekey="6LdHfd8nAAAAABp05e6MytNJf3caS9eDp6bBAMpD"
                    onChange={(value: any) => {
                      formik.setFieldValue("recaptcha", value);
                    }}
                  />
                </div>
              </div> */}
              <div className={style.inputContainer}>
                <div className={style.title}></div>
                <div className={`${style.field}`}>
                  <div className="text-danger">{formik.errors.recaptcha}</div>
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
              <div className={style.inputContainer}>
                <div className={style.subtitle}>
                  By registering with We Sell Restaurants, you authorize and
                  agree that We Sell Restaurants may send you emails about our
                  listings. We do not share, sell, or use your email address and
                  information for any other purpose. You may opt out at any
                  time.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
