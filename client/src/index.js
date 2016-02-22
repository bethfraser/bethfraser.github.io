var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');



window.onload = function(){
  console.log('loaded bank app');

  var totalDisplay = document.getElementById('total');
  var totalBusiness = document.getElementById('totalBusiness');
  var totalPersonal = document.getElementById('totalPersonal');
  var businessDisplay = document.getElementById('listBusiness');
  var personalDisplay = document.getElementById('listPersonal');
  var bank = new Bank();

  for(account of sampleAccounts){
    var newAccount = new Account(account);
    bank.addAccount(newAccount);
  }

  totalDisplay.innerHTML = "Total Value: £" + bank.totalCash().toFixed(2);
  totalBusiness.innerHTML = "Total Business Cash: £" + bank.totalCash("business").toFixed(2);
  totalPersonal.innerHTML = "Total Personal Cash: £" + bank.totalCash("personal").toFixed(2);

  for(account of bank.accounts){
    var p = document.createElement('p');
    p.innerHTML = "Name: " + account.owner + "<br>Amount: £" + account.amount.toFixed(2);
    if(account.type === "personal"){
      personalDisplay.appendChild(p);
    } 
    else {
      businessDisplay.appendChild(p);
    }
  }

  console.log(bank);
}
