import { del, get, patch, post } from "../utils/request";

export const getUser = async () => {
  const result = await get("users");
  return result;
};

export const getUserById = async (id) => {
  const result = await get(`users?id=${id}`);
  // console.log(result);
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
  // console.log(result);
  return result;
};

export const updateUser = async (id) => {
  const result = await patch(`users/${id}`);
  return result;
};

export const getLogin = async (hashId, password) => {
  // console.log("http://localhost:3002/" +`users?hashId=${hashId}&password=${password}`);
  const result = await get(`users?hashId=${hashId}&password=${password}`);
  return result;
};

export const getUserByHashId = async (hashId) => {
  const result = await get(`users?hashId=${hashId}`);
  return result;
};
