const findTriplets = (heights)=> {
  if (heights.length<3) {
    return 0;
  }

  let visited = {};
  let count = 0;
  for (var i = 0; i < heights.length; i++) {
    if (!visited[heights[i]]) {
      visited[heights[i]] = 1;
    } else {
      visited[heights[i]] +=1;
    }
    // Condition
    let curHeight = heights[i];
    let prev1 = Math.floor(curHeight / 2);
    let prev2 = Math.floor(curHeight / 4);
    if (curHeight>0 && visited[prev1] && visited[prev2]) {
      count++;
    }
  }

  console.log(visited);
  return count;
}

const heights = [3,2,4,6,12,8]; // ,9,0,3,2,4
// [1,2,4] = [0, 2, 3] = 1
// { '0': 1, '1': 1, '2': 2, '3': 2, '4': 2, '9': 1 }

console.log('Find the num of triples in heights ', heights, ' is =', findTriplets(heights));
