const inputStr = "abc";
// Find all posible subsequence or power set of the given set.

const findPowerset = (str, i, cur) => {

  // base condition
  if (i === str.length) {
    console.log(cur);
    return;
  }

  findPowerset(str, i + 1, cur + str[i]);
  findPowerset(str, i + 1, cur);
}

findPowerset(inputStr, 0, "");
