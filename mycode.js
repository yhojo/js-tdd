
function sumall(/*arguments*/) {
  let result = 0;
  for (let i = 0, iend = arguments.length; i < iend; i++) {
    result += arguments[i];
  }
  return result;
}
