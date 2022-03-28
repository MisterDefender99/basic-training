function displayUsers() {
  let userRecords = JSON.parse(localStorage.getItem("users")) || [];
  var tableElement = document.getElementById("data-table");
  userRecords.forEach((element) => {
    let row = document.createElement("tr");
    row.className = "row-data";
    ["user-name","first-name","last-name","email-address"].map(item=>{
      let rowData = document.createElement("td");
      rowData.innerHTML = element[item];
      row.appendChild(rowData);
      tableElement.appendChild(row);})
      });
}
displayUsers();