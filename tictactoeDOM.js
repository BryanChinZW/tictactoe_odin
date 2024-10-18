function clickTile(id){
  tile = document.getElementById(id)
  if(!tile.classList.contains("clicked")){
    tile.classList.add("clicked");
    player = document.getElementById("currentPlayer")
    if(player.innerHTML == "Player 1"){
      console.log("ltest")
      player.innerHTML = "Player 2"
      tile.classList.add("player1")
    }else{
      player.innerHTML = "Player 1"
      tile.classList.add("player2")
    }
  }
}
