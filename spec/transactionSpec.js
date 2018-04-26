describe("Transaction", function() {
  var transaction;
  var fakeDate;
  var fakeFormatter;


  beforeEach(function() {
    fakeFormatter = jasmine.createSpyObj('fakeFormatter',['arrangeDate']);
    deposit = new Transaction(1000, null, 1000, fakeFormatter);
    withdrawal = new Transaction(null, 1000, 0, fakeFormatter);
  });

  describe("#transactionDate", function() {

    it("Saves the time", function() {
      deposit.transactionDate()
      expect(fakeFormatter.arrangeDate).toHaveBeenCalledWith(deposit._date)
    });

  });

});
