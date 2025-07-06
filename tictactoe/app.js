let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.message-container');
let msg = document.querySelector('#message');
let turno = true;//turn of player O
var draw_variable = 0;
//winn patterns
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        draw_variable += 1;

        if (turno) {
            box.innerText = "0"
            turno = false;
        }
        else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner}`
    msgContainer.classList.remove('hide');
    disabledboxes()

}
const checkWinner = () => {
    let winnerfound = false;
    for (let pattern of winpattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val == pos3val) {
                winnerfound = true;
                showWinner(pos1val);
                return true
            }
        }
    }
    if (draw_variable === 9 && !winnerfound) {
        showDraw();
    }
    return false
}


// After Winning the game the other boxes are disabled----
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const resetgame = () => {
    turno = true;
    draw_variable = 0;
    enaabledboxes();
    msgContainer.classList.add('hide');
}
const enaabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove('hide');
    disabledboxes();
}

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);