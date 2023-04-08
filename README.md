# GameEngine.js doc

## Basic Slang:-
--experimental means the function may change in future

--auto means the function is automatically run by the Engine

## Basics
your first line should be `game.setCanvas('refer canvas here')` or just `game.setCanvas()` 
function:This will set the canvas as main canvas of game engine

`game.setScreen()` will apply your canvas css property of width and height to canvas(note:this means you could use '%' which couldn't be used before)

for example:-
if you wrote this in your css file
```
canvas{
width:99%;
height:99%;
}
```

and called `game.setScreen()`

then this will automatically set canvas pixel size to 99% of your device width and height otherwise you would have to change your canvas pixel ratio manually depending upon devices which can be annoying

`game.addSrc('{objectname:objectpath}')` will store object name and path so you can refer object by `getObjectByType('objectname')` which will give you the objectpath

for example:-
```
game.addSrc({"grass":"grass.png","dirt":"dirt.png"});
//Now you can get grass image Path by
getObjectType("grass");
```

`game.loadAllImages()` will load all the images(objects) which are given by `game.addSrc()`
This is necessary to type after game.addSrc();

`game.start()` will start the game as in content on canvas will start getting display
Put this in your last line of file

function `start()` will run as soon as `game.start()` runs

function `upgrade()` will run per frame(max:60/second) after `start()`

function `lateUpgrade()` will run after object gets displayed and `upgrade()` is done 

`game.display(obj)` displays(renders) the object
this object can be undisplayed using `game.undisplay(obj)`

`game.undisplay(obj)` will undisplay the object displayed by `game.display(obj)`

`makeObject(objectname,x,y,width,height)` will make and return the object in {} manner (this is necessary for making a object)

`makeObjectArray(makeObject(args),x,y,x2,y2,extra)` will make array of objects starting from (x1,y1) to (x2,y2) and giving each object property (extra) in {JSON} format

`makeMovingObject(objectname,x,y,width,height)` will make and return the entity(for e.g Player) in {} manner(same as makeObject()) 

for example:-
```
var player;
function start(){
//Make entity
player=makeMovingObject("player",100,200,50,60);
//will render player even if it is outside the renderBound
game.display(player);
}
```

`toPixel(%)` will convert css(%,em,etc) to css(px) (useful for canvas as they cannot other units)
for example:-
`This will give pixel size in term of integer by converting 50% of your device size into pixels
var middle=toPixel("50%")`

`drawObject()` display all the objects which are displayed using game.display(obj) --auto

`drawPlayer()` display all the entity which are displayed using game.display(entity) --auto --experimental --Removed

`game.render(GameObject or GameObject Array)` will first connect all the arguments and then render each of GameObject depending upon their position i.e if object is inside the screen canvas render bound, it will get displayed

## Difference between game.display() and game.render();
`game.display()` will render the block regardless if object is in render bound or not but `game.render()` will only render objects present inside renderBound
for example,lets assume canvas width and height to be 1000 and its position at {x:100,y:200}
and lets make object
```
var block=makeObject("grass",150,250,50,60);
var block2=makeObject("grass",150,25000,50,60);
```
This will make first object at x:150,y:250 and make their width and height 50 and 60 respectively and second block at same scale but at y:25000 position

Now there are two difference between display and render

1)game.render can take as many objects as its argument while game.display can only take 1 argument and that have to be object and not Array
e.g 

This will work
```
game.render(Object)
game.render(Object,object,object,object)
game.render(Object Array)
game.render(Object Array,Object Array)
game.display(Object)
```

This will not work
`game.display(Object,Object);`
 
`game.resume()` pause/resume the game

`game.pause()` will pause the game

`game.lookAt(x,y)` will make the screen translate(look) to position x and y

`game.lookRelativeAt(x,y)` will relatively make the screen translate to position x and y

`game.timelost` is ever-changing variable which is a constant for time lost by a device to run previous frame
multiply this with all physics values so they remain aligned even in low-end devices which have low framerate

## Basic Script
```
//Define variables
var backg,adv,player;
//automatically selects canvas
       game.setCanvas();
       var objToAdd={"grass":"../game4/grass.png","dirt":"../game4/dirt.png"};       
       game.addSrc(objToAdd);
       game.fullscreen();
       game.loadAllImages();
       
       //Not necessary
       renderSystem.max.x=1000;
//This is Controller Library provided along with base library,Documentation for this will be available at end of this README.md
//if you hold bottom control button,player will move downwards
       controller.bottom.ontouchstay=function(){
         player.y+=player.speed*game.timelost;
       }
//for top button
       controller.top.ontouchstay=function(){
         player.y-=player.speed*game.timelost;
       }
// for right button
       controller.right.ontouchstay=function(){
         player.x+=player.speed*game.timelost;
       }
//for left button
       controller.left.ontouchstay=function(){
         player.x-=player.speed*game.timelost;
       }
       
       function start(){
       //make player object
     player=makeObject("dirt",900,1500,40,40);
     //define its speed
           player.speed=5;
    //make 2D Grass Object Array 
           backg=makeObjectArray(makeObject("grass",0,0,50,50),1000,1500,5000,5000);

           game.lookAt(1000,500);
           game.scale(1);
           //render the initial scene
           game.render(backg,player);
       }
       
       function upgrade(){
       //update controller, necessary for controller library
           controller.update();
          //continuously make player center of the screen
         //  game.lookAt(player.x-(canvas.width/2),player.y-(canvas.height/2));
           
       }
       //Every second, display framerate and render all the objects again
       setInterval(function(){
         document.getElementById("deb").innerText=60/game.timelost;
         game.render(backg,player);
       },1000);
       game.start();
       ```
       
       
 ## Advanced
`game.raycast(x,y,dir,ignoreList)` will cast a ray starting from position x and y going in Direction dir ,any gameobject caught in ignoreList[] will be ignored,if ray hitted any object,then this will return hitobj and distance between them(approximately) else it will be undefined

`game.scale()` will scale the objects inside the canvas experimental

game.betascale() will scale the objects inside the canvas depending upon the device aspect ratio  --experimental

`game.toDegree(rad)` will return Degree in turn of radian

`game.drawRay(x1,y1,x2,y2)` will draw a ray(Line) starting from (x1,y1) ending at (x2,y2)

`game.addProperty(prop)` will assign the property prop to every object getting created after this moment

`game.collisiontest()` tests each object collision against each entity,if collision is successful,it will call `collision.addDetect()`
--auto

`game.gravitytest()` makes each entity fall by their respective gravity --auto

`this.near=function(ob1,ob2,minx,miny,maxx,maxy)` will check if two object is near specified by arguments

`this.updateImage()` will update the object image

`checkFrame()` will refresh the frames getting display per second 

`onlyDraw()` will be called till game gets resume

#Collision:-
`collision.detect(function)` will call the function whenever any collision will happen between objects and entity

`Collision.collider` is collider while `Collision.collided` is object which got collided

`collision.addDetect()` will update the collision data and call function stored by `collision.detect(function)` --auto

### **Example Script**
```
collision.detect(function(){
      if(collision.collided.name==="grass"){
      console.log("You got collided with grass");
      }
});
```
