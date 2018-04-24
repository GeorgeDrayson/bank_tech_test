describe("DateFormatter", function() {
  var dateFormatter;
  var fakeDate;


  beforeEach(function() {
    fakeDate = jasmine.createSpyObj('fakeDate', {
      'getDate': 1,
      'getMonth': 1,
      'getFullYear' : 1999
    });
    dateFormatter = new DateFormatter()
  });

  describe("#format", function() {

    it("Adds a zero in front", function() {
      expect(dateFormatter.format('1')).toEqual('01');
    });

    it("Leaves the date alone if no formatting needed", function() {
      expect(dateFormatter.format('10')).toEqual('10');
    });

  });

  describe("#arrangeDate", function() {

    it("Formats the date", function() {
      expect(dateFormatter.arrangeDate(fakeDate)).toEqual('01/01/1999');
    });

  });

});
