import { getUserById } from "./userService";

export const getSheduledByUser = async (id) => {
  const users = await getUserById(id);
  return users;
};
