console.log('testtt')

// document.getElementsByTagName("td").addEventListener("click", console.log("clicked"));

// var randomPlayer = function (options){
//     var options = ['X', 'O']
//     return options[Math.floor(Math.random() * 2)]
// }
document.turn = 'X'

function startMessage(message){
    document.getElementById('Message').innerText = document.turn + '\'s move!';
}

function fillSquare(square){
    if (square.innerText === ''){
    square.innerText = document.turn;
    if (document.turn === 'X'){
        document.turn = 'O';
    }
    else if (document.turn === 'O'){
        document.turn = 'X';
    }
    startMessage();
}
}

function restartGame(){
    location.reload();
}

var boardArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function changeBoardArray(id){
    console.log(id.attributes[1].value);
    var num = id.attributes[1].value;
    for (var i = 0; i < boardArray.length; i++){
        for (var j = 0; j < boardArray[i].length; j++){
            if (boardArray[i][j] === num){
                boardArray[i][j] === document.turn
            }
        }
    }
}

console.log(document.turn)