
exports.min = function min(array) {
  if (typeof array != "undefined"
    && array.length > 0) {
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minNumber > array[i]) {
        minNumber = array[i];
      };
    };
    return minNumber;
  }
  else {
    return 0
  };
};




exports.max = function max(array) {
  if (typeof array != "undefined"
    && array.length > 0) {
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxNumber < array[i]) {
        maxNumber = array[i];
      };
    };
    return maxNumber;
  }
  else {
    return 0
  };
};




exports.avg = function avg(array) {
  if (typeof array != "undefined"
    && array.length > 0) {
    let middle = 0;
    for (let i = 0; i < array.length; i++) {
      middle += array[i];
    };
    return middle / array.length;
  }
  else {
    return 0
  };
};



