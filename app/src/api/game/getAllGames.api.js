import { axiosInstance } from '../_base/axiosInstance';

const URL_GAMES = '/games';

export async function getAllGames({ page }) {
  const response = await axiosInstance.get(`${URL_GAMES}?size=6&page=${page}`);
  return response.data;
}
