function Deposit(amount, balance, date = new Date()) {
  this._amount = amount
  this._balance = balance
  this._time = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
}
