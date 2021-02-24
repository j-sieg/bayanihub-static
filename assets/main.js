window.onload = () => {
  
  //make sticky header consume space
  const headerResizeObserver = new ResizeObserver(entries => 
    document.querySelector("#header-bottom").style.paddingTop = entries[0].target.clientHeight + "px"
  );headerResizeObserver.observe(document.querySelector("#header"));

  //Header: add active class to active page
  [].slice.call(document.querySelector("#navigation-links ul").children).forEach(function(el){
    if(el.firstElementChild.textContent == document.title.slice(document.title.indexOf("|") + 2)){
      el.firstElementChild.classList.add("active");
    }else{
      el.firstElementChild.classList.remove("active");
    };
  });
}//window.onload end

//function for general carousel resizing
function resizeFlickity(flickityId = null, flickityObject = null){
  let targetCarousel = flickityId == null ? flickityObject: new Flickity(flickityId);
  targetCarousel.watchCSS();
  targetCarousel.resize();
}

