const fleche = document.querySelector(".scroll-indicator");
const sectionProfil = document.querySelector("#profil");
fleche.addEventListener("click", function () {
    sectionProfil.scrollIntoView({ behavior: "smooth" });
});
