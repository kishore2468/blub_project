function changeImage(){
    var pic=document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("ON");
        pic.src="Light-bulb-off.jfif";
    }
    else{
        console.log("OFF");
        pic.src="Light-bulb-on.jpeg";
    }
}