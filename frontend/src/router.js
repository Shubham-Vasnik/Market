import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorScreen from "./screens/ErrorScreen";
import RootLayout from "./components/RootLayout";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";
import SignIn from "./screens/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorScreen />}>
      <Route index element={<HomeScreen />} />
      <Route path="product/:id" element={<ProductScreen />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<SignIn />} />
    </Route>
  )
);

export default router;
