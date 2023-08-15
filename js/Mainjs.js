

// For Navigation Bar

let primaryNav = document.querySelector(".nav-list");
let navtoggle = document.querySelector(".nav-toggle");

navtoggle.addEventListener("click", ()=>{
    let visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
       primaryNav.setAttribute("data-visible", true);
       navtoggle.setAttribute("aria-expanded", true);
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);
    }

});



  // For Resume

let resume = document.getElementById('resume');

let path = '../assets/PDF/resume.pdf';

resume.addEventListener('click', ()=>{
    window.location.href = path;
});



// For Arrow Scroll

let gridHorizontalScroller = document.querySelector(".grid-horizontal-scroller");

let rightScroll = document.getElementById("rightScroll");

let leftScroll = document.getElementById("leftScroll");

    gridHorizontalScroller.addEventListener("wheel", (evt)=>{
        evt.preventDefault();
        gridHorizontalScroller.scrollLeft += evt.deltaY;
        gridHorizontalScroller.style.scrollBehavior = "auto";
    });

    rightScroll.addEventListener("click", ()=>{
        gridHorizontalScroller.style.scrollBehavior = "smooth";
        gridHorizontalScroller.scrollLeft += 550;
    });

    leftScroll.addEventListener("click", ()=>{
        gridHorizontalScroller.style.scrollBehavior = "smooth";
        gridHorizontalScroller.scrollLeft -=550;
    });



// For Horizontal Scroll


for (let i = 0; i < document.querySelectorAll(".media-scroller-element").length; i++) {
    document.querySelectorAll(".media-scroller-element")[i].addEventListener("mouseover", function(){
        let elementover = this.getAttribute("class")[0];
        checkVisibilityFalse(elementover);

    });
    document.querySelectorAll(".media-scroller-element")[i].addEventListener("mouseout", function(){
        let elementover = this.getAttribute("class")[0];
        checkVisibilityTrue(elementover);

    });
    
}

function checkVisibilityFalse(mediaClassName){
    let beforeElement = document.querySelector("." + mediaClassName);
    
    let visibility = beforeElement.getAttribute("data-visible");

    if (visibility === "false") {
        
        let setVisibility = beforeElement.setAttribute("data-visible", true);
        
    }
    return setVisibility;

}

function checkVisibilityTrue(mediaClassName){
    let beforeElement = document.querySelector("."+mediaClassName);

    let visibility = beforeElement.getAttribute("data-visible");

    if (visibility === "true") {
        let setVisibility = beforeElement.setAttribute("data-visible", false);
    }
    return setVisibility;
}


// For Certificates

function ChangeImage(path){
    document.querySelector('.change-cert').src = path;
}

function ChangeContent1(Cert){
    let cert1  = document.querySelector('.Cert2');
    let cert2 = document.querySelector('.Cert1');


    let Cert1visibility = cert1.getAttribute('data-visible');
    let Cert2visibility = cert2.getAttribute('data-visible');

   
    if (Cert1visibility === "false" && Cert2visibility === "true") {
        cert1.setAttribute('data-visible', Cert);
        cert2.setAttribute('data-visible', false);
    }

    
}
function ChangeContent2(Cert){
    let cert1  = document.querySelector('.Cert2');
    let cert2 = document.querySelector('.Cert1');

    let Cert1visibility = cert1.getAttribute('data-visible');
    let Cert2visibility = cert2.getAttribute('data-visible');

    if (Cert1visibility === "true" && Cert2visibility === "false") {
        cert2.setAttribute('data-visible', Cert);
        cert1.setAttribute('data-visible', false);
   }
    
}



// For Scroll Reveal


ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.even-columns h1',{origin: 'top'});
ScrollReveal().reveal('.even-columns span',{origin: 'top', delay: 600});
ScrollReveal().reveal('.horizontal-heading', {origin:'right'});


// Social Links

ScrollReveal().reveal('.Icon1',{origin: 'top'});
ScrollReveal().reveal('.Icon2',{origin: 'top', delay: 100});
ScrollReveal().reveal('.Icon3',{origin: 'top', delay: 200});
ScrollReveal().reveal('.Icon4',{origin: 'top', delay: 300});
ScrollReveal().reveal('.Item2',{origin: 'right'});

