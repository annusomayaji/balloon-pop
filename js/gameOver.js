var gameoverState= {
    
preload:function(){
   
},
    
create:function(){
      
        game.add.image(0,0,'sky');
        game.add.text(80,80, 'Game over!You popped '+ clicks+ ' balloons!',{font:'40px Arial',fill:'#800080'});
        game.add.text(80,150, 'Click on the balloon to play again',{font:'30px Arial',fill:'#ff0000'});
        var playbutton =game.add.button(game.world.centerX,300,'purple', this.onClick,this);
        //To place the button in the middle of x-axis
        playbutton.anchor.setTo(0.5); 
},
    
onClick: function(){
		clicks=0;
		game.state.start('play');
}
    
};