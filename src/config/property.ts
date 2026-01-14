// ============================================
// CONFIGURAÇÃO DO IMÓVEL
// Edite este arquivo para personalizar o imóvel
// ============================================

// Imagens importadas como ES6 modules
import agentPhoto from '@/assets/agent-photo.jpg';
import { propertyImages, beforeAfterImages} from '@/assets/propertyImages';


export const propertyConfig = {
  // Informações básicas
  price: "587 000 €",
  area: 200,
  totalArea: 277,
  bedrooms: 4,
  bathrooms: 3,
  parking: 4,
  yearBuilt: 2003,
  lotSize: 917,
  condition: "Usado",
  energyRating: "D",

  // Contato
  whatsapp: "351965039757", // Número com código do país, sem símbolos
  phone: "+351 965039757",
  email: "sandrasemedo@century21.pt",

  // Localização - Loures Shopping, Loures, Lisboa, Portugal
  address: "Estr. da Chança 6, 2640-601 Sobral da Abelheira",
  mapCenter: { lat: 38.980889, lng: -9.30825 },

  
  // Pontos de interesse (para o mapa)
  pointsOfInterest: [
    { name: "Loures Shopping", distance: "0 min" },
    { name: "Metro Odivelas", distance: "10 min" },
    { name: "Hospital Beatriz Ângelo", distance: "5 min" },
  ],

  // Agente imobiliário
  seller:{
    photo: agentPhoto, // URL ou caminho para a foto do agente
    name: "Sandra Semedo",
    agency: "Century 21",
  },


  // Seções ativas (true = visível, false = oculto)
  sections: {
    hero: true,
    about: true,
    details: true,
    gallery: true,
    beforeAfter: true,
    video: false, // Ative quando tiver um vídeo de tour
    location: true,
    contact: true,
  },

  // Galeria de imagens
  gallery: propertyImages.gallery,

  // Before/After comparisons - Um para cada cômodo
  beforeAfter: [
    {
      label: propertyImages.beforeAfter[0].label,
      before: propertyImages.beforeAfter[0].before,
      after: propertyImages.beforeAfter[0].after,
    },
    {
      label: propertyImages.beforeAfter[1].label,
      before: propertyImages.beforeAfter[1].before,
      after: propertyImages.beforeAfter[1].after,
    },
    {
      label: propertyImages.beforeAfter[2].label,
      before: propertyImages.beforeAfter[2].before,
      after: propertyImages.beforeAfter[2].after,
    },
  ],

  // Vídeos
  heroVideo: "", // URL do vídeo do hero (deixe vazio para usar imagem)
  heroImage: propertyImages.hero, // Imagem de fallback/mobile
  tourVideo: "", // URL do vídeo do tour virtual
};
