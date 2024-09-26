/*
Kyle Gomez
IT3215 Intro to Javascript
08/10/2022
Unit 5 Assignment 1
*/
//Form validation to check that all required fields are fill-out
var errorDetected = false;

console.log("page loaded");
 function checkall() {
     var checkev = 0;
     //Username
     var username = document.registration.userName.value;
     //var username = document.getElementById('userName')[0].value;
     //Password
     var pass = document.registration.password.value;
     var passVerify = document.registration.passwordVerify.value;
     //First Name
     var ftname = document.registration.firstName.value;
     //Last Name
     var ltname = document.registration.lastName.value;
     //E-Mail
     var eltml = document.registration.email.value;
     var atrate = eltml.indexOf("@");
     var dot = eltml.lastIndexOf(".");
     //Phone Number
     var phoneNum = document.registration.phoneNumber.value;
     //Sign Up
     var signUpNews = document.registration.signUpNewsletter.value;
     
     errorDetected = false
     
     console.log("username: "+ username);
     console.log("pass: "+ pass);
     console.log("passVerify: "+ passVerify);
     console.log("ftname: "+ ftname);
     console.log("ltname: "+ ltname);
     console.log("eltml: "+ eltml + " with atrate: " + atrate + " with dot:" + dot);
     console.log("phoneNum: "+ phoneNum);
     console.log("signUpNews: "+ signUpNews);
        //Username
    if(username.length > 0){
        document.getElementById('userName').innerHTML = "";
        if(isAlphaNumeric(username)){
            checkev++;
        }
        else{
            document.getElementById('userName').innerHTML = "<p style='color:red;'>Enter a valid username with letters and numbers only.</p>";
            focus('userName');

        }
    }
    else{
        document.getElementById('userName').innerHTML= "<p style='color:red;'>Your username is required.</p>";
        //document.getElementById('userName').focus();
        focus('userName');
    }

    //Password
    if(pass.length > 7){
        document.getElementById('password').innerHTML = "";
        checkev++;
    }
    else{
        document.getElementById('password').innerHTML= "<p style='color:red;'>A password with 8 characters at minimum is required.</p>";
        //document.getElementById('password').focus();
        focus('password');
    }
    //Password Verification
    if(passVerify.length > 7){
        document.getElementById('passwordVerify').innerHTML = "";
        checkev++;
                //Password and Password Verification Match
        if(pass == passVerify){
            document.getElementById('password').innerHTML = "";
            document.getElementById('passwordVerify').innerHTML = "";
            checkev++;
        }
        else{
            document.getElementById('passwordVerify').innerHTML= "<p style='color:red;'>The password you entered does not match the password you entered above. Re-enter matching passwords and try again.</p>";
            //document.getElementById('passwordVerify').focus();
            focus('passwordVerify');
        }
    }
    else{
        document.getElementById('passwordVerify').innerHTML= "<p style='color:red;'>Confirm your password by re-entering here.</p>";
        //document.getElementById('passwordVerify').focus();
        focus('passwordVerify');
    }

    //First Name
    if(ftname.length > 0){
        document.getElementById('firstName').innerHTML = "";
        checkev++;
    }
    else{
        document.getElementById('firstName').innerHTML = "<p style='color:red;'>Your first name is required.</p>";
        focus('firstName');
    }

    //Last Name
    if(ltname.length > 0){
        document.getElementById('lastName').innerHTML = "";
        checkev++;
    }
    else{
        document.getElementById('lastName').innerHTML = "<p style='color:red;'>Your last name is required.</p>";
        focus('lastName');
    }

    //E-Mail
    if (eltml.length == 0) {
        document.getElementById('email').innerHTML = "<p style='color:red;'>Your email address is required.</p>";
        focus('email');
    } else if (atrate < 1 || dot < atrate + 2 || dot + 2 >= eltml.length){
        document.getElementById('email').innerHTML = "<p style='color:red;'>Your email input is not valid.</p>";
        focus('email');
    }
    else {
        document.getElementById('email').innerHTML = "";
        checkev++;
    }

    //Phone Number
    if(phoneNum.length > 0){
        if(isPhoneNumber(phoneNum)){
            document.getElementById('phoneNumber').innerHTML = "";
           checkev++;
        }
        else{
            document.getElementById('phoneNumber').innerHTML = "<p style='color:red;'>Invalid phone number. Please enter your number in (###) ###-#### format. Example: (123) 456-7890</p>"; 
            focus('phoneNumber');
        }
    }
    else{
        document.getElementById('phoneNumber').innerHTML = "<p style='color:red;'>Your phone number is required.</p>";
        focus('phoneNumber');
    }

    //Sign Up
    if(signUpNews.length > 0){
        checkev++;
    }
    else{
        document.getElementById('signUpNewsletter').innerHTML = "<p style='color:red;'>Select Yes or No if you would like to sign up for the newsletter.</p>";
        focus('signUpNewsletter');
    }
    console.log("checkev count: "+ checkev);
    errorDetected = false;
    if (checkev == 9) {
     //Check all before opening confirmation page.
        window.location.href = "confirm.html";
    }
    else{
        return false;
    }

}

function isAlphaNumeric(str){
    console.log("alpha debug: " +str);
    var regExp = /^[0-9a-zA-Z]+$/;
    if(regExp.test(str)){
        console.log(str+ ": isAlphaNumeric!");
        return true;
    }
    else{
        return false;
    }
}

function isPhoneNumber(str){
    console.log("phoneNumber debug: " +str);
    var regExp = /^\(\d{3}\) \d{3}-\d{4}$/;
    if(regExp.test(str)){
        console.log(str + ": isPhoneNumber!");
        return true;
    }
    else{
        return false;
    }
}

function focus(elementID){
    if(errorDetected == false){
        errorDetected = true;
        console.log("focus element: " + elementID);
        focusElement = elementID;
        document.getElementById(elementID).focus();
    }
}

//if checkAll returns true, this function will be called on sumbit to gather the form values and store them into a cookie
function getPassedInParameters(){
    "use strict";
    //store form values into variables
    var userName = getUrlParameter('userName');
    var password = getUrlParameter('password');
    var passwordVerify = getUrlParameter('passwordVerify');
    var firstName = getUrlParameter('firstName');
    var lastName = getUrlParameter('lastName');
    var email = getUrlParameter('email');
    var phoneNumber = getUrlParameter('phoneNumber');
    var signUpNewsletter = getUrlParameter('signUpNewsletter');
    //create the cookie
    document.cookie = "userName=" + userName + ";";
    document.cookie = "password=" + password + ";";
    document.cookie = "passwordVerify=" + passwordVerify + ";";
    document.cookie = "firstName=" + firstName + ";";
    document.cookie = "lastName=" + lastName + ";";
    document.cookie = "email=" + email + ";";
    document.cookie = "phoneNumber=" + phoneNumber + ";";
    document.cookie = "signUpNewsletter=" + signUpNewsletter + ";";
    
    console.log(document.cookie);
    
    getPassedInParametersFromCookie();
}
//function to parse data from urls
function getUrlParameter(name){
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));    
}
//function to parse data from urls
function getPassedInParametersFromCookie(){
    var x = document.cookie;
    document.getElementById('node-id').innerHTML = x;
};