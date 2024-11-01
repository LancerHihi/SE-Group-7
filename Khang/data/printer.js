export class Printer {
  id;
  name;
  status;

  constructor(printerDetails) {
    this.id = printerDetails.id;
    this.name = printerDetails.name;
    this.status = printerDetails.status;
  }

  saveToStorage() {
    localStorage.setItem('printers', JSON.stringify(printers));
  }

  changeStatus() {
    this.status === "Busy" ? this.status = "Idle" : this.status = "Busy";
    this.saveToStorage();
  }
}

export let printers = (JSON.parse(localStorage.getItem('printers'))) || [
  new Printer({ id: 1, name: "Printer 1", status: "Idle" }),
  new Printer({ id: 2, name: "Printer 2", status: "Idle" }),
  new Printer({ id: 3, name: "Printer 3", status: "Idle" }),
  new Printer({ id: 4, name: "Printer 4", status: "Busy" }),
  new Printer({ id: 5, name: "Printer 5", status: "Idle" })
];
printers = printers.map(printerDetails => new Printer(printerDetails));

