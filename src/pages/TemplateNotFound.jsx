import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const TemplateNotFound = () => {
  return (
    <div className="d-flex align-items-center vh-100">
      <div
        className="w-100 text-center text-white py-5"
        style={{ backgroundColor: "rgb(241, 146, 146)" }}
      >
        <h1 className="display-4 fw-bold mb-3">Error al buscar plantilla</h1>
        <p className="lead mx-auto mb-4">La plantilla no existe</p>

        <Link
          to="/"
          className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default TemplateNotFound;
