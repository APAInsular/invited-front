import apiClient from "../config/axiosConfig";

export async function createWedding(weddingData) {
    try {
        const response = await apiClient.post(
            '/api/weddings',
            weddingData
        );

        return response.data;
    } catch (error) {
        console.error('Error creating wedding:', error);
        throw error;
    }
}

// @Garkatron/Matias -- I can't change backend yet, so here I create an object to adapt the data to data that backend expect.
export function weddingToLegacyAdapter(data, user_id) {
  return {
    user_id,

    weddingDate: data.WeddingDate.toISOString().split("T")[0],

    template: data.TemplateName,

    foodType: ["buffet", "formal", "coctel", "asado"].includes(data.FoodType)
      ? data.FoodType
      : "Sin Preferencias",

    guestCount: Number(data.GuestNumber),

    customMessage: data.GuestMessage ?? "",

    dressCode: data.DressCode,

    musicUrl: data.SongLink,
    musicTitle: data.SongTitle,

    groomDescription: data.CoupleName1,
    brideDescription: data.CoupleName2,

    location: {
      city: data.Location.city || data.CityName,
      country: data.Location.country || data.Localization,
    },

    coverImage: data.HeaderImage ?? null,
    images: data.GalleryImages ?? [],

    // Transformar los eventos al formato backend
    events: data.Events.map(ev => ({
      name: ev.Title,
      description: ev.Description ?? "",
      time: ev.Time, 
      location: {
        city: ev.Localization?.city || ev.City || "",
        country: ev.Localization?.country || "",
      },
    })),
  };
}


/*
switch (error.response.data.message) {
            case "The events field is required.":
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Debes añadir un evento como mínimo",
                });
                break;
            default:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                });
        }

*/