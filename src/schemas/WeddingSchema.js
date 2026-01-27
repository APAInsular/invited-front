import { z } from "zod";
import { AvailableTemplates } from "../constants";

const LocationSchema = z.object({
    city: z.string().min(1, { message: "errors.Localization.city.required" }),
    country: z.string().min(1, { message: "errors.Localization.country.required" }),
});

const EventSchema = z.object({
    Title: z
        .string()
        .min(1, { message: "errors.Events.Title.required" })
        .max(50, { message: "errors.Events.Title.max" }),
    Time: z
        .string()
        .refine(
            str => /^([01]\d|2[0-3]):([0-5]\d)$/.test(str),
            { message: "errors.Events.Time.invalid" }
        ),
    Localization: LocationSchema,
    Description: z.string().max(100, { message: "errors.Events.Description.max" }).optional(),
});

const WeddingSchema = z.object({
    CoupleName1: z
        .string()
        .min(3, { message: "errors.CoupleName.required" })
        .max(50, { message: "errors.CoupleName.max" }),
    CoupleName2: z
        .string()
        .min(3, { message: "errors.CoupleName.required" })
        .max(50, { message: "errors.CoupleName.max" }),

    WeddingDate: z
        .coerce.date()
        .refine(date => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            return date >= tomorrow;
        }, { message: "errors.WeddingDate.invalid" }),

    TemplateName: z.enum(Object.keys(AvailableTemplates), {
        errorMap: () => ({ message: "errors.TemplateName.invalid" })
    }),

    Localization: LocationSchema,

    FoodType: z.enum(
        ["buffet", "formal", "coctel", "asado", "otro"],
        { errorMap: () => ({ message: "errors.FoodType.invalid" }) }
    ),

    GuestNumber: z
        .number({ invalid_type_error: "errors.GuestNumber.invalid" })
        .int({ message: "errors.GuestNumber.int" })
        .min(1, { message: "errors.GuestNumber.min" })
        .max(2000, { message: "errors.GuestNumber.max" })
        .positive({ message: "errors.GuestNumber.positive" })
        .default(1),

    DressCode: z.enum(
        ["formal", "semi-formal", "casual", "tema"],
        { errorMap: () => ({ message: "errors.DressCode.invalid" }) }
    ),

    GuestMessage: z
        .string()
        .max(500, { message: "errors.GuestMessage.max" })
        .default(""),

    SongLink: z.string().url({ message: "errors.SongLink.invalid" }),

    SongTitle: z
        .string()
        .min(1, { message: "errors.SongTitle.required" }),
        
    HeaderImage: z.instanceof(File, { message: "errors.HeaderImage.invalid" }),
    GalleryImages: z.array(z.instanceof(File)).optional(),

    Events: z
        .array(EventSchema)
        .min(1, { message: "errors.Events.min" })
        .max(100, { message: "errors.Events.max" }),
});

export default WeddingSchema;
