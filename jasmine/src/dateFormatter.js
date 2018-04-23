function DateFormatter() {

}

DateFormatter.prototype.format = function(integer) {
  if (integer < 10) {integer = "0" + integer};
  return integer
}
