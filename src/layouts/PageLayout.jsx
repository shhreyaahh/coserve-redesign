import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LiveAISignalStrip } from "../components/Hero";

/**
 * Shared page shell — the live AI signal strip and navbar are mounted once
 * here and appear on every route. The navbar is transparent on the home
 * page (over the dark hero) and solid on every other page.
 */
export default function PageLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <LiveAISignalStrip />
      <Navbar transparent={isHome} solid={!isHome} />
      <Outlet />
      <Footer />
    </>
  );
}
