function calculateLoan() {
 loanAmountValue = document.getElementById("loan-amount").value;
 interestRateValue = document.getElementById("interest-rate").value;
 monthsToPayvalue = document.getElementById("months-pay").value;

 interest = (loanAmountValue*(interestRateValue*0.01))/ monthsToPayvalue
 monthlyPayment = (loanAmountValue/monthsToPayvalue + interest).toFixed(2);

 document.getElementById("payment").innerHTML=`Monthly Payment: ${monthlyPayment}`;
}