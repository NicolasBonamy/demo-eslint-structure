import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Game(props) {
  const [favourite, setFavourite] = useState(false);

  const {
    id,
    name,
    background_image: backgroundImage,
    rating,
    removeMe,
  } = props;

  return (
    <article>
      <h2>{`${name} ${favourite ? '❤️' : ''}`}</h2>
      <img src={backgroundImage} alt={name} width="100" />
      <div>{rating}</div>
      <button type="button" onClick={() => setFavourite(!favourite)}>
        {favourite ? 'Remove from favourite' : 'Add to favourite'}
      </button>
      <br />
      <Link to={`/games/${id}`}>Go to game details</Link>
      <br />
      <button
        type="button"
        onClick={() => {
          removeMe(id);
        }}
      >
        Remove me
      </button>
      <hr />
    </article>
  );
}

Game.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  removeMe: PropTypes.func.isRequired,
};
