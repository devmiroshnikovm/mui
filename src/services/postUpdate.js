import axios from 'axios';

const postUpdate = async (url, id, value) => {
  try {
    // Performing a POST request using Axios
    const response = await axios.post(url, {
      id,   // Assuming the server expects an 'id' in the request body  
      value // and a 'value' field representing the updated value
    });

   
    return response;
  } catch (error) {
    throw error;
  }
};

export default postUpdate;
