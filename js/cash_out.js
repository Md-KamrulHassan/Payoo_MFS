// toggle add to cashout

document.getElementById("cash_out_btn").addEventListener("click", function () {
  cashOut.classList.remove("hidden");
  AddMoney.classList.add("hidden");
});

//amount after cashout calculation
document.getElementById("cash-btn").addEventListener("click", function (event) {
  event.preventDefault();
  //elements to work
  const cashOutAmmount = document.getElementById("cash-number").value;
  const pinNumber = document.getElementById("cash_pin-number").value;
  //  convert string to number
  const cashMoney = parseFloat(cashOutAmmount) || 0; // Default to 0 if input is invalid
  const currentMoney = parseFloat(currentAmmount.innerText) || 0; // Default to 0 if innerText is invalid
  if (pinNumber == "1234") {
    // update ammount after cashout
    const updateAmmount = currentMoney - cashMoney;
    // update the dom
    currentAmmount.innerText = updateAmmount;
  } else {
    alert("Cash Out Not Success! Enter the Correct Password");
  }
});
