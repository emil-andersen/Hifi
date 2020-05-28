let viewAll = document.querySelector(".brandsliste__viewall");
let showAll  = document.querySelector(".brandsliste__brand_noshow");

viewAll.addEventListener("click", function(){
    viewAll.style.display = "none";
    showAll.classList.toggle("brandliste__brand_show");
})