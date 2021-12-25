import { useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId"
import Password from "../components/Password";
import Footer from "../components/Footer";

export default function Home() {
  const [mode, setMode] = useState("RandId");
  return (
    <>
      <Header 
        setMode={setMode}
      />
      {mode==="RandId" && <RandId />}
      {mode==="Password" && <Password />}
      <Footer />
    </>
  )
}
