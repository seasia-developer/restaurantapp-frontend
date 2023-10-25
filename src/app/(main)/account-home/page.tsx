"use client";
import React, { useEffect, useState } from "react";
import style from "./account.module.scss";
import {
  useAccountHomeQuery,
  useAccountUpdateMutation,
} from "@/store/services/agreement";
import {
  useChangePasswordMutation,
  useListingCategoryQuery,
  useStateQuery,
} from "@/store/services/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchFilterIdMutation } from "@/store/services/searchFilterApi";
import { setSearchFilterIdData } from "@/store/slices/searchFilterIdSlice";
import { MapMark, StarIcon } from "@/assets/icons";
import Select from "react-select";
import { log } from "console";

const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchFilterId] = useSearchFilterIdMutation();

  const [infoSlt, setInfoSlt] = useState("Firstcard");

  return (
    <div className={style.registerContainer}>
      <div className={style.innerContainer}>
        <h2 className={style.accountHeading}>My Account</h2>
        <div className={style.tabs}>
          <div className="row">
            <div className="col-lg-12">
              <ul className={style.navTabs}>
                <div className="d-flex">
                  <li>
                    <button
                      className={
                        infoSlt == "Firstcard"
                          ? `${style.button_red}`
                          : `${style.button_Black}`
                      }
                      onClick={() => setInfoSlt("Firstcard")}
                    >
                      Recently Viewed
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        infoSlt == "Secondcard"
                          ? `${style.button_red}`
                          : `${style.button_Black}`
                      }
                      onClick={() => setInfoSlt("Secondcard")}
                    >
                      Account Details
                    </button>
                  </li>
                </div>
                <li className={style.leftList}>
                  <button
                    className={
                      infoSlt == "Thirdcard"
                        ? `${style.button_red}`
                        : `${style.button_Black}`
                    }
                    onClick={() => setInfoSlt("Thirdcard")}
                  >
                    Change Password
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {infoSlt === "Firstcard" && <RecentlyViewed />}
          {infoSlt === "Secondcard" && <AccountDetails />}
          {infoSlt === "Thirdcard" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}

