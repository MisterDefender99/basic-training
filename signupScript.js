
function saveData()
{
var email,usrname,firstName,lastName,gender,psw;


usrname=document.getElementById("usname").value;
email=document.getElementById("emaili").value;
firstName = document.getElementById("first").value;
lastName = document.getElementById("last").value;
gender = document.getElementById("genders").value;
psw = document.getElementById("pwd").value;
console.log(usrname);


localStorage.setItem("usname",usrname);
localStorage.setItem("email",email);
localStorage.setItem("first",firstName);
localStorage.setItem("last",lastName);
localStorage.setItem("genders",gender);
localStorage.setItem("password",psw);
window.location.href="index.html";

}

function verifyLogin()
{
    
    console.log("button clicked");    
        

    let userName , passWord;
    userName = localStorage.getItem('usname');
    passWord = localStorage.getItem('password');
    console.log(userName);
    
    let usern,pwrd;
    usern=document.getElementById("usrname").value;
    pwrd=document.getElementById("pword").value;
    console.log("Login Page details: ",usern,typeof(usern),  pwrd, typeof(pwrd));
    console.log("Signup page details are: ",userName,typeof(userName), passWord, typeof(passWord));
    
    
    

    if((usern==userName) && pwrd==passWord)
    {
        // location.href="firstPage.html";
        alert('Login successfully');


    }
    else{ alert('Invalid Credentials Login Failed');}
    
}