document
  .getElementById("loginHeader")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    window.location.href = `${window.location.origin}/Khang/account_signin.html`;
  });
document
  .getElementById("loginFooter")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    window.location.href = `${window.location.origin}/Khang/account_signin.html`;
  });
document
  .getElementById("Register")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    window.location.href = `${window.location.origin}/Khang/account_register.html`;
  });
