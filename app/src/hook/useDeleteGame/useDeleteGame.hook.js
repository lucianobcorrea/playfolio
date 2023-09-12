import { deleteGame } from '../../api/game/deleteGame.api';
import { toast } from 'react-toastify';

export function useDeleteGame(setGameEdited) {
  function onDeleteGameClick(gameId) {
    async function deleteUserGame() {
      try {
        await deleteGame(gameId);
        toast.success('Game Deleted');
        setGameEdited(true);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    deleteUserGame();
  }

  return {
    onDeleteGameClick,
  };
}
