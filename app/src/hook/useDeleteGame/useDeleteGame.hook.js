import { deleteGame } from '../../api/game/deleteGame.api';
import { toast } from 'react-toastify';

export function useDeleteGame() {
  function onDeleteGameClick(gameId) {
    async function deleteUserGame() {
      try {
        await deleteGame(gameId);
        toast.success('Game Deleted');
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
