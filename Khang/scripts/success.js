document.addEventListener("DOMContentLoaded", function () {
  const inputA3 = document.getElementById("A3");
  const inputA4 = document.getElementById("A4");
  const totalAmountBox = document.getElementById("totalBox");

  function calculateTotalAmount() {
    const papers_A3 = parseInt(inputA3.value, 10) || 0;
    const papers_A4 = parseInt(inputA4.value, 10) || 0;
    const priceA3 = 400;
    const priceA4 = 250;

    const totalAmount = papers_A3 * priceA3 + papers_A4 * priceA4;
    totalAmountBox.value = totalAmount + " VND"; // Cập nhật giá tiền vào ô nhập liệu
  }

  inputA3.addEventListener("input", calculateTotalAmount);
  inputA4.addEventListener("input", calculateTotalAmount);

    document.getElementById("confirm").addEventListener('click', async function (event) {
        event.preventDefault();

        const papers_A3 = parseInt(inputA3.value, 10) || 0;
        const papers_A4 = parseInt(inputA4.value, 10) || 0;

        let availablePages = localStorage.getItem("availablePages")
            ? parseInt(localStorage.getItem("availablePages"), 10)
            : 1000;
        availablePages += papers_A3 * 2 + papers_A4;
        localStorage.setItem("availablePages", availablePages);
        window.location.href = `${window.location.origin}/Khang/payAdditional/configureSetting.html`;
    });
 
  calculateTotalAmount();
});
