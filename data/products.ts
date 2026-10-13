export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/images/tarelkglub.jpg",
    title: "тарелка глубокая",
    description: "чорни тарелкич",
    price: 2500,
  },
  {
    id: 2,
    image: "/images/krujka.jpg",
    title: "кружка",
    description: "для самого мог кофэ",
    price: 2000,
  },
  {
    id: 3,
    image: "/images/vaza.jpg",
    title: "ваза",
    description: "GLa3a GL'yaDy4t",
    price: 4000,
  },
  {
    id: 4,
    image: "/images/image.png",
    title: "тарелка объемная",
    description: "тарелкич для рофланов",
    price: 3500,
  },
];