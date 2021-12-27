import { useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId"
import Password from "../components/Password";
import Footer from "../components/Footer";

export default function Home() {
  const [mode, setMode] = useState("RandId");
  return (
    <>
      <head>
        <title>IdGenerator</title>
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://id-generator-plum.vercel.app/" />
        <meta property="og:title" content="IdGenerator" />
        <meta property="og:description" content="It is a tool that automatically generates an ID." />
        <meta property="og:image" content="https://myproducts-hosting.s3.ap-northeast-1.amazonaws.com/images/IdGeneratorOgp.png" />
      </head>
      <Header 
        setMode={setMode}
      />
      {mode==="RandId" && <RandId />}
      {mode==="Password" && <Password />}
      <Footer />
    </>
  )
}
