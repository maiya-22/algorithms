// binary tree

/*
You have nested trees:
    the root tree has three properties:
    x: a number
    l: a tree on the left side
    r: a tree on the right side

    the tree on the left, and the tree on the right have the same properties (x, l, r) as the root tree

    The function needs to return how long the longest path of unique numbers is.
*/

// tree structure: 
// {x: int, left: {}, right: {}}
function uniquePath(tree, uniqueInts = {}) {
    // copy the iniqueInts object because of pass-by-reference, so that you are not changing the exact same object in all of the recursive calls.
    let uniqueIntsCopy = { ...uniqueInts };
    let int;
    if (tree) {
        int = tree.x;
    }
    // base cases: if the integer already exists in the uniqueInts hash or if there is no tree passed to the function
    // then, you have either reached the end of the path, or you have found a repeating number in the path
    if (!tree || uniqueIntsCopy[int]) {
        return Object.keys(uniqueIntsCopy).length;
    }
    // add the current number to the path of numbers
    if (int) {
        uniqueIntsCopy[int] = true;
    }
    // each tree (left and right) will either be null
    // or will recursively look like the parent tree
    let rightTreePathLength = uniquePath(tree.r, uniqueIntsCopy);
    let leftTreePathLength = uniquePath(tree.l, uniqueIntsCopy);
    // return whichever length is the longest, or if they are equal, it doesn't matter which one you return. 
    return rightTreePathLength > leftTreePathLength ? rightTreePathLength : leftTreePathLength;
}

let tree = {
    x: 4,
    l: {
        x: 3,
        l: {},
        r: {},
    },
    r: {
        x: 7,
        l: {
            x: 9,
            l: {},
            r: {},
        },
        r: {},
    }
}

console.log(uniquePath(tree));