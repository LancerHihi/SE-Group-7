import { printers } from "../data/printer.js";

function renderPrinterList() {
  let html = '';
  printers.forEach(printer => {
    if (printer.status === "Idle") {
      html += `
        <div class="printer"
        data-printer-id="${printer.id}">
          <img class="printer-image" src="images/Remove-bg.ai_1732524995093.png">
          <div style="display: flex;
            flex-direction: column;">
            <h2>${printer.name}</h2>
            <p>Information...</p>
          </div>
        </div>
      `;
    } else if (printer.status === "Chosen") {
      html += `
        <div class="printer unavailable"
        data-printer-id="${printer.id}">
          <img class="printer-image" src="images/Remove-bg.ai_1732524995093.png">
          <div style="display: flex;
            flex-direction: column;">
            <h2>${printer.name}</h2>
            <p>Chosen by other student!</p>
          </div>
        </div>
      `;
    }
  });
  document.querySelector('.container').innerHTML = html;
};


renderPrinterList()

const button = document.querySelector('.confirm-button')
let printerId;

document.querySelectorAll('.printer').forEach(select => {
  select.addEventListener('click', () => {
    printerId = Number(select.dataset.printerId);
    if (select.classList.contains('unavailable')) {}
    else if (select.classList.contains("choosing")) {
      printers.forEach(printer => {
        if (printer.id === printerId) {
          printer.status = "Idle";
          printer.saveToStorage();
        }
      })
      select.classList.remove("choosing");
      button.classList.remove("button-trigger");
      button.disabled = true;
    }else {
      document.querySelectorAll('.printer').forEach(printer => {
        printer.classList.remove("choosing");
      })
      printers.forEach(printer => {
        if (printer.id === printerId) {
          printer.status = "Chosen";
          printer.saveToStorage();
        }
      })
      select.classList.add("choosing");
      button.classList.add("button-trigger");
      button.disabled = false;
    }
  })
})
button.addEventListener('click', () => {
  if(!button.disable) {
    handleButtonClick(printerId);
  };
});

function handleButtonClick(printerId) {
  printers.forEach(printer => {
    if (printer.id === Number(printerId)) {
      printer.changeStatus();
      window.location.href=`upload.html?printerId=${printerId}`;
    }
  })
}
