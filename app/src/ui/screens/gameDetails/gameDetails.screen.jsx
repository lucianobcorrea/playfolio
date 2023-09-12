import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useGetGameData } from '../../../hook';
import {
  AddGameModal,
  GameImagesCarousel,
  Header,
  LoadingIcon,
} from '../../index';
import './gameDetails.style.css';

export function GameDetails() {
  let { appId } = useParams();
  const { gameData, isLoadingGameData, fetchGameData } = useGetGameData();

  useEffect(() => {
    fetchGameData(appId);
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        {!isLoadingGameData ? (
          <>
            <div className="title-add-game">
              <h1>{gameData[appId]?.data.name}</h1>
              <AddGameModal gameData={gameData} appId={appId} />
            </div>
            <GameImagesCarousel>
              {gameData[appId]?.data.screenshots.map((screenshot) => {
                return (
                  <Carousel.Item key={screenshot.id}>
                    <img
                      className="d-block w-100"
                      alt="Carousel Game Images"
                      src={screenshot.path_thumbnail}
                    />
                  </Carousel.Item>
                );
              })}
            </GameImagesCarousel>
            <div
              className="game-details-content"
              dangerouslySetInnerHTML={{
                __html: gameData[appId]?.data.detailed_description,
              }}
            ></div>
          </>
        ) : (
          <LoadingIcon />
        )}
      </Container>
    </>
  );
}
