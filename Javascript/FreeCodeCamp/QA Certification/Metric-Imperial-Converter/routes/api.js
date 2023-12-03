"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    const input = req.query.input;
    const regex = /([0-9./]+)([a-zA-Z]+)/;
    const match = input.match(regex);
    if (match) {
      const initNum = parseFloat(match[1]);
      const initUnit = match[2];
      // Assuming you have a convert function in convertHandler
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const returnUnitLetter = convertHandler.spellOutUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnitLetter
      );
      res
        .json({ initNum, initUnit, returnNum, returnUnit, string })
        .status(200);
    } else {
      res.json({ error: "Invalid input" });
    }
  });
};
