import { document_details } from "../data/document.js";

let availablePages;

// Lấy giá trị từ localStorage hoặc khởi tạo mặc định
if (localStorage.getItem("availablePages") !== null) {
  availablePages = parseInt(localStorage.getItem("availablePages"), 10);
} else {
  availablePages = 1000; // Giá trị mặc định nếu chưa có trong localStorage
  localStorage.setItem("availablePages", availablePages); // Lưu giá trị ban đầu vào localStorage
}

// Hiển thị số trang khả dụng ban đầu
document.getElementById("availablePages").textContent = availablePages;

// Hàm hiển thị dữ liệu vào bảng
function addTable() {
  const tableBody = document.querySelector("#document_table tbody");
  tableBody.innerHTML = ""; // Xóa dữ liệu cũ trong bảng trước khi thêm mới

  document_details.forEach((element) => {
    const row = document.createElement("tr");

    // Input chỉnh sửa số bản sao
    const numCopiesInput = `
      <td>
        <input 
          type="number" 
          value="${element.numCopies}" 
          min="1" 
          max="100" 
          class="numCopiesInput"
        />
      </td>
    `;

    row.innerHTML = `
      <th scope="row">${element.seq}</th>
      <td>${element.namefile}</td>
      <td>${element.pages}</td>
      ${numCopiesInput}
    `;

    tableBody.appendChild(row);

    // Sự kiện thay đổi số lượng bản sao
    const inputField = row.querySelector(".numCopiesInput");
    inputField.addEventListener("input", function () {
      let numCopies = parseInt(inputField.value, 10);
      if (isNaN(numCopies) || numCopies < 1) numCopies = 1; // Giá trị nhỏ nhất
      else if (numCopies > 100) numCopies = 100; // Giá trị lớn nhất
      inputField.value = numCopies;
      element.numCopies = numCopies;

      updateTotalPages(); // Cập nhật tổng số trang sau khi thay đổi
    });
  });

  updateTotalPages(); // Tính toán tổng số trang ban đầu
}

// Tính tổng số trang cần sử dụng
function calculateTotalPages() {
  return document_details.reduce(
    (total, doc) => total + doc.pages * doc.numCopies,
    0
  );
}

// Cập nhật tổng số trang hiển thị
function updateTotalPages() {
  const totalPages = calculateTotalPages();
  document.getElementById("totalPages").textContent = totalPages;
}

// Xử lý khi nhấn nút Submit
document.getElementById("submitBtn").addEventListener("click", function () {
  const totalPages = calculateTotalPages();

  if (totalPages > availablePages) {
    window.location.href = "announce.html";
    return;
  }

  availablePages -= totalPages; // Trừ đi số trang đã sử dụng
  localStorage.setItem("availablePages", availablePages); // Lưu số trang còn lại vào localStorage
  document.getElementById("availablePages").textContent = availablePages; // Cập nhật số trang còn lại

  alert("Pages have been deducted successfully!");
  updateTotalPages(); // Cập nhật hiển thị
});

// Gọi hàm để hiển thị bảng khi tải trang
window.onload = addTable;
