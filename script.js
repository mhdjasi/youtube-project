//sidebar function    
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchButton.addEventListener('click', ()=>{
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})
