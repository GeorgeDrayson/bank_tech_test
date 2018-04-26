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

Account.prototype.deposit = function(credit) {
  if (credit < 0) { throw new Error('You cannot deposit a negative amount') }
  this._balance += credit
  this._statement.push(new this._transactionClass(credit, null, this._balance))
}

Account.prototype.withdraw = function(debit) {
  if (debit < 0) { throw new Error('You cannot withdraw a negative amount') }
  if (this._balance - debit < 0) { throw new Error('Insufficient funds') }
  this._balance -= debit
  this._statement.push(new this._transactionClass(null, debit, this._balance))
}
