"use strict";

function saveData() {
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let password = document.getElementById("set-password").value;
  let userRecords = JSON.parse(localStorage.getItem("users")) || [];
  if (userRecords.find((v) => v["email-address"] === email)) {
    alert("User already exists with this email Kindly Login");
  } else {
    userRecords.push({
      "user-name": userName,
      "email-address": email,
      "first-name": firstName,
      "last-name": lastName,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(userRecords));
  }
}
