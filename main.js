
// Create canvas variable
var canvas=new Fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_x=800;
hole_y=650;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png" , function(img){
		hole_obj=0;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png" , function(img){
		ball_obj=0;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,ball:hole_x
		});
		canvas.add(ball_obj);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
			document.getElementById("hd3").innerHTML="You have hit the goal";
			document.getElementById("myCanvas").style.borderColor="green"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=10) {
			ball_y=ball_y-block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key pressed, X = "+ball_x + " Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y<=650) {
			ball_y=ball_y+block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key pressed, X = "+ball_x + " Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >=5)
		{
			// Write a code to move ball left side.
			
				ball_x=ball_x+block_image_width;
				console.log("Block image height = "+block_image_height);
				console.log("WHen down arrow key pressed, X = "+ball_x + " Y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_x=ball_x+block_image_height;
				console.log("Block image height = "+block_image_height);
				console.log("WHen down arrow key pressed, X = "+ball_x + " Y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}
	
}

