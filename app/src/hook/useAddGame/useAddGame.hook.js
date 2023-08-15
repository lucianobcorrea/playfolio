import { useState } from 'react';
import { toast } from 'react-toastify';
import { addGame } from '../../api/game/addGame.api';

export function useAddGame() {
  const [statusInput, setStatusInput] = useState({
    status: 'FINISHED',
  });

  function onAddGameClick(appId, name, description, image) {
    async function addUserGame() {
      try {
        await addGame(appId, name, description, image, statusInput.status);
        toast.success('Game added with success!');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    addUserGame();
  }

  function handleGameInputChange(event) {
    const { name, value } = event.target;

    setStatusInput((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    statusInput,
    handleGameInputChange,
    onAddGameClick,
  };
}
