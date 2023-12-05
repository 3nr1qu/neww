import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt')).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`
    }
  };
};
export const isAdmin = () =>
  localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt')).user.role === 1
    : false;
export const getAllCategory = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/category/all-category`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async ({
  cName,
  cImage,
  cDescription,
  cStatus
}) => {
  let formData = new FormData();
  formData.append('cImage', cImage);
  formData.append('cName', cName);
  formData.append('cDescription', cDescription);
  formData.append('cStatus', cStatus);

  try {
    let res = await axios.post(
      `${apiURL}/api/category/add-category`,
      formData,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (cId, des, status) => {
  let data = { cId: cId, cDescription: des, cStatus: status };
  try {
    let res = await axios.post(
      `${apiURL}/api/category/edit-category`,
      data,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const editAppointment = async data => {
  try {
    let res = await axios.post(
      `${apiURL}/api/appointment/edit-appointment`,
      data,
      Headers()
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async cId => {
  try {
    let res = await axios.post(
      `${apiURL}/api/category/delete-category`,
      { cId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAppointment = async appointmentId => {
  try {
    let res = await axios.post(
      `${apiURL}/api/appointment/delete-appointment`,
      { appointmentId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAppointment = async () => {
  try {
    let isAdmin = localStorage.getItem('jwt')
      ? JSON.parse(localStorage.getItem('jwt')).user.role === 1
      : false;

    let userId = JSON.parse(localStorage.getItem('jwt')).user;

    let res = await axios.post(
      `${apiURL}/api/appointment/all`,
      {
        isAdmin: isAdmin,
        userId: userId._id
      },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
