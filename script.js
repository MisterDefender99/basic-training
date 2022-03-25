function verifyLogin() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  let userRecords = JSON.parse(localStorage.getItem("users")) || [];
  if (
    userRecords.find((v) => {
      return v["email-address"] === email && v["password"] === password;
    })
  ) {
    window.location.href = "./displayUsers.html";
  } else {
    alert("Invalid Credentials");
  }
  return false;
}
