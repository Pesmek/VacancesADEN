

pointeur = 0;
 
function ChangerImage(){

 
	if(pointeur >= images.length -1 ){
		pointeur = 0;
	}
	else{
		pointeur++;
	}
	document.getElementById("image_id").src = images[pointeur];
	window.setTimeout("ChangerImage()", 5000)
}

// Charge la fonction
window.onload = function(){
ChangerImage();

}
