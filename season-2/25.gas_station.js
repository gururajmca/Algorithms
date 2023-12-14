const gas = [1,2,3,4,5];
const cost = [3,4,5,1,2];


function findCircuit(gas, cost) {
  let total_gas = 0;
  let total_cost = 0;
  let start = 0;
  for (var i = 0; i < gas.length; i++) {
    total_gas += gas[i];
  }
  for (var i = 0; i < cost.length; i++) {
    total_cost += cost[i];
  }

  if (total_gas <  total_cost) {
    return -1;
  }
  let fuel = 0;
  for (var i = 0; i < gas.length; i++) {
    fuel +=  (gas[i] - cost[i]);
    if (fuel < 0) {
      start = i + 1;
      fuel = 0;
    }
  }
  return start;
}

console.log('Total gas and cost for the circuit is ', findCircuit(gas, cost));