const RecentlyViewed = () => {
  const { data: accountData, isLoading: loading } =
    useAccountHomeQuery(undefined);

  const router = useRouter();
  const dispatch = useDispatch();
  const [searchFilterId] = useSearchFilterIdMutation();

  const handleNextoId = async (iD: any, headLine: any) => {
    let id = iD;
    let name = headLine;

    try {
      if (name && id) {
        const response: any = await searchFilterId({ name, id });

        if (response?.data) {
          dispatch(setSearchFilterIdData(response?.data));
        }

        router.push(
          `/restaurants-for-sale/${name
            .replace(/[\/()|]/g, "-")
            .replace(/\s+/g, "-")}/${id}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.registerContent}>
      {loading ? <div>Loading...</div> : ""}
      <div className={style.allListing}>
        {accountData?.data?.[0]?.listings &&
          accountData?.data[0]?.listings?.map((item: any, ind: any) => {
            return (
              <div className={style.viewBox} key={ind}>
                <div className="row">
                  <div className="col-lg-4">
                    <div className={style.ListImg}>
                      <Link href="#">
                        <img
                          src={`${IMG_URL}/${item?.listing_media?.img_file}`}
                          alt={item?.listing_media?.img_file}
                          className="w-100"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-7">
                        <h3 className={style.headlisting}>
                          {item?.bheadlinead}
                        </h3>
                      </div>
                      <div className="col-lg-5">
                        <div className={style.price}>
                          <Link href="#" className={style.rate}>
                            <strong>$</strong>
                            <strong>{item?.bsaleprice}</strong>
                          </Link>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleNextoId(item?.id, item?.bheadlinead)
                            }
                            className={style.viewListing}
                          >
                            View Complete Listing
                          </a>
                        </div>
                      </div>
                      <div className={style.cityLink}>
                        <Link href="#">
                          <span>{MapMark}Palm Coast, Flo..</span>
                        </Link>
                        <Link href="#" className="mx-3">
                          {StarIcon} Add to your favorites
                        </Link>
                      </div>
                      <div className={style.property}>
                        <span>
                          Listing Id:
                          <strong>{item?.listing_occupancy_lease?.id}</strong>
                        </span>
                        <span>
                          LEASE TERM:
                          <strong>
                            {item?.listing_occupancy_lease?.lterm}
                          </strong>
                        </span>
                        <span>
                          MONTHLY RENT:
                          <strong>
                            {item?.listing_occupancy_lease?.ltotalmonthrent}
                          </strong>
                        </span>
                        <span>
                          SQ.FT.
                          <strong>
                            {item?.listing_occupancy_lease?.linsidesqt}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {accountData?.data ===
          "Please wait for admin approval of your account !" && (
          <>
            <div style={{ fontSize: "30px" }}>{accountData?.data}</div>
          </>
        )}
      </div>
    </div>
  );
};

const AccountDetails = () => {
  const [restaurant, setRestaurant] = useState<any>();
  const [stateOption, setStateOption] = useState<any>();
  const { data: accountData } = useAccountHomeQuery(undefined);
  const { data: state } = useStateQuery(undefined);
  const { data: Listing } = useListingCategoryQuery(undefined);

  console.log(accountData?.data[0]?.buyer?.id, "accountData");
  const id = accountData?.data[0]?.buyer?.id;

  const [AccountUpdate] = useAccountUpdateMutation();
  const dispatch = useDispatch();

  const ListData = Listing?.data?.map((ele: any) => {
    return { value: ele.id, label: ele?.name };
  });

  const stateData = state?.data?.map((ele: any) => {
    return { value: ele.short_code, label: ele?.name };
  });

  useEffect(() => {
    if (accountData?.data[0]?.buyer?.desiredrestaurant && Listing?.data) {
      const ListData = Listing?.data?.map((ele: any) => {
        return { value: ele.id, label: ele?.name };
      });
      let stateValue = accountData?.data[0]?.buyer?.desiredrestaurant;
      stateValue = stateValue.split(",");
      console.log(stateValue, "stateValue");
      console.log(ListData, "ListDataListDataListData");
      let updateState: any = [];
      ListData?.forEach((arrayItem: any) => {
        let x = arrayItem?.value;
        if (stateValue.find((e: any) => e == x)) {
          updateState.push(arrayItem);
          console.log(updateState, "updateState------");
        }
      });
      console.log(updateState, "updateState");
      setRestaurant(updateState);
    }
  }, [accountData, Listing]);


  useEffect(() => {
    if (accountData?.data[0]?.buyer?.lookingstates && state?.data) {
      const stateData = state?.data?.map((ele: any) => {
        return { value: ele.short_code, label: ele?.name };
      });    
      let stateValue = accountData?.data[0]?.buyer?.lookingstates;
      stateValue = stateValue.split(",");
      console.log(stateValue, "stateValue");
      console.log(stateData, "ListDataListDataListData");
      let updateState: any = [];
      stateData?.forEach((arrayItem: any) => {
        let x = arrayItem?.value;
        if (stateValue.find((e: any) => e == x)) {
          updateState.push(arrayItem);
          console.log(updateState, "updateState------");
        }
      });
      console.log(updateState, "updateState");
      setStateOption(updateState);
    }
  }, [accountData, state]);



  const handleChange = (e: any) => {
    setRestaurant(e);
  };

  const handleSelectOther = (e: any) => {
    setStateOption(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    AccountUpdate({
      desiredrestaurant: restaurant
        ?.map((ele: any) => {
          return ele?.value;
        })
        .toString(),
      lookingstates: stateOption
        ?.map((ele: any) => {
          return ele?.value;
        })
        .toString(),
      id,
    })
      .unwrap()
      .then((user: any) => {
        dispatch({ type: "AgreementApi", payload: user });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(matchedLabel,"matchedLabelmatchedLabel");

  const accountEmail = accountData?.data[0]?.account?.email;
  return (
    <div className="row">
      <div className={style.registerContent}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="email" className={style.title}>
              E-mail address:
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={accountEmail}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="inputState" className={style.title}>
              Kind of Restaurant Desired?
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <Select
                  className={`form-control ${style.selectInput}`}
                  id="Desired"
                  placeholder="Please Select"
                  name="desiredrestaurant"
                  onChange={handleChange}
                  value={restaurant}
                  options={ListData}
                  isMulti
                />
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="inputState" className={style.title}>
              Preferred Location of Restaurant:
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <Select
                  className={`form-control ${style.selectInput}`}
                  id="Purchase"
                  placeholder="Please Select"
                  onChange={handleSelectOther}
                  name="lookingstates"
                  value={stateOption}
                  options={stateData}
                  isMulti
                />
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <div className={style.title}></div>
            <div className={style.field}>
              <button type="submit" className={style.continueBtn}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ChangePassword = () => {
  const [current_password, setCurrentPass] = useState("");
  const [new_password, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [newPassError, setNewPassError] = useState("");
  const [repeatPassError, setRepeatPassError] = useState("");
  const route = useRouter();

  const [ChangePassword] = useChangePasswordMutation();

  const dispatch = useDispatch();

  const handleNewPassBlur = () => {
    if (new_password.length < 8) {
      setNewPassError("Password must be at least 8 characters long.");
      return false;
    } else {
      setNewPassError("");
      return true;
    }
  };

  const handleRepeatPassBlur = () => {
    if (new_password !== repeatPass) {
      setRepeatPassError("Passwords do not match.");
      return false;
    } else {
      setRepeatPassError("");
      return true;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (handleNewPassBlur() && handleRepeatPassBlur()) {
      ChangePassword({ current_password, new_password })
        .unwrap()
        .then((user: any) => {
          if (user?.code == 200) {
            dispatch({ type: "authApi", payload: user });
            localStorage.clear();
            route.push("/sign-in");
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="row">
      <div className={style.registerContent}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="cPass" className={style.title}>
              Current Password:
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <input
                  type="password"
                  className="form-control"
                  id="cPass"
                  name="current_password"
                  value={current_password}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="nPass" className={style.title}>
              New Password:
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <input
                  type="password"
                  className="form-control"
                  id="nPass"
                  name="new_password"
                  value={new_password}
                  onChange={(e) => setNewPass(e.target.value)}
                  onBlur={handleNewPassBlur}
                  required
                />
                {newPassError && (
                  <div className="text-danger">{newPassError}</div>
                )}
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="vPass" className={style.title}>
              Verify New Password:
            </label>
            <div className={style.field}>
              <div className="form-group w-100">
                <input
                  type="password"
                  className="form-control"
                  id="vPass"
                  name="vPass"
                  value={repeatPass}
                  onChange={(e) => setRepeatPass(e.target.value)}
                  onBlur={handleRepeatPassBlur}
                  required
                />
                {repeatPassError && (
                  <div className="text-danger">{repeatPassError}</div>
                )}
              </div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <div className={style.title}></div>
            <div className={style.field}>
              <button type="submit" className={style.continueBtn}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
