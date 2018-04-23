describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account()
  });

  describe("#getBalance", function() {

    it("Balance is zero at the start", function() {
      expect(account.getBalance()).toEqual(0)
    });

  });

  describe("#deposit", function() {

    beforeEach(function() {
      account.deposit(1000)
    });

    it("Adds to the balance", function() {
      expect(account.getBalance()).toEqual(1000)
    });

    it("Pushes a transaction object to the statement array", function() {
      expect(account._statement.length).toEqual(1);
    });

  });

  describe("#withdraw", function() {

    beforeEach(function() {
      account.deposit(1000)
      account.withdraw(10)
    });

    it("Detracts from the balance", function() {
      expect(account.getBalance()).toEqual(990)
    });

    it("Pushes a transaction object to the statement array", function() {
      expect(account._statement.length).toEqual(2);
    });

  });

});
