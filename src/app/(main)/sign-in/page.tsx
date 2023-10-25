"use client";
import { useState, useEffect } from "react";
import style from "./loginPage.module.scss";
import Link from "next/link";
// import ReCAPTCHA from "react-google-recaptcha";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoginMutation, useEmailAuthMutation } from "@/store/services/auth";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { setEmailAndPass } from "@/store/slices/authSlice";
import FullScreenLoader from "../fullScreenLoader/FullScreenLoader";

const LoginPage = () => {
  const [email, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [loginEmailError, setLoginEmailError] = useState<any>("");
  const [loginPassError, setLoginPassError] = useState<any>("");
  const [mail, setMail] = useState<any>("");
  const [pass, setPass] = useState<any>("");
  const [repeatpass, setRepeatPass] = useState<any>("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [isRecaptchaValid, setRecaptchaValid] = useState(false);
  const [token,setToken] = useState("");
  // const [formErrors, setFormErrors] = useState({
  //   email: "",
  //   password: "",
  // });

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [emailAuth, { isLoading: isEmailAuthLoading }] = useEmailAuthMutation();

  const dispatch = useDispatch();

  const r = useRouter();

  const searchParams = useSearchParams();
  const receivedData: any = searchParams.get("page");


  const validateLoginEmail = () => {
    if (!email) {
      setLoginEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setLoginEmailError("Invalid email format");
    } else {
      setLoginEmailError("");
    }
  };

  const validateLoginPass = () => {
    if (!password) {
      setLoginPassError("Password is required");
    } else if (password.length < 8) {
      setLoginPassError("Password must be at least 8 characters");
    } else {
      setLoginPassError("");
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    validateLoginEmail();
    validateLoginPass();
    if (!loginEmailError && !loginPassError) {
      login({ email, password })
        .unwrap()
        .then((user: any) => {
          if (user?.code == 200) {
            dispatch({ type: "authApi", payload: user });
            r.push("/");
          } else {
            setLoginEmailError("Please enter valid email address.");
            setLoginPassError("Please enter valid Password.");
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  const validateEmail = () => {
    if (!mail) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!pass) {
      setPassError("Password is required");
    } else if (pass.length < 8) {
      setPassError("Password must be at least 8 characters");
    } else {
      setPassError("");
    }
  };

  const validateRepeatPassword = () => {
    if (pass !== repeatpass) {
      setRepeatPasswordError("Passwords do not match");
    } else {
      setRepeatPasswordError("");
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    dispatch(setEmailAndPass({ email: mail, password: pass }));
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    if (!emailError && !passError && !repeatPasswordError) {
      if (pass == repeatpass) {
        emailAuth({ mail })
          .unwrap()
          .then((user: any) => {
            if (user?.code == 200) {
              dispatch({ type: "authApi", payload: user });
              r.push("/sign-up-info");
            }
            if (user?.code == 302) {
              setEmailError(user?.data);
            } else {
              setEmailError("");
            }
            // if (!isRecaptchaValid) {
            //   setError("Please complete the reCAPTCHA verification.");
            //   return;
            // }
          })
          .catch((error: any) => {
            const showError = error;
            console.error("Login failed:", error);
          });
      }
    }
  };

  // const handleRecaptchaVerify = (response: string | null) => {
  //   if (response) {
  //     setRecaptchaValid(true);
  //   } else {
  //     setRecaptchaValid(false);
  //   }
  // };

  useEffect(() => {
    const forgetMessage: any =
      typeof window !== "undefined" ? localStorage.getItem("userMessage") : null;
    setToken(forgetMessage);
  }, [token]);

  return (
    <div className={style.loginContainer}>
      {isLoginLoading && <FullScreenLoader />}
      {isEmailAuthLoading && <FullScreenLoader />}
      <div className={`container ${style.innerContainer}`}>
        <h2 className={style.mainHeading}>Register as a Buyer</h2>
        <div className={style.innerBox}>
          <h4>Quickly Create an online account</h4>
          <p>
            It&apos;s simple and easy! Register one time and then acknowledge
            confidentiality on any listing. You get instant access to the name,
            address, photos and financial details on many of our restaurant for
            sale listings.
          </p>
          {token && receivedData=="forget" && <div className="alert alert-success" role="alert">
            {token}
          </div>}
          <p>
            <b>No Cost or obligation! You may opt out at any time.</b>
          </p>
        </div>
        <div className={`row ${style.loginFormRow}`}>
          <div className={`col-lg-6 ${style.contentUsForm}`}>
            <div className="row">
              <div className="col-md-6">
                <h4>Login</h4>
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder="Username"
                    name="email"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      validateLoginEmail();
                    }}
                    value={email}
                    onBlur={validateLoginEmail}
                  />
                  {loginEmailError && (
                    <span className="text-danger">{loginEmailError}</span>
                  )}
                  {/* <span className="text-danger">{emailErrorLogin}</span> */}
                  <div className="mb-3"></div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validateLoginPass();
                    }}
                    autoComplete="on"
                    onBlur={validateLoginPass}
                  />
                  {loginPassError && (
                    <span className="text-danger">{loginPassError}</span>
                  )}

                  <div className="mb-3"></div>
                  <div>
                    <Link href="/forget-password">Forgot Password?</Link>
                  </div>
                  <div
                    className={style.loginBtn}
                    aria-disabled={isLoginLoading}
                  >
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <h4>Register</h4>
                <form onSubmit={handleRegister}>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={mail}
                    onChange={(e) => {
                      setMail(e.target.value);
                      validateEmail();
                    }}
                    onBlur={validateEmail}
                  />

                  {emailError && (
                    <div style={{ color: "red" }}>{emailError}</div>
                  )}
                  <div className="mb-3"></div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={pass}
                      onChange={(e) => {
                        setPass(e.target.value);
                        validatePassword();
                        validateRepeatPassword();
                      }}
                      onBlur={validatePassword}
                      autoComplete="on"
                    />
                    {/* {registerError.password && (
                      <span className="text-danger">
                        {registerError.password}
                      </span>
                    )} */}
                    {passError && (
                      <div style={{ color: "red" }}>{passError}</div>
                    )}
                    <div className="mb-3"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat Password"
                      name="repeatpass"
                      value={repeatpass}
                      onChange={(e) => {
                        setRepeatPass(e.target.value);
                        validateRepeatPassword();
                      }}
                      onBlur={validateRepeatPassword}
                      autoComplete="on"
                    />
                  </div>
                  {repeatPasswordError && (
                    <span className="text-danger">{repeatPasswordError}</span>
                  )}
                  <div className="mb-3"></div>
                  {/* <div><ReCAPTCHA sitekey="6LdHfd8nAAAAABp05e6MytNJf3caS9eDp6bBAMpD" onChange={handleRecaptchaVerify} required/></div> 
                  {error && <div style={{ color: "red" }}>{error}</div>} */}
                  <div
                    className={style.loginBtn}
                    aria-disabled={isEmailAuthLoading}
                  >
                    <button type="submit">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${style.loginVideo}`}>
            <video controls>
              <source src="https://www.wesellrestaurants.com/sample_video/login.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
