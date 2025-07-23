// //         let r1 = document.querySelector("#d1");
//         let r2 = document.querySelector("#d2");
//         let r3 = document.querySelector("#d3");
//         let r4 = document.querySelector("#d4");
//         let r5 = document.querySelector("#d5");
//         let r6 = document.querySelector("#d6");
//         let r7 = document.querySelector("#d7");
//         let r8 = document.querySelector("#d8");
//         let r9 = document.querySelector("#d9");
//         let otext = document.querySelector("#otext");
//         let xtext = document.querySelector("#xtext");
//         let i = "x";
//         let xWins = 0;
//         let oWins = 0;

//         const cells = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

//         const checkWinner = () => {
//             const winningCombinations = [
//                 [0, 1, 2],
//                 [3, 4, 5],
//                 [6, 7, 8],
//                 [0, 3, 6],
//                 [1, 4, 7],
//                 [2, 5, 8],
//                 [0, 4, 8],
//                 [2, 4, 6]
//             ];

//             for (const combination of winningCombinations) {
//                 const [a, b, c] = combination;
//                 if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
//                     return cells[a].innerHTML;
//                 }
//             }

//             return null;
//         };

//         const handleClick = (cell) => {
//             if (cell.innerHTML === "") {
//                 cell.innerHTML = i === "x" ? "X" : "O";
//                 i = i === "x" ? "o" : "x";
//                 const winner = checkWinner();
//                 if (winner) {
//                     alert(winner + " wins!");
//                     if (winner === "O") {
//                         oWins += 1;
//                         otext.innerHTML = oWins;
//                     } else {
//                         xWins += 1;
//                         xtext.innerHTML = xWins;
//                     }
//                     resetGame();
//                 }
//             }
//         };

//         cells.forEach(cell => cell.onclick = () => handleClick(cell));

//         const resetGame = () => {
//             cells.forEach(cell => cell.innerHTML = ""); // Clear the board
//             i = "x"; // Reset the turn to "x"
//         };

//         document.querySelector("#reset").onclick = resetGame;

let r1 = document.querySelector("#d1");
let r2 = document.querySelector("#d2");
let r3 = document.querySelector("#d3");
let r4 = document.querySelector("#d4");
let r5 = document.querySelector("#d5");
let r6 = document.querySelector("#d6");
let r7 = document.querySelector("#d7");
let r8 = document.querySelector("#d8");
let r9 = document.querySelector("#d9");
let otext = document.querySelector("#otext");
let xtext = document.querySelector("#xtext");
let i = "x";
let xWins = 0;
let oWins = 0;

const cells = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
            return cells[a].innerHTML;
        }
    }

    return null;
};

const handleClick = (cell) => {
    if (cell.innerHTML === "") {
        cell.innerHTML = i === "x" ? "X" : "O";
        i = i === "x" ? "o" : "x";
        const winner = checkWinner();
        if (winner) {
            alert(winner + " wins!");
            if (winner === "O") {
                oWins += 1;
                otext.innerHTML = oWins;
            } else {
                xWins += 1;
                xtext.innerHTML = xWins;
            }
            resetGame();
        }
    }
};

cells.forEach(cell => cell.onclick = () => handleClick(cell));

const resetGame = () => {
    cells.forEach(cell => cell.innerHTML = ""); // Clear the board
    i = "x"; // Reset the turn to "x"
};

document.querySelector("#reset").onclick = resetGame;