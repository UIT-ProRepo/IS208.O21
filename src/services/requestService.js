import { post } from "../utils/request";

export const createRequest = async (options) => {
  const requests = await post("request", options);
  return requests;
};
