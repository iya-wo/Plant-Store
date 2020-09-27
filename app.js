// export default function createListOfPlants(plants) {
//   const plantListSection = document.querySelector("#list");
//   const name = document.createElement("h2");
//   const price = document.createTextNode("#price");
//   const plantDiv = document.createElement("div");

//   plants.map((plant) => {
//     const plantDivItem = document.createElement("div");
//     plantDivItem.className = "plant";
//     const plantImage = document.createElement("img");
//     plantImage.src = plant.image;
//     plantImage.alt = plant.name;
//     const plantContentDiv = document.createElement("div");
//   });
// }



const x = document.querySelector('#clickMe');
const y = document.querySelector('#hovering');

x.addEventListener('click', respondClick);
y.addEventListener('mouseover', respondMouseOver);
y.addEventListener('mouseout', respondMouseOut);

function respondMouseOver() {
  document.querySelector('#effect').innerHTML += 'MouseOver Event' + '<br>';
}

function respondMouseOut() {
  document.querySelector('#effect').innerHTML += 'MouseOut Event' + '<br>';
}

function respondClick() {
  document.querySelector('#effect').innerHTML += 'Click Event' + '<br>';
}

















