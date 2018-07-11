function  game (name,player) {
    this.name=name;
    this.player=player;

}
game.prototype.getGame=function(){
    console.log(this.name,this.player);
}
game.prototype.updateGame=function(gam,pl){
    this.player=pl;
this.name=gam
}

let cricket = new game("cricket",8);
cricket.getGame();
cricket.updateGame("football",13);
cricket.getGame();
