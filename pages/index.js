import { useEffect, useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId";
import Password from "../components/Password";
import Timestamp from "../components/Timestamp";
import Word from "../components/Word";
import Name from "../components/Name";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { useRouter } from "next/router";

export default function Home() {
  const [mode, setMode] = useState("RandId");

  const router = useRouter();
  useEffect(() => {
    // クエリパラメータを受け取る
    // 参考：https://maku.blog/p/r7fou3a/
    const { mq } = router.query; // modeQueryだと長いのでmqに代入
    if (mq) {
      setMode(mq);
    }
  }, [router.query]);

  return (
    <>
      <Head />
      <Header setMode={setMode} />
      {mode === "RandId" && <RandId />}
      {mode === "Password" && <Password />}
      {mode === "Timestamp" && <Timestamp />}
      {mode === "Word" && <Word />}
      {mode === "Name" && <Name />}
      <Footer />
    </>
  );
}
