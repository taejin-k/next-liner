import axios from "axios";
import { API_URL } from "../constants/apiConstants";
import { GetDocumentsAPI } from "../models/getDocuments";

export const getDocumentsAPI = async (keyword: string, page: number) => {
  const { data } = await axios.get<GetDocumentsAPI>(
    `${API_URL}/search/documents?query=${keyword}&size=20&from=${page}`
  );

  return {
    documents: data.documents,
    nextPage: page + 1,
    isLast: data.isLast,
  };
};
