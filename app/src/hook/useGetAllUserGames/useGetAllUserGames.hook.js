import { useState } from 'react';
import { toast } from 'react-toastify';
import { getAllUserGames } from '../../api/game/getAllUserGames.api';

export function useGetAllUserGames() {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchAllGames(page) {
    try {
      const response = await getAllUserGames({ page });
      setGames(response.content);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    games,
    fetchAllGames,
    isLoading,
  };
}
