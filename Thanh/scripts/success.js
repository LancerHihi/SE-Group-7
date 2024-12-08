
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const inputA3 = document.getElementById("A3");
  const inputA4 = document.getElementById("A4");
  const totalAmountBox = document.getElementById("totalBox");
  var totalAmount = 0;
  function calculateTotalAmount() {
    const papers_A3 = parseInt(inputA3.value, 10) || 0;
    const papers_A4 = parseInt(inputA4.value, 10) || 0;
    const priceA3 = 400;
    const priceA4 = 250;

    totalAmount = papers_A3 * priceA3 + papers_A4 * priceA4;
    totalAmountBox.value = totalAmount + " VND"; // Cập nhật giá tiền vào ô nhập liệu
    var money = localStorage.getItem(`storeMoney${loggedInUser.email}`);
    var money_int = parseInt(money);
  }

  inputA3.addEventListener("input", calculateTotalAmount);
  inputA4.addEventListener("input", calculateTotalAmount);

  document
    .getElementById("confirm")
    .addEventListener("click", async function (event) {
      //event.preventDefault();
      var money = localStorage.getItem(`storeMoney${loggedInUser.email}`);
      var money_int = parseInt(money);
      console.log(`Money ${money_int}`);
      console.log(`TotalAmount ${totalAmount}`);
      if (totalAmount >= money_int) {
        alert("You do not have enough money to buy this product");
        window.location.href = `${window.location.origin}/BKPay/successLogin/success.html`;
      } else {
        const papers_A3 = parseInt(inputA3.value, 10) || 0;
        const papers_A4 = parseInt(inputA4.value, 10) || 0;

        let availablePages = localStorage.getItem(
          `availablePages${loggedInUser}`
        )
          ? parseInt(localStorage.getItem(`availablePages${loggedInUser}`), 10)
          : 1000;
        availablePages += papers_A3 * 2 + papers_A4;
        localStorage.setItem(
          `availablePages${loggedInUser}`,
          availablePages.toString()
        );
        var money = localStorage.getItem(`storeMoney${loggedInUser.email}`);
        var money_int = parseInt(money);
        money_int -= totalAmount;
        localStorage.setItem(
          `storeMoney${loggedInUser.email}`,
          money_int.toString()
        );
        window.location.href = `${window.location.origin}/upload1.html`;
      }
    });

  calculateTotalAmount();
});
