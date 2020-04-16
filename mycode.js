
function sumall(/*arguments*/) {
  var result = 0;
  for (var i = 0, iend = arguments.length; i < iend; i++) {
    result += arguments[i];
  }
  return result;
}
