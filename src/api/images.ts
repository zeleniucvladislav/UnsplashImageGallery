import request from "./index";
import { AxiosResponse } from "axios";

const access_key = process.env.REACT_APP_ACCESS_KEY;

const getImages = <T>(page: number): Promise<AxiosResponse> => {
  return request<T>("get", "/photos", {
    client_id: access_key,
    per_page: 30,
    page,
  });
};

const getSearchedImages = <T>(
  page: number,
  searchQuery: string
): Promise<AxiosResponse> => {
  return request<T>("get", "search/photos", {
    client_id: access_key,
    query: searchQuery,
    per_page: 30,
    page,
  });
};

const getRandomImage = <T>(): Promise<AxiosResponse> => {
  return request<T>("get", "photos/random", {
    client_id: access_key,
    query: "nature horizontal",
  });
};

export { getImages, getSearchedImages, getRandomImage };
