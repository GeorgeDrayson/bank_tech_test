describe("Deposit", function() {
  var deposit;

  beforeEach(function() {
    date = jasmine.createSpyObj('date',['getDate','getMonth','getFullYear']);
    date.getDate.and.returnValue(1);
    date.getMonth.and.returnValue(1);
    date.getFullYear.and.returnValue(1999);
    formatter = jasmine.createSpyObj('formatter',['format']);
    formatter.format.and.returnValue('01');
    deposit = new Deposit(1000, 1000, date, formatter);
  });

  describe("#getAmount", function() {

    it("returns the amount", function() {
      expect(deposit.getAmount()).toEqual(1000);
    });

  });

  describe("#balance", function() {

    it("returns the balance at the time", function() {
      expect(deposit.getBalance()).toEqual(1000);
    });

  });

  describe("#date", function() {

    it("saves the time", function() {
      expect(deposit.date()).toEqual('01/01/1999');
    });

  });

});
