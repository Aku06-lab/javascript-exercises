import "./style.css";
import {ToDo} from "./todo.js"
import {Project} from "./project.js"

const menuButton = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const contentSection = document.querySelector(".content");

const projectSideBar = document.querySelector(".projects");


menuButton.addEventListener("click",()=> {
    sideBar.classList.toggle("open");
})


const addTaskButton = document.querySelector(".addTask");
const formContainer = document.querySelector(".todoForm");



addTaskButton.addEventListener("click",()=> {
    formContainer.style.display = "grid";

})

const todo_array = [];
const projects_array =  [];

const general = new Project("general")
projects_array.push(general)
console.log(projects_array)

formContainer.addEventListener("submit",(event)=> {
    event.preventDefault();
    const pro = projectSelector.value;

    const titleInput = document.querySelector("#title")
    const title = titleInput.value;

    const DescInput = document.querySelector("#desc")
    const Description = DescInput.value;

    const duedateInput = document.querySelector("#duedate");
    const duedate = duedateInput.value;

    const priorityInput = document.querySelector("#priority")
    const prty = priorityInput.value;

    const notesInput = document.querySelector("#notes")
    const note = notesInput.value;

    const completedInput = document.querySelector("#completed")
    const com = completedInput.checked;
    
    console.log("Form Submitted")

    const value = new ToDo(title, Description, duedate, prty, note, com)
    todo_array.push(value)

    const selectedProject = projects_array.find(project => project.name === pro);
    selectedProject.todos.push(value);
    console.log(selectedProject)

    formContainer.reset();
    formContainer.style.display = "none";
})


const cancelTaskButton = document.querySelector("#cancel");

cancelTaskButton.addEventListener("click", () => {
    formContainer.reset();
    formContainer.style.display = "none";

})



const addTaskProjectButton = document.querySelector(".addProject");
const projectContainer = document.querySelector(".projectForm");


addTaskProjectButton.addEventListener("click", () => {
    projectContainer.style.display = "block";

})

const cancelProjectTaskButton = document.querySelector("#cancelProject");

cancelProjectTaskButton.addEventListener("click", () => {
    projectContainer.reset();
    projectContainer.style.display = "none";

})


projectContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    const projecttitleInput = document.querySelector("#projectTitle")
    const protitle = projecttitleInput.value;

    const projectName = new Project(protitle);
    projects_array.push(projectName)
    projectContainer.reset();

    projectContainer.style.display = "none";

    const projectButton = document.createElement("button")
    projectButton.textContent= protitle;
    const option = document.createElement("option");
    option.textContent = protitle;

    projectButton.addEventListener("click", ()=> {
        contentSection.innerHTML = "";
        const headingTask = document.createElement("h1");
        headingTask.textContent = "All Tasks"
        headingTask.style.color = "brown"
        headingTask.style.borderBottom = "2px solid brown"
        contentSection.append(headingTask)

        const projectTodo = projectName.todos;
        projectTodo.forEach((p)=> {
            const divSection = document.createElement("div");
            divSection.classList.add("projectDivision")
        

            const projectCompleted = document.createElement("input");
            projectCompleted.type = "checkbox";
            projectCompleted.checked = p.completed;

            const projectTitle = document.createElement("span");
            projectTitle.textContent = p.title;

            const projectDdate = document.createElement("span");
            projectDdate.textContent =p.duedate;

            const projectPriority = document.createElement("span");
            projectPriority.textContent = p.priority;

            const viewButton = document.createElement("button");
            viewButton.textContent = `View`;

            divSection.append(  projectCompleted, projectTitle,  projectDdate,projectPriority, viewButton);
            contentSection.append(divSection);
        })

    })

    projectSideBar.append(projectButton);
    projectSelector.appendChild(option);
    
})


const projectSelector = document.querySelector("#project");
const option = document.createElement("option");
option.textContent = "General";
option.value = "general"
const generalButton = document.createElement("button");
generalButton.classList.add("generalButtonStyle");
generalButton.textContent = "General";
projectSideBar.appendChild(generalButton);
projectSelector.appendChild(option);


generalButton.addEventListener("click", () => {
    contentSection.innerHTML = ""; 
    const headingTask = document.createElement("h1");
    headingTask.textContent = "General"
    headingTask.style.borderBottom = "2px solid brown"
    headingTask.style.color = "brown";
    contentSection.append(headingTask)

    const projectTodo = general.todos;
    projectTodo.forEach((p) => {
        const divSection = document.createElement("div");
        divSection.classList.add("projectDivision")

        const projectCompleted = document.createElement("input");
        projectCompleted.type = "checkbox";
        projectCompleted.checked = p.completed;

        const projectTitle = document.createElement("span");
        projectTitle.textContent = p.title;

        const projectDdate = document.createElement("span");
        projectDdate.textContent = p.duedate;

        const viewButton = document.createElement("button");
        viewButton.textContent = `View`;

        divSection.append(projectCompleted, projectTitle, projectDdate, viewButton);
        contentSection.append(divSection);
    })

})



const allTasksButton = document.querySelector(".allTasks");

