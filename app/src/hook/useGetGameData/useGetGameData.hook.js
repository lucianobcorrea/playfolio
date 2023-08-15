import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const URL_STEAM_DATA_API = 'http://localhost:5000';
const DEFAULT_ERROR = 'An error has ocurred when trying to fetch the data';

export function useGetGameData(setClickedItem = () => {}) {
  const [gameData, setGameData] = useState([]);
  const [isLoadingGameData, setIsLoadingGameData] = useState(true);

  async function fetchGameData(appId) {
    try {
      const response = await axios.get(
        `${URL_STEAM_DATA_API}/steam-data/${appId}`
      );
      setGameData(response.data);
      setClickedItem(true);
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    } finally {
      setIsLoadingGameData(false);
    }
  }

  return { gameData, isLoadingGameData, fetchGameData };
}
