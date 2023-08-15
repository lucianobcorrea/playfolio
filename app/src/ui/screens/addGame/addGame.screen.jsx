import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useGetGameId } from '../../../hook';
import { Header } from '../../components/header/header.component';
import { SearchBar } from '../../components/searchBar/searchBar.component';
import './addGame.style.css';

export function AddGame() {
  const { data, isLoading, fetchData } = useGetGameId();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="game-input-container">
          <SearchBar data={data} />
        </div>
      </Container>
    </>
  );
}
