
// function saveData()
// {
// var email,usrname,firstName,lastName,gender,psw;


// usrname=document.getElementById("usname").value;
// email=document.getElementById("emaili").value;
// firstName = document.getElementById("first").value;
// lastName = document.getElementById("last").value;
// gender = document.getElementById("genders").value;
// psw = document.getElementById("pwd").value;
// console.log(usrname);


// localStorage.setItem(usrname,{email,usrname,firstName,lastName,gender,psw});
// window.location.href="index.html";

// }

// function verifyLogin()
// {
    
//     console.log("button clicked");    
        

    
    
//     let usern,pwrd;
//     usern=document.getElementById("usrname").value;
//     pwrd=document.getElementById("pword").value;
    
//     let user , passWord;
//     user = localStorage.getItem(usern);
//     passWord = user.psw;

    
    

//     if(pwrd==passWord)
//     {
//         // location.href="firstPage.html";
//         alert('Login successfully');


//     }
//     else{ alert('Invalid Credentials Login Failed');}
    
// }



function saveData() {
    const userName = document.getElementById("user-name").value;
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    localStorage.setItem(userName, JSON.stringify({
      email: email, userName: userName, firstName: firstName, lastName: lastName, gender: gender, password: password
    }));
    window.location.href = "index.html";
  }
  function verifyLogin() {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    var user = JSON.parse(localStorage.getItem(userName));
    if (password == user.password) {
      //alert("Login successfully");
      console.log(user);

      window.location.href  = './firstPage.html';
      return false;

      // for(let i in user)
      //   {
      //     var li = document.createElement("li");
      //     // var tb = document.createElement("tr");
      //     // tb.className="row";
      //     // var data = document.createElement("th");
      //     // data.innerHTML=i;
      //     // document.getElementsByClassName("row").appendChild(data);
      //     // li.innerHTML=  ;
      //     document.getElementById("listuser").appendChild(li);
      //   }
      // window.location.href = "firstPage.html";
    } 
    else {
      alert("Invalid Credentials Login Failed");
    }
  }