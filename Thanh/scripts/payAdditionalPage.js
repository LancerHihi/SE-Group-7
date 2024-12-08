
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname === "/home1_student.html" ||
    window.location.pathname === "/home1.html"
  ) {
    // Kiểm tra nếu URL là trang home
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!localStorage.getItem(`storeMoney${loggedInUser.email}`)) {
      localStorage.setItem(`storeMoney${loggedInUser.email}`, "100000");
    }
    var BK_cost_string = localStorage.getItem(`storeMoney${loggedInUser.email}`);
    document.getElementById("amount_money").textContent = `${BK_cost_string}`;
  }
});
document
  .getElementById("pages-per-sheet")
  .addEventListener("change", checkCopies);

function calculatePage(
  copiesInput,
  scale,
  pages_per_sheet,
  warningMessage,
  printButton,
  payButton
) {}

function checkCopies() {
  var copiesInput = document.getElementById("copies");
  var warningMessage = document.getElementById("copies-warning");
  var printButton = document.querySelector(".popup-button.print-button");
  var payButton = document.querySelector(".popup-button.pay-button");
  var scale = document.getElementById("scale");
  var pages_per_sheet = document.getElementById("pages-per-sheet");
  // if (copiesInput.value >= 10) {
  //   warningMessage.style.display = "block";
  //   // printButton.disabled = true;
  //   printButton.setAttribute("disabled", "disabled");
  //   printButton.classList.add("disabled");
  //   payButton.style.display = "flex";
  // } else {
  //   warningMessage.style.display = "none";
  //   // printButton.disabled = false;
  //   printButton.removeAttribute("disabled");
  //   printButton.classList.remove("disabled");
  //   payButton.style.display = "none";
  // }
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!localStorage.getItem(`availablePages${loggedInUser}`)) {
    localStorage.setItem(`availablePages${loggedInUser}`, "300");
  }
  var avalaiblePages = parseInt(
    localStorage.getItem(`availablePages${loggedInUser}`)
  );
  var page_need = Math.ceil(
    parseInt(copiesInput.value) *
      (parseInt(scale.value) / parseInt(pages_per_sheet.value))
  );
  console.log(`page needed ${page_need}`);
  document.getElementById(
    "availablePagesCurrent"
  ).textContent = `${avalaiblePages}`;
  document.getElementById("PageNeeded").textContent = `${page_need}`;
  if (avalaiblePages < page_need) {
    warningMessage.style.display = "block";
    // printButton.disabled = true;
    printButton.setAttribute("disabled", "disabled");
    printButton.classList.add("disabled");
    payButton.style.display = "flex";
  } else {
    warningMessage.style.display = "none";
    // printButton.disabled = false;
    printButton.removeAttribute("disabled");
    printButton.classList.remove("disabled");
    payButton.style.display = "none";
  }
}

// End of warning

function handleBuy() {
  window.location.href = "/BKPay/payment.html";
}

function openPopup() {
  document.getElementById("popup-overlay").style.display = "flex";
  var copiesInput = document.getElementById("copies");
  var scale = document.getElementById("scale");
  var pages_per_sheet = document.getElementById("pages-per-sheet");
  if (!localStorage.getItem(`availablePages${loggedInUser}`)) {
    localStorage.setItem(`availablePages${loggedInUser}`, "300");
  }
  var avalaiblePages = parseInt(
    localStorage.getItem(`availablePages${loggedInUser}`)
  );
  var page_need =
    parseInt(copiesInput.value) *
    (parseInt(scale.value) / parseInt(pages_per_sheet.value));
  console.log(`page needed ${page_need}`);
  document.getElementById(
    "availablePagesCurrent"
  ).textContent = `${avalaiblePages}`;
  document.getElementById("PageNeeded").textContent = `${page_need}`;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  window.location.href = "upload1_student.html";
}

function showSuccessPopup() {
  document.getElementById("success-popup").style.display = "flex";
  setTimeout(() => {
    closeSuccessPopup();
  }, 5000);
}
function closeSuccessPopup() {
  document.getElementById("success-popup").style.display = "none";
  closePopup();
}

function printDocument() {
  // Get selected values from the popup
  var destination = document.getElementById("destination").value;
  var pages = document.getElementById("pages").value;
  var copies = document.getElementById("copies").value;
  var layout = document.getElementById("layout").value;
  var color = document.getElementById("color").value;
  var paperSize = document.getElementById("paper-size").value;
  var pagesPerSheet = document.getElementById("pages-per-sheet").value;
  var margins = document.getElementById("margins").value;
  var scale = document.getElementById("scale").value;
  var twoSided = document.getElementById("two-sided").checked;

  var avalaiblePages = parseInt(localStorage.getItem("availablePages"));
  var page_need = Math.ceil(
    parseInt(copies) * (parseInt(scale) / parseInt(pagesPerSheet))
  );
  avalaiblePages = avalaiblePages - page_need;
  localStorage.setItem("availablePages", avalaiblePages.toString());
  // Simulate printing (replace with actual printing logic)
  // alert(
  //   "Printing with the following settings:\n" +
  //     "Destination: " +
  //     destination +
  //     "\n" +
  //     "Pages: " +
  //     pages +
  //     "\n" +
  //     "Copies: " +
  //     copies +
  //     "\n" +
  //     "Layout: " +
  //     layout +
  //     "\n" +
  //     "Color: " +
  //     color +
  //     "\n" +
  //     "Paper Size: " +
  //     paperSize +
  //     "\n" +
  //     "Pages per Sheet: " +
  //     pagesPerSheet +
  //     "\n" +
  //     "Margins: " +
  //     margins +
  //     "\n" +
  //     "Scale: " +
  //     scale +
  //     "%\n" +
  //     "Two-Sided: " +
  //     (twoSided ? "Yes" : "No")
  // );

  // closePopup();
  showSuccessPopup();
}
