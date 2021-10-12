class GameOver {
    constructor(){
        this.mensaje = createElement('h1');
        this.buttonReset = createButton('Reset');
    }
//{}
    display(){
        this.mensaje.html("Lugar: "+player.rank);
        this.mensaje.position(displayWidth/2.3,diaplayHeight/3-200);

        this.buttonReset.position(displayWidth-100, 20);
      
      this.buttonReset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
  
        Player.updateCarsAtEnd(0);


      })
    }
}