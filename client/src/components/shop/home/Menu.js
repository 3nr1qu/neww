import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";

export const HomeContext = createContext();

const Menus = () => {
  return (  
    <Fragment>
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
    </Fragment>
  );
};

const Menu = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  console.log("Context values in ProductCategory:", data, dispatch);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<Menus />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Menu;
