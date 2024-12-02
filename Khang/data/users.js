export class Users{
    name;
    id_number;
    user_name_BKPay;
    password_BKPay;
    status;

    constructor(Users_details) {
        this.name = Users_details.name;
        this.id_number = Users_details.id_number;
        this.user_name_BKPay = Users_details.user_name_BKPay;
        this.password_BKPay = Users_details.password_BKPay;
        this.status = Users_details.status;
    }

    Save() {
        localStorage.setItem('printer', JSON.stringify(users));
    }
}

export let users = JSON.parse(localStorage.getItem("printer")) || [
  new Users({
    name: "Nguyen Minh Tien",
    id_number: 2150033,
    user_name_BKPay: "nguyenminhtien",
    password_BKPay: "abcdef123",
    status: "Student",
  }),
  new Users({
    name: "Nguyen Hoang Dung",
    id_number: 2252109,
    user_name_BKPay: "nguyenhoangdung",
    password_BKPay: "123abcdef",
    status: "Student",
  }),
  new Users({
    name: "Nguyen Huu Cuong",
    id_number: 2252098,
    user_name_BKPay: "nguyenhuucuong",
    password_BKPay: "mnefgh123",
    status: "Student",
  }),
  new Users({
    name: "Nguyen Le Duy Khang",
    id_number: 2252303,
    user_name_BKPay: "nguyenleduykhang",
    password_BKPay: "123mnefgh",
    status: "Student",
  }),
  new Users({
    name: "Nguyen Huu Thanh",
    id_number: 2252742,
    user_name_BKPay: "nguyenhuuthanh",
    password_BKPay: "zxcvbnm",
    status: "Student",
  }),
  new Users({
    name: "Truong Tuan Anh",
    id_number: 11223344,
    user_name_BKPay: "truongtuananh",
    password_BKPay: "gvhdhk241",
    status: "SPSO",
  }),
];
