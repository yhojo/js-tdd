
describe('足し算をする', function() {
  it('1から10まで足したら55', function() {
    expect(sumall(1,2,3,4,5,6,7,8,9,10)).toBe(55);
  });
  it('足す要素数を変えても計算できる', function () {
    expect(sumall(1,2,3,4,5)).toBe(15);
  });
});
