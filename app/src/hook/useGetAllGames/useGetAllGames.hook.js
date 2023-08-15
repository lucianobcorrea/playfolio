import { useState } from 'react';
import { toast } from 'react-toastify';
import { getAllGames } from '../../api/game/getAllGames.api';

export function useGetAllGames() {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchAllGames(page) {
    try {
      const response = await getAllGames({ page });
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
