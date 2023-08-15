import { axiosInstance } from '../_base/axiosInstance';

const URL_EDIT_USER = '/users/me/edit';

export async function editProfile({ name, image }) {
  const data = {
    name: name,
  };

  if (image) {
    data.image = image;
  }

  const response = await axiosInstance.patch(URL_EDIT_USER, data);
  return response.data;
}
