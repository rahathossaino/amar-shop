import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";


const Star = ({ stars, numberOfProductRating }) => {

  return (
    <Wrapper>
      <div className="icon-style">
        <div className="star-rating " title={`${(stars * 100) / 5}%`}>
            <div className="back-stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={i < Math.floor(stars) ? "fas fa-star yellow-star" : (stars % 1 !== 0 && i === Math.floor(stars)) ? "fas fa-star-half-alt yellow-star" : "far fa-star yellow-star"} aria-hidden="true"></i>
              ))}
          </div>
        </div>
        <p>({numberOfProductRating} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
  .yellow-star{
    color:#ffc107;
    font-size:1.7rem;
  }
`;

export default Star;