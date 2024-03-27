import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../helpers/FormatPrice";

const Product = (curElem) => {
  const { slug, title, product_image, price, category_name } = curElem;
  return (
    <NavLink to={`/singleproduct/${slug}`}>
      <div className="card">
        <figure>
          <img src={`data:image/jpeg;base64,${product_image.image}`} alt={title} />
          <figcaption className="caption">{category_name}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">
              {<FormatPrice price={ price} />}
              </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;