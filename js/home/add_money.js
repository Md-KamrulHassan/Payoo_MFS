// toggle between cashout to  add
document.getElementById("add_money_btn").addEventListener("click", function () {
  toggoleButtonId("addmoney");
});

// calculation after add money
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  // elements to work
  const addMoneyValue = getInputId("ammount-number");
  const pinNumber = getInputId("pin-number");

  // find current ammount
  const Balance = currentMoneyId("current_Ammount");

  // validation
  if (pinNumber == 1234) {
    // Update the amount after added amount
    const updateAmmount = addMoneyValue + Balance;
    // Update the DOM
    currentAmmount.innerText = updateAmmount;

    // Added to transaction History
    const p = document.createElement("p");
    p.style.color = "green";
    p.innerText = `Added ${addMoneyValue} Tk. New Balance: ${updateAmmount}`;

    transactionContainerID("transition").appendChild(p);
  } else {
    alert("Add Ammount Not Success! Enter the Correct Password");
  }
});
