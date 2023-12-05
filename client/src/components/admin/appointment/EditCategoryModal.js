import React, { Fragment, useContext, useState, useEffect } from 'react';
import { CategoryContext } from './index';
import {
  editCategory,
  getAllCategory,
  getAllAppointment,
  editAppointment
} from './FetchApi';
import moment from 'moment';
const EditCategoryModal = props => {
  const { data, dispatch } = useContext(CategoryContext);

  const { appointmentData } = props;

  const [des, setDes] = useState('');
  const [status, setStatus] = useState('');
  const [cId, setCid] = useState('');

  useEffect(() => {
    setDes(data.editCategoryModal.des);
    setStatus(data.editCategoryModal.status);
    setCid(data.editCategoryModal.cId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.editCategoryModal.modal]);

  const fetchData = async () => {
    let responseData = await getAllAppointment();

    if (responseData.Categories) {
      dispatch({
        type: 'fetchCategoryAndChangeState',
        payload: responseData.Categories
      });
    }
  };

  const submitForm = async (isApproved = false) => {
    let savedData = {
      appointmentId: appointmentData._id,
      status: isApproved
    };

    console.log({ savedData });
    // dispatch({ type: 'loading', payload: true });
    // props.setEditModalopen(true);
    let edit = await editAppointment(savedData);
    if (edit.error) {
      console.log(edit.error);
      dispatch({ type: 'loading', payload: false });
    } else if (edit.success) {
      props.setEditModalopen(false);

      setTimeout(() => {
        fetchData();
        dispatch({ type: 'loading', payload: false });
      }, 1000);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={e => props.setEditModalopen(false)}
        className={`${
          props.isOpen ? '' : 'hidden'
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          props.isOpen ? '' : 'hidden'
        } fixed inset-0 m-4  flex items-center z-30 justify-center`}>
        <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              View Appointment
            </span>
            {/* Close Modal */}
            <span
              style={{ background: '#679641' }}
              onClick={e => props.setEditModalopen(false)}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              value={`${appointmentData.firstName} ${appointmentData.lastName}`}
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2">
              Date of Appointment
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              value={`${moment(appointmentData.dateTime).format('lll')}`}
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              value={`${appointmentData.barangayAddress}`}
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              value={`${appointmentData.contactNumber}`}
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="description"> Description</label>
            <textarea
              value={appointmentData.message}
              // onChange={e => setDes(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              name="description"
              id="description"
              cols={5}
              rows={5}
            />
          </div>
          {/* <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="status"> Status</label>
            <select
              value={status}
              name="status"
              onChange={e => setStatus(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              id="status">
              <option name="status" value="Active">
                PENDING
              </option>
              <option name="status" value="Active">
                APPROVED
              </option>
              <option name="status" value="Disabled">
                REJECTED
              </option>
            </select>
          </div> */}
          <div class="flex space-x-4 justify-content-end">
            <button
              onClick={e => submitForm(true)}
              style={{ background: '#679641' }}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Approve
            </button>
            <button
              onClick={e => submitForm(false)}
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Reject
            </button>
          </div>
          {/* <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
            <button
              style={{ background: '#679641' }}
              onClick={e => submitForm()}
              className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2">
              Approve
            </button>
            <button
              // style={{ background: '#679641' }}
              onClick={e => submitForm()}
              className="rounded-full bg-red-800 text-gray-100 text-lg font-medium py-2">
              Reject
            </button>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default EditCategoryModal;
