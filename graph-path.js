// Does a path exist in this graph?

let graph = {
    a: ['b'],
    b: ['c', 'd'],
    c: ['d']
}

let path // will be a list of arguments 'a', 'b', 'c' etc.

// arguments object does not exist in arrow functions, so use regular syntax
function doesPathExist(graph) {
    let allPaths = {};
    let path = Array.prototype.slice.call(arguments, 1);
    // go through path between two points exists:
    let currentPoint = path[0];
    let nextPoint;
    // check if currentPoint exists;
    for (let i = 1; i, path.length; i++) {
    }
    console.log(path)
}


// start at one point.
// put that point in the hash {a: true}
// 

console.log(doesPathExist(graph, 'a', 'b'));