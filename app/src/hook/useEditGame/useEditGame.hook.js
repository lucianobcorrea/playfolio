import { useState } from 'react';
import { toast } from 'react-toastify';
import { editGame } from '../../api/game/editGame.api';

export function useEditGame(setGameEdited) {
  const [statusInput, setStatusInput] = useState({
    status: 'FINISHED',
  });

  function onEditGameClick(gameId) {
    async function editUserGame() {
      try {
        await editGame(gameId, statusInput.status);
        toast.success('Game edited with success!');
        setGameEdited(true);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    editUserGame();
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
    onEditGameClick,
  };
}
