import { axiosInstance } from '../_base/axiosInstance';

const URL_REGISTER_USER = '/users';

export async function register({ name, password, email, image }) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  if (image) {
    data.image = image;
  }

  const response = await axiosInstance.post(URL_REGISTER_USER, data);
  return response.data;
}
