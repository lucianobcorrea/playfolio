import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../api/auth/login.api';
import useGlobalUser from '../../context/user.context';

export function useLoginInputs() {
  const [formInputs, setFormInputs] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const loginInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };
  const [user, setUser] = useGlobalUser();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const userData = await login(loginInputs);
      setUser(userData);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Verify your email or password!');
      }
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    formInputs,
    handleChange,
    handleSubmit,
  };
}
