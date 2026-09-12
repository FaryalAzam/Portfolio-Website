import React from "react";
import FooterMain from "./components/footer/FooterMain";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-black">
      {/* Premium Noise Overlay - Hidden on mobile for performance */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay hidden md:block" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <main className="flex-1 relative z-10">{children}</main>
      {/* Footer */}
      <FooterMain />
    </div>
  );
};

export default Layout;
