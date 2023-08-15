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



// function ChangeContent1(Cert){
//     let cert1  = document.querySelector('.Cert2');
//     let cert2 = document.querySelector('.Cert1');


//     let Cert1visibility = cert1.getAttribute('data-visible');
//     let Cert2visibility = cert2.getAttribute('data-visible');

//     if (Cert1visibility === "true" && Cert2visibility === "false") {
//          cert2.setAttribute('data-visible', Cert);
//          cert1.setAttribute('data-visible', false);
//     }
//     else if (Cert1visibility === "false" && Cert2visibility === "true") {
//         cert1.setAttribute('data-visible', Cert);
//         cert2.setAttribute('data-visible', false);
//     } else {
        
//     }

    
// }