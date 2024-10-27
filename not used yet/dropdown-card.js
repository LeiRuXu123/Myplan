const cardDropdownToggle = document.querySelector(".toggle");
const cardDropdown = document.querySelector(".cardDropdown")

cardDropdownToggle.onclick=function(){
    cardDropdown.classList.toggle("active")
}