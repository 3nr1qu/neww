import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

export const createAppointment = async data => {
  let formData = new FormData();

  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('contactNumber', data.contactNumber);
  formData.append('email', data.email);
  formData.append('streetAddress', data.streetAddress);
  formData.append('barangayAddress', data.barangayAddress);
  formData.append('provinceAddress', data.provinceAddress);
  formData.append('postalAddress', data.postalAddress);
  formData.append('message', data.message);
  formData.append('dateTime', data.dateTime);
  formData.append('user_id', data.user_id);
  try {
    let res = await axios.post(`${apiURL}/api/appointment/add`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
