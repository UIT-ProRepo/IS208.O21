import { del, get, patch, post } from "../utils/request";

export const getUser = async () => {
  const result = await get("user");
  return result;
};

export const createU = async (options) => {
  const result = await post("user", options);
  return result;
};

export const deleteU = async (id) => {
  const result = await del("user", id);
  return result;
};

export const updateU = async (id, options) => {
  const result = await patch(`user/${id}`, options);
  return result;
};

export const getLogin = async (hashId, password) => {
  const result = await get(`users?hashId=${hashId}&password=${password}`);
  return result;
};
