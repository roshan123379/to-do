

//    cdiv1
const cdiv = document.createElement("div")
cdiv.classList.add("cdiv")
content.appendChild(cdiv)

const Cdiv = document.querySelector(".cdiv")

const alltask = document.createElement("div")
alltask.classList.add("alltask")
alltask.textContent = "All Task"
cdiv.appendChild(alltask)

const projectTitle = document.createElement("div")
projectTitle.classList.add("projectTitle")
projectTitle.textContent = "Projects"
cdiv.appendChild(projectTitle)

const addtaskdiv = document.createElement('div')
addtaskdiv.classList.add("addtaskdiv")
Cdiv.appendChild(addtaskdiv)

const Addtaskdiv = document.querySelector(".addtaskdiv")

const img5 = document.createElement('img')
img5.classList.add("img5")
img5.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-512.png"
Addtaskdiv.appendChild(img5)

const addtask = document.createElement('p')
addtask.classList.add('addtask')
addtask.textContent = "Add Task"
Addtaskdiv.appendChild(addtask)

const bigdiv = document.createElement("div")
bigdiv.classList.add("bigdiv")
bigdiv.style.display = "none"
Cdiv.appendChild(bigdiv)

const giveTodo = document.createElement("div")
giveTodo.classList.add("giveTodo")
giveTodo.style.display = "none"
bigdiv.appendChild(giveTodo)


const addproject = document.createElement("div")
addproject.classList.add("addproject")
addproject.textContent = "Add Project"
giveTodo.appendChild(addproject)

const projectFormDiv = document.createElement("div")
projectFormDiv.classList.add("projectFormDiv")
giveTodo.appendChild(projectFormDiv)

const form = document.createElement("form")
form.classList.add("form")
projectFormDiv.appendChild(form)

const Form = document.querySelector(".form")

const input = document.createElement("input")
input.classList.add("input")
input.placeholder = "Enter project name"
input.required = "true"
Form.appendChild(input)

const addTask = document.createElement("div")
addTask.classList.add("addTask")
addTask.textContent = "Add Tasks"
Form.appendChild(addTask)

const input1 = document.createElement("input")
input1.classList.add("input1")
input1.placeholder = "Enter Task 1"
input1.required = "true"
Form.appendChild(input1)

const input2 = document.createElement("input")
input2.classList.add("input2")
input2.placeholder = "Enter Task 2"
input2.required = "true"
Form.appendChild(input2)

const input3 = document.createElement("input")
input3.classList.add("input3")
input3.placeholder = "Enter Task 3"
input3.required = "true"
Form.appendChild(input3)

const input4 = document.createElement("input")
input4.classList.add("input4")
input4.placeholder = "Enter Task 4"
input4.required = "true"
Form.appendChild(input4)

const input5 = document.createElement("input")
input5.classList.add("input5")
input5.placeholder = "Enter Task 5"
input5.required = "true"
Form.appendChild(input5)


const button = document.createElement("button")
button.classList.add("button")
button.textContent = "Add"
button.type = "submit"
Form.appendChild(button)

const cancel = document.createElement("div")
cancel.classList.add("cancel")
cancel.textContent = "Cancel"
bigdiv.appendChild(cancel)

Addtaskdiv.addEventListener("click", () => {
    giveTodo.style.display = "block"
    bigdiv.style.display = "block"
})
cancel.addEventListener("click", () => {
    giveTodo.style.display = "none"
    bigdiv.style.display = "none"
})


const projectNamediv = document.createElement('div')
projectNamediv.classList.add("projectnamediv")
Cdiv.appendChild(projectNamediv)



let storage = localStorage.getItem('todoo')
let todoo = storage ? JSON.parse(storage) : []
Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todo1Object = new todooo(input.value, input1.value, input2.value, input3.value, input4.value, input5.value)

    console.log(todo1Object)
    todoo.push(todo1Object)



    clear()
    localStorage.setItem('todoo', JSON.stringify(todoo))
    location.reload()
})

class todooo {
    constructor(todo1, todo2, todo3, todo4, todo5, todo6) {
        this.todo1 = todo1
        this.todo2 = todo2
        this.todo3 = todo3
        this.todo4 = todo4
        this.todo5 = todo5
        this.todo6 = todo6

    }
}

const cdiv2 = document.createElement("div")
cdiv2.classList.add("cdiv2")
cdiv2.style.display = "none"
content.appendChild(cdiv2)

const Cdiv2 = document.querySelector(".cdiv2")

const todaytask = document.createElement("div")
todaytask.classList.add("todaytask")
todaytask.textContent = "Today Task"
cdiv2.appendChild(todaytask)



const projectNamediv2 = document.createElement('div')
projectNamediv2.classList.add("projectnamediv2")
Cdiv2.appendChild(projectNamediv2)

const Div6 = document.createElement("div")
Div6.classList.add("div6")
divs.appendChild(Div6)

