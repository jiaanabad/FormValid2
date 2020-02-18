function myFunction() {

    let login = document.getElementById("login").value;
    let pass = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let mail = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"


    if (login == "") {

        document.getElementById("login").style.backgroundColor = '#FFD2D2';

    }

    else if (login != "") {

        document.getElementById("login").style.backgroundColor = '#DFF2BF';
    }
    if (pass == "") {


        document.getElementById("password").style.backgroundColor = '#FFD2D2';

    }
    else if (pass != "") {

        if (pass.length < 8) {
            document.getElementById("password").style.background = '#FDFA72';
            document.getElementById("meter").innerHTML = 'Fair';
        }
        else if (pass.length >= 8) {

            document.getElementById("password").style.backgroundColor = '#DFF2BF';
            document.getElementById("meter").innerHTML = 'Strong';
        }
    }
    if (pass2 == "") {
        document.getElementById("password2").style.backgroundColor = '#FFD2D2';

    }
    else if (pass != "" && pass2 != "" && pass == pass2) {

        document.getElementById("text2").innerHTML = '';
        document.getElementById("password").style.backgroundColor = '#DFF2BF';
        document.getElementById("password2").style.backgroundColor = '#DFF2BF';

    }
    else if (pass2 != pass) {

        document.getElementById("text2").innerHTML = 'Passwords Dont Match!';
        document.getElementById("meter").innerHTML = '';
        document.getElementById("password").style.backgroundColor = '#FFD2D2';
        document.getElementById("password2").style.backgroundColor = '#FFD2D2';
    }

    if(email==""){
        document.getElementById("email").style.backgroundColor = "#FFD2D2";
    }
    else if(email !=""){
        
        document.getElementById("email").style.backgroundColor = '#DFF2BF';
    }


    if(login != "" && pass != "" && pass2 != "" && pass2 == pass && gender != "" && email != ""){

        document.getElementById("text2").innerHTML = 'Your Submission has been recorded!';

    }
    
}