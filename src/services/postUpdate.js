import axios from 'axios';

const postUpdate = async (id, columnName, value) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/update-status`, {
      id,  
      columnName,
      value, 
    });

    console.log('Update successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in postUpdate:', error);
    throw error;
  }
};

export default postUpdate;
