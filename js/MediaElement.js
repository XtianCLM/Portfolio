for (let i = 0; i < document.querySelectorAll(".media-scroller-element").length; i++) {
    document.querySelectorAll(".media-scroller-element")[i].addEventListener("mouseover", function(){
        var elementover = this.getAttribute("class")[0];
        checkVisibilityFalse(elementover);

    });
    document.querySelectorAll(".media-scroller-element")[i].addEventListener("mouseout", function(){
        var elementover = this.getAttribute("class")[0];
        checkVisibilityTrue(elementover);

    });
    
}

function checkVisibilityFalse(mediaClassName){
    var beforeElement = document.querySelector("." + mediaClassName);
    
    var visibility = beforeElement.getAttribute("data-visible");

    if (visibility === "false") {
        
        var setVisibility = beforeElement.setAttribute("data-visible", true);
        
    }
    return setVisibility;

}

function checkVisibilityTrue(mediaClassName){
    var beforeElement = document.querySelector("."+mediaClassName);

    var visibility = beforeElement.getAttribute("data-visible");

    if (visibility === "true") {
        var setVisibility = beforeElement.setAttribute("data-visible", false);
    }
    return setVisibility;
}
