// Allons-y


// Faire fonctionner le bouton hamburger
const hamburger = document.getElementById("hamburger");
const menu_cache = document.getElementById("menu_cache");
const overlay = document.getElementById("overlay");

function afficher(){
    menu_cache.classList.add("ouvert");
    overlay.classList.add("active");
}

function cacher(){
    menu_cache.classList.remove("ouvert");
    overlay.classList.remove("active");
}

hamburger.addEventListener("click", afficher);
overlay.addEventListener("click", cacher);

//MODE

const light_mode = document.getElementById("light_mode");
const night_mode = document.getElementById("night_mode");
const light_mode_cache = document.getElementById("light_mode_cache");
const night_mode_cache = document.getElementById("night_mode_cache");
const root = document.documentElement;

function mode_clair(){
    console.log("mode clair clicked");
    
    root.style.setProperty("--fond-principal-night", "#FFFFFF");
    root.style.setProperty("--fond-secondaire-night", "#F1F5F9");
    root.style.setProperty("--accent-principal-night", "#2563EB");
    root.style.setProperty("--accent-hover-night", "#1D4ED8");
    root.style.setProperty("--text-principal-night", "#0A0A0A");
    root.style.setProperty("--text-secondaire-night", "#4B5563");

    light_mode.style.display="none";
    night_mode.style.display="block";

    light_mode_cache.style.display="none";
    night_mode_cache.style.display="block";
}

function mode_sombre(){
    console.log("mode sombre clicked");
    
    root.style.setProperty("--fond-principal-night", "#0A0A0A");
    root.style.setProperty("--fond-secondaire-night", "#1A1A2E");
    root.style.setProperty("--accent-principal-night", "#2563EB");
    root.style.setProperty("--accent-hover-night", "#3B82F6");
    root.style.setProperty("--text-principal-night", "#FFFFFF");
    root.style.setProperty("--text-secondaire-night", "#A0A0A0");

    light_mode.style.display="block";
    night_mode.style.display="none";

    light_mode_cache.style.display="block";
    night_mode_cache.style.display="none";
}

light_mode.addEventListener("click", mode_clair);
night_mode.addEventListener("click", mode_sombre);

light_mode_cache.addEventListener("click", mode_clair);
night_mode_cache.addEventListener("click", mode_sombre);



// Faire fonctionner les boutons qui permettent de déplacer les marques
const fleche_gauche = document.getElementById("fleche_gauche");
const fleche_droite = document.getElementById("fleche_droite");
const container = document.getElementById("marques_container");

let position = 0;
const deplacement = 120;

fleche_droite.addEventListener("click", function(){
    const largeur_totale = container.scrollWidth;
    const largeur_visible = container.parentElement.offsetWidth;

    if (position > -(largeur_totale - largeur_visible)){
        position -= deplacement
        container.style.transform = "translateX(" + position + "px)";
    }
})

fleche_gauche.addEventListener("click", function(){
    if (position < 0){
        position += deplacement
        container.style.transform= "translateX(" + position + "px)";
    }
})

// Les filtres dans le catalogue (smartphone)
const tous= document.getElementById("tous");
const apple= document.getElementById("apple");
const samsung= document.getElementById("samsung");
const xiaomi= document.getElementById("xiaomi");
const oppo= document.getElementById("oppo");
const huawei= document.getElementById("huawei");
const realme= document.getElementById("realme");
const oneplus= document.getElementById("oneplus");


const phone_apple= document.querySelectorAll(".phone_apple");
const phone_samsung= document.querySelectorAll(".phone_samsung");
const phone_xiaomi= document.querySelectorAll(".phone_xiaomi");
const phone_oppo= document.querySelectorAll(".phone_oppo");
const phone_realme= document.querySelectorAll(".phone_realme");
const phone_oneplus=document.querySelectorAll(".phone_oneplus");
const phone_huawei=document.querySelectorAll(".phone_huawei");

tous.addEventListener("click", () => {
    console.log("Tous clicked");
    
    phone_apple.style.display="flex";
    phone_samsung.style.display="flex";
    phone_xiaomi.style.display="flex";
    phone_oppo.style.display="flex";
    phone_realme.style.display="flex";
    phone_oneplus.style.display="flex";
    phone_huawei.style.display="flex";
});

apple.addEventListener("click", () => {
    console.log("Tous clcked");

    phone_apple.style.display="flex";
    phone_samsung.style.display="none";
    phone_xiaomi.style.display="none";
    phone_oppo.style.display="none";
    phone_realme.style.display="none";
    phone_oneplus.style.display="none";
    phone_huawei.style.display="none";
});



