export class history_detail {
  seq;
  date;
  printer_number;
  name_file;

  constructor(history_details) {
    this.seq = history_details.seq;
    this.date = history_details.date;
    this.printer_number = history_details.printer_number;
    this.name_file = history_details.name_file;
  }

  Save() {
    localStorage.setItem("history details", JSON.stringify(history_detail));
  }
}
export class history_users {
    stt;
    id_number;
    name;
    status;
    url;
    history_detail;

    constructor(history_users_details) {
      this.stt = history_users_details.stt;
        this.id_number = history_users_details.id_number;
        this.name = history_users_details.name;
    this.status = history_users_details.status;
        this.history_detail = history_users_details.history_detail;
        this.url = history_users_details.url;
  }

  Save() {
    localStorage.setItem("history", JSON.stringify(history_users_data));
  }
}

export let history_users_data = JSON.parse(localStorage.getItem("history")) || [
  new history_users({
    stt: 1,
    id_number: 2150033,
    name: "Nguyen Minh Tien",
    status: "Student",
    url: "viewstudent.html?id=2150033",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-17",
        printer_number: 101,
        name_file: "file1.pdf",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-17",
        printer_number: 102,
        name_file: "file2.docx",
      }),
      new history_detail({
        seq: 3,
        date: "2024-11-17",
        printer_number: 103,
        name_file: "file3.xlsx",
      }),
      new history_detail({
        seq: 4,
        date: "2024-11-18",
        printer_number: 104,
        name_file: "file4.pptx",
      }),
      new history_detail({
        seq: 5,
        date: "2024-11-18",
        printer_number: 101,
        name_file: "file1.pdf",
      }),
      new history_detail({
        seq: 6,
        date: "2024-11-18",
        printer_number: 102,
        name_file: "file2.docx",
      }),
      new history_detail({
        seq: 7,
        date: "2024-11-19",
        printer_number: 103,
        name_file: "file3.xlsx",
      }),
      new history_detail({
        seq: 8,
        date: "2024-11-19",
        printer_number: 104,
        name_file: "file4.pptx",
      }),
      new history_detail({
        seq: 9,
        date: "2024-11-19",
        printer_number: 101,
        name_file: "file1.pdf",
      }),
      new history_detail({
        seq: 10,
        date: "2024-11-20",
        printer_number: 102,
        name_file: "file2.docx",
      }),
    ],
  }),

  new history_users({
    stt: 2,
    id_number: 2252109,
    name: "Nguyen Hoang Dung",
    status: "Student",
    url: "viewstudent.html?id=2252109",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-17",
        printer_number: 105,
        name_file: "report1.pdf",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-18",
        printer_number: 106,
        name_file: "lecture_notes.pptx",
      }),
      new history_detail({
        seq: 3,
        date: "2024-11-19",
        printer_number: 107,
        name_file: "student_list.csv",
      }),
    ],
  }),

  new history_users({
    stt: 3,
    id_number: 2252098,
    name: "Nguyen Huu Cuong",
    status: "Student",
    url: "viewstudent.html?id=2252098",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-18",
        printer_number: 108,
        name_file: "invoice1.pdf",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-19",
        printer_number: 109,
        name_file: "contract.docx",
      }),
      new history_detail({
        seq: 3,
        date: "2024-11-20",
        printer_number: 110,
        name_file: "project_summary.pdf",
      }),
    ],
  }),

  new history_users({
    stt: 4,
    id_number: 2252303,
    name: "Nguyen Le Duy Khang",
    status: "Student",
    url: "viewstudent.html?id=2252303",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-16",
        printer_number: 111,
        name_file: "admin_report.xlsx",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-17",
        printer_number: 112,
        name_file: "user_data.csv",
      }),
      new history_detail({
        seq: 3,
        date: "2024-11-18",
        printer_number: 113,
        name_file: "admin_guidelines.pdf",
      }),
    ],
  }),

  new history_users({
    stt: 5,
    id_number: 2252742,
    name: "Nguyen Huu Thanh",
    status: "Student",
    url: "viewstudent.html?id=2252742",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-19",
        printer_number: 114,
        name_file: "visiting_card.pdf",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-20",
        printer_number: 115,
        name_file: "schedule.pdf",
      }),
    ],
  }),

  new history_users({
    stt: 6,
    id_number: 11223344,
    name: "Truong Tuan Anh",
      status: "Teacher",
    history_detail: [
      new history_detail({
        seq: 1,
        date: "2024-11-20",
        printer_number: 116,
        name_file: "manager_report.pdf",
      }),
      new history_detail({
        seq: 2,
        date: "2024-11-21",
        printer_number: 117,
        name_file: "project_overview.pptx",
      }),
      new history_detail({
        seq: 3,
        date: "2024-11-22",
        printer_number: 118,
        name_file: "budget_summary.xlsx",
      }),
      new history_detail({
        seq: 4,
        date: "2024-11-22",
        printer_number: 119,
        name_file: "meeting_minutes.docx",
      }),
    ],
  }),
];
