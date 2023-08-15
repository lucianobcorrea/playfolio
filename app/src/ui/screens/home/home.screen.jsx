import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AllDetailsCard } from '../..';
import { getStandartDateTime } from '../../../helpers/dateFunctions';
import { useGetAllGames } from '../../../hook/useGetAllGames/useGetAllGames.hook';
import { Header } from '../../components/header/header.component';
import './homeScreen.style.css';

export function HomeScreen() {
  const { games, fetchAllGames, isLoading } = useGetAllGames();

  function selectStatusClass(status) {
    let className = 'game-status';

    if (status === 'ONGOING') {
      className = 'ongoing game-status';
    } else if (status === 'COMPLETE') {
      className = 'complete game-status';
    } else {
      className = 'finished game-status';
    }

    return className;
  }

  useEffect(() => {
    fetchAllGames();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="cards-container">
          {games.map(
            (
              {
                image,
                name,
                publishDate,
                userImage,
                userName,
                status,
                appId,
                id,
              },
              index
            ) => {
              const formattedDate = getStandartDateTime(publishDate);
              const className = selectStatusClass(status);
              return (
                <AllDetailsCard
                  formattedDate={formattedDate}
                  className={className}
                  status={status}
                  name={name}
                  appId={appId}
                  userImage={userImage}
                  userName={userName}
                  image={image}
                  gameId={id}
                  index={index}
                />
              );
            }
          )}
        </div>
      </Container>
    </>
  );
}
