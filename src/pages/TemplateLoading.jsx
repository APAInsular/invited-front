import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TemplateLoading = () => {
  return (
    <div className="d-flex align-items-center vh-100">
      <div
        className="w-100 text-center text-dark py-5"
        style={{ backgroundColor: "rgb(255, 221, 87)" }} // amarillo con estilo
      >
        <div className="mb-3">
          <div
            className="spinner-border"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>

        <h1 className="display-5 fw-bold mb-3">
          Cargando plantilla
        </h1>

        <p className="lead mx-auto">
          Por favor espera un momento…
        </p>
      </div>
    </div>
  );
};

export default TemplateLoading;
