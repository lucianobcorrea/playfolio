import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../api/auth/registerUser.api';

export function useRegisterFormInputs() {
  const [registerInputs, setRegisterInputs] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    try {
      await register(registerInputs);
      setTimeout(() => {
        window.location.reload(true);
      }, 1500);
      toast.success('Successful Registration');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleRegisterChange(event) {
    const { name, value } = event.target;

    setRegisterInputs((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    registerInputs,
    handleRegisterChange,
    handleRegisterSubmit,
  };
}
