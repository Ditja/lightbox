// JavaScript Document

// tekster til billederne
const captionArray = [
  "Morning in Montmartre",
  "Le Pure Café",
  "Multicultural Sandwich Bar",
  "Street Art (Man)",
  "Street Art (Flying)",
  "Street Art (Boar)",
  "Art Nouveau Bakery",
  "Dalí mural",
];

let index; // opdateres når man åbner lightbox'en
// de små billeder:
const small_imgs = document.querySelectorAll("main img");

// vi laver vores nodeList om til et rigtigt array så vi senere kan bruge den arrayMethod der hedder indexOf()
small_imgsArray = Array.from(small_imgs);

// masken
const lightbox_mask = document.querySelector("#lightbox-mask");
// img-elementet i lightbox'en:
const big_img = document.querySelector("#lightbox img");
const caption = document.querySelector("#lightbox p");

// man skal kunne klikke på de små billeder, så de skal have en eventListener:
for (let i = 0; i < small_imgs.length; i++) {
  small_imgs[i].addEventListener("click", showLightbox);
}

// funktionen der skifter billede og tekst, samt gør masken og lightboxen synlig:
function showLightbox() {
  // index skal opdateres
  index = small_imgsArray.indexOf(this);

  //Billedtekst skal opdateres
  caption.textContent = captionArray[index];
  
  let thisSrc = this.getAttribute("src");
  // thisSrc = "images/small/6_morning.jpg"
  let bigSrc = thisSrc.replace("small", "large");
  // bigSrc = "images/large/6_morning.jpg"
 
  let thisAlt = this.getAttribute("alt");

  // her bruger vi den nye billedsti og din nye alt-tekst på det store billede
  big_img.setAttribute("src", bigSrc);
  big_img.setAttribute("alt", thisAlt);

  lightbox_mask.style.display = "grid";
}

// man skal kunne klikke på det store billede, så de skal have en eventListener:
big_img.addEventListener("click", hideLightbox);

// funktion der skjuler lightbox (og dermed også det store billede):
function hideLightbox() {
  lightbox_mask.style.display = "none";
}

// Pile

const leftArrow = document.querySelector("#prev");
const rightArrow = document.querySelector("#next");

leftArrow.addEventListener("click", changePhoto);
rightArrow.addEventListener("click", changePhoto);


function changePhoto() {
  if (this.getAttribute("id") === "prev") {
    if (index > 0) {
      index--;
    } else {
      index = small_imgsArray.length - 1;
    }
  } else {
    if (index < small_imgsArray.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }
  //Billedtekst skal opdateres
  caption.textContent = captionArray[index];

  let smallSrc = small_imgsArray[index].getAttribute("src");
  let bigSrc = smallSrc.replace("small", "large");
  big_img.setAttribute("src", bigSrc);
}
