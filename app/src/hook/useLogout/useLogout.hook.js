import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth/logout.api';
import useGlobalUser from '../../context/user.context';

export function useLogout() {
  const [, setUser] = useGlobalUser();
  const navigate = useNavigate();

  async function handleLogout() {
    logout();
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  }

  return { handleLogout };
}