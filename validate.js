function checkLetter(x) {
    if ( x >= 'a' && x <= 'z' )
        return true;
    if ( x >= 'A' && x <= 'Z' )
        return true;
    return false;
}

function checkDigit(x) {
    if ( x >= '0' && x <= '9' )
        return true;
    return false;
}

function checkRequired() {
    var userID = document.getElementById("userID");
    var password = document.getElementById("pass");
    var passwordConfirm = document.getElementById("passconf");
    var firstName = document.getElementById("first");
    var lastName = document.getElementById("last");
    var zipCode = document.getElementById("zip");
    var country = document.getElementById("country");
    var email = document.getElementById("email");
    var gender = document.getElementById("sex");
    var language = document.getElementById("language");

    if ( userID.value == "" ) {
        userID.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the name");
        return false;
    }

    if ( password.value == "" ) {
        password.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the password");
        return false;
    }

    if ( passwordConfirm.value == "" ) {
        passwordConfirm.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the password");
        return false;
    }

    if ( firstName.value == "" ) {
        firstName.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the first name");
        return false;
    }

    if ( lastName.value == "" ) {
        lastName.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the first name");
        return false;
    }

    if ( zipCode.value == "" ) {
        zipCode.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the zipcode");
        return false;
    }

    if ( country.value == "" ) {
        country.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the country");
        return false;
    }

    if ( email.value == "" ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Please fill in the email");
        return false;
    }

    if ( gender.value == "" ) {
        gender.style.backgroundColor = "#FFCCCB";
        alert("Please select your sex");
        return false;
    }

    if ( language.value == "" ) {
        language.style.backgroundColor = "#FFCCCB";
        alert("Please select your language");
        return false;
    }
    return true;
}

function checkUserID() {
    var userID = document.getElementById("userID");
    let x = userID.value;

    if ( x.length < 5 || x.length > 12 ) {
        userID.style.backgroundColor = "#FFCCCB";
        alert("The name must have between 5 and 12 characters");
        return false;
    }
    if ( x.charAt(0) < 'A' || x.charAt(0) > 'Z' ) {
        userID.style.backgroundColor = "#FFCCCB";
        alert("The name must start with a capital letter");
        return false;
    }
    if ( checkLetter(x.charAt(x.length - 1)) == true ) {
        userID.style.backgroundColor = "#FFCCCB";
        alert("The name must end with a special character or sign");
        return false;
    }
    userID.style.backgroundColor = "#00FF00";
    return true;
}

function checkPassword() {
    var password = document.getElementById("pass");
    var passwordConfirm = document.getElementById("passconf");
    let x = password.value;
    let y = passwordConfirm.value;

    if ( x != y ) {
        password.style.backgroundColor = "#FFCCCB";
        passwordConfirm.style.backgroundColor = "#FFCCCB";
        alert("Passwords must match");
        return false;
    }

    if ( x.length < 12 ) {
        password.style.backgroundColor = "#FFCCCB";
        passwordConfirm.style.backgroundColor = "#FFCCCB";
        alert("Password must have at least 12 characters");
        return false;
    }

    var flagCapitalLetter = false;
    var flagLetter = false;
    var flagDigit = false;
    var flagSign = false;

    for ( i = 0; i < x.length; ++i ) {
        var ch = x.charAt(i);
        if ( checkDigit(ch) == true ) 
            flagDigit = true;
        else if ( checkLetter(ch) == true ) {
            if ( ch >= 'a' )
                flagLetter = true;
            else
                flagCapitalLetter = true;
        } 
        else 
            flagSign = true;
    } 

    var total = flagLetter + flagCapitalLetter + flagDigit + flagSign;
    if ( total < 4 ) {
        password.style.backgroundColor = "#FFCCCb";
        passwordConfirm.style.backgroundColor = "#FFCCCB";
        alert("Passwords must contain an upercare letter, a lowercare letter, a digit and a sign or special character")
        return false;
    }

    password.style.backgroundColor = "#00FF00";
    passwordConfirm.style.backgroundColor = "#00FF00";
    return true;
}

function checkZipCode() {
    var zipCode = document.getElementById("zip");
    let x = zipCode.value;
    if ( x.length != 6 ) {
        zipCode.style.backgroundColor = "#FFCCCB";
        alert("Zipcode must have 6 characters");
        return false;
    }

    for ( i = 0; i < 4; ++i ) {
        if ( checkDigit(x.charAt(i)) == false ) {
            zipCode.style.backgroundColor = "#FFCCCB";
            alert("Invalid Zipcode");
            return false;
        }
    }

    for ( i = 4; i < 6; ++i ) {
        ch = x.charAt(i);
        if ( ch < 'A' || ch > 'Z' ) {
            zipCode.style.backgroundColor = "#FFCCCB";
            alert("Invalid Zipcode");
            return false;
        }
    }

    zipCode.style.backgroundColor = "#00FF00";
    return true;
}

function checkEmail() {
    var email = document.getElementById("email");
    var x = email.value;
    if ( !x.includes("@") ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    if ( !x.includes(".") ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    x = x.split('@');
    if ( x.length != 2 ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    if ( x[0].length == 0 ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    if ( x[1].length == 0 ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    x = x[1].split('.');

    if ( x[0].length == 0 ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    if ( x[1].length == 0 ) {
        email.style.backgroundColor = "#FFCCCB";
        alert("Invalid email");
        return false;
    }

    email.style.backgroundColor = "#00FF00";
    return true;
}

function checkForm() {
    if ( checkRequired() == false )
        return false;
    if ( checkUserID() == false )
        return false;
    if ( checkPassword() == false )
        return false;
    if ( checkZipCode() == false )
        return false;
    if ( checkEmail() == false )
        return false;

    var message = "New account created with the following details:\n";
    message = message + "Username: " + document.getElementById("userID").value + '\n';
    message = message + "First name: " + document.getElementById("first").value + '\n';
    message = message + "Last name: " + document.getElementById("last").value + '\n';
    message = message + "Address: " + document.getElementById("address").value + '\n';
    message = message + "Zipcode: " + document.getElementById("zip").value + '\n';
    message = message + "Country: " + document.getElementById("country").value + '\n';
    message = message + "Email: " + document.getElementById("email").value + '\n';
    message = message + "Sex: " + document.getElementById("sex").value + '\n';
    message = message + "Language: " + document.getElementById("language").value + '\n';
    alert(message);
    return false;
}