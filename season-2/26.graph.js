function graphTraversal(graph, source) {
  const stack = [source];
  while(stack.length>0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbore of graph[current]) {
      stack.push(neighbore);
    }
  }
}

function traverseGraphRecurssively(graph, source) {
  console.log(source);
  for (var neighbore of graph[source]) {
    traverseGraphRecurssively(graph, neighbore);
  }
}
const graph = {
  a: ['c','b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};
graphTraversal(graph, 'a');
console.log('---------------')
traverseGraphRecurssively(graph, 'a');
