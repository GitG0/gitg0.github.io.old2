import { Outlet, Link } from "react-router-dom";
import TopNav from "./TopNav";
import '../assets/color-modes.js'

const Layout = () => {
  return (
    <>
      <TopNav></TopNav>
      <Outlet />
    </>
  )
};

export default Layout;
