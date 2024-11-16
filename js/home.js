document.getElementById("add-btn").addEventListener("click", function () {
  const addMoneyValue = document.getElementById("ammount-number").value;
  const currentAmmount = document.getElementById("current_Ammount");
  const pinNumber = document.getElementById("pin-number").value;
  // convert the ammount to number
  const addMoney = parseFloat(addMoneyValue) || 0; // Default to 0 if input is invalid
  const currentMoney = parseFloat(currentAmmount.innerText) || 0; // Default to 0 if innerText is invalid

  if (pinNumber == "1234") {
    // Update the amount
    const updateAmmount = addMoney + currentMoney;
    // Update the DOM
    currentAmmount.innerText = updateAmmount;
  } else {
    alert("Invalid pin");
    console.log("wrong password");
  }
});
