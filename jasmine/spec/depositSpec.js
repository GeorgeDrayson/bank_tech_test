describe("Deposit", function() {

  beforeEach(function() {
    date = jasmine.createSpyObj('date',['getDate','getMonth','getFullYear']);
    date.getDate.and.returnValue(12);
    date.getMonth.and.returnValue(6);
    date.getFullYear.and.returnValue(1999);
  });

  describe("#date", function() {

    it("saves the time", function() {
      var deposit = new Deposit(1000, 1000, date);
      expect(deposit.date()).toEqual('12/06/1999');
    });

  })

});
