let documentHeight = document.documentElement.offsetHeight

console.log(documentHeight)

let vpHeight = window.innerHeight;


console.log(documentHeight)
console.log(vpHeight)

scrollTo(0, documentHeight-vpHeight)
console.log(window.scrollTo(0, documentHeight-vpHeight))

var last_known_scroll_position = 0;
var ticking = false;
console.log(scrollTo)

window.addEventListener("scroll", () => {

    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }
    ticking = true;
})


