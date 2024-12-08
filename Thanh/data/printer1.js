export class Printer {
  id;
  name;
  brand;
  model;
  pagesLeft;
  status;

  constructor(printerDetails) {
    this.id = printerDetails.id;
    this.name = printerDetails.name || "Unknown Printer"; // Fallback for missing name
    this.brand = printerDetails.brand || "Unknown Brand"; // Fallback for missing brand
    this.model = printerDetails.model || "Unknown Model"; // Fallback for missing model
    this.pagesLeft = printerDetails.pagesLeft || 0; // Default to 0 pages if missing
    this.status = printerDetails.status || "Offline"; // Default to "Offline" if missing
  }

  saveToStorage() {
    localStorage.setItem("printers", JSON.stringify(printers));
  }

  changeStatus() {
    if (this.status === "Busy") {
      this.status = "Available";
    } else if (this.status === "Available") {
      this.status = "Busy";
    } else {
      this.status = "Offline"; // Default to offline for unexpected cases
    }
    this.saveToStorage();
  }
}

export let printers =
  JSON.parse(localStorage.getItem("printers")) ||
  [
    new Printer({
      id: 1,
      name: "Printer 1",
      brand: "HP",
      model: "LaserJet Pro 3000",
      pagesLeft: 150,
      status: "Available",
    }),
    new Printer({
      id: 2,
      name: "Printer 2",
      brand: "Brother",
      model: "HL-L2350DW",
      pagesLeft: 75,
      status: "Available",
    }),
    new Printer({
      id: 3,
      name: "Printer 3",
      brand: "HP",
      model: "DeskJet 2300",
      pagesLeft: 200,
      status: "Busy",
    }),
    new Printer({
      id: 4,
      name: "Printer 4",
      brand: "Brother",
      model: "DCP-T720DW",
      pagesLeft: 50,
      status: "Available",
    }),
    new Printer({
      id: 5,
      name: "Printer 5",
      brand: "HP",
      model: "Envy Pro 6455",
      pagesLeft: 120,
      status: "Offline",
    }),
  ];

// Ensure that all printers from localStorage or fallback have required properties
printers = printers.map(
  (printerDetails) =>
    new Printer({
      id: printerDetails.id,
      name: printerDetails.name,
      brand: printerDetails.brand,
      model: printerDetails.model,
      pagesLeft: printerDetails.pagesLeft,
      status: printerDetails.status,
    })
);

// Save updated printers back to localStorage to ensure future sessions use the complete data structure
localStorage.setItem("printers", JSON.stringify(printers));
