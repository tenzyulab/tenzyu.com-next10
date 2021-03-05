import React from "react";
import "../styles/default.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Styles = {
  /* 
    160px は header + footer
    1px は スクロールバーがあるときとないときの横幅のズレをなくすため
    */
  minHeight: "calc(100vh - 160px + 1px)",
};

const ArticleLayout = ({ children }) => (
  <>
    <Header />
    <div class="container mx-auto px-4 max-w-screen-md" style={Styles}>
      {children}
    </div>
    <Footer />
  </>
);

export default ArticleLayout;
