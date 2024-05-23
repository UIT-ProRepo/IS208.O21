import { del, get, patch, post } from "../utils/request";

export const getUser = async () => {
  const result = await get("users");
  return result;
};

export const getUserById = async (id) => {
  const result = await get(`users/${id}`);
  return result;
};

export const createU = async (options) => {
  const result = await post("users", options);
  return result;
};

export const deleteU = async (id) => {
  const result = await del("users", id);
  return result;
};

export const updateU = async (id, options) => {
  const result = await patch(`users/${id}`, options);
  return result;
};

export const getLogin = async (hashId, password) => {
  const result = await get(`users?hashId=${hashId}&password=${password}`);
  return result;
};
