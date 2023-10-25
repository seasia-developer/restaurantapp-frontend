"use client";
import "./header.scss";
import styles from "./header.module.scss";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";

const FranchiseHeader = () => {
  const [show, setShow] = useState<any>({
    "collasible-nav-dropdown-1": false,
    "collasible-nav-dropdown-2": false,
    "collasible-nav-dropdown-3": false,
    "collasible-nav-dropdown-4": false,
  });

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

  return (
    <header className={`${styles.Header} Header`}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="https://www.wesellrestaurants.com/public/images/new-wsrlogo.png"
              className="img-responsive"
              alt="logo"
            />
          </Link>

          <div className={styles.headerLeft}>
            <div
              className={`${styles.topHeaderLeft} d-flex justify-content-end align-items-center`}
            >
              <div className={`${styles.headerTopLeft} d-flex gap-3`}>
                <div
                  className={`${styles.quesCall} d-flex align-items-center gap-2`}
                >
                  <img
                    src="https://www.wesellrestaurants.com/public/images/phone-header.png"
                    className="mb-0"
                    alt="logo"
                  />
                  <p className={styles.wsrColorRed}>404-800-6700</p>
                </div>
                <div className={styles.loginSignupbtn}>
                  <a href="#">See Restaurants for Sale</a>
                </div>
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
                    title="Why Us"
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
                  >
                    <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Business Broker Industry
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
                    <NavDropdown.Item href="#">Why Restaurant Sales Are Rising</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Startup Costs"
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
                  >
                  </NavDropdown>
                  <NavDropdown
                    title="Franchise FAQ's"
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
                  >
                  </NavDropdown>
                  <NavDropdown
                    title="Territories"
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
                  >
                  </NavDropdown>
                  <NavDropdown
                    title="Benefits for You"
                    id="collasible-nav-dropdown"
                    {...(windowWidth > 992
                      ? { show: show[`collasible-nav-dropdown-5`] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-5")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-5")
                    }
                  >
                    <NavDropdown.Item href="#">What Can I Make</NavDropdown.Item>
                    <NavDropdown.Item href="#">Training & Support</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Blog"
                    id="collasible-nav-dropdown"
                    {...(windowWidth > 992
                      ? { show: show[`collasible-nav-dropdown-5`] }
                      : {})}
                    onMouseEnter={() =>
                      handleMouseEnter("collasible-nav-dropdown-5")
                    }
                    onMouseLeave={() =>
                      handleMouseLeave("collasible-nav-dropdown-5")
                    }
                  >
                  </NavDropdown>
                  <li>
                    <Button
                      variant="primary"
                      className={styles.wsrBgRed}
                      type="button"
                      id="btn-in-low-head"
                    >
                      Request Info
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

export default FranchiseHeader;
