//  common variable for change ammount
const currentAmmount = document.getElementById("current_Ammount");

function getInputId(id) {
  const inputValue = document.getElementById(id).value;
  const convertInputValue = parseFloat(inputValue) || 0; //Default to 0 if input is invalid
  return convertInputValue;
}

function currentMoneyId(id) {
  const currentMoney = document.getElementById(id).innerText;
  const convertcurrentMoney = parseFloat(currentMoney) || 0;
  return convertcurrentMoney;
}

function toggoleButtonId(id) {
  document.getElementById("addmoney").classList.add("hidden");
  document.getElementById("cashout").classList.add("hidden");
  document.getElementById("transition").classList.add("hidden");

  // show the click ones
  document.getElementById(id).classList.remove("hidden");
}

function transactionContainerID(id) {
  return document.getElementById(id);
}

console.log("here");
