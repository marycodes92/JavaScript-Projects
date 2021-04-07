//Selecting the elements from the html 
const toggleButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.close-btn');

//Adding event listener to the Buttons

toggleButton.addEventListener('click', function(){
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
    else{
        sidebar.classList.add("show-sidebar");
    }
})


closeButton.addEventListener('click', function(){
    sidebar.classList.remove("show-sidebar");
})