const projectnamediv = document.querySelector(".projectnamediv")
projectnamediv.innerHTML = ""

const projectnamediv2 = document.querySelector(".projectnamediv2")
projectnamediv2.innerHTML = ""

const div6 = document.querySelector(".div6")
div6.innerHTML = ""
todoo.map((data, index) => {

    let div = document.createElement("div")
    div.classList.add("div")
    div.innerHTML += `<p class="projectName" >${data.todo1}</p>
        <div class="cont1" >  <div class="paradiv1">${data.todo2}</div>   <div class="inputdiv1"><input id="check" type="checkbox"></div>  </div>
        <div class="cont2" >  <div class="paradiv2">${data.todo3}</div>   <div class="inputdiv2"><input id="check" type="checkbox"></div>  </div>
        <div class="cont3">  <div class="paradiv3">${data.todo4}</div>   <div class="inputdiv3"><input id="check" type="checkbox"></div>  </div>
        <div class="cont4">  <div class="paradiv4">${data.todo5}</div>   <div class="inputdiv4"><input id="check" type="checkbox"></div>  </div>
        <div class="cont5">  <div class="paradiv5">${data.todo6}</div>   <div class="inputdiv5"><input id="check" type="checkbox"></div>  </div>
        
            <button class="Remove" onclick="remove(${index})"  >remove </button>
            `
    projectnamediv.appendChild(div)

    let todaytaskdiv = document.createElement("div")
    todaytaskdiv.classList.add("todaytaskdiv")
    todaytaskdiv.innerHTML += `<p class="projectName" >${data.todo1}</p>
        <div class="cont1" >  <div class="paradiv1"><p class="para" >${data.todo2}</p></div>   <div class="inputdiv1"><input id="check" type="checkbox"></div>  </div>
        <div class="cont2" >  <div class="paradiv2"><p class="para" >${data.todo3}</p></div>   <div class="inputdiv2"><input id="check" type="checkbox"></div>  </div>
        <div class="cont3">  <div class="paradiv3"><p class="para" >${data.todo4}</p></div>   <div class="inputdiv3"><input id="check" type="checkbox"></div>  </div>
        <div class="cont4">  <div class="paradiv4"><p class="para" >${data.todo5}</p></div>   <div class="inputdiv4"><input id="check" type="checkbox"></div>  </div>
        <div class="cont5">  <div class="paradiv5"><p class="para" >${data.todo6}</p></div>   <div class="inputdiv5"><input id="check" type="checkbox"></div>  </div>
        
            <button class="Remove" onclick="remove(${index})"  >remove </button>
            `

    projectnamediv2.appendChild(todaytaskdiv)

    let allproject = document.createElement("div")
    allproject.classList.add("allproject")
    allproject.innerHTML += `<p class="projectName" >${data.todo1}</p>
        <button class="remove" onclick="remove(${index})"  >remove </button>
        `
    div6.appendChild(allproject)

})


function clear() {
    input.value = ""
    input1.value = ""
    input2.value = ""
    input3.value = ""
    input4.value = ""
    input5.value = ""
    bigdiv.style.display = "none"
}
function remove(e) {

    let deleted = todoo.filter((data, index) => {
        return index !== e;
    })
    localStorage.setItem('todoo', JSON.stringify(deleted))
    location.reload()

}


const cdiv3 = document.createElement("div")
cdiv3.classList.add("cdiv3")
cdiv3.style.display = "none"
content.appendChild(cdiv3)

const thisweektask = document.createElement("div")
thisweektask.classList.add("thisweektask")
thisweektask.textContent = "This Week Task"
cdiv3.appendChild(thisweektask)

const cdiv4 = document.createElement("div")
cdiv4.classList.add("cdiv4")
cdiv4.style.display = "none"
content.appendChild(cdiv4)

const importanttask = document.createElement("div")
importanttask.classList.add("thisweektask")
importanttask.textContent = "Important Task"
cdiv4.appendChild(importanttask)

const Cdiv3 = document.querySelector(".cdiv3")
const Cdiv4 = document.querySelector(".cdiv4")

Div1.addEventListener("click", () => {
    Cdiv.style.display = "block"
    Cdiv2.style.display = "none"
    Cdiv3.style.display = "none"
    Cdiv4.style.display = "none"

})
Div2.addEventListener("click", () => {
    Cdiv2.style.display = "block"
    Cdiv.style.display = "none"
    Cdiv3.style.display = "none"
    Cdiv4.style.display = "none"

})

Div3.addEventListener("click", () => {
    Cdiv3.style.display = "block"
    Cdiv2.style.display = "none"
    Cdiv.style.display = "none"
    Cdiv4.style.display = "none"

})
Div4.addEventListener("click", () => {
    Cdiv4.style.display = "block"
    Cdiv2.style.display = "none"
    Cdiv.style.display = "none"
    Cdiv3.style.display = "none"

})

