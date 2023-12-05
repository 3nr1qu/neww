/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useEffect } from 'react';
import moment from 'moment';

import { OrderContext } from './index';
import { fetchData, editOrderReq, deleteOrderReq } from './Actions';

const apiURL = process.env.REACT_APP_API_URL;

const AllCategory = props => {
  const { data, dispatch } = useContext(OrderContext);
  const { users, loading } = data;

  useEffect(() => {
    fetchData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Customer</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Created At</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, i) => {
                return <CategoryTable key={i} users={item} />;
              })
            ) : (
              <tr>
                <td
                  colSpan="12"
                  className="text-xl text-center font-semibold py-8">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {users && users.length} users found
        </div>
      </div>
    </Fragment>
  );
};
const CategoryTable = ({ users, editOrder }) => {
  const { dispatch } = useContext(OrderContext);

  console.log({ users });
  return (
    <Fragment>
      <tr className="border-b">
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.name}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.email}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.createdAt}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.address}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.phoneNumber}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {users.userRole === 1 ? 'Admin' : 'User'}
        </td>
        <td className="p-2 flex items-center justify-center">
          
          <span
            onClick={(e) => deleteOrderReq(users._id, dispatch)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default AllCategory;
