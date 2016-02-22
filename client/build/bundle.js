/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var Account = __webpack_require__(2);
	var sampleAccounts = __webpack_require__(3);
	
	
	
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function(){
	  this.accounts = [];
	}
	
	Bank.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function(){
	    return this.totalCash()/this.accounts.length;
	  }
	}
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "Jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "Val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "Marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "Keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "Rick",
	    "amount": 100000.00,
	    "type": "business"
	  }
	]

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map