allTasksButton.addEventListener("click", () => {

    contentSection.innerHTML = "";
    const headingPriority = document.createElement("h1");
    headingPriority.textContent = "All Tasks";
    headingPriority.style.borderBottom = "1px solid brown";
    headingPriority.style.color = "brown";
    contentSection.append(headingPriority);
    projects_array.forEach((project) => {
        

        const todolistProject = project.todos;
        for(let todolist of todolistProject) {

            const divSection = document.createElement("div");
            divSection.classList.add("allTasksDivision")

            const todoListProject = document.createElement("span");
            todoListProject.textContent = project.name;

            const todoListCompleted = document.createElement("input");
            todoListCompleted.type = "checkbox";
            todoListCompleted.checked = todolist.completed;

            todoListCompleted.addEventListener("change", () => {
                todolist.completed = todoListCompleted.checked;
            });


            const todoListTitle = document.createElement("span");
            todoListTitle.textContent = todolist.title;

            const todoListDdate = document.createElement("span");
            todoListDdate.textContent = todolist.duedate;

            const viewButton = document.createElement("button");
            viewButton.textContent = `View`;

            divSection.append(todoListCompleted, todoListProject, todoListTitle, todoListDdate, viewButton);
            contentSection.append(divSection);
            
        }
    })
    

})

const todayButton = document.querySelector(".todays");
const todaysDate = new Date().toISOString().split("T")[0];


todayButton.addEventListener("click", () => {
    contentSection.innerHTML = "";
    const headingPriority = document.createElement("h1");
    headingPriority.textContent = "Today's Task";
    headingPriority.style.borderBottom = "1px solid brown";
    headingPriority.style.color = "brown"
    contentSection.append(headingPriority);
    projects_array.forEach((project) => {

        const todolistProject = project.todos;
        
        for (let todolist of todolistProject) {
            if(todolist.duedate === todaysDate){

                const divSection = document.createElement("div");
                divSection.classList.add("todaysDivision")

                const todoListCompleted = document.createElement("input");
                todoListCompleted.type = "checkbox";
                todoListCompleted.checked = todolist.completed;

                const todoListProject = document.createElement("span");
                todoListProject.textContent = project.name;

                const todoListTitle = document.createElement("span");
                todoListTitle.textContent = todolist.title;

                const todoListDdate = document.createElement("span");
                todoListDdate.textContent = todolist.duedate;

                const viewButton = document.createElement("button");
                viewButton.textContent = `View`;

                divSection.append(todoListCompleted, todoListProject, todoListTitle, todoListDdate, viewButton);
                contentSection.append(divSection);

            }          

        }
    })


})

const deadlineButton = document.querySelector(".priorityWork");

deadlineButton.addEventListener("click", () => {
    contentSection.innerHTML = "";
    const headingPriority = document.createElement("h1");
    headingPriority.textContent = "Deadline";
    headingPriority.style.borderBottom = "1px solid brown";
    headingPriority.style.color = "brown";
    contentSection.append(headingPriority);
    projects_array.forEach((project) => {

        const todolistProject = project.todos;

        for (let todolist of todolistProject) {
            if (todolist.priority === "high") {

                const divSection = document.createElement("div");
                divSection.classList.add("todaysDivision")

                const todoListCompleted = document.createElement("input");
                todoListCompleted.type = "checkbox";
                todoListCompleted.checked = todolist.completed;

                const todoListTitle = document.createElement("span");
                todoListTitle.textContent = todolist.title;

                const todoListProject = document.createElement("span");
                todoListProject.textContent = project.name;

                const todoListDdate = document.createElement("span");
                todoListDdate.textContent = todolist.duedate;

                const viewButton = document.createElement("button");
                viewButton.textContent = `View`;

                divSection.append(todoListCompleted, todoListProject, todoListTitle, todoListDdate, viewButton);
                contentSection.append(divSection);

            }

        }


    })
})


const completedButton = document.querySelector(".completed");

completedButton.addEventListener("click", () => {
    contentSection.innerHTML = "";

    const headingCompleted = document.createElement("h1");
    headingCompleted.textContent = "Completed";
    headingCompleted.style.borderBottom = "1px solid brown"
    headingCompleted.style.color = "brown";
    contentSection.append(headingCompleted);

    projects_array.forEach((project) => {

        const todolistProject = project.todos;

        for (let todolist of todolistProject) {
            

            if (todolist.completed === true) {

                const divSection = document.createElement("div");
                divSection.classList.add("todaysDivision")

                const todoListTitle = document.createElement("span");
                todoListTitle.textContent = todolist.title;

                const todoListProject = document.createElement("span");
                todoListProject.textContent = project.name;

                const todoListCompleted = document.createElement("input");
                todoListCompleted.type = "checkbox";
                todoListCompleted.checked = todolist.completed;

                const todoListDdate = document.createElement("span");
                todoListDdate.textContent = todolist.duedate;

                const viewButton = document.createElement("button");
                viewButton.textContent = `View`;

                divSection.append(todoListCompleted, todoListProject, todoListTitle, todoListDdate, viewButton);
                contentSection.append(divSection);

            }

        }


    })
})

