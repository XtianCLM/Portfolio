var primaryNav = document.querySelector(".nav-list");
var navtoggle = document.querySelector(".nav-toggle");

navtoggle.addEventListener("click", function(){
    var visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
       primaryNav.setAttribute("data-visible", true);
       navtoggle.setAttribute("aria-expanded", true);
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);
    }

})



