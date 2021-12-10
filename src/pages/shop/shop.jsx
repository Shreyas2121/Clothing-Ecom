import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../componets/collection-overview/collection-overview.jsx";
import CategoryPage from "../category/category.jsx";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionOverview />} />
      <Route path="/:categoryId" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default ShopPage;
