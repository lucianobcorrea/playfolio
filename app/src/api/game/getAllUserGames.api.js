import { axiosInstance } from '../_base/axiosInstance';

const URL_GAMES = '/games/me';

export async function getAllUserGames({ page }) {
  const response = await axiosInstance.get(`${URL_GAMES}?size=6&page=${page}`);
  return response.data;
}
