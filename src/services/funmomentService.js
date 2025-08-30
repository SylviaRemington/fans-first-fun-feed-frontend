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
const show = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { 
  index,
};