// path is src/services/funmomentService.js

// Imports
import axios from "axios";

// Creating funmomentService.js - creating the service that will talk to the API
// This is my base url for my funmomentService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/funmoments`;


// Building the service function - building out the index () functionality
// Making a request to /funmoments so no modification to BASE_URL is necessary.
// Using axios instead of fetch for more ease
const index = async () => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};


// show function
const show = async (funmomentId) => {
  try {
    const res = await axios.get(`${BASE_URL}/${funmomentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// THIS CREATES THE FUNMOMENT. --caps so differentiate the two
// create function for creating
const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// THIS CREATES THE COMMENT. --caps so differentiate the two
// create comment function for comment section
const createComment = async (funmomentId, comment) => {
  try {
    const res = await axios.post(`${BASE_URL}/funmoments/${funmomentId}/comments`, comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export { index, show, create, createComment};