//step 1:  find the button and handle
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step 2: prevent default default behavior (prevent reloading browser)
    event.preventDefault();

    // step 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // step 4: validate the authentication
    if (phoneNumber.toUpperCase() == "SHAKIB" && pinNumber == "1234") {
      console.log("success");
      window.location.href = "home.html";
    } else {
      alert("Wrong Password or number");
    }
  });
