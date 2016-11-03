function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementsByClassName('clock')[0].innerHTML =
    h + "." + m + "."+ s;

    if (s >= 0 && s <= 15) {
        document.getElementsByTagName('h1')[0].innerText = "The Castle";
	}else if(s >= 16 && s <= 30){
        document.getElementsByTagName('h1')[0].innerText = "The Train";
	}else if(s >= 31 && s <= 45){
        document.getElementsByTagName('h1')[0].innerText = "The Dark Mark";
	} else if(s >= 46 && s <= 59){
        document.getElementsByTagName('h1')[0].innerText = "The Deathly Hallows";		
	}

} // end of time function

setInterval(time, 1000); //interval for time

function randomImage(){
var randomNumber = Math.floor((Math.random() * 100) + 1);

    if (randomNumber >= 1 && randomNumber <= 15) {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('hogwarts.jpg')";
	}else if(randomNumber >= 16 && randomNumber <= 30){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('hp.jpg')";
	}else if(randomNumber >= 31 && randomNumber <= 45){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('voldemort.jpg')";
	} else if(randomNumber >= 46 && randomNumber <= 60){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('darkmark.jpg')";		
	} else if(randomNumber >= 61 && randomNumber <= 75){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('doby.jpg')";		
	} else if(randomNumber >= 76 && randomNumber <= 100){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('doby2.jpg')";
}        


}// end of randomImage

setInterval(randomImage, 5000); //interval for randomImage



