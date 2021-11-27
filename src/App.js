import "./App.css";
import HomePage from "./pages/homepage/homepage.jsx";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
