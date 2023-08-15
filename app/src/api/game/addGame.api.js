import { axiosInstance } from '../_base/axiosInstance';

const URL_ADD_GAME = '/games/add';

export async function addGame(appId, name, description, image, status) {
  const response = await axiosInstance.post(URL_ADD_GAME, {
    appId: appId,
    name: name,
    description: description,
    image: image,
    status: status,
  });
  return response.data;
}
