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