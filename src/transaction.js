'use strict';

function Transaction(
  credit, debit, balance, formatter = new DateFormatter(), date = new Date()) {
  this._credit = credit
  this._debit = debit
  this._balance = balance
  this._date = date
  this._formatter = formatter
  this._decimalPlaces = 2
}

Transaction.prototype.credit = function() {
  if (this._credit) { return this._credit.toFixed(this._decimalPlaces) }
}

Transaction.prototype.debit = function() {
  if (this._debit) { return this._debit.toFixed(this._decimalPlaces) }
}

Transaction.prototype.getBalance = function() {
  return this._balance
}

Transaction.prototype.transactionDate = function() {
  return this._formatter.arrangeDate(this._date)
}
