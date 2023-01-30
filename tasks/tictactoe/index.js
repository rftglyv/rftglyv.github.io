let tiles = document.getElementsByClassName("board")[0].children,
    modal = document.getElementsByClassName("modal")[0],
    message = document.getElementsByClassName("message")[0],
    resetBtn = document.getElementsByClassName("reset-btn")[0],
    indicator = document.getElementsByClassName("player")[0],
    turn = 0,
    player = "",
    moves = [];
    
indicator.textContent = "O oynayır";

function markBoard(e) {
    try{
        if (turn == 1 || turn % 2 !== 0) {
            player = "X";
        } else {
            player = "O";
        }
    
        moves.push({ tile: e.target.textContent, player: player });
    
        for (let i = 0; i < tiles.length; i++) {
            if (
                e.target.textContent == tiles[i].textContent &&
                tiles[i].textContent !== "X" &&
                tiles[i].textContent !== "O"
            ) {
                tiles[i].textContent = player;
                tiles[i].classList.add("new-tile");
                turn++;
    
                if (player == "X") {
                    indicator.textContent = "O oynayır";
                } else {
                    indicator.textContent = "X oynayır";
                }
            }
        }
    
        if (turn >= 3) {
            determineWinner();
        }
    }catch(error){
        console.log("Something went wrong!",err);
    }
    
}

function determineWinner() {
    let playerMoves = [],
        playerTiles = [],
        playerWon = false;

    playerMoves.push(moves.filter(mark => mark.player == player));

    try{
        for (let i = 0; i < playerMoves[0].length; i++) {
            playerTiles.push(playerMoves[0][i].tile);
        }
    
        if (
            playerTiles.includes("1") &&
            playerTiles.includes("2") &&
            playerTiles.includes("3")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("4") &&
            playerTiles.includes("5") &&
            playerTiles.includes("6")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("7") &&
            playerTiles.includes("8") &&
            playerTiles.includes("9")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("1") &&
            playerTiles.includes("5") &&
            playerTiles.includes("9")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("3") &&
            playerTiles.includes("5") &&
            playerTiles.includes("7")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("1") &&
            playerTiles.includes("4") &&
            playerTiles.includes("7")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("2") &&
            playerTiles.includes("5") &&
            playerTiles.includes("8")
        ) {
            playerWon = true;
        } else if (
            playerTiles.includes("3") &&
            playerTiles.includes("6") &&
            playerTiles.includes("9")
        ) {
            playerWon = true;
        } else {
            playerWon = false;
        }
    }catch(error){
        console.log("Error while determining winner!",err);
    }

    if (playerWon == true) {
        if (player == "O"){
            message.innerHTML = `<i class="fa-solid fa-o"></i> qazandı!`;
        }else{
            message.innerHTML = `<i class="fa-solid fa-x"></i> qazandı!`;
        }
        modal.style.opacity = 1;
        modal.style.display = "flex";
        modal.style.zIndex = 99;
        indicator.textContent = "";         
    } else if (turn == 9) {
        message.textContent = "Bərabərə";
        modal.style.opacity = 1;
        modal.style.display = "flex";
        modal.style.zIndex = 99;
        indicator.textContent = "";
    }
}

try {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", markBoard);
    }
} catch (error) {
    console.log("Error! Can't mark board",err);
}

function resetBoard() {
    try {
        moves = [];
        turn = 0;
        indicator.textContent = "O oynayır";

        modal.style.opacity = 0;
        modal.style.transition = "opacity 1s ease";
        modal.style.display = "none";
 
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].classList.remove("new-tile");
            tiles[i].classList.add("tile");
            tiles[i].style.transition = "none";
            tiles[i].textContent = [i + 1];
        }
    } catch (error) {
        console.log("Error! Can't reset board",error);
    }
}

resetBtn.addEventListener("click", resetBoard);