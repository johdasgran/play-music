let documentHeight = document.documentElement.offsetHeight

console.log(documentHeight)

let vpHeight = window.innerHeight;


console.log(documentHeight)
console.log(vpHeight)

console.log(window.scrollTo(0, documentHeight-vpHeight))

var ticking = false;
console.log(scrollTo)

window.addEventListener("scrollY", () => {

    // scrollTo(0,vpHeight - documentHeight)
    scrollTo(vpHeight - documentHeight)
});

// Intersection Observe
// Diseñar APP MUSIC este fin de semana

// Inspiration

// https://dribbble.com/shots/16429598-Music-player

// https://dribbble.com/shots/16741029-Music-Streaming-Web-App/attachments/11786938?mode=media

// https://dribbble.com/shots/17644369-Web-Music-Player/attachments/12798434?mode=media

//  https://dribbble.com/shots/15593083/attachments/7379986?mode=media

// https://dribbble.com/shots/15184731-Daft-Punk/attachments/6926976?mode=media

// https://dribbble.com/shots/16894605-Music-Player-Web-App/attachments/11959653?mode=media

// https://dribbble.com/shots/17409554-Spotify-App-Redesign-Concept










// https://dribbble.com/shots/17067630-Acoustic-Mobile-Design-for-Music-Storeg