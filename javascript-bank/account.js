/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || Math.floor(amount) !== amount) {
    return false;
  }

  var transact = new Transaction('deposit', amount);
  this.transactions.push(transact);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || Math.floor(amount) !== amount) {
    return false;
  }

  var transact = new Transaction('withdrawal', amount);
  this.transactions.push(transact);
  return true;
};

Account.prototype.getBalance = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalBalance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalBalance -= this.transactions[i].amount;
    }
  }
  return totalBalance;
};
