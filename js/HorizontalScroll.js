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
