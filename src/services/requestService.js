import { post, patch } from "../utils/request";

export const createRequest = async (options) => {
  const requests = await post("request", options);
  return requests;
};

export const updateRequest = async (id, options) => {
  const request = await patch(`request/${id}`, options);
  return request;
};
