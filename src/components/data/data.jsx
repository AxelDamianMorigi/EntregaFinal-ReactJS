
import imgs22 from "./imagenes/s22.jpg";
import imgs23 from "./imagenes/s23.jpg";
import imgiphone15 from "./imagenes/iphone15.jpg";
import imgxiaomi from "./imagenes/xiaomi.jpg";


export const data = [
  {
    id: "1",
    title: "Samsung s23",
    description:
      "Galaxy S23 con 256GB de almacenamiento interno y 8GB de RAM.",
    price: "$" + 1000,
    pictureUrl: imgs23,
    stock: 10,
    category: "Samsung",
  },
  {
    id: "2",
    title: "Samsung s22",
    description:
      "Galaxy S22 con 128gb de almacenamiento interno y 8GB de RAM.",
    price: "$" + 700,
    pictureUrl: imgs22,
    stock: 7,
    category: "Samsung",
  },
  {
    id: "3",
    title: "Iphone 15",
    description:
      "Apple iPhone 15 128 GB viene con la Dynamic Island, cámara gran angular de 48 MP, entrada USB-C y un resistente vidrio con infusión de color en un diseño de aluminio.",
    price: "$" + 1500,
    pictureUrl: imgiphone15,
    stock: 5,
    category: "Iphone",
  },

  {
    id: "4",
    title: "Xiaomi Pocophone",
    description:
      "Xiaomi Pocophone 64 gb de almacenamiento interno y 6gb de Ram",
    price: "$" + 900,
    pictureUrl: imgxiaomi,
    stock: 3,
    category: "xiaomi",
  },
];