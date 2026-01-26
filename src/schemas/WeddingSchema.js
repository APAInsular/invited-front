import { z } from "zod";
import { AvailableTemplates } from "../constants";

const LocationSchema = z.object({
    city: z.string().min(1, "Ciudad requerida"),
    country: z.string().min(1, "País requerido"),
});

const EventSchema = z.object({
    Title: z.string().min(1).max(50, "Maximo 50 caracteres (incluido espacios)"),
    Time: z.string().refine(str => /^([01]\d|2[0-3]):([0-5]\d)$/.test(str), "Formato de hora inválido HH:mm"),
    Localization: LocationSchema,
    Description: z.string().max(100).optional(0)
});

const WeddingSchema = z.object({
    CoupleName1: z.string().min(3, "Nombre requerido").max(50),
    CoupleName2: z.string().min(3, "Nombre requerido").max(50),

    WeddingDate: z
        .coerce.date()
        .refine(date => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            return date >= tomorrow;
        }, {
            message: "La fecha debe ser válida y a partir de mañana",
        }),

    TemplateName: z.enum(Object.keys(AvailableTemplates)),

    Localization: LocationSchema,


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

    GuestMessage: z.string().max(500, "Maximo 500 caracteres (inluido espacios)").default(""),

    SongLink: z.url(),

    SongTitle: z.string(),


    HeaderImage: z.string().optional().refine(
        val => !val || /^data:image\/[a-zA-Z]+;base64,/.test(val),
        { message: "Debe ser una imagen en Base64 válida" }
    ),

    GalleryImages: z.array(
        z.string().refine(
            val => /^data:image\/[a-zA-Z]+;base64,/.test(val),
            { message: "Cada imagen debe estar en Base64 válida" }
        )
    ).optional(),

    Events: z.array(EventSchema).min(1, "Minimo un evento").max(100, "100 Eventos como maximo.")

});

export default WeddingSchema;
