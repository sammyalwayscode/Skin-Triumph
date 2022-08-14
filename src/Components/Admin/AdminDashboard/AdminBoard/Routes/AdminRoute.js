import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Blog from "../BoardComp/Blog/Blog";
import Customers from "../BoardComp/Customers/Customers";
import Orders from "../BoardComp/Orders/Orders";
import Overview from "../BoardComp/Overview/Overview";
import Products from "../BoardComp/Products/Products";
import ProductUpload from "../BoardComp/ProductsUpload/ProductUpload";
import Stocklist from "../BoardComp/Stocklist/Stocklist";
import Board from "../BoardHold/Board";

const AdminRoute = () => {
  const admin = useSelector((state) => state.currentAdmin);
  return (
    <>
      {admin?.isAdmin === true ? (
        <Container>
          <Board />
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/uploadproducts" element={<ProductUpload />} />
            <Route path="/boardproducts" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/boardblogs" element={<Blog />} />
            <Route path="/boardstocklist" element={<Stocklist />} />
          </Routes>
        </Container>
      ) : null}
    </>
  );
};

export default AdminRoute;

const Container = styled.div`
  display: flex;
`;
