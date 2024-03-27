const Description = ({ product }) => (
    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
      <p>{product.description}</p>
    </div>
  );