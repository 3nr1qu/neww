import React, { Fragment, useContext, useState, useEffect } from 'react';
import AdminLayout from './layout';

import Chat from './../../pages/Chat';
const ProfileComponent = () => {
  return (
    <Fragment>
      <div className="flex flex-col w-full my-4 md:my-0 md:w-12/12 md:px-8">
        <div className="shadow-lg border">
          <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
            Message
          </div>
          <hr />
          <Chat />
        </div>
      </div>
    </Fragment>
  );
};

const UserProfile = props => {
  return (
    <Fragment>
      <AdminLayout children={<ProfileComponent />} />
    </Fragment>
  );
};

export default UserProfile;
