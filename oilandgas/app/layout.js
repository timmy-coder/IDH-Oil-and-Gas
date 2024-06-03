import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetroGlobal Energy",
  description: "Solutions quickly became a pioneer in sustainable oil and gas practices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"md:mx-10 mx-5"}>
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
