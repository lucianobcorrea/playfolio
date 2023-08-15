import { Button } from 'react-bootstrap';
import { useAddGame } from '../../../hook/index';
import { GameStatusSelect, GlobalModal } from '../../index';

export function AddGameModal({ gameData, appId }) {
  const { statusInput, handleGameInputChange, onAddGameClick } = useAddGame();

  return (
    <GlobalModal
      button={
        <Button size="lg" variant="light">
          Add Game
        </Button>
      }
      modalTitle="Add Game."
      confirmButtonText="Add Game"
      onClick={() =>
        onAddGameClick(
          gameData[appId]?.data.steam_appid,
          gameData[appId]?.data.name,
          gameData[appId]?.data.short_description,
          gameData[appId]?.data.header_image
        )
      }
    >
      <div className="select-status-padding">
        <p>What is the actual status of your game?</p>
        <GameStatusSelect
          handleGameInputChange={handleGameInputChange}
          statusInput={statusInput}
        />
      </div>
    </GlobalModal>
  );
}
