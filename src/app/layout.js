import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import CookiesConsent from "./components/common/cookiesconsent";
import IntercomWidget from "./components/common/intercomWidget";

const inter = Inter({ subsets: ["latin"] });
const monaSans = localFont({
  src: [
    {
      path: "fonts/Mona-Sans-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5KV9QH2R" />
      <body className={monaSans.className}>
        <Navbar />
        {children}
        <IntercomWidget />
        <CookiesConsent />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-M4SF4DQ96L" />
    </html>
  );
}
