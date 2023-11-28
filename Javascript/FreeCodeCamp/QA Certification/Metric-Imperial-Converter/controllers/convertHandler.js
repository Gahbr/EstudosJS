function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input;
    console.log("num é " + result);
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
          result ="Liters";
          break;
      case 'l':
          result ="gal";
          break;
      case 'lbs':
          result = "kilograms";
          break;
      case 'kg':
        result = "pounds";
        break;
      case 'mi':
          result = "kilometers";
          break;
      case 'km': // Handle kilometers to miles conversion
          result = "miles";
          break;
      default:
          result = 'Invalid unit';
  }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lToGal = 0.264172; // Conversion factor for liters to gallons
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    let result;

    switch(initUnit.toLowerCase()) {
        case 'gal':
            result = initNum * galToL;
            break;
        case 'l':
          result = initNum * lToGal;
          break;
        case 'lbs':
            result = initNum * lbsToKg;
            break;
        case 'kg':
            result = initNum * kgToLbs;
            break;
        case 'mi':
            result = initNum * miToKm;
            break;
        case 'km': // Handle kilometers to miles conversion
            result = initNum * kmToMi;
            break;
        default:
            result = 'Invalid unit';
    }
    
    return result;
};
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
