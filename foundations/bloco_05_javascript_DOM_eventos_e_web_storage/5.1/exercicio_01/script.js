const header = document.querySelector("#header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "rgb(255, 159, 132)";

for (let i = 0; i < emergencyTasks.children.length; i++) {
    emergencyTasks.children[i].children[0].style.backgroundColor = "purple"
}

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
const noEmergencyTasksDivs = noEmergencyTasks.querySelectorAll("div");

noEmergencyTasks.style.backgroundColor = "rgb(249, 219, 94)";

noEmergencyTasksDivs.forEach(div => {
    div.children[0].style.backgroundColor = "black"
})

const footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "black";
