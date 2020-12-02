import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameButton from '../../common/GameButton';

export default function GameCard(props) {
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
      <GameButton
        onClick={() => setFavourite(!favourite)}
        content={favourite ? 'Remove from favourite' : 'Add to favourite'}
      />
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

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  removeMe: PropTypes.func.isRequired,
};
