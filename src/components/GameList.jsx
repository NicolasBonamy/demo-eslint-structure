import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

export const API_URL = 'https://checkpoint2.wild-projects.duckdns.org';

export default function GameList() {
  const [games, setGames] = useState([]);
  const [onlyBest, setOnlyBest] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/games`).then((response) => setGames(response.data));
  }, []);

  const removeGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <section className='GameList'>
      <button type='button' onClick={() => setOnlyBest(!onlyBest)}>
        {onlyBest ? 'All games' : 'Best games'}
      </button>
      <hr />
      {games
        .filter((game) => (onlyBest ? game.rating >= 4.5 : true))
        .map((game) => (
          <Game key={game.id} {...game} removeMe={removeGame} />
        ))}
    </section>
  );
}
