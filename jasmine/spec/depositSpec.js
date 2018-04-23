describe("Deposit", function() {

  beforeEach(function() {
  });

  it("stores a deposit amount", function() {
    var deposit = new Deposit(1000,1000);
    expect(deposit._amount).toEqual(1000);
  });

  it("stores a current balance", function() {
    var deposit = new Deposit(1000,1000);
    expect(deposit._balance).toEqual(1000);
  });

  it("saves the time", function() {
    var deposit = new Deposit(1000,1000, time);
    expect(deposit._time).toEqual(time);
  });

});
