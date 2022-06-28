const fetch_data = async () => {
  const response = await fetch("./API.json");
  const API_DATA = await response.json();

  // console.log(API_DATA);

  let container = document.querySelector("#content-songs");

  API_DATA.forEach((element) => {
    // Container
    let content_info = document.createElement("div");
    content_info.classList = "content-info-song";
    content_info.id = element.id;
    container.appendChild(content_info);

    let image_info_song = document.createElement("div");
    image_info_song.classList = "image-info-song";
    content_info.appendChild(image_info_song);

    let artwork = document.createElement("img");
    artwork.src = element.thumbnail;
    image_info_song.appendChild(artwork);

    let info_song = document.createElement("div");
    info_song.classList = "info-song";
    image_info_song.appendChild(info_song);

    let info_song_title = document.createElement("h2");
    info_song_title.textContent = element.name;
    info_song.appendChild(info_song_title);

    let info_song_p = document.createElement("p");
    info_song_p.textContent = element.artist;
    info_song.appendChild(info_song_p);

    //content like song
    let data_song = document.createElement("div");
    data_song.classList = "data-song";
    content_info.appendChild(data_song);

    let like_song = document.createElement("button");
    like_song.classList = "like-song";
    like_song.textContent = element.likes;
    data_song.appendChild(like_song);

    let play_song = document.createElement("button");
    play_song.classList = "play-song";
    play_song.textContent = element.reproductions;
    data_song.appendChild(play_song);
  });
};

fetch_data();
