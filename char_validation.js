function checkLength(){
    var textbox = document.getElementById("textbox");
    if(textbox.value.length <= 20 && textbox.value.length >= 1){
        alert("success - char length" + textbox.value.length);
    }
    else{
        alert("make sure the input is between 1-20 characters long")
    }
}