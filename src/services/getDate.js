import axios from 'axios';

const getDate = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/data`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

export default getDate;
