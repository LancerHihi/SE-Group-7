export class document {
  seq;
  namefile;
  pages;
  numCopies;

  constructor(document_details) {
    this.seq = document_details.seq;
    this.namefile = document_details.namefile;
    this.pages = document_details.pages;
    this.numCopies = document_details.numCopies;
  }

  Save() {
    localStorage.setItem("document details", JSON.stringify(document_details));
  }
}

export let document_details = JSON.parse(
  localStorage.getItem("document details")
) || [
  new document({
    seq: 1,
    namefile: "Book.pdf",
    pages: 50,
    numCopies: 1,
  }),
  new document({
    seq: 2,
    namefile: "Notes.docx",
    pages: 30,
    numCopies: 1,
  }),
  new document({
    seq: 3,
    namefile: "Summary.pdf",
    pages: 45,
    numCopies: 1,
  }),
  new document({
    seq: 4,
    namefile: "Agenda.xlsx",
    pages: 25,
    numCopies: 1,
  }),
  new document({
    seq: 5,
    namefile: "Invoice.pdf",
    pages: 10,
    numCopies: 1,
  }),
  new document({
    seq: 6,
    namefile: "Report.pptx",
    pages: 40,
    numCopies: 1,
  }),
  new document({
    seq: 7,
    namefile: "Checklist.docx",
    pages: 15,
    numCopies: 1,
  }),
  new document({
    seq: 8,
    namefile: "Presentation.pdf",
    pages: 35,
    numCopies: 1,
  }),
  new document({
    seq: 9,
    namefile: "Schedule.xlsx",
    pages: 20,
    numCopies: 1,
  }),
  new document({
    seq: 10,
    namefile: "Homework.pdf",
    pages: 5,
    numCopies: 1,
  }),
];
