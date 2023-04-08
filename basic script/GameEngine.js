var obj=[];
var objx=[];
var objy=[];
  var extraprop=[];
  var extrapropv=[];
  var extrapropf=[];
  var entity=[];
  var player;
  var cwater=0;
  var objsrc={

  };
  var tn=0;
  var tp=0;
  var objyc=0;
  var entyc=0;
  //.sort(function(a, b){return a - b});
  var blocks=new function(){
         this.tile=[[]];
         var currentTilex=0;
         var currentTiley=0;
         this.condit=function(){
           return cond;
         };
         var cond;
         this.addCondition=function(tcond){
           cond=tcond;
         }
       /* this.raycast=function(tx,ty,tx2,ty2){
          var blockNotDetected=true;
          var targetX,targetDX=0;
          var targetY,targetDY=0;
          var currentX=tx;
          var currentY=ty;
           if(arguments.length===4){
             targetX=tx2;
             targetY=ty2;
           }
           targetDX=targetX-currentX;
           targetDY=targetY-currentY;
           var targetD=Maths.abs(targetDX)+Maths.abs(targetDY);
           var dxa=targetDX/targetD;
           var dya=targetDY/targetD;
           while(blockNotDetected){
             targetDX=Math.round(targetX-currentX);
           targetDY=Math.round(targetY-currentY);
           alert()
             if(Maths.round(targetDX)>0){
               currentX+=dxa;
             }
             if(Maths.round(targetDY)>0){
               currentY+=dya;
             }
             if(Maths.round(targetDX))<0){
               currentX-=dxa;
             }
             if(Maths.round(targetDY)<0){
               currentY-=dya;
             }
             if(Maths.round(targetDX)===0&&Maths.round(targetDY)===0){
               
             }
           }
         }*/
         this.generate=function(){
           for(var tim=0;tim<blocks.tile.length;tim++){
             for(var timed=0;timed<blocks.tile[tim].length;timed++){
               cond.setTile(timed,tim);
               cond.condition();
             }
           }
          // cond[0].condition();
         }
         
       }
       //TODO:showing err because blocks was changed from pre variable to function
       var condition=function(tcond){
         this.condition=tcond;
         function getCondition(){
           this.condition();
         }
         var tilex=0;
         var tiley=0;
         function callC(){
           alert(tilex+" "+tiley);
           this.condition();
         }
         this.setTile=function(tx,ty){
           tilex=tx;
           tiley=ty;
         }
         this.tile={
           updateState:function(tx,ty){
             tilex=tx;
             tiley=ty;
         blocks.condit().condition()
           },
           get x(){
             return tilex;
           },
           get y(){
             return tiley;
           },
           get main(){
            return blocks.tile[tiley][tilex];
           },
           position:function(tx,ty){
             
  if(tx<blocks.tile[tiley].length-1&&tx>0&&ty<blocks.tile.length-1&&ty>0){
    //alert((blocks.tile.length-3)+" "+ty);
    return blocks.tile[ty][tx];
  }else{
    return false;
  }
             
           },
           relative:function(tx,ty){
             tx+=tilex;
             ty+=tiley;
  if(tx<blocks.tile[tiley].length-1&&tx>0&&ty<blocks.tile.length-1&&ty>0){
    //alert((blocks.tile.length-3)+" "+ty);
    return blocks.tile[ty][tx];
  }else{
    return false;
  }
             
           },
           get right(){
if(tilex<blocks.tile[tiley].length-1){
           return blocks.tile[tiley][tilex+1];
}else{
  return false;
}
           },
           get left(){
if(tilex>0){
          return blocks.tile[tiley][tilex-1];
}else{
  return false;
}
           },
           get bottom(){
if(tiley<blocks.tile.length-1){
          return blocks.tile[tiley+1][tilex];
}else{
  return false;
}
           },
          get top(){
if(tiley>0){
          return blocks.tile[tiley-1][tilex];
}else{
  return false;
}
           }
         };
         
       }
       
