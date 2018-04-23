describe("Printer", function() {
  var printer;
  var transaction1;
  var transaction2;
  var account;

  beforeEach(function() {
    printer = new Printer()

    transaction1 = jasmine.createSpyObj('transaction1',['credit', 'debit', 'getBalance','transactionDate']);
    transaction2 = jasmine.createSpyObj('transaction2',['credit', 'debit', 'getBalance','transactionDate']);
    account = jasmine.createSpyObj('account',['getStatement']);

    transaction1.debit.and.returnValue('1000.00');
    transaction1.credit.and.returnValue(null);
    transaction1.getBalance.and.returnValue(1000.00);
    transaction1.transactionDate.and.returnValue('10/01/2012');
    transaction2.debit.and.returnValue('2000.00');
    transaction2.credit.and.returnValue(null);
    transaction2.getBalance.and.returnValue(3000.00);
    transaction2.transactionDate.and.returnValue('13/01/2012');

    account.getStatement.and.returnValue([transaction1, transaction2]);
  });

  describe("#printStatement", function() {

    it("Formats it correctly", function() {
      expect(printer.printStatement(account)).toEqual(
      'date || credit || debit || balance\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00'
      );
    });

  });

  describe("#sortStatement", function() {

    it("Puts the transaction details into an array", function() {
      printer.sortStatement(account)
      expect(printer._formattedStatement).toEqual(
      ['10/01/2012 || 1000.00 ||  || 1000.00', '13/01/2012 || 2000.00 ||  || 3000.00']
      );
    });

  });

});
