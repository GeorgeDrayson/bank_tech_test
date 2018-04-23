function Transaction(
  amount, balance, formatter=new DateFormatter(), date=new Date()) {
  this._amount = amount
  this._balance = balance
  this._date = date
  this._formatter = formatter
}

Transaction.prototype.credit = function() {
  if (this._amount > 0) {
    return (this._amount.toFixed(2))
  } else {
    return null
  }
}

Transaction.prototype.debit = function() {
  if (this._amount < 0) {
    return (- this._amount).toFixed(2)
  } else {
    return null
  }
}

Transaction.prototype.getBalance = function() {
  return this._balance
}

Transaction.prototype.transactionDate = function() {
  return this._formatter.arrangeDate(this._date)
}
