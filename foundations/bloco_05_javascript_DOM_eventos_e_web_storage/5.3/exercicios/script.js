let style = window.document.createElement('style');
style.innerHTML = '.highlight { Background-color: rgb(0, 238, 238); }';
document.getElementsByTagName('head')[0].appendChild(style);

//s --------------------


function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerText = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Exercicio 01: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function createDaysOftheMonth() {

    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const days = document.querySelector("#days")

    dezDaysList.forEach(day => {
        let dayItem = document.createElement("li")
        dayItem.innerText = day
        dayItem.classList.add("day")

        if (day === 24 || day === 25 || day === 31) dayItem.classList.add("holiday")
        if (day === 4 || day === 11 || day === 18 || day === 25) dayItem.classList.add("friday")

        days.appendChild(dayItem)
    })

}

createDaysOftheMonth()

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
const divButtons = document.querySelector(".buttons-container")

function createButtonHoliday(string) {
    let button = document.createElement("button")
    button.id = "btn-holiday"
    button.value = string
    button.innerText = string

    divButtons.appendChild(button)


}

createButtonHoliday("Feriados")

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const buttonHoliday = document.getElementById("btn-holiday")

buttonHoliday.addEventListener("click", highlightHolidays)

function highlightHolidays(event) {
    let holidays = document.querySelectorAll(".holiday")

    for (let i = 0; i < holidays.length; i += 1) {
        holidays[i].classList.toggle("highlight")
    }
}

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonFriday(string) {
    const buttonFriday = document.createElement("button")
    buttonFriday.id = "btn-friday"
    buttonFriday.innerText = string

    divButtons.appendChild(buttonFriday)
}

createButtonFriday("Sexta-feira")

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let buttonFriday = document.querySelector("#btn-friday")

buttonFriday.addEventListener("click", changeFridayText)

function changeFridayText(event) {
    let fridays = document.querySelectorAll(".friday")
    let defaultDays = [4, 11, 18, 25]

    for (let i = 0; i < fridays.length; i += 1) {
        if (fridays[i].innerText != "Sexta-feira") {
            fridays[i].innerText = "Sexta-feira"
        } else {
            fridays[i].innerText = defaultDays[i]
        }
    }
}

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

let allDays = document.querySelectorAll(".day")

allDays.forEach(day => {
    day.addEventListener("mousemove", zoomDay)
    day.addEventListener("mouseleave", zoomOutDay)
})

function zoomDay(event) {
   event.target.style.transform = "scale(2)"
   event.target.style.cursor = "zoom-in"
}

function zoomOutDay(event) {
    event.target.style.transform = "scale(1)"
}

//7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

// const taskButton = document.createElement("input")
// const task = document.createElement("span")
// const myTasks = document.querySelector(".my-tasks")

// taskButton.innerText = "Tasks"
// taskButton.id = "btn-task"
// divButtons.appendChild(taskButton)


// taskButton.addEventListener("click")

// task.innerText = "Cozinhar"

// myTasks.appendChild(task)

// Bonus
const commitmentButton = document.querySelector("#btn-add");
const commitmentInput = document.querySelector("#task-input")


commitmentButton.addEventListener("click", addCommitment)
commitmentInput.addEventListener("keydown", (event) => {
    const key = event.code
    
    if (key === "Enter" || key === "NumpadEnter") addCommitment()
})

function addCommitment(event) {
    if (commitmentInput.value === "") alert("Digite algum valor")
    
    const taskList = document.querySelector(".task-list")
    const commitmentItem = document.createElement("li")

    commitmentItem.innerText = commitmentInput.value

    taskList.appendChild(commitmentItem)

    commitmentInput.value = ""
}