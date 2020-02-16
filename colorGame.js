var numColorBox=6;
var colors = [];//Array of colors
var pickedColor= getColor();
var colorbox = document.querySelectorAll(".colorbox");
var displayColor = document.querySelector("h1 span");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var button1 = document.querySelector("#b1");
var modeButton = document.querySelectorAll(".mode");

init();

function init() 
{
	
	for(var i=0;i<modeButton.length;i++)
	{
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numColorBox=3 : numColorBox =6;
			reset();
		})
		
	}
	for(var i=0;i<colorbox.length;i++)
	{
		colorbox[i].addEventListener("click",function() {
			var selectedColor = this.style.backgroundColor;
			if(selectedColor===pickedColor)
			{	
				messageDisplay.textContent="You Got It Right!!!";
				changeColor(pickedColor);
				h1.style.backgroundColor=pickedColor;
				button1.textContent="Play Again?";
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Better Luck On Next Move";
			}
		})
	}
	reset();
}
	
function reset()
{
	colors = getRandomColors(numColorBox);
	pickedColor= getColor();
	for(var i=0;i<colorbox.length;i++)
	{
		if(colors[i])
		{
			colorbox[i].style.display="block";
			colorbox[i].style.backgroundColor=colors[i];
		}
		else
			colorbox[i].style.display="none";
	}
	displayColor.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	button1.textContent="New Colors";
}

button1.addEventListener("click", function(){
	reset();
})

function changeColor(color) {
	for(var i=0;i<colorbox.length;i++)
	{
		colorbox[i].style.backgroundColor=color;
	}
}
function getColor() {
	var col = Math.floor(Math.random() * colors.length);
	
	
	return colors[col];
}
function getRandomColors(num) {
	var arr=[];
	for(var i=1;i<=num;i++)
	{
		arr.push(getUniqueColor());
	}
	return arr;
}
function getUniqueColor() {
	    var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb("+ r + ", " + g + ", " + b +")";
}
/*button1.addEventListener("click", function(){
	colors = getRandomColors(numColorBox);
	pickedColor= getColor();
	for(var i=0;i<colorbox.length;i++)
	{
		colorbox[i].style.backgroundColor=colors[i];
	}
	displayColor.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	this.textContent="New Colors";
})*/
/*button2.addEventListener("click", function(){
	button2.classList.add("selected");
	button3.classList.remove("selected");
	numColorBox =3;
	colors = getRandomColors(numColorBox);
	pickedColor= getColor();
	displayColor.textContent=pickedColor;
	messageDisplay.textContent="";
	button1.textContent="New Colors";
	for(var i=0;i<colorbox.length;i++)
	{
		if(colors[i])
			colorbox[i].style.backgroundColor=colors[i];			
		else
			colorbox[i].style.display="none";
	}
	

})
button3.addEventListener("click", function(){
	button3.classList.add("selected");
	button2.classList.remove("selected");
	numColorBox=6;
	colors = getRandomColors(numColorBox);
	pickedColor= getColor();
	displayColor.textContent=pickedColor;
	messageDisplay.textContent="";
	button2.textContent="New Colors";
	for(var i=0;i<colorbox.length;i++)
	{
			colorbox[i].style.backgroundColor=colors[i];
			colorbox[i].style.display="block";
	}
})

displayColor.textContent=pickedColor;
for(var i=0;i<colorbox.length;i++)
	{
		colorbox[i].style.backgroundColor=colors[i];
		colorbox[i].addEventListener("click",function() {
			var selectedColor = this.style.backgroundColor;
			if(selectedColor===pickedColor)
			{	
				messageDisplay.textContent="You got it right!!!";
				changeColor(pickedColor);
				h1.style.backgroundColor=pickedColor;
				button1.textContent="Play Again?";
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Better luck next time";
			}
		})
	}
*/
