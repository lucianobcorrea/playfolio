import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfile } from '../../api/user/editProfile.api';
import useGlobalUser from '../../context/user.context';

export function useEditProfile( ) {
  const [user] = useGlobalUser();
  const [profileInputs, setProfileInputs] = useState({
    name: user.name,
    image: user.image,
  });

  const DEFAULT_IMAGE =
    'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg';

  async function handleProfileSubmit(event) {
    event.preventDefault();

    try {
      if (profileInputs.image === '') {
        profileInputs.image = DEFAULT_IMAGE;
      }

      await editProfile(profileInputs);

      const alteredUser = {
        name: profileInputs.name,
        image: profileInputs.image,
        email: user.email,
      };
      localStorage.setItem('user', JSON.stringify(alteredUser));
      setTimeout(() => {
        window.location.reload(true);
      }, 1500);
      toast.success('Profile Edited Sucessfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleProfileChange(event) {
    const { name, value } = event.target;

    setProfileInputs((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    profileInputs,
    handleProfileChange,
    handleProfileSubmit,
  };
}
