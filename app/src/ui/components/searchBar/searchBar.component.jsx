import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import { useGetGameData } from '../../../hook';
import { AddGameModal, GameCard, LoadingIcon, TextInput } from '../../index';
import './searchBar.style.css';

export function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [appId, setAppId] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(false);
  const { gameData, isLoadingGameData, fetchGameData } =
    useGetGameData(setClickedItem);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = data.applist.apps.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
      setClickedItem(false);
    } else {
      setFilteredData(newFilter);
    }

    setSelectedItem(null);
  };

  const handleItemClick = (value) => {
    setFilteredData([]);
    setWordEntered(value.name);
    setAppId(value.appid);
    setSelectedItem(value);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
    setClickedItem(false);
  };

  return (
    <>
      <ToastContainer />
      {data.applist?.apps ? (
        <div className="game-result-container">
          <div className="search">
            <div className="search-inputs">
              <TextInput
                inputValue={wordEntered}
                placeholder={placeholder}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <AiOutlineSearch onClick={() => fetchGameData(appId)} />
                ) : (
                  <AiOutlineClose onClick={clearInput} />
                )}
              </div>
            </div>
            {filteredData.length !== 0 && (
              <div className="data-result">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => handleItemClick(value)}
                      className="data-item"
                    >
                      <p>{value.name}</p>
                      <p>App id: {value.appid}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {clickedItem ? (
            <div>
              <GameCard
                image={gameData[appId]?.data?.header_image}
                gameName={gameData[appId]?.data?.name}
                link={`/game-details/${appId}`}
              >
                <AddGameModal gameData={gameData} appId={appId} />
              </GameCard>
            </div>
          ) : null}
        </div>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
