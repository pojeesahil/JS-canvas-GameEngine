GameEngine.js doc

--experimental means the function may change in future

--auto means the function is automatically run by the Engine

your first line should be `game.setCanvas('refer canvas here')` or just `game.setCanvas()`

game.fullscreen() will apply your canvas css property of width and height to canvas(note:this means you could use '%' which couldn't be used before)

game.addSrc('{objectname:objectpath}') will store object name and path so you can refer object by `getObjectByType('objectname')` which will give you the objectpath

game.start() will start the game as in content on canvas will start getting display

function start() will run as soon as `game.start()` runs

function upgrade() will run per frame(max:60/second) after start()

function lateUpgrade() will run after object gets displayed and upgrade() is done 

game.display(obj) displays the object until object is undisplayed using game.undisplay(obj) or game gets paused

game.undisplay(obj) will undisplay the object displayed by game.display(obj)

makeObject(objectname,x,y,width,height) will make and return the object in {} manner (this is necessary for making a object)

makeMovingObject(objectname,x,y,width,height) will make and return the entity in {} manner(same as makeObject()) --experimental

toPixel(%) will convert css(%,em,etc) to css(px) (useful for canvas as they cannot use other units)

drawObject() display all the objects which are displayed using game.display(obj) --auto

drawPlayer() display all the entity which are displayed using game.display(entity) --auto --experimental

game.loadAllImages() will load all the images(objects) which are given by game.addSrc()

game.render(GameObject or GameObject Array) will first connect all the arguments and then display each of GameObject depending upon their position i.e if object is inside the screen canvas it will get displayed

game.raycast(x,y,dir,ignoreList) will cast a ray starting from position x and y going in Direction dir ,any gameobject caught in ignoreList will be ignored,if ray hitted any object,then this will return hitobj and distance between them(approximately) else it will be undefined

game.resume() pause/resume the game

game.pause() will pause the game

game.scale() will scale the objects inside the canvas

game.betascale() will scale the objects inside the canvas depending upon the device aspect ratio  --experimental

game.toDegree(rad) will return Degree in turn of radian

game.drawRay(x1,y1,x2,y2) will draw a ray(Line) starting from (x1,y1) ending at (x2,y2)

game.lookAt(x,y) will make the screen translate to position x and y

game.lookRelativeAt(x,y) will relatively make the screen translate to position x and y

game.addProperty(prop) will assign the property prop to every object getting created after this moment

game.collisiontest() tests each object collision against each entity,if collision is successful,it will call collision.addDetect()
--auto

game.gravitytest() makes each entity fall by their respective gravity --auto

this.near=function(ob1,ob2,minx,miny,maxx,maxy) will check if two object is near specified by arguments

this.updateImage() will update the object image

makeObjectArray(makeObject(args),x,y,x2,y2,extra) will make array of objects starting from (x1,y1) to (x2,y2) and giving each object property extra

checkFrame() will refresh the frames getting display per second 

onlyDraw() will be called till game gets resume

Collision:-
collision.detect(function) will call the function whenever any collision will happen between objects and entity

collision.addDetect() will update the collision data and call function stored by collision.detect(function) --auto



