"use client";
import "./header.scss";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setHeaderSlugSlice } from "@/store/slices/headerSlugSlice";
import { getToken } from "../protected/ProtectedRoute";
import { setSendSearchName } from "@/store/slices/sendSearchNameSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [show, setShow] = useState<any>({
    "collasible-nav-dropdown-1": false,
    "collasible-nav-dropdown-2": false,
    "collasible-nav-dropdown-3": false,
    "collasible-nav-dropdown-4": false,
  });

  
  const route = useRouter();
  const [token, setToken] = useState<any>(null);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const handleResize = () => {
    // Update the window width state variable
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Check if we are on the client-side before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleMouseEnter = (id: any) => {
    setShow((prevShow: any) => ({
      ...prevShow,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id: any) => {
    setShow((prevShow: any) => ({
      ...prevShow,
      [id]: false,
    }));
  };

  useEffect(() => {
    const data =
      typeof window !== "undefined" ? localStorage.getItem("wsr_token") : null;
    
    setToken(data);
  }, [token]);

  const handleToken = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      setToken(null);
    }
  };

  const handleNextSlug = async (slug: any) => {
    if (slug) {
      dispatch(setHeaderSlugSlice(slug));
      router.push(`/${slug}`);
    }
  };

  const handleNext = () => {

    router.push(
      `https://www.wesellrestaurants.com/restaurants-for-sale/We-Sell-Restaurants-Our-Company-Meet-the-Team`
    );
    // try {
    //   dispatch(
    //     setSendSearchName("We-Sell-Restaurants-Our-Company-Meet-the-Team")
    //   );
    //   router.push(
    //     `/restaurants-for-sale/We-Sell-Restaurants-Our-Company-Meet-the-Team`
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const conditionToken = getToken();
  console.log(conditionToken, "conditionToken");

  return (
    <header className={`${styles.Header} Header`}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className={`${styles.container} container`}>
          <Link className="navbar-brand" href="/">
            <img
              src="https://www.wesellrestaurants.com/public/images/new-wsrlogo.png"
              className="img-responsive"
              alt="logo"
            />
          </Link>

          <div className={styles.headerLeft}>
            <div
              className={`${styles.topHeaderLeft} d-flex justify-content-between`}
            >
              <ul className="d-flex gap-3 align-items-center pt-4">
                <Link href={"https://www.instagram.com/wesellrestaurants/"}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href={"https://www.youtube.com/wesellrestaurants"}>
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link href={"https://www.facebook.com/WeSellRestaurants"}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/wesellrestaurants/"}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </ul>
              <div className={`${styles.headerTopLeft} d-flex gap-3`}>
                <div
                  className={`${styles.quesCall} d-flex align-items-center gap-2`}
                >
                  <p>
                    <span>QUESTIONS?</span> Call or Text
                  </p>
                  <img
                    src="https://www.wesellrestaurants.com/public/images/phone-header.png"
                    className="mb-0"
                    alt="logo"
                  />
                  <a href="tel: 404-800-6700" className={styles.wsrColorRed}>
                    404-800-6700
                  </a>
                </div>

                {(token && token != "undefined") || null ? (
                  <div className={styles.loginSignupbtn}>
                    <Link href="/account-home" className="mx-4">
                      My Account
                    </Link>
                    <Link href="/" onClick={handleToken}>
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div className={styles.loginSignupbtn}>
                    <Link href="/sign-in">Login | Register</Link>
                  </div>
                )}
              </div>
            </div>

            <Navbar
              collapseOnSelect
              expand="lg"
              className="custom-nav-bg sticky-top"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                className={styles.headerBottom}
                id="responsive-navbar-nav"
              >
                <Nav className="me-auto justify-content-between w-100">
                  <NavDropdown
                    title="Company"
                    id="collasible-nav-dropdown"
                    // className={styles.collasibleNavDropdown}
                    {...(windowWidth > 992
                      ? { show: show["collasible-nav-dropdown-1"] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-1")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-1")
                    }
                    onClick={(e: any) => {
                      if (
                        e.target?.className == "dropdown-toggle show nav-link"
                      ) {
                        handleNext();
                      }
                    }}
                  >
                    <Link className="dropdown-item" href={"/about-us"}>
                      About Us
                    </Link>

                    <Link className="dropdown-item" href={"/restaurantbrokers"}>
                      Leadership
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={"/restaurants-for-sale/We-Sell-Restaurants-Press"}
                    >
                      Press
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={
                        "/restaurants-for-sale/We-Sell-Restaurants-Community-Outreach"
                      }
                    >
                      Community
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={"/contact-restaurant-broker-near-me"}
                    >
                      Find Office
                    </Link>
                  </NavDropdown>

                  <NavDropdown
                    title="Buy a Restaurant"
                    id="collasible-nav-dropdown"
                    {...(windowWidth > 992
                      ? { show: show["collasible-nav-dropdown-2"] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-2")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-2")
                    }
                    onClick={(e: any) => {
                      if (
                        e.target?.className == "dropdown-toggle show nav-link"
                      ) {
                        router.push("buying-process");
                      }
                    }}
                  >
                    <Link
                      className="dropdown-item"
                      href="https://blog.wesellrestaurants.com/topic/buying-a-restaurant"
                    >
                      Articles on Buying
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={
                        "/restaurants-for-sale/We-Sell-Restaurants-Restaurant-Buying-Tools"
                      }
                    >
                      Free Tools and Templates
                    </Link>

                    <Link className="dropdown-item" href={"/testimonial"}>
                      Customer Stories
                    </Link>

                    <Link className="dropdown-item" href={"/radio_library"}>
                      Videos
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={
                        "/restaurants-for-sale/We-Sell-Restaurants-Broker-Resources"
                      }
                    >
                      Broker Resources
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Sell a Restaurant"
                    id="collasible-nav-dropdown"
                    {...(windowWidth > 992
                      ? { show: show[`collasible-nav-dropdown-3`] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-3")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-3")
                    }
                    onClick={(e: any) => {
                      if (
                        e.target?.className == "dropdown-toggle show nav-link"
                      ) {
                        router.push("what-to-look-for-selling");
                      }
                    }}
                  >
                    <Link
                      className="dropdown-item"
                      href="https://blog.wesellrestaurants.com/topic/selling-a-restaurant"
                    >
                      Articles on Buying
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={
                        "/restaurants-for-sale/We-Sell-Restaurants-Restaurant-Buying-Tools"
                      }
                    >
                      Free Tools and Templates
                    </Link>

                    <Link className="dropdown-item" href={"/testimonial"}>
                      Customer Stories
                    </Link>

                    <Link className="dropdown-item" href={"/radio_library"}>
                      Videos
                    </Link>

                    <Link
                      className="dropdown-item"
                      href={
                        "/restaurants-for-sale/We-Sell-Restaurants-Broker-Resources"
                      }
                    >
                      Broker Resources
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Restaurants for Sale"
                    id="collasible-nav-dropdown"
                    {...(windowWidth > 992
                      ? { show: show[`collasible-nav-dropdown-4`] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-4")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-4")
                    }
                    onClick={(e: any) => {
                      if (
                        e.target?.className == "dropdown-toggle show nav-link"
                      ) {
                        handleNextSlug("restaurant-for-sale-near-me");
                      }
                    }}
                  >
                    <a
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={(e) => {
                        // e.preventDefault();
                        handleNextSlug("Franchises-for-Sale");
                      }}
                    >
                      Franchise Restaurants for Sale
                    </a>

                    <a
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={(e) => {
                        // e.preventDefault();
                        handleNextSlug("Restaurant-for-Lease");
                      }}
                    >
                      Restaurants for Lease
                    </a>
                  </NavDropdown>
                  {/* <NavDropdown
                    title="For Franchisors"
                    id="collasible-nav-dropdown"
                    // {...(windowWidth > 992
                    //   ? { show: show[`collasible-nav-dropdown-5`] }
                    //   : {})}
                    // onMouseEnter={() =>
                    //   handleMouseEnter("collasible-nav-dropdown-5")
                    // }  
                    // onMouseLeave={() =>
                    //   handleMouseLeave("collasible-nav-dropdown-5")
                    // }
                  ></NavDropdown> */}

                  <li>
                    <Button
                      variant="primary"
                      className={styles.wsrBgRed}
                      type="button"
                      href="/franchise  "
                      id="btn-in-low-head"
                    >
                      {/* <Link style={{ color: "white" }} href={"/franchise"}> */}
                      Our Franchise
                      {/* </Link> */}
                    </Button>
                  </li>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
