function showData() {
  let userRecords = JSON.parse(localStorage.getItem("users")) || [];
  var tableElement = document.getElementById("data-table");
  userRecords.forEach((element) => {
    let row = document.createElement("tr");
    row.className = "row-data";
    let rowData = document.createElement("td");
    rowData.innerHTML = element["user-name"];     
    console.log(element["user-name"]);
    row.appendChild(rowData);
    rowData = document.createElement("td");
    rowData.innerHTML = element["first-name"];
    row.appendChild(rowData);
    rowData = document.createElement("td");
    rowData.innerHTML = element["last-name"];
    row.appendChild(rowData);
    rowData = document.createElement("td");
    rowData.innerHTML = element["email-address"];
    row.appendChild(rowData);
    tableElement.appendChild(row);
  });
}
showData();
