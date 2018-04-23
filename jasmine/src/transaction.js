function Transaction(
  amount, balance, date=new Date(), formatter=new DateFormatter()) {
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
  return formatter.format(date.getDate()) + "/" + formatter.format(date.getMonth())
   + "/" + date.getFullYear()
}
