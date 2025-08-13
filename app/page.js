"use client";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Btn from "./components/btn";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/nimbus-sans-l@1.0.0/fonts.css"
        rel="stylesheet"
      />
      <ReactLenis Root />
      <Navbar />
      <Header />
      <Btn />
      <Footer />
    </>
  );
}
