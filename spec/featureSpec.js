describe("Feature test", function() {
  var account;
  var formattedDate;
  var date;
  var formatter;
  var printer;


  beforeEach(function() {
    account = new Account();
    formatter = new DateFormatter()
    printer = new Printer()
    date = new Date()
    formattedDate = formatter.arrangeDate(date)
  });

  describe("#Feature test from README", function() {

    beforeEach(function() {
      account.deposit(1000)
      account.deposit(2000)
      account.withdraw(500)
    });

    it("Returns the correct table", function() {
      expect(printer.printStatement(account)).toEqual(
        `date || credit || debit || balance\n${formattedDate} ||  || 500.00 || 2500.00\n${formattedDate} || 2000.00 ||  || 3000.00\n${formattedDate} || 1000.00 ||  || 1000.00`
      )
    });
  });

});
