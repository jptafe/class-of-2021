function validitycheck(formfield){
    var patt = new RegExp("[a-zA-Z]{2,}");
    console.log(patt.test(formfield.value));
    if(patt.test(formfield.value)){
        formfield.style.border = "2px solid greenyellow";
    }
    else{
        formfield.style.border = "solid red";
    }
}

function Emailvaliditycheck(formfield){
    var patt = new RegExp(".+@.+[.].+");
    console.log(patt.test(formfield.value));
    if(formfield.value ==""){
        formfield.style.border = "";
    }
    else if(patt.test(formfield.value)){
        formfield.style.border = "10px solid greenyellow";
    }
    else{
        formfield.style.border = " 10px solid red";
    }
}