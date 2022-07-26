const candiDistribution = (ratings) => {

  // First condition
  let candies = Array(ratings.length).fill(1);

  for (var i = 0; i < ratings.length; i++) {
    if(ratings[i] > ratings[i-1]) {
      candies[i] = candies[i-1] + 1;
    }
  }

  for (var i = ratings.length - 2; i>= 0; i--) {
    if(ratings[i] > ratings[i+1]) {
      candies[i] = Math.max(candies[i], candies[i+1] + 1);
    }
  }

  let sum = 0;

  for (var i = 0; i < candies.length; i++) {
      sum += candies[i];
  }

  console.log('Total candies =', sum);
}

const ratings = [1, 0, 3, 5, 2];
candiDistribution(ratings);
