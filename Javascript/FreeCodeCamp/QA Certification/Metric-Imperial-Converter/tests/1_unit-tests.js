const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("1 gal to L", function (done) {
    let input = { initNum: 1, initUnit: "gal" };
    let expected = { returnNum: 3.78541, returnUnit: "Liters" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    done();
  });

  test("1 L to gal", function (done) {
    let input = { initNum: 1, initUnit: "l" };
    let expected = { returnNum: 0.264172, returnUnit: "gal" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    done();
  });
});
