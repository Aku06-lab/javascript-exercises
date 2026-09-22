
function aboutUs_page() {

    const content = document.querySelector("#content");
    const section_aboutUs = document.createElement("section");
    section_aboutUs.classList.add("aboutUs_section")
    content.append(section_aboutUs)

    const div_1 = document.createElement("div")
    const aboutUSHeading = document.createElement("h1");
    aboutUSHeading.classList.add("aboutUsInfo");
    aboutUSHeading.textContent = "About Us"

    const para_aboutUs = document.createElement("p");
    para_aboutUs.classList.add("aboutUs_text")
    para_aboutUs.style.fontSize = "25px"
    para_aboutUs.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    div_1.append(aboutUSHeading);
    div_1.append(para_aboutUs)


    const div_2 = document.createElement("div")
    div_2.classList.add("contactaboutUs")
    const contactUs = document.createElement("h1");
    contactUs.classList.add("contactUsInfo");
    contactUs.textContent = "Contact Us"

    const contactUsPhone = document.createElement("p");
    contactUsPhone.classList.add("contactUsNumber")
    contactUsPhone.style.fontSize = "25px"
    contactUsPhone.textContent = "Name: MissBehave \n\nPhone No:+0000000000000"


    div_2.append(contactUs)
    div_2.append(contactUsPhone)

    section_aboutUs.append(div_1)
    section_aboutUs.append(div_2)



}

export default aboutUs_page;