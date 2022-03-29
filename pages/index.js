import { useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId"
import Password from "../components/Password";
import Timestamp from "../components/Timestamp";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { useRouter } from "next/router";

  

export default function Home() {
  const [mode, setMode] = useState("RandId");

  // パラメータを受け取る
  // 参考：https://maku.blog/p/r7fou3a/
  const router = useRouter();
  const { hoge } = router.query;

  return (
    <>
      {hoge}
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
