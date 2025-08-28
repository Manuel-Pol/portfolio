import { motion } from "framer-motion";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const color = location.state?.color || "#1cacff";

  return (
    <motion.div
      className="card-detail"
      layoutId={`card-${id}`}
      initial={{ borderRadius: "12px", backgroundColor: "#1f1f1f" }}
      animate={{ borderRadius: "0px", backgroundColor: "#1cacff" }}
      exit={{ borderRadius: "12px", backgroundColor: "#1f1f1f" }}
      onClick={() => navigate(-1)}
    >
      <p>Project {id}</p>
      <p>Detalles del proyecto aquí...</p>
    </motion.div>
  );
}
