function creatGameboard(n){
  const gameBoard = Array(n*n).fill(0)
  const tilesNeededToWin = n
  return {gameBoard,tilesNeededToWin}
}
function createPlayer(name){
  const tiles = []
  return {name,tiles}
}
function addPlayerTile(tileId,player,board){
  const tile = board.gameBoard[tileId]
  if(tile == 0){
    var playerTiles = player.tiles
    playerTiles.push(parseInt(tileId))
    board.gameBoard[tileId] = player.name
    return true
  }else{
    return false
  }
}
function horizontalWin(tilesNeededToWin){
  var horizontalWinPositions = []
  for(let i = 0;i<tilesNeededToWin; i++){
    var horizontalWinPosition = []
    position = tilesNeededToWin * i
    if(i!=0){
      horizontalWinPosition.push(position)
    }else{
      position = 0
      horizontalWinPosition.push(0)
    }
    var nextPosition = position
    for(let i = 1;i<tilesNeededToWin; i++){
      nextPosition++
      horizontalWinPosition.push(nextPosition)
    }
    horizontalWinPositions.push(horizontalWinPosition)
  }
  return horizontalWinPositions
}
function verticalWin(tilesNeededToWin){
  var verticalWinPositions = []
  for(let i = 0;i<tilesNeededToWin; i++){
    var verticalWinPosition = []
    position =  i
    verticalWinPosition.push(position)
    var nextPosition = position
    for(let i = 1;i<tilesNeededToWin; i++){
      nextPosition = nextPosition+ tilesNeededToWin
      verticalWinPosition.push(nextPosition)
    }
    verticalWinPositions.push(verticalWinPosition)
  }
  return verticalWinPositions
}
function acrossWin(tilesNeededToWin){
  var leftAcrossStartPosition = 0
  var rightAcrossStartPosition = tilesNeededToWin -1
  var verticalWinPositionLeft = [leftAcrossStartPosition]
  var nextPosition = leftAcrossStartPosition 
  for(let i = 1;i<tilesNeededToWin; i++){
    nextPosition = nextPosition + (tilesNeededToWin +1) 
    verticalWinPositionLeft.push(nextPosition)
  }
  var verticalWinPositionRight = [rightAcrossStartPosition]
  var nextPosition = rightAcrossStartPosition
  for(let i = 1;i<tilesNeededToWin; i++){
    nextPosition = nextPosition + (tilesNeededToWin -1)
    verticalWinPositionRight.push(nextPosition)
  }
  var acrossWinPositions = [verticalWinPositionLeft,verticalWinPositionRight]
  return acrossWinPositions
}

function checkWinHorizontal(player,board){
  const playerTiles = player.tiles
  const horizontalWinPositions = horizontalWin(board.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<horizontalWinPositions.length;i++){
    var horizontalWinPosition = horizontalWinPositions[i]
    win = true
    for(let i = 0;i<horizontalWinPosition.length;i++){
      if(!playerTiles.includes(horizontalWinPosition[i])){
        win = false;
      }
    }
    if(win){
      return win
    }
  }
  return win
}

function checkWinVertical(player,board){
  const playerTiles = player.tiles
  const verticalWinPositions = verticalWin(board.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<verticalWinPositions.length;i++){
 
    var verticalWinPosition = verticalWinPositions[i]
    win = true
    for(let i = 0;i<verticalWinPosition.length;i++){
      if(!playerTiles.includes(verticalWinPosition[i])){
        win = false;
      }
    }
    if(win){
      return win
    }
  }
  return win
}

function checkWinAcross(player,board){
  const playerTiles = player.tiles
  const acrossWinPositions = acrossWin(board.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<acrossWinPositions.length;i++){
    var acrossWinPosition = acrossWinPositions[i]
    win = true
    for(let i = 0;i<acrossWinPosition.length;i++){
      if(!playerTiles.includes(acrossWinPosition[i])){
        win = false;
      }
    }
    if(win){
      return win
    }
  }
  return win
}

function checkWin(player,board){
  if(checkWinHorizontal(player,board)){
    return true
  }
  if(checkWinVertical(player,board)){
    return true
  }
  if(checkWinAcross(player,board)){
    return true
  }
  return false
}

function createGame(){
  const board = creatGameboard(3)
  const player1 = createPlayer("player1")
  const player2 = createPlayer("player2")
  return {board,player1,player2}
}

var game = createGame()

function clickTile(id){
  tile = document.getElementById(id)
  if(!tile.classList.contains("clicked")){
    tile.classList.add("clicked");
    player = document.getElementById("currentPlayer")
    if(player.innerHTML == "Player 1"){
      var tileSelected = addPlayerTile(id,game.player1,game.board)
      if(tileSelected){
        tile.classList.add("player1")
        if(checkWin(game.player1,game.board)){
            alert("player 1 won")
        }
        player.innerHTML = "Player 2"
      }
    }else{
      var tileSelected = addPlayerTile(id,game.player2,game.board)
      if(tileSelected){
        tile.classList.add("player2")
        if(checkWin(game.player2,game.board)){
          alert("player 2 won")
        }
        player.innerHTML = "Player 1"
      }
    }
  }
}