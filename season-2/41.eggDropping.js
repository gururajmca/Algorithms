function eggDrop(e, f) {
  // Base condition
  if (f===0 || f===1) {
    return f;
  }
  if (e === 1) {
    return f;
  }

  let min_attempts = Number.MAX_SAFE_INTEGER;
  for (var k = 1; k <= f; k++) {
    let temp = 1 + Math.max(eggDrop(e - 1, k - 1), eggDrop(e, f - k));
    min_attempts = Math.min(min_attempts, temp);
  }
  return min_attempts;
}
console.log('Minimum number of attempts to break the egg ', eggDrop(2, 6));
