import { axiosInstance } from '../_base/axiosInstance';

export async function editGame(gameId, status) {
  const response = await axiosInstance.patch(`/games/${gameId}/edit`, {
    status: status,
  });
  return response.data;
}
