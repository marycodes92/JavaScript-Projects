//Locating the elements on the html page
const toggleButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

//Adding an event listener to the button
toggleButton.addEventListener('click', ()=>{
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    } 
    else {
        links.classList.add('show-links');
    }
})