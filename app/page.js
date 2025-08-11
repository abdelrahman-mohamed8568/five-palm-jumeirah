"use client";
import ReactLenis from "@studio-freight/react-lenis";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Btn from "./components/btn";

export default function Home() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/nimbus-sans-l@1.0.0/fonts.css"
        rel="stylesheet"
      />
      <ReactLenis root />
      <Navbar />
      <Header />
      <Btn />
      <Footer />
    </>
  );
}
