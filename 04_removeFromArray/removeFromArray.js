const removeFromArray = function(array, ...itemsToRemove) {
  let index;
  let i = 0;
  while(i < itemsToRemove.length) {
    index = array.indexOf(itemsToRemove[i]);
    if (index === -1) {
      i++;
      continue;
    }
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
