import "./styles/ProjectsCarousel.css";

export default function ProjectsCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="card">
            <p>Card {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
