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

  test("1 lbs to kg", function (done) {
    let input = { initNum: 1, initUnit: "lbs" };
    let expected = { returnNum: 0.453592, returnUnit: "kilograms" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    console.log(convertHandler.getReturnUnit(input.initUnit));
    done();
  });

  test("1 kg to lbs", function (done) {
    let input = { initNum: 1, initUnit: "kg" };
    let expected = { returnNum: 2.20462, returnUnit: "pounds" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    done();
  });

  test("1 mi to km", function (done) {
    let input = { initNum: 1, initUnit: "mi" };
    let expected = { returnNum: 1.60934, returnUnit: "kilometers" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    done();
  });

  test("1 km to mi", function (done) {
    let input = { initNum: 1, initUnit: "km" };
    let expected = { returnNum: 0.621371, returnUnit: "miles" };
    let result = convertHandler.convert(input.initNum, input.initUnit);
    assert.equal(result, expected.returnNum);
    assert.equal(
      convertHandler.getReturnUnit(input.initUnit),
      expected.returnUnit
    );
    done();
  });
});
