'use client'
import RestaurantForSale from "@/components/home/restaurantForSale/RestaurantForSale";
import styles from "./page.module.css";
import WsrLayout from "@/app/(main)/layout";
import Features from "@/components/home/features/features";
import AddsSection from "@/components/home/addssection/addsSection";
import Selling from "@/components/buyOrSellRestaurent/Selling";
import Offering from "@/components/home/offering/Offering";
import SellYourRestaurant from "@/components/home/sellYourRestaurant/SellYourRestaurant";

export default function Home() {
  return (
    <WsrLayout>
      <main className={styles.main}>     
        <Offering />
        <SellYourRestaurant />
        <Selling />
        <Features />
      </main>
    </WsrLayout>
  );
}
