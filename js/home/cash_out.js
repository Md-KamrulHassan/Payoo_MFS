// toggle add to cashout

document.getElementById("cash_out_btn").addEventListener("click", function () {
  toggoleButtonId("cashout");
});

//amount after cashout calculation
document.getElementById("cash-btn").addEventListener("click", function (event) {
  event.preventDefault();

  // elements to work
  const cashMoneyValue = getInputId("cash-number");
  const pinNumber = getInputId("cash_pin-number");

  // find current ammount
  const Balance = currentMoneyId("current_Ammount");

  if (pinNumber == 1234) {
    if (Balance >= cashMoneyValue && cashMoneyValue > 0) {
      // update ammount after cashout
      const updateAmmount = Balance - cashMoneyValue;
      // update the dom
      currentAmmount.innerText = updateAmmount;
      // Added to transaction History
      const div = document.createElement("div");

      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class = "text-2xl font-bold"> Cash Out </h4>
      <p> ${cashMoneyValue} widhdraw . New Ballance ${updateAmmount}  </p>
      
      `;

      transactionContainerID("transition").appendChild(div);
    } else {
      alert("Please check the value");
    }
  } else {
    alert("Cash Out Not Success! Enter the Correct Password");
  }
});
