
document
  .getElementById("Next")
  .addEventListener("click", async function (event) {
    window.location.href = `${window.location.origin}/Khang/BKPay/payment.html`;
});

document
    .getElementById("ReturnPreviousPage")
    .addEventListener("click", async function (event) {
      window.location.href = `${window.location.origin}/Khang/payAdditional/configureSetting.html`;
});
