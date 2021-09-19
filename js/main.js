let gondoltSzam = Math.round((Math.random() * 100) + 1);
let countTipp = 1;

console.log(gondoltSzam);

function userTippClear() {
    let userTipp = document.getElementById("userTippField");
    userTipp.focus();
    userTipp.value = "";
}

function textBoxControll() {
    let userTipp = document.getElementById("userTippField").value;
    if (userTipp < 0 || userTipp > 100) {
        //  alert("A szamnak 1 es 100 között kell lenni!")
        modalShow("A szamnak 1 es 100 között kell lenni!")
    }
    else {
        compareNumber(userTipp);
    }
}

function compareNumber(userTipp) {
    let writeTipp = document.getElementById("ertekeles");
    let icons = "";
    if (gondoltSzam > userTipp) {
        writeTipp.innerHTML = "A szam nagyobb!";
        icons = "keyboard_arrow_up";
    }
    else
        if (gondoltSzam < userTipp) {
            writeTipp.innerHTML = "A szam kisebb!";
            icons = "keyboard_arrow_down"
        }
        else
            if (gondoltSzam == userTipp) {
                writeTipp.innerHTML = "Gratulalok, eltalaltad!";
                icons = "thumb_up";
            }
    addTodo(userTipp, icons);
    //  writeCountTipp(userTipp);
    console.log(userTipp);
    userTippClear();
    return userTipp;
}
/* 
function writeCountTipp(userTipp) {
    let counter = document.createElement("li");
    counter.setAttribute("class", "list-group")
    counter.textContent = countTipp.toString() + " tipp: " + "   " + userTipp.toString();
    const div = document.querySelector("#eredmeny");
    div.appendChild(counter);
    countTipp++;
    return counter;
} */

function addTodo(userTipp, icons) {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML += `
            <li class="mdl-list__item">
                            <span class="mdl-list__item-primary-content">
                                <i class="material-icons mdl-list__item-icon">${icons}</i>
                                ${userTippField.value}
                            </span>
                        </li>
    `;
}
