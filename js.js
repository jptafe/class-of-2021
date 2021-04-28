Fname = document.getElementById('firstname')
Lname = document.getElementById('lastname')
email = document.getElementById('emails')
ContactInfo = document.getElementById('contact')
submit = document.getElementById('submit')


function validation(){
    if (Fname.checkValidity() == false)
    {
        document.getElementById('errorFname').style.display = 'block';
    }
    else {
        document.getElementById('errorFname').style.display = 'none';
    }
}


function validation1(){
    if (Lname.checkValidity() == false)
    {
        document.getElementById('errorLname').style.display = 'block';
    }
    else {
        document.getElementById('errorLname').style.display = 'none';
    }
}

function validation2(){
    if (emails.checkValidity() == false)
    {
        document.getElementById('erroremail').style.display = 'block';
    }
    else {
        document.getElementById('erroremail').style.display = 'none';
    }
}

function validation3(){
    if (ContactInfo.checkValidity() == false)
    {
        document.getElementById('errorContactInfo').style.display = 'block';
    }
    else {
        document.getElementById('errorContactInfo').style.display = 'none';
    }
}

function validation4(){
    if (ContactInfo.checkValidity() == false)
    {
        document.getElementById('errorsubmit').style.display = 'block';
    }
    else {
        document.getElementById('errorsubmit').style.display = 'none';
    }
}
