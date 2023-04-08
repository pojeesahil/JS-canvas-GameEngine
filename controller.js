var controller=new function(){
  this.size="5%";
  this.isTouched=false;
  this.createDefault=function(tx,ty){
  var telem=document.createElement("div");
  telem.style.textAlign="center";
  telem.style.position="absolute";
  telem.style.border="1px black solid";
  telem.style.width=this.size;
  telem.style.height=this.size;
  telem.style.backgroundColor="lightgray";
  telem.style.opacity="0.9"
  telem.style.left=tx;
  telem.style.top=ty;
  document.body.appendChild(telem);
  telem.isTouched=false;
  telem.ontouchstay=function(){
    
  }
  telem.addEventListener("touchstart",function(){
    this.isTouched=true;
    controller.isTouched=true;
  });
  telem.addEventListener("touchend",function(){
    this.isTouched=false;
    controller.isTouched=false;
  });
  telem.addEventListener("touchcancel",function(){
    this.isTouched=false;
    controller.isTouched=false;
  });
  return telem;
  }
  this.right=this.createDefault("20%","90%");
  this.left=this.createDefault("10%","90%");
  this.bottom=this.createDefault("15%","90%");
  this.top=this.createDefault("15%","85%");
  this.update=function(){
    for(var telem in this){
      if(controller[telem]["isTouched"]===true){
        controller[telem].ontouchstay();
      }
    }
  }
}