const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent ="This is a glorious text content";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.style.color = "red";
para.textContent = "hey i am red";


container.appendChild(para);


const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.style.color = "blue";
h3.textContent = "i am blue h3";


container.appendChild(h3);

const content_2 = document.createElement("div");
content_2.classList.add("content_2");
content_2.style.border = "blue";
content_2.style.backgroundColor = "pink";


const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "i am in a div";

content_2.appendChild(h1);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO";

content_2.appendChild(para2);


container.appendChild(content_2)