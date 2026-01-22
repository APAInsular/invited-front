import { z } from "zod";
import { AvailableTemplates } from "../constants";

const EventSchema = z.object({
    Title: z.string().min(1).max(50, "Maximo 50 caracteres (incluido espacios)"),
    City: z.string().min(3).max(50, ""),
    Time: z.iso.time(),
    Localization: z.string(),
    Description: z.string().max(100).optional(0)
});

const WeddingSchema = z.object({
    CoupleName1: z.string().min(3, "Nombre requerido").max(50),
    CoupleName2: z.string().min(3, "Nombre requerido").max(50),

    WeddingDate: z
        .string()
        .refine((str) => !isNaN(Date.parse(str)) && new Date(str) > new Date(), "La fecha debe ser válida y posterior a la fecha actual")
        .refine(v => !isNaN(Date.parse(v)), "Fecha inválida"),

    TemplateName: z.enum(Object.keys(AvailableTemplates)),

    CityName: z.string().min(1),

    Localization: z
        .string()
        .url("Debe ser una URL válida"),

    FoodType: z.enum([
        "buffet",
        "formal",
        "coctel",
        "asado",
        "otro",
    ]),

    GuestNumber: z
        .number()
        .int()
        .min(1, "Minimo un invitado.")
        .positive("No puede ser negativo.")
        .max(2000, "No se aceptan mas de 2000 invitados.").default(1),

    DressCode: z.enum([
        "formal",
        "semi-formal",
        "casual",
        "tema",
    ]),

    GuestMessage: z.string().max(500, "Maximo 500 caracteres (inluido espacios)").optional(),

    SongLink: z
        .url(),

    HeaderImage: z
        .string()
        .refine(
            (val) => /^data:image\/[a-zA-Z]+;base64,/.test(val),
            { message: "Debe ser una imagen en Base64 válida" }
        ),

    GalleryImages: z
        .array(
            z.string().refine(
                (val) => /^data:image\/[a-zA-Z]+;base64,/.test(val),
                { message: "Cada imagen debe estar en Base64 válido" }
            )
        )
        .min(1, "Debe subir al menos una imagen"),
    
    Events: z.array(EventSchema).min(1, "Minimo un evento").max(100, "100 Eventos como maximo.")

});

export default WeddingSchema;
