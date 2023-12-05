import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const AdminSidebar = props => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Fragment>
      <div
        style={{ boxShadow: '1px 1px 8px 0.2px #aaaaaa' }}
        id="sidebar"
        className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-black-600">
        <div
          onClick={e => history.push('/admin/messages')}
          className={`${
            location.pathname === '/admin/messages'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Messages</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard')}
          className={`${
            location.pathname === '/admin/dashboard'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Dashboard</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard/categories')}
          className={`${
            location.pathname === '/admin/dashboard/categories'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Categories</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard/products')}
          className={`${
            location.pathname === '/admin/dashboard/products'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Products</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard/orders')}
          className={`${
            location.pathname === '/admin/dashboard/orders'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Orders</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard/users')}
          className={`${
            location.pathname === '/admin/dashboard/users'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Users</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={e => history.push('/admin/dashboard/appointment')}
          className={`${
            location.pathname === '/admin/dashboard/appointment'
              ? 'border-r-4 border-gray-800 bg-gray-100'
              : ''
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
          <span>
            <svg
              className="w-8 h-8 text-black-600 hover:text-black-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="hover:text-black-800">Appointments</span>
        </div>
        <hr className="border-b border-gray-200" />
        <Fragment>
          <div
            className={` userDropdownBtn hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}>
            <span>
              <svg
                className="w-8 h-8 text-black-600 hover:text-black-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21H3V3h9v5h9v13zm-4-9v5h-5v-5h5z"
                />
              </svg>
            </span>
            <span className="hover:text-black-800">Reports</span>
            <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
              {
                <Fragment>
                  <li className="flex flex-col text-gray-700 w-48 shadow-lg">
                    <div
                      onClick={e =>
                        history.push('/admin/dashboard/allProducts')
                      }
                      className={`${
                        location.pathname === '/admin/dashboard/allProducts'
                          ? 'border-r-4 border-gray-800 bg-gray-100'
                          : ''
                      } flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer`}>
                      <span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </span>
                      <span>Product Lists</span>
                    </div>
                    <span
                      onClick={e => history.push('/user/profile')}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 8v10M12 8v10M18 8v10M3 4h18M3 8h2M19 8h2M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span>Inventory</span>
                    </span>
                    <span
                      onClick={e => history.push('/user/profile')}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 18h18M3 12h18M3 6h18"
                          />
                        </svg>
                      </span>
                      <span>Sales Report</span>
                    </span>
                  </li>
                </Fragment>
              }
            </div>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
