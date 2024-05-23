import { getUserById } from "./userService";

export const getScheduledByUser = async (id) => {
  const scheduledList = await getUserById(id);
  return scheduledList[0].scheduled_meeting;
};
