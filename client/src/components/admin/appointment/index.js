import React, { Fragment, createContext, useReducer } from 'react';
import AdminLayout from '../layout';
import CategoryMenu from './CategoryMenu';
import AllAppointment from './AllAppointment';
import { categoryState, categoryReducer } from './CategoryContext';
import {
  getAllCategory,
  deleteAppointment,
  getAllAppointment,
  isAdmin
} from './FetchApi';
/* This context manage all of the caregories component's data */
export const CategoryContext = createContext();

const CategoryComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      {!isAdmin() && <CategoryMenu />}
      <AllAppointment />
    </div>
  );
};

const Categories = ({ isAdmin = true }) => {
  const [data, dispatch] = useReducer(categoryReducer, categoryState);

  if (isAdmin) {
    return (
      <Fragment>
        <CategoryContext.Provider value={{ data, dispatch }}>
          <AdminLayout children={<CategoryComponent />} />
        </CategoryContext.Provider>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <CategoryContext.Provider value={{ data, dispatch }}>
          <CategoryComponent />
        </CategoryContext.Provider>
      </Fragment>
    );
  }
};

export default Categories;
