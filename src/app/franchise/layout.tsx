import "../globals.css";
import { Inter } from "next/font/google";
import { FranchiseFooter } from "./components/footer";
// import { FranchiseHeader } from './components/header'
import FranchiseHeader from "../../app/franchise/components/header/header";
import styles from "./layout.module.scss"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FranchiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FranchiseHeader />
      <div className={styles.main_content} style={{ marginTop: "143px" }}>
        {children}
      </div>
      <FranchiseFooter />
    </>
  );
}
