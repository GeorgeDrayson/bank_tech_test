function Transaction(
  amount, balance, formatter=new DateFormatter(), date=new Date()) {
  this._amount = amount
  this._balance = balance
  this._date = date
  this._formatter = formatter
}

Transaction.prototype.getAmount = function() {
  return this._amount
}

Transaction.prototype.getBalance = function() {
  return this._balance
}

Transaction.prototype.getTransactionDate = function() {
  return this._formatter.arrangeDate(this._date)
}
