import { getUserById, updateU } from "./userService";

export const getScheduledByUser = async (id) => {
  const scheduledList = await getUserById(id);
  console.log(scheduledList[0].scheduled_meeting);
  return scheduledList[0].scheduled_meeting;
};

export const createScheduled = async (id, option) => {
  const scheduledList = await getUserById(id);
    const temp = scheduledList[0].scheduled_meeting;
    const scheduled = [...temp, option];
  const updatedFields = { scheduled_meeting: scheduled };
  
  const result = await updateU(id, updatedFields);
  return result;
};
