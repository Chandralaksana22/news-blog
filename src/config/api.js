import axios from 'axios';
import config from './config.js';

const usData = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}top-headlines?country=us&apiKey=${config.apiKey}`);
    console.log(response.data,'data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
const topNews = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}top-headlines?country=us&apiKey=${config.apiKey}`);
      console.log(response.data,'data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  const sportData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}top-headlines?category=sports&apiKey=${config.apiKey}`);
      console.log(response.data,'data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  const entertainmentData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}top-headlines?country=us&category=entertainment&apiKey=${config.apiKey}`);
      console.log(response.data,'data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  

export { usData, topNews, sportData, entertainmentData};
