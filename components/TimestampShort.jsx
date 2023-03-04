import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function RandPassword() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    getTimestamp();
  }, []);

  function getTimestamp() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const now = dayjs().tz("Asia/Tokyo").format();
    const timestamp = dayjs(now).tz("Asia/Tokyo").format("YYYYMMDD");
    setTimestamp(timestamp);
  }

  function zeroPadding(num, length) {
    return ("0" + num).slice(-length);
  }

  async function copyToClipboard() {
    await getTimestamp();
    if (process.browser) {
      const copyText = document.getElementById("copyTarget").innerText;
      await navigator.clipboard.writeText(copyText);
      const copyButton = document.getElementById("copy-button");
      copyButton.innerHTML = "Copied!";
      setTimeout(() => (copyButton.innerHTML = "Copy"), 1000);
    }
  }

  return (
    <>
      <div className="h-10 leading-10">
        <div className="flex justify-center m-3">
          <p id="copyTarget" className="text-2xl font-bold">
            {timestamp}
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div>
            <button
              id="copy-button"
              onClick={copyToClipboard}
              className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
