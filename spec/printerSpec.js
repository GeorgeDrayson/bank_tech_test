describe("Printer", function() {
  var printer;
  var transaction1;
  var transaction2;
  var account;

  beforeEach(function() {
    printer = new Printer()
    transaction1 = jasmine.createSpyObj('transaction1', {
      'credit': '1000.00',
      'debit': null,
      'getBalance' : 1000.00,
      'transactionDate' : '10/01/2012'
    });
    transaction2 = jasmine.createSpyObj('transaction2', {
      'credit': '2000.00',
      'debit': null,
      'getBalance' : 3000.00,
      'transactionDate' : '13/01/2012'
    });
    account = jasmine.createSpyObj('account', {
      'getStatement': [transaction1, transaction2]
    });
  });

  describe("#printStatement", function() {

    it("Formats it correctly", function() {
      expect(printer.printStatement(account)).toEqual(
      'date || credit || debit || balance\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00'
      )
    });

  });

});
