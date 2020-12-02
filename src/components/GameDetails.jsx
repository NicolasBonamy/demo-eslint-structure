import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { API_URL } from './GameList';
import { Link } from 'react-router-dom';

export default function GameDetails(props) {
  const [game, setGame] = useState({});

  // props.match.params.id
  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    // 'https://checkpoint2.wild-projects.duckdns.org/games/3498'
    axios.get(`${API_URL}/games/${id}`).then((response) => {
      setGame(response.data);
    }); // Promise
  }, [id]);

  const { name, rating, background_image: backgroundImage, genres } = game;

  return (
    <main>
      <h2>{name}</h2>
      <div>{rating}</div>
      <img src={backgroundImage} alt={name} width='100%' />
      <ul>
        {genres &&
          genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>
      <br />
      <Link to='/'>Go to game list</Link>
    </main>
  );
}

GameDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
