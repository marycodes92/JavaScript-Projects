//Grabing the Elements from the html page
const modalButton = document.querySelector(".btn");
const overlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

//Adding Event Listeners to the Buttons
modalButton.addEventListener('click', function(){
    overlay.classList.add("open-modal");
})

closeButton.addEventListener('click', function(){
    overlay.classList.remove("open-modal");
})