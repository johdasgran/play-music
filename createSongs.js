export const createSongs = fetch("./API.json")
  .then((resp) => resp.json())
  .then((data) => console.log(data));




function createSong(params) {


  let container = document.querySelector("div#app");
  
  // Container image
  let card_image = document.createElement("div");
  card_image.id = "image";
  card_image.classList = "wobble-ver-right";
  container.appendChild(card_image);

  // Image
  let image = document.createElement("img");
  image.src = img_url;
  image.id = id;
  image.classList = `card-image ${id}`;
  card_image.appendChild(image);




}
