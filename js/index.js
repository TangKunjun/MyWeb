/**
 * Created by Administrator on 2017/3/7 0007.
 */

var body=document.getElementsByTagName("body")[0];
var oc=document.getElementById("canvas");
var gc=oc.getContext("2d");
var dians=[];
sizeHW();
window.onresize=sizeHW;

for(var i=0;i<300;i++){
    var x=Math.random()*oc.width;
    var y=Math.random()*oc.height;
    var xa=Math.random()*2;
    var ya=Math.random()*2;

    dians.push({
        x:x,
        y:y,
        xa:xa,
        ya:ya
    })
}

setInterval(sport,100)

function sport(){
    gc.clearRect(0,0,oc.width,oc.height);
    dians.forEach(function(dian){
        dian.x+=dian.xa;
        dian.y+=dian.ya;

        dian.xa*=(dian.x>oc.width||dian.x<0)?-1:1;
        dian.ya*=(dian.y>oc.height||dian.y<0)?-1:1;
        gc.beginPath();
        gc.fillStyle="#fff"
        gc.arc(dian.x,dian.y,2,0,Math.PI*2);
        gc.fill()
    })
}


function sizeHW() {
    var w=document.documentElement.clientWidth;
    var h=document.documentElement.clientHeight
    body.style.width =  w+ "px";
    oc.style.width =  w+ "px";
    oc.style.height = h+ "px";
}