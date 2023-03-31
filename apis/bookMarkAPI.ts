import axios from "axios";
import { API_URL } from "../constants/apiConstants";

export const postBookMarkAPI = async (id: string) => {
  const { data } = await axios.post<string>(
    `${API_URL}/collection/document/${id}`
  );

  return data;
};

export const deleteBookMarkAPI = async (id: string) => {
  const { data } = await axios.delete<string>(
    `${API_URL}/collection/document/${id}`
  );

  return data;
};
