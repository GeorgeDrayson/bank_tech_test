function Printer() {
  this._headline = 'date || credit || debit || balance'
  this._formattedStatement = []
}

Printer.prototype.printStatement = function(account) {
  this.sortStatement(account)
  this._formattedStatement.push(this._headline);
  return this._formattedStatement.reverse().join('\n')
};

Printer.prototype.sortStatement = function(account) {
  for (i = 0; i < account.getStatement().length; i++) {
    var transaction = account.getStatement()[i]
    var row =
    [transaction.transactionDate(), transaction.debit(), transaction.credit(), transaction.getBalance().toFixed(2)].join(' || ')
    this._formattedStatement.push(row);
  }
};
