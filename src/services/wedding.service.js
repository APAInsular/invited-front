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

function formatDateForMySQL(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// @Garkatron/Matias -- I can't change backend yet, so here I create an object to adapt the data to data that backend expect.
export function weddingToLegacyAdapter(data, user_id) {
  
  return {
    user_id,

    weddingDate: formatDateForMySQL(data.WeddingDate),

    template: data.TemplateName,

    foodType: ["buffet", "formal", "coctel", "asado"].includes(data.FoodType)
      ? data.FoodType
      : "Sin Preferencias",

    guestCount: Number(data.GuestNumber),

    customMessage: data.GuestMessage ?? "",

    dressCode: data.DressCode ?? "",

    musicUrl: data.SongLink ?? "",
    musicTitle: data.SongTitle ?? "",

    groomDescription: data.CoupleName1,
    brideDescription: data.CoupleName2,

    location: {
      city: data.Localization.city || "",
      country: data.Localization.country || "",
    },


    coverImage: null,
    images: [],

    events: data.Events.map(event => ({
      name: event.Title,
      time: event.Time,
      location: {
        city: event.Localization.city,
        country: event.Localization.country,
      },
      description: event.Description,
    }))
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