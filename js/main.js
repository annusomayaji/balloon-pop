var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-game', { preload: preload, create: create, update: update });

function preload(){
   
}

function create(){
   
}

function update(){
    
}

    game.state.add('load',loadState);
    game.state.add('title',titleState);
    game.state.add('play',playState);
    game.state.add('gameover',gameoverState);
    game.state.start('load');

 

