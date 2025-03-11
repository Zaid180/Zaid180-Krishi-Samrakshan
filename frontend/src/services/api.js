import axios from 'axios';

// Define the base URL for your Flask API
const BASE_URL = 'http://localhost:5000';

/**
 * Upload file to the Flask backend and get disease prediction.
 * 
 * @param {File} file - The image or video file to be uploaded.
 * @returns {Promise} - Axios promise with the prediction result.
 */
export const uploadFileForPrediction = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(`${BASE_URL}/predict`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
