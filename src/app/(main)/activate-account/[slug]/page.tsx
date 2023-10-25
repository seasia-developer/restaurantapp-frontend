"use client";
import { useRouter } from "next/navigation";
import styles from "../activateAccount.module.scss";
import { useEffect } from "react";
import axios from "axios";

Page.getInitialProps = async (context: any) => {
  const params = context.query;
  return {
    params,
  };
};

const Base_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Page({ params }: any) {
  const router = useRouter();

  console.log(params, "checking params in activate account");

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get(`${Base_URL}/${params?.slug}`);
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, []);

  const goToHome = () => {
    router.push("/");
  };

  return (
    <section id={styles.accountActivation}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.accountActivation}`}>
          <h2 className={`${styles.aact_heading}`}>Account Activation</h2>
          <div className={`${styles.aact_down}`}>
            <h5>Your account verification has been completed successfully.</h5>
            <div className={`${styles.acct_btn}`}>
              <button onClick={goToHome}>Click here to proceed</button>
            </div>
            <p>If you have any problem logging in Call: 1.888.814.8226</p>
          </div>
        </div>
      </div>
    </section>
  );
}
