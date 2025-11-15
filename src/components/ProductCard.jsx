const ProductCard = ({ data }) => (
  <div className="card">
    <img src={data.image} alt={data.name} style={{ width: "100%", borderRadius: "8px" }} />
    <h3>{data.name}</h3>
    <p>{data.description}</p>
    <strong>S/. {data.price}</strong>
  </div>
);
export default ProductCard;