
let box = document.querySelectorAll(".box");
let arr = Array.from(box).fill(null);
let winBox = Array.from(box);
let turn = 'X';
let restartBTN = document.getElementById("restart");
let sb = document.querySelector(".scoreBoard");
let clickable = document.querySelector(".container");

// let connectBtn = document.getElementById("conn");
let newRoom = document.getElementById("newRoom");
let gamecode = document.getElementById("gamecode");
let joinBtn = document.getElementById("join");
const winSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



box.forEach((element) => {
    element.addEventListener('click', put);
})

restartBTN.addEventListener('click', restartGame);


function put(element) {
    const id = element.target.id;
    if (arr[id] == null) {
        arr[id] = turn;
        // console.log(winBox[id].innerText);
        element.target.innerText = turn;
        win();
        turnover();
    }
}

function turnover() {
    turn = turn === 'X' ? 'O' : 'X';
}


function restartGame() {
    arr.fill(null);
    box.forEach((box) => {
        box.innerText = "";
    })
    clickable.style.pointerEvents = "auto";
    sb.innerText = "";
    winBox.forEach((e) => {
        e.style.backgroundColor = "";
    })
    turn = 'X';
    turnCount = 0;
}



function win() {

    winSets.forEach((element) => {
        // console.log(arr[element[0]], arr[element[1]]);

        if ((arr[element[0]] === arr[element[1]]) && (arr[element[1]] === arr[element[2]]) && (arr[element[0]] !== null)) {
            for (let i = 0; i < 3; i++) {
                winBox[element[i]].style.backgroundColor = "rgba(21, 255, 0, 0.486)";
            }
            sb.innerText = `${arr[element[0]]} Win`;
            console.log(element);
            clickable.style.pointerEvents = "none";
        }
    })

}

