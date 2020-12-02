import React from 'react';
import PropTypes from 'prop-types';

function GameButton(props) {
  const { onClick, content } = props;

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}

GameButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default GameButton;
