import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WeddingSchema from "../schemas/WeddingSchema";
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
import { AvailableTemplates } from "../constants";
import {
  createWedding,
  weddingToLegacyAdapter,
} from "../services/wedding.service";
import { getUser } from "../services/user.service";
import { fileToBase64 } from "../utils";
import usePageTranslation from "../hooks/usePageTranslation";

export default function NewWeddingForm() {
  const { translate: t, loadingTranslation } = usePageTranslation(
    "makeInvitationPage"
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WeddingSchema),
    defaultValues: {
      Localization: { city: "", country: "" },
      GuestNumber: 1,
      Events: [
        {
          Title: "",
          Time: "",
          Localization: { city: "", country: "" },
          Description: "",
        },
      ],
    },
  });

  const [user, setUser] = useState(null);
  const { fields, append, remove } = useFieldArray({ control, name: "Events" });
  const [templatePreview, setTemplatePreview] = useState(
    "/images/default_template.png"
  );
  const [coupleImagePreview, setCoupleImagePreview] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  // Función helper para mostrar errores traducidos solo si existen
  const tError = (error) => {
    if (!error || !error.message) return "";
    return t(error.message);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getUser();
        if (!data) return;
        setUser(data);
      } catch (err) {
        console.error("Error al obtener el usuario:", err);
      }
    };
    fetch();
  }, []);

  const onSubmit = async (data) => {
    try {
      const _result = await createWedding(
        weddingToLegacyAdapter(data, user.id)
      );
      Swal.fire({
        icon: "success",
        title: t("alerts.successTitle"),
        text: t("alerts.successText"),
      });
    } catch (error) {
      const message =
        error?.response?.data?.message || t("alerts.genericError");
      Swal.fire({
        icon: "error",
        title: t("alerts.errorTitle"),
        text: message,
      });
    }
  };

  const handleTemplateChange = (e) =>
    setTemplatePreview(`/images/${e.target.value}.png`);

  const handleCoupleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setValue("HeaderImage", file, { shouldValidate: true });
    const base64 = await fileToBase64(file);
    setCoupleImagePreview(base64);
  };

  const handleGalleryUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    setValue("GalleryImages", files, { shouldValidate: true });
    setGalleryFiles(files);
  };

  return (
    <Container
      className="mt-5 p-4"
      style={{ backgroundColor: "#F9E9E8", borderRadius: "8px" }}
    >
      <h2 className="text-center mb-4">{t("title")}</h2>
      <Row>
        {/* Columna Formulario */}
        <Col md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Nombres de la pareja */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.groomName")}</Form.Label>
                  <Form.Control
                    {...register("CoupleName1")}
                    placeholder={t("form.groomName")}
                    isInvalid={!!errors.CoupleName1}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.CoupleName1)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.brideName")}</Form.Label>
                  <Form.Control
                    {...register("CoupleName2")}
                    placeholder={t("form.brideName")}
                    isInvalid={!!errors.CoupleName2}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.CoupleName2)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Fecha y plantilla */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.weddingDate")}</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("WeddingDate")}
                    isInvalid={!!errors.WeddingDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.WeddingDate)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.template")}</Form.Label>
                  <Form.Select
                    {...register("TemplateName")}
                    onChange={handleTemplateChange}
                    isInvalid={!!errors.TemplateName}
                  >
                    <option value="">{t("form.selectTemplate")}</option>
                    {Object.keys(AvailableTemplates).map((k) => (
                      <option key={k} value={k}>
                        {k}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.TemplateName)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Ubicación */}
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{t("form.city")}</Form.Label>
                  <Form.Control
                    {...register(`Localization.city`)}
                    placeholder={t("form.city")}
                    isInvalid={!!errors.Localization?.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.Localization?.city)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{t("form.country")}</Form.Label>
                  <Form.Control
                    {...register(`Localization.country`)}
                    placeholder={t("form.country")}
                    isInvalid={!!errors.Localization?.country}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.Localization?.country)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Tipo de comida e invitados */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.foodType")}</Form.Label>
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
                  <Form.Label>{t("form.guests")}</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("GuestNumber", { valueAsNumber: true })}
                    isInvalid={!!errors.GuestNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.GuestNumber)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Dress code y mensaje */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("form.dressCode")}</Form.Label>
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
                  <Form.Label>{t("form.guestMessage")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    {...register("GuestMessage")}
                    placeholder={t("form.guestMessage")}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Canción y pareja */}
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("form.songTitle")}</Form.Label>
                  <Form.Control
                    {...register("SongTitle")}
                    isInvalid={!!errors.SongTitle}
                    placeholder={t("form.songTitle")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.SongTitle)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("form.songLink")}</Form.Label>
                  <Form.Control
                    {...register("SongLink")}
                    isInvalid={!!errors.SongLink}
                    placeholder={t("form.songLink")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.SongLink)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Imagen de la pareja */}
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("form.coupleImage")}</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    {...register("HeaderImage")}
                    onChange={handleCoupleImageUpload}
                    isInvalid={!!errors.HeaderImage}
                  />
                  <Form.Control.Feedback type="invalid">
                    {tError(errors.HeaderImage)}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Galería */}
            <Form.Group className="mb-3">
              <Form.Label>{t("form.gallery")}</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryUpload}
              />
              <Form.Text className="text-muted">{t("form.galleryHelp")}</Form.Text>
            </Form.Group>

            {/* Eventos */}
            <h4 className="mt-4">{t("form.events")}</h4>
            {fields.map((field, index) => (
              <Card key={field.id} className="mb-3 p-3">
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>{t("form.eventTitle")}</Form.Label>
                      <Form.Control
                        {...register(`Events.${index}.Title`)}
                        placeholder={t("form.eventTitle")}
                        isInvalid={!!errors.Events?.[index]?.Title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {tError(errors.Events?.[index]?.Title)}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>{t("form.eventTime")}</Form.Label>
                      <Form.Control
                        type="time"
                        {...register(`Events.${index}.Time`)}
                        isInvalid={!!errors.Events?.[index]?.Time}
                      />
                      <Form.Control.Feedback type="invalid">
                        {tError(errors.Events?.[index]?.Time)}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>{t("form.city")}</Form.Label>
                      <Form.Control
                        {...register(`Events.${index}.Localization.city`)}
                        placeholder={t("form.city")}
                        isInvalid={!!errors.Events?.[index]?.Localization?.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {tError(errors.Events?.[index]?.Localization?.city)}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>{t("form.country")}</Form.Label>
                      <Form.Control
                        {...register(`Events.${index}.Localization.country`)}
                        placeholder={t("form.country")}
                        isInvalid={!!errors.Events?.[index]?.Localization?.country}
                      />
                      <Form.Control.Feedback type="invalid">
                        {tError(errors.Events?.[index]?.Localization?.country)}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>{t("form.eventDescription")}</Form.Label>
                      <Form.Control
                        {...register(`Events.${index}.Description`)}
                        placeholder={t("form.eventDescription")}
                        isInvalid={!!errors.Events?.[index]?.Description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {tError(errors.Events?.[index]?.Description)}
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
                    {t("form.removeEvent")}
                  </Button>
                </div>
              </Card>
            ))}

            <Button
              variant="secondary"
              onClick={() =>
                append({
                  Title: "",
                  Time: "",
                  Localization: { city: "", country: "" },
                  Description: "",
                })
              }
            >
              {t("form.addEvent")}
            </Button>

            <div className="text-center mt-4">
              <Button type="submit">{t("form.save")}</Button>
            </div>
          </Form>
        </Col>

        {/* Columna Preview */}
        <Col md={4}>
          <div className="sticky-top" style={{ top: "20px" }}>
            <h5 className="text-center mb-3">Vista Previa</h5>

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

            {coupleImagePreview && (
              <div>
                <h6 className="mb-2">{t("form.HeaderImage")}</h6>
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

            {galleryFiles.length > 0 && (
              <div>
                <h6 className="mb-2">
                  {t("form.gallery")} ({galleryFiles.length} imágenes)
                </h6>
                <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                  {galleryFiles.map((file, i) => (
                    <li key={i} style={{ fontSize: "0.9rem" }}>
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
