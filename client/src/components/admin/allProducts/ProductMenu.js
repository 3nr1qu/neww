import React, { Fragment, useContext } from "react";
import { ProductContext } from "./index";
import AddProductModal from "./AddProductModal";

const ProductMenu = (props) => {
  const { dispatch } = useContext(ProductContext);
  return (
    <Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <div className="flex items-center">
          {/* It's open the add product modal */}
          <span
            style={{ background: "#679641" }}
            onClick={(e) =>
              dispatch({ type: "addProductModal", payload: true })
            }
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16 5h2a2 2 0 012 2v6a2 2 0 01-2 2h-1v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3H3a2 2 0 01-2-2V7a2 2 0 012-2h2V3a2 2 0 012-2h6a2 2 0 012 2v2zm-6 1h4v4h-4V6zm-2 8h8v5H8v-5z"
                clipRule="evenodd"
              />
            </svg>
            Print Product List
          </span>
        </div>
        <AddProductModal />
      </div>
    </Fragment>
  );
};

export default ProductMenu;
