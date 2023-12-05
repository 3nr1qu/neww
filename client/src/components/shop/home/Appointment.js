/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import bgimage from '../../../Assets/appo.png';
// import { addAppointment } from './../../../components/shop';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createAppointment } from './AppointmentAPI';
import { useHistory } from 'react-router-dom';

const currentLoggedIn = () =>
  localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt')).user
    : false;

const Appointment = () => {
  // const [dateTime, setDateTime] = useState('');
  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  //   error: false,
  //   loading: true
  // });
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      contactNumber: yup.string().required(),
      email: yup.string().email().required(),
      streetAddress: yup.string().required(),
      barangayAddress: yup.string().required(),
      provinceAddress: yup.string().required(),
      postalAddress: yup.string().required(),
      message: yup.string().required()
      // dateTime: yup.date().required()
      // appointmentDate: yup.string().required()
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  let history = useHistory();
  const onSubmit = async data => {
    data.user_id = currentLoggedIn()._id;

    await createAppointment(data);

    history.push('/user/appointment');
  };
  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="w-full flex items-start ">
          <div className="w-1/2 relative flex flex-col">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-lg mx-auto">
              <div className="flex flex-wrap text-center -mx-3 mb-6">
                <h1 className="text-center font-bold text-2xl p-10 mt-10">
                  SCHEDULE AN APPOINTMENT NOW!
                </h1>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input
                    {...register('firstName')}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="John"
                  />
                  {errors?.firstName?.type === 'required' && (
                    <p className="text-red-600">This field is required</p>
                  )}
                  {errors?.firstName?.type === 'maxLength' && (
                    <p className="text-red-600">
                      First name cannot exceed 20 characters
                    </p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input
                    {...register('lastName')}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />{' '}
                  {errors?.lastName?.type === 'required' && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city">
                    Contact #
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="09077629355"
                    {...register('contactNumber')}
                  />
                  {errors?.contactNumber?.type === 'required' && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      {...register('email')}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder="John@gmail.com"
                      aria-invalid={errors.mail ? 'true' : 'false'}
                    />
                    <p className="text-red-600">{errors.email?.message}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Address
                  </label>
                  <input
                    {...register('streetAddress')}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  />
                  <p className="text-gray-600 text-xs italic">Street Address</p>

                  <p className="text-red-600">
                    {errors.streetAddress?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    {...register('barangayAddress')}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Bogtongbod"
                    name="barangayAddress"
                  />
                  <p className="text-gray-600 text-xs italic mb-2">Barangay</p>
                  <p className="text-red-600">
                    {errors.provinceAddress?.message}
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <div className="relative">
                    <input
                      {...register('provinceAddress')}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder="Bohol"
                      name="provinceAddress"
                    />
                    <p className="text-gray-600 text-xs italic mb-2">
                      Province
                    </p>{' '}
                    <p className="text-red-600">
                      {errors.provinceAddress?.message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    {...register('postalAddress')}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="6330"
                    name="postalAddress"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Postal Code/ Zip Code
                  </p>{' '}
                  <p className="text-red-600">
                    {errors.postalAddress?.message}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-full py-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip">
                  What date and time do you want to schedule an appointment with
                  us?
                </label>
                <input
                  {...register('dateTime')}
                  type="datetime-local"
                  placeholder="Date and Time"
                  // value={dateTime}
                  // onChange={e => setDateTime(e.target.value)}
                  name="dateTime"
                  className="border border-gray-400 mb-4 p-2 w-full"
                />{' '}
                <p className="text-red-600">{errors.dateTime?.message}</p>
              </div>
              <div className="w-full md:w-full py-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip">
                  What services are you interested in?
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  name="message"
                  className="appearance-none h-32 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                <p className="text-red-600">{errors.message?.message}</p>
              </div>
              <div className="lex flex-wrap text-center -mx-3 mb-6">
                <button
                  type="submit"
                  className="w-full h-9 mx-20 max-w-[150px] bg-[#228B22] hover:bg-neutral-500 cursor-pointer m-auto text-white text-lg rounded-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
