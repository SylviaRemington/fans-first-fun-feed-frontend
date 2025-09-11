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

// New Show function
const show = async (funmomentId, options = {}) => {
  try {
    const res = await axios.get(`${BASE_URL}/${funmomentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      params: options.cacheBust ? { _t: options.cacheBust } : {},
      // adding cacheBust functionality because having cache issues - just learning about this and how to make it work
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// This creates the funmoment. 
// Create function for creating.
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

// This creates the comment. 
// Create comment function for comment section.
const createComment = async (funmomentId, comment) => {
  try {
    const res = await axios.post(`${BASE_URL}/${funmomentId}/comments`, comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Update the comment
const updateComment = async (funmomentId, commentId, commentData) => {
  try {
    const res = await axios.put(`${BASE_URL}/${funmomentId}/comments/${commentId}`, commentData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete the comment
const deleteComment = async (funmomentId, commentId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${funmomentId}/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Update FunMoment
const update = async (funmomentId, formData) => {
  try {
    const res = await axios.put(`${BASE_URL}/${funmomentId}`, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete FunMoment
const deleteFunMoment = async (funmomentId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${funmomentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export { index, show, create, createComment, deleteFunMoment, update, updateComment, deleteComment };


