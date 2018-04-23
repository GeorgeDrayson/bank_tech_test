describe("Transaction", function() {
  var transaction;
  var fakeDate;
  var fakeFormatter;


  beforeEach(function() {
    fakeFormatter = jasmine.createSpyObj('fakeFormatter',['arrangeDate']);
    deposit = new Transaction(1000, 1000, fakeFormatter);
    withdrawal = new Transaction(-1000, 0, fakeFormatter);
  });

  describe("#getAmount", function() {

    it("Returns the amount", function() {
      expect(deposit.getAmount()).toEqual(1000);
    });

    it("Can take negative values", function() {
      expect(withdrawal.getAmount()).toEqual(-1000);
    });

  });

  describe("#balance", function() {

    it("Returns the balance at the time", function() {
      expect(deposit.getBalance()).toEqual(1000);
    });

  });

  describe("#date", function() {

    it("Saves the time", function() {
      deposit.getTransactionDate()
      expect(fakeFormatter.arrangeDate).toHaveBeenCalledWith(deposit._date)
    });

  });

});
