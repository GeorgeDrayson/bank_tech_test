describe("Transaction", function() {
  var transaction;
  var fakeDate;
  var fakeFormatter;


  beforeEach(function() {
    fakeFormatter = jasmine.createSpyObj('fakeFormatter',['arrangeDate']);
    deposit = new Transaction(1000, 1000, fakeFormatter);
    withdrawal = new Transaction(-1000, 0, fakeFormatter);
  });

  describe("#transactionDate", function() {

    it("Saves the time", function() {
      deposit.transactionDate()
      expect(fakeFormatter.arrangeDate).toHaveBeenCalledWith(deposit._date)
    });

  });

  describe("#credit", function() {

    it("Returns the amount", function() {
      expect(deposit.credit()).toEqual('1000.00');
    });

    it("Can take negative values", function() {
      expect(withdrawal.credit()).toEqual(null);
    });

  });

  describe("#debit", function() {

    it("Returns the amount", function() {
      expect(deposit.debit()).toEqual(null);
    });

    it("Can take negative values", function() {
      expect(withdrawal.debit()).toEqual('1000.00');
    });

  });

});
