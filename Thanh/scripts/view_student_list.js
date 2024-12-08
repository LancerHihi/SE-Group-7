import { history_users_data } from "../data/users_history.js";

function add_row_list() {
    let info_list = history_users_data;
    const tableBody = document.querySelector("#history_table_list tbody");

    tableBody.innerHTML = "";

    info_list.forEach(element => {
        if (element.status == "Teacher") return;
        const row = document.createElement("tr");
        row.innerHTML = `
         <th scope="row">${element.stt}</th>
         <td>${element.name}</td>
         <td>${element.id_number}</td>
         <td><a href="${element.url}" target="_blank" class="click-here">Click Here</a></td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", add_row_list);
