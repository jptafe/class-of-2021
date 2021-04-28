function checkName(formField) {
  var patt = new RegExp ("[A-Za-z]{2,20}");

  if (patt.test(formField.value)) {
    formField.style.border = "2px solid green";
  }
  else {
    formField.style.border = "solid red";
  }
}
function checkEmail(formField) {
  var patt = new RegExp ("[A-Za-z]{2,20}");

  if (patt.test(formField.value)) {
    formField.style.border = "2px solid green";
    document.getElementById("email_error").innerHTML = "";
  }
  else {
    formField.style.border = "solid red";
    document.getElementById("email_error").innerHTML = document.getElementById("email").title;

  }
}
function checkPhone(formField) {
  var patt = new RegExp ('[0-9]{2,10}');
  if (patt.test(formField.value)) {
    formField.style.border = "2px solid green";
  }
  else {
    formField.style.border = "solid red";
  }
}
function checkDOB(formField) {
  var patt = new RegExp ('[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}');
  if (patt.test(formField.value)) {
    formField.style.border = "2px solid green";
    var age = new Date(new Date() - new Date(formField.value)). getFullYear() - 1970;
    console.log ('age')
  }
  else {
    formField.style.border = "solid red";
  }
}
function email_correct () {
if(email_correct == false) {
  document.getElementByID("email-error").innerHTML = document.getElementByID("email").title;
}

}


