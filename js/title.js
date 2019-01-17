var titleState={
 
create:function(){
        
        game.add.image(0,0,'sky');
        game.add.text(80,80, 'BALLOON POP!',{font:'50px Arial',fill:'#800080'});
        game.add.text(80,150, 'Click on the balloon to start',{font:'30px Arial',fill:'#800080'});
        var playbutton =game.add.button(game.world.centerX,300,'purple', this.onClick,this);
        //To place the button in the middle of x-axis
        playbutton.anchor.setTo(0.5); 
},
    
   
onClick:function(){
        this.game.state.start('play');
       
}
   
}