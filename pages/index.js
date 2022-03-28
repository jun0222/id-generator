import { useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId"
import Password from "../components/Password";
import Timestamp from "../components/Timestamp";
import Footer from "../components/Footer";
import Head from "../components/Head";

export default function Home() {
  const [mode, setMode] = useState("RandId");
  // パラメータを受け取る
  // 参考：https://www.sukerou.com/2022/02/nextjs-getserversideprops.html
  const [param, setParam] = useState("");
  async function getServerSideProps(context) {
    const { id } = context.query;
    setParam(id);
    console.log(param.hoge)
  }

  return (
    <>
      <Head />
      <Header 
        setMode={setMode}
      />
      {mode==="RandId" && <RandId />}
      {mode==="Password" && <Password />}
      {mode==="Timestamp" && <Timestamp />}
      <Footer />
    </>
  )
}
