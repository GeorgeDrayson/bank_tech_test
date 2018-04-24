'use strict';

function Printer() {
  this._headline = 'date || credit || debit || balance'
  this._formattedStatement = []
}

Printer.prototype.printStatement = function(account) {
  this._sortStatement(account)
  this._formattedStatement.push(this._headline);
  return this._formattedStatement.reverse().join('\n')
};

Printer.prototype._sortStatement = function(account) {
  var i
  for (i = 0; i < account.getStatement().length; i++) {
    var transaction = account.getStatement()[i]
    var row =
    [transaction.transactionDate(), transaction.debit(), transaction.credit(), transaction.getBalance().toFixed(2)].join(' || ')
    this._formattedStatement.push(row);
  }
};
