describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account()
  });

  describe("#getStatement", function() {

    it("Statement is empty at the start", function() {
      expect(account.getStatement()).toEqual([])
    });

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
      expect(account.getStatement().length).toEqual(1);
    });

    it("Throws an error if you try to deposit a negative amount", function() {
      expect(function(){account.deposit(-10);}
    ).toThrowError('You cannot deposit a negative amount')
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
      expect(account.getStatement().length).toEqual(2);
    });

    it("Throws an error if you take more than you can", function() {
      expect(function(){account.withdraw(1000);}
      ).toThrowError('Insufficient funds')
    });

    it("Throws an error if you try to withdraw a negative amount", function() {
      expect(function(){account.withdraw(-10);}
    ).toThrowError('You cannot withdraw a negative amount')
    });

  });

});
