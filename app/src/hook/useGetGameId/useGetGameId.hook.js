import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const URL_STEAM_API = 'http://localhost:5000/';
const DEFAULT_ERROR = 'An error has ocurred when trying to fetch the data';

export function useGetGameId() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(URL_STEAM_API);
      setData(response.data);
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, fetchData };
}
