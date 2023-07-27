import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Chat from "../chat/chat";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Chat /> 
      <ScrollToTop/>
      <Footer />
    </>
  );
};

export default Layout;
