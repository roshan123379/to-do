const header = document.querySelector(".header")

const hdiv1 = document.createElement("img")
hdiv1.classList.add("hdiv1")
hdiv1.src="https://tse1.mm.bing.net/th?id=OIP.cdsdHDdF2rEALFR9sLa2nwHaHa&pid=Api&P=0&h=180"
header.appendChild(hdiv1)

const hdiv2 = document.createElement("img")
hdiv2.classList.add("hdiv2")
hdiv2.src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png "
hdiv2.style.display="none"
header.appendChild(hdiv2)

const sidebar = document.querySelector(".sidebar")
const content = document.querySelector(".content")

const Hdiv1 = document.querySelector(".hdiv1")
const Hdiv2 = document.querySelector(".hdiv2")
const container = document.querySelector(".container")
Hdiv1.addEventListener("click",()=>{
    sidebar.style.display="none"
    content.style.gridColumn="1/2"
    content.style.marginLeft="0"
    Hdiv2.style.display="block"
    Hdiv1.style.display="none"
    container.style.gridTemplateColumns ="1fr"
      
})
Hdiv2.addEventListener("click",()=>{
    sidebar.style.display="block"
    content.style.gridColumn="1/2"
    content.style.marginLeft="17%"
    Hdiv1.style.display="block"
    Hdiv2.style.display="none"
    container.style.gridTemplateColumns="1fr"
    
})

const heading = document.createElement("div")
heading.classList.add('heading')
header.appendChild(heading)

const Heading = document.querySelector(".heading")
const todo = document.createElement("span")
todo.classList.add("todo")
todo.textContent="Todo"
Heading.appendChild(todo)

const list = document.createElement("span")
list.classList.add("list")
list.textContent="List"
Heading.appendChild(list)

const theme = document.createElement("div")
theme.classList.add("theme")
theme.textContent="Theme"
header.appendChild(theme)