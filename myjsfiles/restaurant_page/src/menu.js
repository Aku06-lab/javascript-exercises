import images_home from "./images_home.jpeg"

function menu_page() {

    const content = document.querySelector("#content");
    const section_menu = document.createElement("section");
    section_menu.classList.add("menu_section")
    content.append(section_menu)

    const menu_heading= document.createElement("h1");
    menu_heading.classList.add("menuTitle")
    menu_heading.textContent = "Pizza Menu"

    section_menu.append(menu_heading)
    const pizzas = [
        {
            name: "Margherita",
            description: "Tomato, mozzarella, fresh basil",
            price: "$10"
        },
        {
            name: "Pepperoni",
            description: "Tomato sauce, mozzarella, pepperoni",
            price: "$12"
        },
        {
            name: "Veggie Supreme",
            description: "Peppers, mushrooms, onions, olives",
            price: "$13"
        },
        {
            name: "Four Cheese",
            description: "Mozzarella, parmesan, gorgonzola, fontina",
            price: "$14"
        },
        {
            name: "BBQ Chicken",
            description: "Chicken, BBQ sauce, mozzarella, onions",
            price: "$14"
        }
    ];

    pizzas.forEach((pizza) => {
        const article = document.createElement("article")
        article.classList.add("pizzaSection")
        const title = document.createElement("h1");
        title.classList.add("pizzaName")
        title.textContent = pizza.name;

        const desc = document.createElement("p");
        desc.textContent = pizza.description;
        
        const prices = document.createElement("span");
        prices.textContent = pizza.price;
        prices.classList.add("menuItemPrice")

        article.append(title, desc, prices);

        section_menu.append(article)


    })


}

export default menu_page;