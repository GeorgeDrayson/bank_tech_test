'use strict';

function Account(transactionClass = Transaction) {
  this._statement = []
  const defaultBalance = 0
  this._balance = defaultBalance
  this._transactionClass = Transaction
}

Account.prototype.getStatement = function() {
  return this._statement
}

Account.prototype.getBalance = function() {
  return this._balance
}

Account.prototype.deposit = function(amount) {
  this._balance += amount
  this._statement.push(new this._transactionClass(amount, this._balance))
}

Account.prototype.withdraw = function(amount) {
  if (this._balance - amount < 0) { throw new Error('Insufficient funds') }
  amount = -amount
  this._balance += amount
  this._statement.push(new this._transactionClass(amount, this._balance))
}
