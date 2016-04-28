function rnd(n,m){
	return Math.floor(n+Math.random()*(m-n));
}
var oC = document.getElementById('c1');

var gd = oC.getContext('2d');

oC.width = document.documentElement.clientWidth;
oC.height = document.documentElement.clientHeight;

var N = 5;
var LEN = 100;
var oldPoint = [];
var aPoint = [];

for(var i=0; i<N; i++){
	aPoint[i] = {
		x:rnd(0,oC.width),
		y:rnd(0,oC.height),
		speedX:rnd(-10,10),
		speedY:rnd(-10,10)			
	};
}

var timer = setInterval(function(){
	gd.clearRect(0,0,oC.width,oC.height);
	//画点
	for(var i=0; i<aPoint.length; i++){
		drawPoint(aPoint[i]);
	}
	//走
	for(var i=0; i<aPoint.length; i++){
		aPoint[i].x+=aPoint[i].speedX;
		aPoint[i].y+=aPoint[i].speedY;

		if(aPoint[i].x<0){
			aPoint[i].x = 0;
			aPoint[i].speedX*=-1;
		}
		if(aPoint[i].y<0){
			aPoint[i].y = 0;
			aPoint[i].speedY*=-1;
		}
		if(aPoint[i].x>oC.width){
			aPoint[i].x = oC.width;
			aPoint[i].speedX*=-1;
		}
		if(aPoint[i].y>oC.height){
			aPoint[i].y = oC.height;
			aPoint[i].speedY*=-1;
		}
	}

	//连线
	gd.beginPath();
	gd.moveTo(aPoint[0].x,aPoint[0].y);
	for(var i=1; i<aPoint.length; i++){
		gd.lineTo(aPoint[i].x,aPoint[i].y);
	}

	gd.closePath();
	gd.strokeStyle = '#fff';
	gd.stroke();

	var arr = [];
	for(var i=0; i<aPoint.length; i++){
		arr[i] = {
			x:aPoint[i].x,
			y:aPoint[i].y,
			speedX:aPoint[i].speedX,
			speedY:aPoint[i].speedY
		};
	}

	oldPoint.push(arr);

	if(oldPoint.length>LEN){
		oldPoint.shift();
	}

	for(var i=0; i<oldPoint.length; i++){
		gd.beginPath();
		gd.moveTo(oldPoint[i][0].x,oldPoint[i][0].y);
		for(var j=1; j<oldPoint[i].length; j++){
			gd.lineTo(oldPoint[i][j].x,oldPoint[i][j].y);
		}
		gd.closePath();
		gd.strokeStyle='#fff';
		gd.stroke();
	}
},16);


function drawPoint(oPoint){
	gd.beginPath();
	gd.rect(oPoint.x,oPoint.y,0,0);
	gd.fillStyle = '#fff';
	gd.fill();
}