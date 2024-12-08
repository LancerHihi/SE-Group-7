const users = JSON.parse(localStorage.getItem("loggedInUser")) || [];

function setReturn(errorMessage, lackDetails, NotFoundID) {
  errorMessage.style.display = none;
  lackDetails.style.display = none;
  NotFoundID.style.display = none;
  return;
}
function checkFullDetails(username, ID_number, user_BKPAY, pass_BKPAY) {
  console.log("CHECK DETAILS");
  if (
    username == "" ||
    ID_number == "" ||
    user_BKPAY == "" ||
    pass_BKPAY == ""
  ) {
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("NotFoundID").style.display = "none";
    document.getElementById("lackDetails").style.display = "inline";
    return false;
  }
  return true;
}

function checkID(username, ID_number, user_BKPAY, pass_BKPAY) {
  console.log(users);

  var flag;
  // console.log("DEBUG");
  if (users.email === ID_number) {
    flag = true;
  }
  console.log(users.password);

  if (flag == true) {
    if (
      users.fullname === username &&
      users.username === user_BKPAY &&
      users.password === pass_BKPAY
    ) {
      // document.getElementById('loginMessage').innerText = 'Successfully Log In';
      // TODO: Dieu huong chuyen trang
      console.log("SUCCESS");
      window.location.href = "successLogin/success.html";
      return;
    }

    document.getElementById("errorMessage").style.display = "inline";
    document.getElementById("NotFoundID").style.display = "none";
    document.getElementById("lackDetails").style.display = "none";
    // console.log("Failed");

    return;
  }
  // else document.getElementById('loginForm').innerText =
  //     "There is no existing user with this ID";
  else {
    // errorMessage.innerText = "The Log In Information is not right";

    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("NotFoundID").style.display = "inline";
    document.getElementById("lackDetails").style.display = "none";
  }
  return;
}

document
  .getElementById("loginForm")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const ID_number = document.getElementById("IDN").value;
    const user_BKPAY = document.getElementById("nameBKPAY").value;
    const pass_BKPAY = document.getElementById("password").value;

    let flag = false;
    //TODO: CHECK WHETHER FULL IN4
    if (checkFullDetails(username, ID_number, user_BKPAY, pass_BKPAY)) {
      //TODO: CHECK THE SAME ID
      document.getElementById("lackDetails").style.display = "none";
      checkID(username, ID_number, user_BKPAY, pass_BKPAY);
    }
  });
