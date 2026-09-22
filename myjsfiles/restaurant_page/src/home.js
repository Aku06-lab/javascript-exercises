import images_home from "./images_home.jpeg"

function home_page () {

 const content = document.querySelector("#content");
 const section_home = document.createElement("section");
 section_home.classList.add("home_section")
 content.append(section_home)

 const img_home = document.createElement("img");
 img_home.classList.add("home_background");
 img_home.src = images_home;

 const div_1 = document.createElement("div")
 const para_home = document.createElement("p");
 para_home.classList.add("home_text")
 para_home.textContent = "Welcome to Bella Crusta Pizza.\nHome of simple & Tasty slices..."


const div_2 = document.createElement("div")
div_2.classList.add("contentHome")
const menu_button = document.createElement("button");
menu_button.classList.add("button_home");
menu_button.textContent = "Menu"

const about_us_button = document.createElement("button");
about_us_button.classList.add("button_home")
about_us_button.textContent = "About us"



 section_home.append(img_home);
 div_1.append(para_home)
 div_2.append(menu_button);
 div_2.append(about_us_button);
 div_1.append(div_2);

 section_home.append(div_1)



}

export default home_page;