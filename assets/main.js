---
---

window.onload = () => {
  if(document.title.slice(document.title.indexOf("|") + 2) == "Home"){
    let homeCarousel = new Flickity(".carousel");
    resizeFlickity(null, homeCarousel);
    homeCarousel.on('settle', ()=>{
      resizeFlickity(null, homeCarousel);
    });
  }
}

//general carousel resizing
function resizeFlickity(flickityId = null, flickityObject = null){
  let targetCarousel = flickityId == null ? flickityObject: new Flickity(flickityId);
  targetCarousel.watchCSS();
  targetCarousel.resize();
}