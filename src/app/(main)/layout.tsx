"use client";
import Header from "@/components/header/header";
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiteFooter } from "@/components/footer/footer";
import RestaurantForSale from "@/components/home/restaurantForSale/RestaurantForSale";
import AddsSection from "@/components/home/addssection/addsSection";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function WsrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      <Header />
      <RestaurantForSale />
      <div>{children}</div>
      <AddsSection />
      <SiteFooter />
    </>
  );
}
