import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";

import LoginSingup from "./Component/LoginSignUp/LoginSingup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="mainWrapper">
          <Header />
          {/* <BalanceChartPremium />
          <InventoroyOfRequest />
          <NetworksNodes /> */}

          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/development" element={<LoginSingup />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
