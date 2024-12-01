let slideList = document.querySelectorAll(".slide");
let btnChecks = document.querySelectorAll(".btnCheck");

let leftButton = document.getElementById("ButtonPrev");
let rightButton = document.getElementById("ButtonNext");

btnChecks[0].classList.add("active-list");
slideList[0].classList.add("active-slide");

let count = 0;
function EventLeft() {
    for (let i = 0; i < btnChecks.length; i++) {
        btnChecks[i].classList.remove("active-list");
        slideList[i].classList.remove("active-slide")
    }
    btnChecks[count].blur();
    count--;

    if (count < 0) count = slideList.length - 1;

    slideList[count].classList.add("active-slide");
    btnChecks[count].classList.add("active-list");
    leftButton.blur();
}
function EventRight() {
    for (let i = 0; i < btnChecks.length; i++) {
        btnChecks[i].classList.remove("active-list");
        slideList[i].classList.remove("active-slide")
    }
    btnChecks[count].blur();
    count++;
    count = count % (slideList.length);


    slideList[count].classList.add("active-slide");
    btnChecks[count].classList.add("active-list");
    rightButton.blur();

}

leftButton.addEventListener("click", EventLeft);

rightButton.addEventListener("click", EventRight);

for (let i = 0; i < btnChecks.length; i++) {

    btnChecks[i].addEventListener("click", () => {
        for (let j = 0; j < btnChecks.length; j++) {
            btnChecks[j].classList.remove("active-list");
            slideList[j].classList.remove("active-slide")
        }
        btnChecks[count].blur();
        count = i;

        slideList[count].classList.add("active-slide");
        btnChecks[count].classList.add("active-list");
    })
}

document.body.addEventListener("keydown", function (e) {
    var code = e.keyCode;

    if (code == 37) { // Стрелка влево
        EventLeft();
    }
    if (code == 39) { // Стрелка вправо
        EventRight();
    }
}, false);