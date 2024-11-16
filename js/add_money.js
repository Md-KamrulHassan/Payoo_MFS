// toggle between cashout to  add
document.getElementById("add_money_btn").addEventListener("click", function () {
  AddMoney.classList.remove("hidden");
  cashOut.classList.add("hidden");
});

// calculation after add money
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  // elements to work
  const addMoneyValue = document.getElementById("ammount-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  // convert the ammount to number
  const addMoney = parseFloat(addMoneyValue) || 0; // Default to 0 if input is invalid
  const currentMoney = parseFloat(currentAmmount.innerText) || 0; // Default to 0 if innerText is invalid
  // validation
  if (pinNumber == "1234") {
    // Update the amount after added amount
    const updateAmmount = addMoney + currentMoney;
    // Update the DOM
    currentAmmount.innerText = updateAmmount;
  } else {
    alert("Add Ammount Not Success! Enter the Correct Password");
  }
});
