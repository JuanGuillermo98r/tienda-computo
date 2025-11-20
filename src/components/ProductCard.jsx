const ProductCard = ({ data }) => (
  <div className="card">
    <img
      src={data.image}
      alt={data.name}
      style={{ width: "100%", borderRadius: 8, marginBottom: 8 }}
    />
    <h3>{data.name}</h3>
    <p style={{ color: "#555" }}>{data.description}</p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <strong>S/. {data.price}</strong>
      <button
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          background: "#00897b",
          color: "white",
          border: "none",
        }}
      >
        Agregar
      </button>
    </div>
  </div>
);
export default ProductCard;
