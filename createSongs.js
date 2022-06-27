

export const createSongs = fetch('./API.json')
.then(resp => resp.json())
.then(data => console.log(data));


