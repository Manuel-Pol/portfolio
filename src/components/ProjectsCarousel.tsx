import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/ProjectsCarousel.css";

export default function ProjectsCarousel() {
  const navigate = useNavigate();

  return (
    <div className="carousel">
      <div className="carousel-container">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="card"
            layoutId={`card-${index}`} // 🔑 animación compartida
            onClick={() => navigate(`/project/${index}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ backgroundColor: "#1f1f1f" }}
            exit={{ borderRadius: "12px", backgroundColor: "#1f1f1f" }}
            animate={{ borderRadius: "12px", backgroundColor: "#1cacff" }}
          >
            <p>Card {index + 1}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
