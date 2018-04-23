function Deposit(
  amount, balance, date=new Date(), formatter=new DateFormatter()) {
  this._amount = amount
  this._balance = balance
  this._date = date
  this._formatter = formatter
}

Deposit.prototype.getAmount = function() {
  return this._amount
}

Deposit.prototype.getBalance = function() {
  return this._balance
}

Deposit.prototype.date = function() {
  return formatter.format(date.getDate()) + "/" + formatter.format(date.getMonth())
   + "/" + date.getFullYear()
}
