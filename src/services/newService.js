import { get, post } from "../utils/request";

export const getListNews = async () => {
    const result = await get(`news`);
    return result;
};