var collision=new function(){
  
  this.collider="";
  this.collided="";
  var functi=function(){
    
    if(collision.collided.name==="ladder"&&isInteract===true){
        player.top-=5.5;
     //  alert("haha");
         }
    return;};
  this.detect=function(funct){
    functi=funct;
  }
  this.addDetect=function(col,coli){
    this.collided=col;
    this.collider=coli;
  
    functi();
    
  }
}
var game=new function(){
  this.sprite={};
  this.tile=[[]];
  this.scene=[];
  this.currentSystem="life";
  this.currentScene=0;
  this.isPaused=false;
  this.timelost=1;
  this.offset={
    x:0,
    y:0
  }
  this.uptime=0;
  this.canvas=null;
  this.useSystem=function(arg){
    if(arg==="tile"||arg==="tile-based"){
      this.currentSystem="tile";
    }
    if(arg==="life"||arg==="lifelike"){
      this.currentSystem="life";
    }
  }
  this.pause=function(){
    this.isPaused=true;
  }
  this.resume=function(){
    if(this.isPaused===true){
    this.isPaused=false;
    }else{
      this.isPaused=true;
    }
  }
  this.zoom=1;
  this.scale=function(tscale){
    ctx.scale(tscale,tscale);
    game.zoom=tscale;
  }
  this.betascale=function(tscale){
    var tpscale1=(canvas.width/screen.width)*tscale;
    var tpscale2=(canvas.height/screen.height)*tscale;
    ctx.scale(tpscale1,tpscale2);
    game.zoom=tscale;
  }
  this.renderedObject=function(){
    return obj;
  }
  this.setCanvas=function(canv){
    if(canv==undefined){
      canv=document.getElementsByTagName("canvas")[0];
      window["canvas"]=canv;
    }else{
    window["canvas"]=canv;
    }
    this.canvas=canvas;
    window["ctx"]=canv.getContext("2d");
    
  }
  this.toDegree=function(tdeg){
    return tdeg*(Math.PI/180);
  }
  this.raycast=function(tx,ty,td,ignoreList){
    if(td%90===0){
      td-=0.1;
    }
    var dirx=Math.cos(game.toDegree(td));
    var diry=Math.sin(game.toDegree(td));
    
    var rx=tx;
    var ry=ty;
    var tobj=[];
    var tobj2=[];
   for(var timed=0;timed<obj.length;timed++){
     if(dirx>=0&&obj[timed].x>=rx&&diry>=0&&obj[timed].y>=ry){
     //  alert(1);
       tobj.push(obj[timed]);
     }
     if(diry>0&&obj[timed].y>=ry&&dirx<0&&obj[timed].x<rx){
     //  alert(2+" "+timed);
       tobj.push(obj[timed]);
     }
     if(dirx<0&&obj[timed].x<rx&&diry<0&&obj[timed].y<=ry){
       tobj.push(obj[timed]);
     }
     if(diry<=0&&obj[timed].y<=ry&&dirx>=0&&obj[timed].x>=rx){
       tobj.push(obj[timed]);
     }
     
   }
   var tindex=false;
  for(var timed=0;timed<tobj.length;timed++){
    var rax=Math.abs(tobj[timed].x-rx);
    var ray=Math.abs(tobj[timed].y-ry);
    if(dirx<0){
      rax-=tobj[timed].width;
    }
    
   /* if(diry<0&&dirx>0){
      ray-=tobj[timed].height;
    }*/
    if(rax===0){
      rax=1;
    }
    if(ray===0){
      ray=1;
    }
  // alert("rx: "+rx+"  objp: "+tobj[timed].x+"  rax "+rax+"  timed: "+timed);
    
    //find the quotinct then divide both number by it to check if the ray hit the block
    try{
      
    var quotx=~~Math.abs(rax/Math.abs(dirx));
    var remx=rax%Math.abs(dirx);
    var remy=ray%Math.abs(diry);
    var quoty=~~Math.abs(ray/Math.abs(diry));
    function condx(){
      if(0>diry){
      ray=Math.abs(tobj[timed].y-ry);
      ray-=tobj[timed].height;
      quoty=~~Math.abs(ray/Math.abs(diry));
      quotx=~~Math.abs(rax/Math.abs(dirx));
      }
      var tsol=quotx;
      
        tsol+=tobj[timed].width/Math.abs(dirx);
      
      
      
    //  alert(tobj[timed].width/(dirx));
      if(tsol>quoty){
        return true;
      }else{
        return false
      }
    }
    function condy(){
      if(diry<0){
      ray=Math.abs(tobj[timed].y-ry);
      ray+=tobj[timed].height;
      quoty=~~Math.abs(ray/Math.abs(diry));
      quotx=~~Math.abs(rax/Math.abs(dirx));
      }
      var tsol=quoty+tobj[timed].height/diry;
      var mintsol=0;
      
     if(tsol>quotx-mintsol){
       return true;
     }else{
       return false
     }
    }
    if(condx()&&condy()){

      tobj2.push(tobj[timed]);
    }
    }catch(err){
      alert("raycast:"+err);
    }
    //TODO:in negative,width should extend opposite side
//alert("value: "+rax+"  divisor: "+dirx+"  quotx: "+quotx+"--  valuey: "+ray+"  divisor: "+diry+"  quoty: "+quoty+" condx: "+condx()+"  condy: "+condy());
  }

    game.drawRay(tx,ty,tx+(dirx*1500),ty+(diry*1500));
    
  if(tobj2.length>0){
  var closetObject=tobj2[0];
  if(ignoreList===tobj2[0]){
    if(tobj2.length>1){
    closetObject=tobj2[1];
    }else{
     //, alert("object ray hit is in ignoreList and that object is the only object ray will ever hit");
      return undefined;
    }
  }
  
for(var timed=1;timed<tobj2.length;timed++){
  if(ignoreList===tobj2[timed]){
    continue;
  }
  if(closetObject.x-tobj2[timed].x>=0&&dirx>0){
    closetObject=tobj2[timed];
  }
  //also add factor for y co-ordinate or else blocks having samw x value will have difficulty
  if(closetObject.x-tobj2[timed].x<=0&&dirx<0&&diry<0){
    closetObject=tobj2[timed];
  }
  
  /*if(closetObject.x+tobj2[timed].x<0&&dirx<0){
    closetObject=tobj2[timed];
  }*/
}
   return {"hit":closetObject,
   "distance":Math.abs(closetObject.x-rx)+Math.abs(closetObject.y-ry)
   };
  }else{
    return undefined;
  }
  tobj=[];
  tobj2=[];
  }
  this.drawRay=function(tx1,ty1,tx2,ty2){
    ctx.beginPath();
    ctx.moveTo(tx1,ty1);
    ctx.lineTo(tx2,ty2);
    ctx.stroke();
  }
  this.start=function(){
    startEngine();
  }
  this.addSrc=function(tsrc){

   if(typeof tsrc==="object"){
    objsrc=Object.assign(objsrc,tsrc);
    game.loadAllImages();
    }
  }
  this.display=function(tsrc){
    obj[objyc]=tsrc;
    objyc++;
  }
  this.undisplay=function(tsrc){
    var ind=obj.indexOf(tsrc);
    if(ind>-1){
      obj.splice(ind,1);
    }
    objyc--;
  }
  this.loadAllImages=function(){
    for(const tvar in objsrc){
     var tempi=objsrc[tvar];
     objsrc[tvar]={};
     objsrc[tvar].image=new Image();
     objsrc[tvar].image.src=tempi;
     objsrc[tvar]["src"]=tempi;
    }
  }
  this.fullscreen=function(){
    
     var tcan=window.getComputedStyle(canvas,null);
     var tcanw=tcan.getPropertyValue('width');
     var tcanh=tcan.getPropertyValue('height');
     
      canvas.width=parseInt(tcanw);
      canvas.height=parseInt(tcanh);
      console.log(canvas.width);
      renderSystem.max.x=canvas.width;
      renderSystem.max.y=canvas.height;
    }
    this.getImage=function(){
      
    }
    this.lookRelativeAt=function(x,y){
      ctx.translate(x*game.zoom,y*game.zoom);
    this.offset.x-=x*game.zoom;
    this.offset.y-=y*game.zoom;
    }
  this.lookAt=function(x,y){
    ctx.translate(this.offset.x-(x),this.offset.y-(y));
    this.offset.x=x;
    this.offset.y=y;
   // alert(game.zoom);
  }
  this.addProperty=function(propname,defaultvalue,propfunc){
    extraprop.push(propname);
    extrapropv.push(defaultvalue);
    if(propfunc==undefined){
    extrapropf.push(false);
    }else{
      extrapropf.push(propfunc);
    }
  }
  this.render=function(){
    try{
      
      var tobj=[];
     obj.length=0;
     objyc=0;
     entity.length=0;
     entity=[];
     entyc=0;
     if(game.currentSystem==="life"){
   for(var tim=0;tim<arguments.length;tim++){
     if(arguments[tim].length===undefined){
       arguments[tim]=[arguments[tim]];
       //alert(tim);
     }
    tobj=[].concat(...arguments[tim]);
   
     var objr=tobj.filter(filt);
     for(var timed=0;timed<objr.length;timed++){
       game.display(objr[timed]);
       if(objr[timed].otypeof==="entity"){
         entity[entyc]=obj.length-1;
         entyc++;
       }
     }
     function filt(tsrc){
       return tsrc.x>game.offset.x-renderSystem.min.x&&tsrc.x<game.offset.x+renderSystem.max.x&&tsrc.y>game.offset.y-renderSystem.min.y&&tsrc.y<game.offset.y+renderSystem.max.y;
       
       //0>30-500&&0<30+500&&400>500-300&&400<500+300
     }
   }
    }else{
      
    }
    }catch(err){
      alert("RenderError:"+err.message);
    }
  game.onRender();
  }
  this.onRender=function(){
    
  }
  this.firstrender=function(){
    objx.length=0;
    objy.length=0;
    objx+=obj;
    objy+=obj;
    objx=objx.sort(function(a,b){return a.x-b.x});
   // document.write(JSON.stringify(objx));
  }
  this.betarender=function(){
    try{
      var tobj=[];
     obj.length=0;
     objyc=0;
     entity.length=0;
     entity=[];
     entyc=0;
   for(var tim=0;tim<arguments.length;tim++){
     if(arguments[tim].length===undefined){
       arguments[tim]=[arguments[tim]];
     }
    tobj=[].concat(...arguments[tim]);
   
     var objr=tobj.filter(filt);
     for(var timed=0;timed<objr.length;timed++){
       game.display(objr[timed]);
       if(objr[timed].otypeof==="entity"){
         entity[entyc]=obj.length-1;
         entyc++;
       }
     }
     function filt(tsrc){
       return tsrc.x>game.offset.x-renderSystem.min.x&&tsrc.x<game.offset.x+renderSystem.max.x&&tsrc.y>game.offset.y-renderSystem.min.y&&tsrc.y<game.offset.y+renderSystem.max.y;
     //  500>200-5&&500<200+5
       //0>30-500&&0<30+500&&400>500-300&&400<500+300
     }
   }
     
    }catch(err){
     // document.write(err.message);
    }
  
  }
  this.collisiontest=function(){
    
    try{
    var objl=obj.length;
    var i,j;
    var isColliding=false;
    for(j=0;j<entyc;j++){
      for(i=0;i<objl;i++){
        //document.getElementById("debu").innerText=i+"  "+entity[0];
        if(entity[j]===i||obj[entity[j]].collision===false||obj[i].collision===false&&obj[i].collisionDetect===false){
       //   alert(entity[i]+" "+i);
          continue;
        }
        
       // alert(obj[i].x);
        if(obj[entity[j]].x<obj[i].x+obj[i].width&&obj[i].x<obj[entity[j]].x+obj[entity[j]].width&&obj[entity[j]].y<obj[i].y+obj[i].height&&obj[i].y<obj[entity[j]].y+obj[entity[j]].height){
          isColliding=true;
          collision.addDetect(obj[i],obj[entity[j]]);
        //  alert(i+"  "+j);
          if(obj[i].collisionDetect===true){
          isColliding=false;
          break;
        }
          break;
        }
      }
    }
    
  return isColliding;
    }catch(err){
      alert("collisionErr:"+err.message);
    }
  }
  this.gravitytest=function(){
    for(var timed=0;timed<entyc;timed++){
  //    alert(JSON.stringify(obj[0]));
      obj[entity[timed]].y+=obj[entity[timed]].gravity;
    }
  }
  this.near=function(ob1,ob2,minx,miny,maxx,maxy){
    if(ob2.x<ob1.x+minx&&ob2.x+maxx>ob1.x&&ob1.y<miny+ob2.y&&ob2.y+maxy>ob1.y){
     // 500+200>500&&500+200>500
      return true;
    }else{
      return false;
    }
  }
  this.updateImage=function(tobj,tsrc){
    tobj.type=new Image();
    tobj.type.src=tsrc;
    tobj.src=tsrc;
  }
}
var renderSystem={
  min:{
    x:0,
    y:6
  },
  max:{
    x:2000,
    y:6
  }
}

  
  function makeBlob(tobj,tx,ty,tw,th,ext){
    var tobj=makeObject(tobj.name,tx,ty,tw,th);
    
    tobj.otypeof="blob";
    tobj.widthrepeat=tw/tobj.width;
    tobj.heightrepeat=th/tobj.height;
    if(typeof ext!==undefined){
        for(titem in ext){
          tobj[titem]=ext[titem];
        }
    }
    return tobj;
  }
  
  function makeObjectArray(tobj,tx,ty,tex,tey,ext){
    var txr=(tex-tx)/tobj.width+1;
    var tyr=(tey-ty)/tobj.height+1;
    var tarr=[];
  for(var timed=0;timed<tyr;timed++){
    tarr.push([]);
    for(var tim=0;tim<txr;tim++){
      tarr[timed].push(makeObject(tobj.name,tx+(tim*tobj.width),ty+(timed*tobj.height),tobj.width,tobj.height));
      if(typeof ext!==undefined){
        for(titem in ext){
          tarr[timed][tim][titem]=ext[titem];
        }
      }
    }
  }
  return tarr;
  }
  function makeSprite(){
    game.sprite[arguments[0]]={"name":arguments[0],"width":arguments[1],"height":arguments[2],
    "type":getObjectByType(arguments[0]),
    "src":getObjectSrcByType(arguments[0])};
  }
  function makeSpriteObject(){
    var temperobj={
    "left":arguments[1],
    set x(amount){
      var tdiff=this.left-amount;
      this.left=amount;
      if(game.collisiontest()===true){
        this.left+=tdiff;
      }
    },
    get x(){
      return this.left
    },
    "top":arguments[2],
    set y(amount){
      var tdiff=this.top-amount;
      this.top=amount;
      if(game.collisiontest()===true){
        this.top+=tdiff;
      }
    },
    get y(){
      return this.top
    },
    "width":game.sprite[arguments[0]].width,
    "height":game.sprite[arguments[0]].height,
    "name":game.sprite[arguments[0]].name,
    "type":game.sprite[arguments[0]].type,
    "src":game.sprite[arguments[0]].src,
    "otypeof":arguments[3],
    "collision":true,
    "collisionDetect":false,
    "rotation":0,
    "onConstruct":false
  };
  //temperobj.type.crossOrigin="anonymous";
  for(var timed=0;timed<extraprop.length;timed++){
    var tempok=extraprop[timed];
    var tempov=extrapropv[timed];
    Object.assign(temperobj,{[tempok]:[tempov][0]});
    if(extrapropf[timed]!==false&&typeof extrapropf[timed]==="function"){
      extrapropf[timed](temperobj);
    }
  }
  return temperobj;
  }
  function makeObject(){
   // alert(makeObject.arguments[0]);
   var temperobj={
    "left":arguments[1],
    set x(amount){
      var tdiff=this.left-amount;
      this.left=amount;
      if(game.collisiontest()===true){
        this.left+=tdiff;
      }
    },
    get x(){
      return this.left
    },
    "top":arguments[2],
    set y(amount){
      var tdiff=this.top-amount;
      this.top=amount;
      if(game.collisiontest()===true){
        this.top+=tdiff;
      }
    },
    get y(){
      return this.top
    },
    "name":arguments[0],
    "width":arguments[3],
    "height":arguments[4],
    "type":getObjectByType(arguments[0]),
    "src":getObjectSrcByType(arguments[0]),
    "otypeof":arguments[5],
    "collision":true,
    "collisionDetect":false,
    "rotation":0,
    "onConstruct":false
  };
  //temperobj.type.crossOrigin="anonymous";
  for(var timed=0;timed<extraprop.length;timed++){
    var tempok=extraprop[timed];
    var tempov=extrapropv[timed];
    Object.assign(temperobj,{[tempok]:[tempov][0]});
    if(extrapropf[timed]!==false&&typeof extrapropf[timed]==="function"){
      extrapropf[timed](temperobj);
    }
  }
  return temperobj;
  }
  function makeMovingObject(){
    var tobj=makeObject(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],"entity");
    Object.assign(tobj,{"gravity":0});
    return tobj;
  }
    function getObjectByType(objtype){
      for(const tvar in objsrc){
        if(tvar===objtype){
          return objsrc[tvar].image;
        }
      }
    }
    function getObjectSrcByType(objtype){
      for(const tvar in objsrc){
        if(tvar===objtype){
          return objsrc[tvar].src;
        }
      }
    }
    function toPixel(pix){
      document.getElementById("pix").style.width=pix;
      var tpixel=window.getComputedStyle(document.getElementById("pix"),null);
      return tpixel.getPropertyValue('width');
    }
    
    function startEngine(){
      var tempdiv=document.createElement("div");
      tempdiv.id="pix";
      document.body.appendChild(tempdiv);
      game.fullscreen();
      renderSystem.max.x=1000;
       
      start();
      
      draw();
      /*TODO:uncomment it after fixing render algorithm
      setInterval(function(){
        render();
      },10000);*/
      
    }
    
    function drawObject(){
      try{
      for(var timed=0;timed<objyc;timed++){
        ctx.beginPath();
        ctx.save();
        //try removing this to see if it still works
        if(typeof obj[timed]==="object"){
        //alert(obj[timed].type);
        
       if(obj[timed].rotation!==0){
         ctx.save();
         ctx.translate(obj[timed].x+(obj[timed].width/2),obj[timed].y+(obj[timed].height/2));
         ctx.rotate(obj[timed].rotation * Math.PI / 180);
         ctx.translate((obj[timed].x+(obj[timed].width/2))*-1,(obj[timed].y+(obj[timed].height/2))*-1);
       }
     //  alert(typeof obj[timed].image);
        
        
          
        
        if(typeof obj[timed].onConstruct==="function"){
        obj[timed].onConstruct();
        }else{
          ctx.drawImage(obj[timed].type,obj[timed].x,obj[timed].y,obj[timed].width,obj[timed].height);
        }

        
        ctx.restore();
      }
      }
      }catch(err){
        alert("DrawObject:"+err);
      }
    }
    function drawEntity(){
      for(var timed=0;timed<entyc;timed++){
        ctx.beginPath();
       // alert(obj[timed].type);
        ctx.drawImage(entity[timed].image.src,entity[timed].x,entity[timed].y,entity[timed].width,entity[timed].height);
      }
    }
    function checkFrame(){
      tp=tn;
      tn=performance.now();
      game.timelost=60/(1000/(tn-tp));
      
      //document.getElementById("debu").innerText=game.timelost;
    }
    function draw(){
      ctx.clearRect(game.offset.x,game.offset.y,canvas.width+game.offset.x,canvas.height+game.offset.y+500);
      game.uptime++;
      drawObject();
      upgrade();
      
      game.gravitytest();
      //drawEntity();
      if(window["editorUpgrade"]!==undefined){
      editorUpgrade();
      }
      if(window["lateUpgrade"]!==undefined){
      lateUpgrade();
      }
      checkFrame();
      if(game.isPaused===false){
      requestAnimationFrame(draw);
      }else{
        requestAnimationFrame(onlyDraw);
      }
    }
    function onlyDraw(){
      drawObject();
    if(window["editorUpgrade"]!==undefined){
      editorUpgrade();
      }
      if(game.isPaused===false){
      requestAnimationFrame(draw);
      }else{
        requestAnimationFrame(onlyDraw);
      }
    }