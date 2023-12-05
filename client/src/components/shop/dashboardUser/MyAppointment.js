import React, { Fragment, useContext, useState, useEffect } from 'react';
import Layout from './Layout';
import { DashboardUserContext } from './Layout';
import { updatePersonalInformationAction } from './Action';
import Appointment from '../../../components/admin/appointment/index';
const MyAppointment = () => {
  const { data, dispatch } = useContext(DashboardUserContext);
  const userDetails = data.userDetails !== null ? data.userDetails : '';

  return (
    <Fragment>
      <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        {/* <div className="shadow-lg border">
          <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
            Appointment
          </div>
          <hr />
        </div> */}
        <Appointment isAdmin={false} />
      </div>
    </Fragment>
  );
};

const UserProfile = props => {
  return (
    <Fragment>
      <Layout children={<MyAppointment />} />
    </Fragment>
  );
};

export default UserProfile;
