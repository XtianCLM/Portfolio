let resume = document.getElementById('resume');

let path = '../assets/PDF/resume.pdf';

resume.addEventListener('click', ()=>{
    window.location.href = path;
});