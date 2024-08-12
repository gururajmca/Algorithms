function canFinish(numCourses, prerequisites) {
  // Build the adjacency list
  const adjList = new Array(numCourses).fill(null).map(() => []);
  console.log(adjList);
  for (const [course, prereq] in prerequisites) {
    adjList[course].push(prereq);
  }
console.log(adjList);
  const visited = new Set();
  const visiting = new Set();

  const dfs = (course) => {
    if (visited.has(course)) return true;
    if (visiting.has(course)) return false; // Cycle detected

    visiting.add(course);
    for (const nextCourse in adjList[course]) {
      if (!dfs(nextCourse)) return false;
    }

    visiting.delete(course);
    visited.add(course);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i) && !dfs(i)) return false;
  }

  return true;
}

const courses = [
  [1,0],
  [0,2]
];

console.log(' Course can take ', canFinish(2, courses));
