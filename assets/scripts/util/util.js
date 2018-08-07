const util = {};

// get random int between 2 values. Inclusive at min and max.
util.getRandomInt = ([min, max]) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = util;
