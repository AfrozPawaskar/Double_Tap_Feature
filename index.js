var btn = document.querySelector(".btn");
var showMsg = document.querySelector("#msg");
var imag = document.querySelector(".poster");
var heart = document.querySelector("i");

var check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        btn.innerHTML = "Remove";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "skyblue";
        btn.style.border = "1px solid skyblue";
        // showMsg.style.border = "1px solid skyblue";
        showMsg.textContent = "Added To Friends"
        check = 1;
        setTimeout(function () {
            showMsg.textContent = "";
        }, 900);
    }
    else {
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "Skyblue";
        btn.style.color = "white";
        showMsg.textContent = "Removed Successfully";
        check = 0;
        setTimeout(function () {
            showMsg.textContent = "";
        }, 900);
    }
})

imag.addEventListener("dblclick", function () {

    if (check == 1) {

        heart.style.transform = "translate(-150px, 75px) scale(1)";
        heart.style.opacity = .9;

        setTimeout(function () {
            heart.style.opacity = 0;
        }, 800);

        setTimeout(function () {
            heart.style.transform = "translate(-150px, 75px) scale(0)";
        }, 900);
    }
    else {
        showMsg.textContent = "First Add to Friends";
        setTimeout(function () {
            showMsg.textContent = "";
        }, 900);
    }

})