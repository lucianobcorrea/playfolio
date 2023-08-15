import { axiosInstance } from '../_base/axiosInstance';

export async function deleteGame(gameId) {
  await axiosInstance.delete(`/games/${gameId}/delete`);
}
