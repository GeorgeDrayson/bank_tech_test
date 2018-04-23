function Account(transactionClass = Transaction) {
  this._statement = []
  this._balance = 0
  this._transactionClass = Transaction
}

Account.prototype.getBalance = function() {
  return this._balance
}

Account.prototype.deposit = function(amount) {
  this._balance += amount
  this._statement.push(new this._transactionClass(amount, this._balance))
}

Account.prototype.withdraw = function(amount) {
  amount = -amount
  this._balance += amount
  this._statement.push(new this._transactionClass(amount, this._balance))
}
