let gondoltSzam = Math.round((Math.random() * 100) + 1) ;
let countTipp = 1;

//console.log(gondoltSzam);

function userTippClear(){
    let userTipp = document.getElementById("userTipp");
userTipp.focus();
userTipp.value = "";
}

function textBoxControll() {
    let userTipp = document.getElementById("userTipp").value;
    if (userTipp < 0 || userTipp > 100 ) {
       alert("A szamnak 1 es 100 között kell lenni!")
    }
    else {
        compareNumber(userTipp);
    }
}

function compareNumber(userTipp) {
   // let userTipp = document.getElementById("userTipp").value;
    let writeTipp = document.getElementById("ertekeles");
    if (gondoltSzam > userTipp) {
        writeTipp.innerHTML = "A gondolt szam nagyobb!";
    }
    else
    if (gondoltSzam < userTipp) {
        writeTipp.innerHTML = "A gondolt szam kisebb!";
    }
    else
    if (gondoltSzam == userTipp) {
        writeTipp.innerHTML = "Gratulalok, eltalaltad!";
    }
    writeCountTipp(userTipp);
  //  console.log(userTipp);
    userTippClear();
    return userTipp;
}

function writeCountTipp(userTipp) {
    let counter = document.createElement("li");
    counter.setAttribute("class", "list-group")
    counter.textContent = countTipp.toString() + " tipp: " + " - " + userTipp.toString();
    const div = document.querySelector("#eredmeny");
    div.appendChild(counter);

    countTipp++;
}

function toastShow(toastText) {
    let toast = document.createElement("div");
    toast.setAttribute("class", "alert alert-primary");
    toast.setAttribute("role", "alert");
    toast.textContent = toastText;
    const div = document.querySelector(".container-md");
    div.appendChild(toast);
}
