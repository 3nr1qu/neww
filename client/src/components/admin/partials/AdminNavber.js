import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const AdminNavber = props => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwt');
    localStorage.removeItem('cart');
    localStorage.removeItem('wishList');
    window.location.href = '/';
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
        {/*  Large Screen Show  */}
        <div className="hidden lg:block lg:flex lg:items-center lg:space-x-4 mr-32">
          <span>
            <svg
              className="w-8 h-8 cursor-pointer text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
        {/*  Large Screen Show  */}
        <div className="hidden lg:block">
          <span
            onClick={e => history.push('/admin/dashboard')}
            style={{ letterSpacing: '0.70rem' }}
            className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center">
            Nanay Estrella
          </span>
        </div>
        {/* Small Screen Show */}
        <div className="lg:hidden flex items-center">
          <svg
            id="hamburgerBtn"
            className="lg:hidden w-8 h-8 cursor-pointer text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span
            onClick={e => history.push('/admin/dashboard')}
            style={{ letterSpacing: '0.10rem' }}
            className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center">
            Nanay Estrella
          </span>
        </div>
        {/* Both Screen show */}
        <div className="flex items-center">
          <div
            className="hover:bg-gray-200 rounded-lg p-2 relative px-3"
            title="Notification">
            <svg
              className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
              width="32x"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"
                fill="#C07936"
              />
            </svg>
            <span className="absolute top-0 ml-6 mt-1 bg-yellow-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
              1{/* {data.cartProduct !== null ? data.cartProduct.length : 0} */}
            </span>
          </div>
          <div
            className="hover:bg-gray-200 rounded-lg p-2 px-3 relative"
            title="Messages">
            <svg
              className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z" />
            </svg>
            <span className="absolute top-0 ml-6 mt-1 bg-yellow-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
              1{/* {data.cartProduct !== null ? data.cartProduct.length : 0} */}
            </span>
          </div>
          {/* Logout Button Dropdown */}
          <div
            className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative"
            title="Logout">
            <svg
              className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
              <li className="flex flex-col text-gray-700">
                <span
                  onClick={e => history.push('/')}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
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
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </span>
                  <span>Shop</span>
                </span>
                <span className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span>Setting</span>
                </span>
                <span
                  onClick={e => logout()}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <span>Logout</span>
                </span>
              </li>
            </div>
          </div>
        </div>
        {/* Mobile Navber */}
        {/* End Mobile Navber */}
      </nav>
    </Fragment>
  );
};

export default AdminNavber;
