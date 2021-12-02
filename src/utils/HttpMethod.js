import axios from "axios";

export const request = async (url) => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};
