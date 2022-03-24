function showData() {
    let bodyElement = document.getElementById("body");
    let userRecords = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < userRecords.length; i++) {
      console.log("hello");
      console.log(userRecords[i]);
      let adddiv = document.createElement("div");
      adddiv.className = "userList";
  
      adddiv.innerHTML = `
      [USER ${i + 1}] user-name: ${userRecords[i]["user-name"]} First Name: ${
        userRecords[i]["first-name"]
      } Last Name: ${userRecords[i]["last-name"]} Email-ID: ${
        userRecords[i]["email-address"]
      }  Password: ${userRecords[i]["password"]} 
      `;
      adddiv.innerHTML += "\n";
      bodyElement.appendChild(adddiv);
    }
  }
  