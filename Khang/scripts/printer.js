import { printers } from "../data/printer.js";

function renderPrinterList() {
  let html = '';
  printers.forEach(printer => {
    if (printer.status === "Idle") {
      html += `
        <div class="printer"
        data-printer-id="${printer.id}">
          <h2>${printer.name}</h2>
          <p>Information...</p>
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
    printerId = select.dataset.printerId;
    if (select.classList.contains("choosing")) {
      select.classList.remove("choosing");
      button.classList.remove("button-trigger");
      button.disabled = true;
    }else {
      document.querySelectorAll('.printer').forEach(printer => {
        printer.classList.remove("choosing");
      })
      select.classList.add("choosing");
      button.classList.add("button-trigger");
      button.disabled = false;
    }

    

    // if (select.classList.contains("choosing")) {
    //   select.classList.remove("choosing");
    //   button.classList.remove("button-trigger");
    //   button.removeEventListener('click',() => {
    //     handleButtonClick(printerId);
    //   });
    // } else {
    //   document.querySelectorAll('.printer').forEach(printerLocal => {
    //     printerLocal.classList.remove("choosing");
    //   })
    //   select.classList.add("choosing");
    //   button.classList.add("button-trigger");
    //   button.addEventListener('click', () => {
    //     handleButtonClick(printerId)
    //   })           
    // }
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
      window.location.href=`../upload.html?printerId=${printerId}`;
    }
  })
}



