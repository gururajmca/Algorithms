const candyDistribution = (candies, num_people) => {

  let res = Array(num_people).fill(0);

  for (var i = 0; candies > 0; ++i) {
    res[i % num_people] += Math.min(candies, i+1);
    candies -= i + 1;
  }
  return res;
}

const candies = 15;
const people = 3;
// [1,2,3,1]
// 10, 3 [1,2,3], [4,0,0] = [5,2,3]
// 15, 3 [1,2,3], 9, 3 [4, 5, 0] = [5, 7, 3]

console.log('Candities to the people ', candyDistribution(candies, people));
