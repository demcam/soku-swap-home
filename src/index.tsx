import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ResetCSS } from "@pancakeswap-libs/uikit";
import App from "./App";
import ApplicationUpdater from "./state/application/updater";
import ListsUpdater from "./state/lists/updater";
import MulticallUpdater from "./state/multicall/updater";
import TransactionUpdater from "./state/transactions/updater";
import Providers from "./Providers";

if ("ethereum" in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false;
}

window.addEventListener("error", () => {
  localStorage?.removeItem("redux_localstorage_simple_lists");
});

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
      </>
      <ResetCSS />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById("root")
);
