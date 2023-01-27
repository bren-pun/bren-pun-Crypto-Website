// TradingViewWidget.js

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget({ coinData }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    const stableCoin = ["usdt", "usdc", "busd", "tusd", "gusd"];
    console.log(stableCoin.includes("usdt"));

    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_e9043") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `${
            stableCoin.includes(coinData)
              ? `CRYPTO:${coinData}`
              : `CRYPTO:${coinData}USD`
          }`,
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          range: "1D",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          calendar: true,
          container_id: "tradingview_e9043",
        });
      }
    }
  }, [coinData]);

  const stableCoin = ["usdt", "usdc", "busd", "tusd", "gusd"];

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_e9043" style={{ height: "70Vh" }} />
      <div className="tradingview-widget-copyright">
        <a
          href={`https://www.tradingview.com/symbols/${
            stableCoin.includes(coinData)
              ? `CRYPTO:${coinData}`
              : `CRYPTO:${coinData}USD`
          }/`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">Chart</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
}
