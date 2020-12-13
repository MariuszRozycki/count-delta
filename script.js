console.log('Count delta of Quadratic function');

function delta(a, b, c) {

  let delta = Math.pow(b, 2) - 4 * a * c;

  let x1 = ((-b - Math.sqrt(delta, 2)) / (2 * a));
  console.log('Value x1 equals: ' + x1);

  let x2 = ((-b + Math.sqrt(delta, 2)) / (2 * a));
  console.log('Value x2 equals: ' + x2);

  p = -(-b) / (-2 * a);
  console.log('Value p equals: ' + p);

  q = delta / (4 * a);
  console.log('Value q: ' + q);

  if (delta > 0 && a < 0) {
    return 'Delta equals: ' + delta + '. Quadratic function has 2 zeros places, and arms of graph goes down';
  } else if (delta > 0 && a > 0) {
    return 'Delta equals: ' + delta + '. Quadratic function has 2 zeros places, and arms of graph goes up'
  } else if (delta === 0 && a > 0) {
    return 'Delta equals: ' + delta + '. Quadratic function has 1 zero place, and arms of graph goes up';
  } else if (delta === 0 && a < 0) {
    return 'Delta equals: ' + delta + '. Quadratic function has 1 zero place, and arms of graph goes down';
  } else {
    return 'Delta equals: ' + delta + '. Quadratic function has NO zero place';
  }
}

let deltaResult = delta(9, 9, 9);
console.log(deltaResult);