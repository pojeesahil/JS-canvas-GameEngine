var backg,adv,player;
       game.setCanvas();
       var objToAdd={"grass":"grass.png","dirt":"dirt.png"};       
       game.addSrc(objToAdd);
       controller.bottom.ontouchstay=function(){
         player.y+=player.speed*game.timelost;
       }
       controller.top.ontouchstay=function(){
         player.y-=player.speed*game.timelost;
       }
       controller.right.ontouchstay=function(){
         player.x+=player.speed*game.timelost;
       }
       controller.left.ontouchstay=function(){
         player.x-=player.speed*game.timelost;
       }
       function start(){
     player=makeObject("dirt",900,1500,40,40);
           player.speed=5;
           backg=makeObjectArray(makeObject("grass",0,0,50,50),1000,1500,5000,5000);
      //     alert(JSON.stringify(backg));
           game.lookAt(1000,500);
           game.scale(1);
           
           game.render(backg,player);
       }
       
       function upgrade(){
           controller.update();
           game.lookAt(player.x-(canvas.width/2),player.y-(canvas.height/2));
           
       }
       setInterval(function(){
         document.getElementById("deb").innerText=60/game.timelost;
         game.render(backg,player);
       },1000);
       game.start();