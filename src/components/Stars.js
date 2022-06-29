import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function Stars({ count }) {
    if (count < 1 || count > 5 || typeof count !== 'number') {
      return null;
    }
    const arrayOfStars = [];
    for (let i = 0; i < Math.round(count); i++) {
      arrayOfStars.push(
        <li key={uuidv4()}>
          <Star />
        </li>
      );
    }
    return <ul className="card-body-stars u-clearfix">{arrayOfStars}</ul>;
  }

Stars.propTypes = {
    count: PropTypes.number,
};
  
Stars.defaultProps = {
    count: 0,
};