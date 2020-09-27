export const plants = [
  {
    name: "Chestnut Houseplant",
    price: 25,
    description: `The chestnut vine is a tropical evergreen vine native to the rainforests of Vietnam and Laos.In temperate climes, aesculus hippocastanum can be grown as a lush houseplant or conservatory plant, greening things up with its large, glossy leaves.For best results, grow aesculus hippocastanum in bright but indirect sunlight in a loam-based compost.`,
    image:
      "http://tree-species.blogspot.com/2007/12/malabar-chestnut-pachira-aquatica.html",
  },
  {
    name: "Ivy",
    price: 35,
    description:
      "Ivy can make a  wonderful, bright light houseplant. It can grow long and lush and bring a bit of the outdoors inside. Growing ivy indoors is easy as long as you know what makes an ivy plant happy.",
  },
  {
    name: "Dracaena Compacta",
    price: 85,
    description:
      "The Dracaena compacta plant, a compact, slow growing member of the Dracaena family, is native to South East Africa. It is often referred to as Dracaena fragrans or Dracaena deremensis. The closest relative of the Compacta is the Dracaena janet craig, but the compacta is quite different in appearance.",
  },
  {
    name: "Succulent",
    price: 5,
    description:
      "Succulents have adapted to suit dry, arid and sunny conditions by developing fleshy leaves, stems or other structures, which store water. There are hundreds of succulents to choose from, from common varieties such as aloe vera to lesser known species such as haworthia truncata or lithops. Most succulents work well as houseplants and need very little care.",
  },
  {
    name: "Yucca Elephantipes",
    price: 20,
    description:
      'Also known as the "Giant Yucca" the Yucca Elephantipes with its wonderful green hues and bold architectural appearance. The Yucca would do well in a good light situation such as south facing window; it will also make a fantastic conservatory of atrium plant.',
  },
];

function displayPlants(plantList) {
  const plantstore = document.querySelector("#plants");

  plantList.forEach((plant) => {
    const listItem = document.createElement("li");
    const text = document.createTextNode(book.name);
    const name = document.createTextNode(plant.name);
    const image = document.createElement("img");
    image.src = plant.image;

    listItem.appendChild(text);
    listItem.appendChild(name);
    listItem.appendChild(image);
    plantstore.appendChild(listItem);
  });
}
