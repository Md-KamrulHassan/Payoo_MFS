//step 1:  find the button and handle
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step 2: prevent default default behavior (prevent reloading browser)
    event.preventDefault();
    console.log("The button has been clicked");
    // step 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    console.log(pinNumber);
  });
