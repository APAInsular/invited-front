const CarrouselCard = ({ src, alt = "", height = "500px",  width = "350px" }) => {
  return (
    <div className="card border-0 rounded-3 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="card-img-top"
        style={{ height, width, objectFit: "cover" }}
      />
    </div>
  );
};

export default CarrouselCard;
