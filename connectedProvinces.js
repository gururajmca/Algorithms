const isConnected = [[0,0,0],[1,0,1],[0,0,1]];
var findCircleNum = function(isConnected) {
    const visited = [];
    let count = 0;
    for (let i=0; i< isConnected.length; i++) {
        if (!(visited[i])) {
            count++;
            dfs(isConnected, i, visited);
        }
    }
    return count;
};

const dfs = (isConnected, cur, visited) => {
    visited[cur] = true;
    for(let i=0; i< isConnected.length; i++) {
        if (i != cur && isConnected[i][cur] == 1 && !(visited[i])) {
            dfs(isConnected, i, visited);
        }
    }
    return true;
}

console.log('THE Connected components ' , findCircleNum(isConnected));
