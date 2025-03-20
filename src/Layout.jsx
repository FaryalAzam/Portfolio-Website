import React from "react";
import FooterMain from "./components/footer/FooterMain";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      {/* Footer */}
      <FooterMain />
    </div>
  );
};

export default Layout;
