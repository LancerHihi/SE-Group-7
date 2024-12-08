import { history_users_data } from "../data/users_history.js"


/**
 * Delete data in old table
 * Import the new data
 */
function addTable() {
  const currentUrl = window.location.href;

  // Sử dụng URLSearchParams để lấy tham số từ URL
  const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id")); // Lấy giá trị của tham số 'id'

const find_index = history_users_data.findIndex(user => user.id_number === id)
//   console.log(find_index);
  let history_info = history_users_data[find_index].history_detail;
//   console.log("DEBUG 2");
  const tableBody = document.querySelector("#history_table tbody");
  tableBody.innerHTML = "";

  history_info.forEach((element) => {
    const row = document.createElement("tr");
    row.innerHTML = `
         <th scope="row">${element.seq}</th>
         <td>${element.date}</td>
         <td>${element.printer_number}</td>
         <td>${element.name_file}</td>
        `;
    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", addTable);
