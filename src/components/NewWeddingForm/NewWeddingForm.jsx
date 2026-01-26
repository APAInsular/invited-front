import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WeddingSchema from "../../schemas/WeddingSchema";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AvailableTemplates } from "../../constants";
import {
  createWedding,
  weddingToLegacyAdapter,
} from "../../services/wedding.service";
import { getUser } from "../../services/user.service";

export default function NewWeddingForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WeddingSchema),
    defaultValues: {
      GuestNumber: 1,
      Events: [
        { Title: "", City: "", Time: "", Localization: "", Description: "" },
      ],
    },
  });

  const [user, setUser] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Events",
  });

  const [templatePreview, setTemplatePreview] = useState(
    "/images/default_template.png",
  );
  const [coupleImagePreview, setCoupleImagePreview] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  useEffect(() => {
    console.log("FETCH USER");
    const fetch = async () => {
      try {
        const data = await getUser();
        if (!data) return;

        console.log("USER DATA", data);

        setUser(data);
      } catch (err) {
        console.log("ERROR GETTING USER");
        console.error("Error al obtener el usuario:", err);
      }
    };

    fetch();
  }, []);

  const onSubmit = async (data) => {
    console.log("SUBMIT");
    try {
      const _result = await createWedding(
        weddingToLegacyAdapter(data, user.id),
      );

      console.log("CREATE WEDDING: ", _result);

      Swal.fire({
        icon: "success",
        title: "¡Listo!",
        text: "La boda fue creada correctamente.",
      });
    } catch (error) {
      console.log("ERROR ON CREATE WEDDING: ", error);

      const message =
        error?.response?.data?.message || "Ocurrió un error al crear la boda.";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
    console.log("FIISHED");
  };

  const handleTemplateChange = (e) => {
    const value = e.target.value;
    setTemplatePreview(`/images/${value}.png`);
  };

  const handleCoupleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCoupleImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    setGalleryFiles(files);
  };

  return (
    <Container
      className="mt-5 p-4"
      style={{ backgroundColor: "#F9E9E8", borderRadius: "8px" }}
    >
      <h2 className="text-center mb-4">Crear Nueva Boda</h2>
      <Row>
        {/* Columna Formulario */}
        <Col md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Nombres de la pareja */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nombre Novio</Form.Label>
                  <Form.Control
                    {...register("CoupleName1")}
                    placeholder="Nombre Novio"
                    isInvalid={!!errors.CoupleName1}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.CoupleName1?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nombre Novia</Form.Label>
                  <Form.Control
                    {...register("CoupleName2")}
                    placeholder="Nombre Novia"
                    isInvalid={!!errors.CoupleName2}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.CoupleName2?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Fecha y plantilla */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Fecha de Boda</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("WeddingDate")}
                    isInvalid={!!errors.WeddingDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.WeddingDate?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Plantilla</Form.Label>
                  <Form.Select
                    {...register("TemplateName")}
                    onChange={handleTemplateChange}
                  >
                    <option value="">Seleccione Plantilla</option>
                    {Object.keys(AvailableTemplates).map((k) => (
                      <option value={k}>{k}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Ubicación */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    {...register("CityName")}
                    placeholder="Ciudad"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Localización</Form.Label>
                  <Form.Control
                    {...register("Localization")}
                    placeholder="Localización"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Tipo de comida e invitados */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Tipo de comida</Form.Label>
                  <Form.Select {...register("FoodType")}>
                    <option value="">Seleccione</option>
                    <option value="buffet">Buffet</option>
                    <option value="formal">Formal</option>
                    <option value="coctel">Cóctel</option>
                    <option value="asado">Asado</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Invitados</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("GuestNumber", { valueAsNumber: true })}
                    isInvalid={!!errors.GuestNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.GuestNumber?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Dress code y mensaje */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Dress Code</Form.Label>
                  <Form.Select {...register("DressCode")}>
                    <option value="">Seleccione</option>
                    <option value="formal">Formal</option>
                    <option value="semi-formal">Semi Formal</option>
                    <option value="casual">Casual</option>
                    <option value="tema">Tema</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mensaje para invitados</Form.Label>
                  <Form.Control
                    as="textarea"
                    {...register("GuestMessage")}
                    placeholder="Mensaje"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Titulo Cancion</Form.Label>
                  <Form.Control
                    {...register("SongTitle")}
                    isInvalid={!!errors.SongTitle}
                    placeholder="..."
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.SongLink?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Cancion de boda</Form.Label>
                  <Form.Control
                    {...register("SongLink")}
                    isInvalid={!!errors.SongLink}
                    placeholder="Youtube Link"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.SongLink?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            {/* Imagen de la pareja */}
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Imagen de la pareja</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    {...register("CoupleImage")}
                    onChange={handleCoupleImageUpload}
                    isInvalid={!!errors.CoupleImage}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.CoupleImage?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Galería de imágenes */}
            <Form.Group className="mb-3">
              <Form.Label>Galería de imágenes</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryUpload}
              />
              <Form.Text className="text-muted">
                Puedes seleccionar múltiples imágenes
              </Form.Text>
            </Form.Group>

            <div className="text-center mt-4">
              <Button type="submit">Guardar Boda</Button>
            </div>
          </Form>

          <h4 className="mt-4">Eventos</h4>
          {fields.map((field, index) => (
            <Card key={field.id} className="mb-3 p-3">
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                      {...register(`Events.${index}.Title`)}
                      placeholder="Título del evento"
                      isInvalid={!!errors.Events?.[index]?.Title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Events?.[index]?.Title?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      {...register(`Events.${index}.City`)}
                      placeholder="Ciudad"
                      isInvalid={!!errors.Events?.[index]?.City}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Events?.[index]?.City?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                      type="time"
                      {...register(`Events.${index}.Time`)}
                      isInvalid={!!errors.Events?.[index]?.Time}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Events?.[index]?.Time?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Localización</Form.Label>
                    <Form.Control
                      {...register(`Events.${index}.Localization`)}
                      placeholder="Localización"
                      isInvalid={!!errors.Events?.[index]?.Localization}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Events?.[index]?.Localization?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      {...register(`Events.${index}.Description`)}
                      placeholder="Descripción opcional"
                      isInvalid={!!errors.Events?.[index]?.Description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Events?.[index]?.Description?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <div className="mt-2 text-end">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  Eliminar Evento
                </Button>
              </div>
            </Card>
          ))}
          <Button
            variant="secondary"
            onClick={() =>
              append({
                Title: "",
                City: "",
                Time: "",
                Localization: "",
                Description: "",
              })
            }
          >
            Agregar Evento
          </Button>

          <div className="text-center mt-4">
            <Button type="submit">Guardar Boda</Button>
          </div>
        </Col>

        {/* Columna Preview */}
        <Col md={4}>
          <div className="sticky-top" style={{ top: "20px" }}>
            <h5 className="text-center mb-3">Vista Previa</h5>

            {/* Preview de plantilla */}
            <div
              style={{
                width: "fit",
                height: "800px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                marginBottom: "20px",
              }}
            >
              <Image
                src={templatePreview}
                fluid
                style={{ maxHeight: "100%", objectFit: "contain" }}
              />
            </div>

            {/* Preview de imagen de pareja */}
            {coupleImagePreview && (
              <div>
                <h6 className="mb-2">Imagen de la pareja</h6>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  <Image
                    src={coupleImagePreview}
                    fluid
                    style={{ objectFit: "contain", maxHeight: "200px" }}
                  />
                </div>
              </div>
            )}

            {/* Preview de galería */}
            {galleryFiles.length > 0 && (
              <div>
                <h6 className="mb-2">
                  Galería ({galleryFiles.length} imágenes)
                </h6>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {galleryFiles.map((file, i) => {
                    const url = URL.createObjectURL(file);
                    return (
                      <Image
                        key={i}
                        src={url}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
