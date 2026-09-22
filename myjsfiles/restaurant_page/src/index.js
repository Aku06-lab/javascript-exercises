import home_page from  "./home.js";
import menu_page from "./menu.js";
import aboutUs_page from "./aboutus.js"
import "./templatestyle.css"


const content = document.querySelector("#content");

home_page();

const homeButton = document.getElementsByClassName("home")[0]

homeButton.addEventListener("click", () => {
    content.textContent = "";
    home_page()
})




const menuButton = document.getElementsByClassName("menu")[0]

menuButton.addEventListener("click",() => {
    content.textContent = "";    
    menu_page()
})

const aboutUsButton = document.getElementsByClassName("aboutUs")[0]

aboutUsButton.addEventListener("click", () => {
    content.textContent = "";
    aboutUs_page()
})
