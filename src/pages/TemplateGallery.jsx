import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usePageTranslation from "./../hooks/usePageTranslation";
import { useNavigate } from "react-router-dom";
import "../templates/styles/TemplateGallery.css";
import { Categories, TemplateConfig } from "../constants.js";

const GalleryItem = ({
  name = "Unknown",
  category = "Unknown",
  imageSrc = "",
  link = "#",
}) => {
  return (
    <div className="TemplateGallery col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm overflow-hidden">
        <a href={link}>
          <img
            src={imageSrc}
            alt={name}
            className="card-img-top img-fluid"
            style={{
              aspectRatio: "9 / 16",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="card-body">
          <h6 className="card-title mb-1">{name}</h6>
          <small className="text-muted">{category}</small>
        </div>
      </div>
    </div>
  );
};

const CategoryItem = ({
  name = "Unknown",
  selected = false,
  onSelected = () => {},
}) => {
  return (
    <li className="nav-item">
      <button
        className={`btn btn-sm ${
          selected ? "btn-primary" : "btn-outline-secondary"
        }`}
        onClick={() => onSelected(name)}
      >
        {name}
      </button>
    </li>
  );
};

const TemplateGallery = () => {
  const { t, loadingTranslation } = usePageTranslation("registerPage");
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setCategory] = useState(Categories[0]);

  const filteredTemplates = TemplateConfig.filter((t) => {
    const categoryMatch =
      !selectedCategory || selectedCategory === "Quitar Filtro"
        ? true
        : t.category === selectedCategory;

    const searchMatch = t.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="container py-5 mt-5">
      <div className="row g-3 align-items-center mb-4">
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar plantilla"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-12 col-md-8">
          <ul className="nav gap-2 flex-nowrap overflow-auto">
            {Categories.map((c) => (
              <CategoryItem
                key={c}
                name={c}
                selected={selectedCategory === c}
                onSelected={() => setCategory(selectedCategory === c ? "" : c)}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="row g-4">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((i) => (
            <GalleryItem
              key={i.name}
              name={i.name}
              category={i.category}
              imageSrc={i.img}
              link={i.link}
            />
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            No se encontraron plantillas
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateGallery;
