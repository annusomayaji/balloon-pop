
var picture;
var clicks=0;

var playState={

preload:function(){
        
},
    
create:function(){
       game.add.image(0,0,'sky');
       this.backgroundMusic=game.sound.add('backgroundMusic');
       this.backgroundMusic.volume=.3;
       this.backgroundMusic.play();
       this.counter=0;
       //Enable arcade physics
       game.physics.startSystem(Phaser.Physics.ARCADE);
      (game.time.events.repeat(Phaser.Timer.SECOND*2,21, this.createBalloon,this));
},
   
createBalloon:function(){
        
        this.counter++;
        var colours = ['blueA','pinkB', 'redC','greenD', 'blueE', 'yellowF', 'blueG','purpleH','greenI','blueJ','pinkK','redL','yellowM','yellowN','purpleO','purpleP','greenQ','blueR','pinkS','redT', 'purpleU','yellowV', 'greenW', 'purpleX','greenY', 'blueZ'];
        var randomNumber=Math.floor(Math.random()*colours.length);
        var randomX=game.world.randomX;
        if (randomX>game.world.width-100){ //to ensure balloons don't go outside the game window
            //console.log('too big');
            randomX=randomX-100;
        }
        var balloon = game.add.sprite(randomX, 0, colours[randomNumber]);
        // console.log(balloon.key);
        game.physics.enable(balloon,Phaser.Physics.ARCADE);
        //Set gravity
        balloon.body.gravity.y = 30;
        balloon.inputEnabled=true;
        balloon.events.onInputDown.add(this.balloonClick,this);
        if(this.counter>20){
           this.backgroundMusic.stop();
           this.game.state.start('gameover',clicks);
        }
         
},
    
balloonClick:function(balloon,pointer){
        
        balloon.destroy();
        //console.log(balloon.key);
        if(balloon.key=='blueA'){
        //console.log('A balloon')
            game.sound.add('a').play();
            picture=this.add.image(pointer.x,pointer.y,'A');
        }
        if (balloon.key=='pinkB')
        {
            //console.log('B balloon')
            game.sound.add('b').play();
            picture=this.add.image(pointer.x,pointer.y,'B');
        }
        if(balloon.key=='redC')
        {
            game.sound.add('c').play();  
            picture=this.add.image(pointer.x,pointer.y,'C');
        } 
        if(balloon.key=='greenD'){
            game.sound.add('d').play(); 
            picture=this.add.image(pointer.x,pointer.y,'D');
        }
        if(balloon.key=='blueE'){
            game.sound.add('e').play();  
            picture=this.add.image(pointer.x,pointer.y,'E');
        }
        if(balloon.key=='yellowF'){
            game.sound.add('f').play();  
            picture=this.add.image(pointer.x,pointer.y,'F');
        }
        if(balloon.key=='blueG'){
            game.sound.add('g').play();    
            picture=this.add.image(pointer.x,pointer.y,'G');
        }
        if(balloon.key=='purpleH'){
            game.sound.add('h').play(); 
            picture=this.add.image(pointer.x,pointer.y,'H');
        }
        if(balloon.key=='greenI'){
            game.sound.add('i').play(); 
            picture=this.add.image(pointer.x,pointer.y,'I');
        }
        if(balloon.key=='blueJ'){
            game.sound.add('j').play(); 
            picture=this.add.image(pointer.x,pointer.y,'J');
        }
        if(balloon.key=='pinkK'){
            game.sound.add('k').play(); 
            picture=this.add.image(pointer.x,pointer.y,'K');
        }
        if(balloon.key=='redL'){
            game.sound.add('l').play(); 
            picture=this.add.image(pointer.x,pointer.y,'L');
        }
        if(balloon.key=='yellowM'){
            game.sound.add('m').play(); 
            picture=this.add.image(pointer.x,pointer.y,'M');
        }
        if(balloon.key=='yellowN'){
            game.sound.add('n').play(); 
            picture=this.add.image(pointer.x,pointer.y,'N');
        }
        if(balloon.key=='purpleO'){
            game.sound.add('o').play(); 
            picture=this.add.image(pointer.x,pointer.y,'O');
        }
        if(balloon.key=='purpleP'){
            game.sound.add('p').play(); 
            picture=this.add.image(pointer.x,pointer.y,'P');
        }
        if(balloon.key=='greenQ'){
            game.sound.add('q').play(); 
            picture=this.add.image(pointer.x,pointer.y,'Q');
        }
        if(balloon.key=='blueR'){
            game.sound.add('r').play(); 
            picture=this.add.image(pointer.x,pointer.y,'R');
        }
        if(balloon.key=='pinkS'){
            game.sound.add('s').play(); 
            picture=this.add.image(pointer.x,pointer.y,'S');
        }
        if(balloon.key=='redT'){
            game.sound.add('t').play(); 
            picture=this.add.image(pointer.x,pointer.y,'T');
        }
        if(balloon.key=='purpleU'){
            game.sound.add('u').play(); 
            picture=this.add.image(pointer.x,pointer.y,'U');
        }
        if(balloon.key=='yellowV'){
            game.sound.add('v').play(); 
            picture=this.add.image(pointer.x,pointer.y,'V');
        }
        if(balloon.key=='greenW'){
            game.sound.add('w').play(); 
            picture=this.add.image(pointer.x,pointer.y,'W');
        }
        if(balloon.key=='purpleX'){
            game.sound.add('x').play(); 
            picture=this.add.image(pointer.x,pointer.y,'X');
        }
        if(balloon.key=='greenY'){
            game.sound.add('y').play(); 
            picture=this.add.image(pointer.x,pointer.y,'Y');
        }
        if(balloon.key=='blueZ'){
            game.sound.add('z').play(); 
            picture=this.add.image(pointer.x,pointer.y,'Z');
        }

game.time.events.add(Phaser.Timer.SECOND * .5, this.pictureDisappear, this);
         
return clicks++;
         
},
   
pictureDisappear:function(){
   picture.destroy(); 
},
  
}

function update() {
    
   
}

