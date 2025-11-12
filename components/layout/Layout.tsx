"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
