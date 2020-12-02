import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import GameButton from '../../common/GameButton';
import { API_URL } from '../../../consts/api';

export default function GameListView() {
  const [games, setGames] = useState([]);
  const [onlyBest, setOnlyBest] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/games`).then((response) => setGames(response.data));
  }, []);

  const removeGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <MainLayout>
      <section className="GameList">
        <GameButton
          onClick={() => setOnlyBest(!onlyBest)}
          content={onlyBest ? 'All games' : 'Best games'}
        />
        <hr />
        {games
          .filter((game) => (onlyBest ? game.rating >= 4.5 : true))
          .map((game) => (
            <GameCard key={game.id} {...game} removeMe={removeGame} />
          ))}
      </section>
    </MainLayout>
  );
}
