import { Card } from "./ui/layout-grid"; // Certifique-se de que o caminho está correto

export const CardData: Card[] = [
  {
    id: 1,
    content: "Este é o conteúdo do cartão 1",
    className: "custom-class",
    thumbnail: "/path/to/image1.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <h1>Header</h1>
        <p>Parágrafo de exemplo</p>
      </div>
    ),
    className: "custom-class",
    thumbnail: "/path/to/image2.jpg",
  },

];
