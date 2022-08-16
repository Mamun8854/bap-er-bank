document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositValue = depositField.value;
  const depositTotalAmmount = document.getElementById("total-deposit");
  const totalDeposit = depositTotalAmmount.innerText;
  depositTotalAmmount.innerText = depositValue;
});
