import { GameCard } from '../../index';
import './allDetailsCard.style.css';

export function AllDetailsCard({
  formattedDate,
  image,
  name,
  appId,
  userImage,
  userName,
  className,
  status,
  index,
  showDots,
  gameId,
  setGameEdited
}) {
  return (
    <div className="cards-data" key={index}>
      <GameCard
        date={formattedDate}
        image={image}
        gameName={name}
        link={`/game-details/${appId}`}
        showDots={showDots}
        actualStatus={status}
        gameId={gameId}
        setGameEdited={setGameEdited}
      >
        <hr />
        <div className="user-data">
          <img className="user-image" src={userImage} alt={userName} />
          <p>{userName}</p>
        </div>
        <hr />
        <div className={className}>
          {status === 'COMPLETE' ? <p>100% COMPLETE</p> : <p>{status}</p>}
        </div>
      </GameCard>
    </div>
  );
}
