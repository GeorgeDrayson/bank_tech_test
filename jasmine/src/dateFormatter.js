'use strict';

function DateFormatter() {

}

DateFormatter.prototype.format = function(integer) {
  if (integer < 10) {integer = "0" + integer};
  return integer
}

DateFormatter.prototype.arrangeDate = function(date) {
  return this.format(date.getDate()) + "/" + this.format(date.getMonth())
  + "/" + date.getFullYear()
}
