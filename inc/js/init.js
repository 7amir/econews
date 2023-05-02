let formLogin = document.getElementById("form-login")
let hoverNavbar = document.getElementById("row-hover")
let rateHover = document.getElementById("rate-hover")
let cityHover = document.getElementById("city-hover")
let areaHover = document.getElementById("area-hover")
let mediaHover = document.getElementById("media-hover")

function openLoginForm (){
    if (formLogin.style.display === "block"){
        formLogin.style.display= "none"
    }else {
        formLogin.style.display= "block"
    }
}

function collapseLink () {
    if (hoverNavbar.style.display === "block"){
        hoverNavbar.style.display= "none"
    }else {
        hoverNavbar.style.display= "block"
    }
}

function collapseLinkRate() {
    if (rateHover.style.display === "block"){
        rateHover.style.display= "none"
    }else {
        rateHover.style.display= "block"
    }
}

function collapseLinkCity() {
    if (cityHover.style.display === "block"){
        cityHover.style.display= "none"
    }else {
        cityHover.style.display= "block"
    }
}

function collapseLinkArea() {
    if (areaHover.style.display === "block"){
        areaHover.style.display= "none"
    }else {
        areaHover.style.display= "block"
    }
}

function collapseLinkMedia() {
    if (mediaHover.style.display === "block"){
        mediaHover.style.display= "none"
    }else {
        mediaHover.style.display= "block"
    }
}