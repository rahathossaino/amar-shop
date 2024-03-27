import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StarRating = ({ value, onChange }) => {
  const handleRatingChange = (newValue) => {
    onChange(newValue);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <label key={i}>
          <input
            type="radio"
            name="rating"
            value={i}
            checked={value === i}
            onChange={() => handleRatingChange(i)}
            hidden
          />
          <StyledFontAwesomeIcon icon={faStar} className="fa-3x" selected={value >= i} />
        </label>
      );
    }
    return stars;
  };

  return (
    <Wrapper>
      {renderStars()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 10rem;
  display: flex;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.selected ? '#ffc107' : ' #ddd'};
`;

export default StarRating;
