

function graphTraversalBFS(graph, source) {
  const queue = [source];
  while(queue.length>0) {
    const current = queue.shift();
    console.log(current);
    for(let neighbore of graph[current]) {
      queue.push(neighbore);
    }
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
graphTraversalBFS(graph, 'a');
