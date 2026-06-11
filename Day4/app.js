// let name = "harinath"

// console.log(name);


// function greet() {
//     console.log("Good Evening");
// }

// greet()

// greet()

// function add(a,b) {
//     return a+b 
// }
// console.log(add(3,5))   


// let age = 17;

// if ( age >= 18 ) {

//     console.log("Eligible to vote");

// }

// else if (age<18) {
//     console.log("Minor");  
// }


// for (initialization, logic, update ) {
    // block of code
// }


// for ( let i = 0 ; i <= 10 ; i++ ) {
//     console.log(i)
// }


// let Heading = document.getElementById("title").innerText = "Welcome to javascript Session"

// Heading.style.background-color = "red"

// document.getElementById("title").style.color = "red"


// function changeText() {
//     document.getElementById("title").innerText = "DOM UPDATED"
// }

// document.getElementById("button")

// button.addEventListener("click", function() {
//     alert("Button Clicked");
// })



function addTask() {

    let task = document.getElementById("taskInput").value ; 

    let li = document.createElement("li");

    li.innerText = task

    document.getElementById("taskList").appendChild(li)

}

function addTask() {

    let task = document.getElementById("taskInput").value ; 

    let li = document.createElement("li");

    li.innerHTML = `${task } + <button onclick= "deleteTask(this)" > Delete </button>`;

    document.getElementById("taskList").appendChild(li)

}

function deleteTask(button) {
    button.parentElement.remove();
}
