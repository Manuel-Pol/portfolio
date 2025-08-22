import "./styles/Carousel.css";

export default function Carousel() {
  const items = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
    "Item Six",
  ];
  return (
    <div className="carousel">
      <div className="carousel-container">
        {items.map((item, i) => (
          <div key={i} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
