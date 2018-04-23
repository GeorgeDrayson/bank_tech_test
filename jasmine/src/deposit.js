function Deposit(
  amount, balance, date=new Date(), formatter=new DateFormatter()) {
  this._amount = amount
  this._balance = balance
  this._date = date
  this._formatter = formatter
}
