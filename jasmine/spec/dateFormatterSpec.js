describe("DateFormatter", function() {
  var dateFormatter;


  beforeEach(function() {
    dateFormatter = new DateFormatter()
  });

  describe("#format", function() {

    it("Adds a zero in front", function() {
      expect(dateFormatter.format('1')).toEqual('01');
    });

    it("leaves the date alone if no formatting needed", function() {
      expect(dateFormatter.format('10')).toEqual('10');
    });

  })

});
