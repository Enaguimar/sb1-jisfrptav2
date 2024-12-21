export interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Una experiencia inolvidable. Las casas son preciosas y el entorno es espectacular. La tranquilidad y las vistas son inmejorables. Volveremos seguro.",
    author: "María G.",
    location: "Casa Rural Valle de Ricote I",
    rating: 5,
    date: "Marzo 2024"
  },
  {
    id: 2,
    text: "Lugar perfecto para desconectar. La casa está impecable y tiene todo lo necesario. El jardín es ideal para los niños y las vistas al valle son increíbles.",
    author: "Juan Carlos R.",
    location: "Casa Rural Valle de Ricote II",
    rating: 5,
    date: "Febrero 2024"
  },
  {
    id: 3,
    text: "Hemos pasado un fin de semana maravilloso. La casa está perfectamente equipada y la atención ha sido excelente. El entorno es precioso para hacer senderismo.",
    author: "Ana M.",
    location: "Casa Rural Valle de Ricote I",
    rating: 5,
    date: "Enero 2024"
  },
  {
    id: 4,
    text: "Un lugar mágico para descansar y disfrutar de la naturaleza. La casa es muy acogedora y está decorada con mucho gusto. Repetiremos sin duda.",
    author: "Pedro L.",
    location: "Casa Rural Valle de Ricote II",
    rating: 5,
    date: "Diciembre 2023"
  }
];