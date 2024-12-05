import { printers } from "../data/printer1.js";

function renderPrinterList() {
  let html = "";
  printers.forEach((printer) => {
    const brandInfo =
      printer.brand === "HP"
        ? " - Color Printer"
        : printer.brand === "Brother"
        ? " - Black and White Printer"
        : "";
    const statusLabel =
      printer.status === "Available"
        ? "Available"
        : printer.status === "Busy"
        ? "Busy"
        : "Offline";

    // Add classes for Available and Busy printers
    html += `
      <div class="printer ${
        printer.status === "Busy"
          ? "unavailable busy"
          : printer.status === "Offline"
          ? "unavailable"
          : "available"
      }" data-printer-id="${printer.id}">
        <img class="printer-image" src="images/Remove-bg.ai_1732524995093.png">
        <div style="display: flex; flex-direction: column;">
          <h2>${printer.name}</h2>
          <p>${printer.model}${brandInfo}</p>
          <p>Pages Left: ${printer.pagesLeft}</p>
          <p class="${
            printer.status === "Busy"
              ? "status-busy"
              : printer.status === "Available"
              ? "status-available"
              : ""
          }">Status: ${statusLabel}</p>
        </div>
      </div>
    `;
  });
  document.querySelector(".container").innerHTML = html;
}

renderPrinterList();

const button = document.querySelector(".confirm-button");
let printerId;

document.querySelectorAll(".printer").forEach((select) => {
  select.addEventListener("click", () => {
    printerId = Number(select.dataset.printerId);

    if (select.classList.contains("unavailable")) {
      // Do nothing for unavailable printers (Busy or Offline)
    } else if (select.classList.contains("choosing")) {
      // Revert to original color when deselected
      printers.forEach((printer) => {
        if (printer.id === printerId) {
          printer.status = "Available";
          printer.saveToStorage();
        }
      });
      select.classList.remove("choosing");
      select.classList.remove("selected"); // Remove light blue background
      button.classList.remove("button-trigger", "button-selected"); // Reset button color
      button.disabled = true;
    } else {
      // Select a printer and change to light blue background
      document.querySelectorAll(".printer").forEach((printer) => {
        printer.classList.remove("choosing");
        printer.classList.remove("selected"); // Reset other printers
      });
      printers.forEach((printer) => {
        if (printer.id === printerId) {
          printer.status = "Busy";
          printer.saveToStorage();
        }
      });
      select.classList.add("choosing");
      select.classList.add("selected"); // Apply light blue background
      button.classList.add("button-trigger", "button-selected"); // Change button color
      button.disabled = false;
    }
  });
});

button.addEventListener("click", () => {
  if (!button.disabled) {
    handleButtonClick(printerId);
  }
});

function handleButtonClick(printerId) {
  printers.forEach((printer) => {
    if (printer.id === Number(printerId)) {
      printer.changeStatus();
      window.location.href = `upload1.html?printerId=${printerId}`;
    }
  });
}
// import { printers } from "../data/printer1.js";

// function renderPrinterList() {
//   let html = "";
//   printers.forEach((printer) => {
//     const brandInfo =
//       printer.brand === "HP"
//         ? " - Color Printer"
//         : printer.brand === "Brother"
//         ? " - Black and White Printer"
//         : "";
//     const statusLabel =
//       printer.status === "Available"
//         ? "Available"
//         : printer.status === "Busy"
//         ? "Busy"
//         : "Offline";

//     // Add classes for Available and Busy printers
//     html += `
//       <div class="printer ${
//         printer.status === "Busy"
//           ? "unavailable busy"
//           : printer.status === "Offline"
//           ? "unavailable"
//           : "available"
//       }" data-printer-id="${printer.id}">
//         <img class="printer-image" src="images/Remove-bg.ai_1732524995093.png">
//         <div style="display: flex; flex-direction: column;">
//           <h2>${printer.name}</h2>
//           <p>${printer.model}${brandInfo}</p>
//           <p>Pages Left: ${printer.pagesLeft}</p>
//           <p class="${
//             printer.status === "Busy"
//               ? "status-busy"
//               : printer.status === "Available"
//               ? "status-available"
//               : ""
//           }">Status: ${statusLabel}</p>
//         </div>
//       </div>
//     `;
//   });
//   document.querySelector(".container").innerHTML = html;
// }

// renderPrinterList();

// const button = document.querySelector(".confirm-button");
// let printerId;

// document.querySelectorAll(".printer").forEach((select) => {
//   select.addEventListener("click", () => {
//     printerId = Number(select.dataset.printerId);

//     if (select.classList.contains("unavailable")) {
//       // Do nothing for unavailable printers (Busy or Offline)
//     } else if (select.classList.contains("choosing")) {
//       // Revert to original color when deselected
//       printers.forEach((printer) => {
//         if (printer.id === printerId) {
//           printer.status = "Available";
//           printer.saveToStorage();
//         }
//       });
//       select.classList.remove("choosing");
//       select.classList.remove("selected"); // Remove light blue background
//       button.classList.remove("button-trigger");
//       button.disabled = true;
//     } else {
//       // Select a printer and change to light blue background
//       document.querySelectorAll(".printer").forEach((printer) => {
//         printer.classList.remove("choosing");
//         printer.classList.remove("selected"); // Reset other printers
//       });
//       printers.forEach((printer) => {
//         if (printer.id === printerId) {
//           printer.status = "Busy";
//           printer.saveToStorage();
//         }
//       });
//       select.classList.add("choosing");
//       select.classList.add("selected"); // Apply light blue background
//       button.classList.add("button-trigger");
//       button.disabled = false;
//     }
//   });
// });

// button.addEventListener("click", () => {
//   if (!button.disabled) {
//     handleButtonClick(printerId);
//   }
// });


// function handleButtonClick(printerId) {
//   printers.forEach((printer) => {
//     if (printer.id === Number(printerId)) {
//       printer.changeStatus();
//       window.location.href = `upload1.html?printerId=${printerId}`;
//     }
//   });
// }
