function creatGameboard(n){
  const gameBoard = Array(n*n).fill(0)
  const tilesNeededToWin = n
  return {gameBoard,tilesNeededToWin}
}
function createPlayer(name){
  const tiles = []
  return {name,tiles}
}
function addPlayerTile(gameBoard,player){
  const tile = gameBoard.index
  if(tile.value == 0){
    playerTiles = player.Tiles
    playerTiles.push(index)
    gameBoard.index = player.name
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
    console.log(position)
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

function checkWinHorizontal(player,gameBoard){
  const playerTiles = player.tiles
  const horizontalWinPositions = horizontalWin(gameBoard.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<horizontalWinPositions.length;i++){
    var horizontalWinPosition = horizontalWinPositions[i]
    win = true
    for(let i = 0;i<horizontalWinPosition.length;i++){
      if(!playerTiles.includes(horizontalWinPosition[i])){
        win = false;
      }
    }
  }
  return win
}
function checkWinVertical(player,gameBoard){
  const playerTiles = player.tiles
  const verticalWinPositions = verticalWin(gameBoard.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<verticalWinPositions.length;i++){
    var verticalWinPosition = verticalWinPositions[i]
    win = true
    for(let i = 0;i<verticalWinPosition.length;i++){
      if(!playerTiles.includes(verticalWinPosition[i])){
        win = false;
      }
    }
  }
  return win
}

function checkWinAcross(player,gameBoard){
  const playerTiles = player.tiles
  const acrossWinPositions = acrossWin(gameBoard.tilesNeededToWin)
  var win = false;
  for(let i = 0;i<acrossWinPositions.length;i++){
    var acrossWinPosition = acrossWinPositions[i]
    win = true
    for(let i = 0;i<acrossWinPosition.length;i++){
      if(!playerTiles.includes(acrossWinPosition[i])){
        win = false;
      }
    }
  }
  return win
}
