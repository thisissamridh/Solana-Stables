import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import TransferData from "./pages/TransferData";
import LiquidityPool from "./pages/LiquidityPool";
import Stablecoins from "./pages/Stablecoins";
const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<TransferData />} />
        <Route path="/Stablecoins/:bID" element={<Stablecoins />} />
        <Route path="/LiquidityPool/:aID" element={<LiquidityPool />} />
      </Routes>
    </RootLayout>
  );
};

export default App;