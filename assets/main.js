window.onload = () => {

  const currentPage = document.title.split(' | ')[0]

  // Make sticky header consume space
  const headerResizeObserver = new ResizeObserver(entries => 
    document.querySelector("#header-bottom").style.paddingTop = entries[0].target.clientHeight + "px"
  );

  headerResizeObserver.observe(document.querySelector("#header"));

  // Header: add active class to active page
  Array.from(document.querySelector("#navigation-links ul").children).forEach(function(el){
    const navLink = el.firstElementChild

    if (navLink.textContent == currentPage) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    };
  });

  // Persistent flickity autoplay
  if(document.querySelector("#slideshow") !== null) {
    let slideshow = new Flickity("#slideshow");
    slideshow.options.pauseAutoPlayOnHover = false;
    slideshow.on('pointerUp', function () {
      slideshow.player.play();
    });
  }

  // //add link to header banner
  // document.querySelector("header-banner").children.forEach(e => {
  //   e.onclick=() => {window.open('{{site.baseurl}}/', 'mywindow');}
  // })

} // window.onload

// Function for general carousel resizing
function resizeFlickity(flickityId = null, flickityObject = null){
  let targetCarousel = flickityId == null ? flickityObject: new Flickity(flickityId);
  targetCarousel.watchCSS();
  targetCarousel.resize();
}

